import {dataPizza} from './data.js'

const [...radios] = document.querySelectorAll("#pizza input");
const ingridients = document.querySelector('.ingridients');
const cake = document.querySelector(".table");
const form = document.querySelector("#info");
const btnSubmit = document.querySelector("#btnSubmit");


const pizza = {
    size: {
        "size": "big",
        "price": 100
    },
    topping : []
}

radios.forEach(el => {
    el.addEventListener('change', (e) => {
      const findElement = dataPizza.size.findIndex(function(size){
           return size.size === e.target.id
       })       
       pizza.size = dataPizza.size[findElement]
       showPrice(pizza)
    })
})

ingridients.addEventListener('click', e => {
    const sauceElement = dataPizza.sauce.findIndex(el => {
       return el.name === e.target.id
    })

    const toppingElement = dataPizza.topping.findIndex(el => {
       return el.name === e.target.id
    })    

    if(sauceElement !== -1){
        pizza.sauce = {...dataPizza.sauce[sauceElement], src : e.target.src};
       
    }

    if(toppingElement !== -1){
        const toppingPizza = pizza.topping.findIndex(el => {
            return dataPizza.topping[toppingElement].name == el.name;
        });
        if (toppingPizza !== -1) {
            pizza.topping[toppingPizza].count++;
        } else {
            pizza.topping.push({...dataPizza.topping[toppingElement], src : e.target.src, count: 1});
        }
       
    }
   showPrice(pizza)
})

form.addEventListener("change", (e) => {
    formValidate(e);
});

btnSubmit.addEventListener("click", (e) => {
    if (formValidate(e)) {
        location.href = "thank-you/index.html";
    }
});

function formValidate(e) {
    const [...errorsElements] = document.querySelectorAll(".errorMsg");
    errorsElements.forEach(errorsElement => errorsElement.remove());
    const [...errorsInputs] = document.querySelectorAll(".error");
    errorsInputs.forEach(errorsInput => errorsInput.classList.remove("error"));    
    const errors = {};
    let formSelector = "footer form input";
    if (e.type !== "click") {
        formSelector = `input[name="${e.target.name}"]`;
    }
    const [...formElements] = document.querySelectorAll(formSelector); 
    formElements.forEach((formElement) => {
        switch (formElement.name) {
            case "name":        
                if (!/[А-яйї]+-?[А-яйї]+/u.test(formElement.value)) {
                    errors.name = "Неправильне ім'я";
                }    
                break;
            case "phone":    
                if (!/\+380[1-9]\d{8}/.test(formElement.value)) {
                    errors.phone = "Неправильний телефон";
                }                 
                break;            
            case "email":     
                if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formElement.value)) {
                    errors.email = "Неправильний email";
                }               
                break;
        }
    });
    if (Object.keys(errors).length) {
        showErrors(errors);    
        return false;
    } else {
        return true;
    }
}

function showErrors(errors) {
    Object.entries(errors).forEach(([name, errorMsg]) => {
        const inputElement = document.querySelector(`input[name="${name}"]`);
        inputElement.classList.add("error");

        const error = document.createElement("div");
        error.className = "errorMsg";
        error.textContent = errorMsg;
        inputElement.after(error);
    });
}

function showPrice (pizza) {
    const [...children] = cake.children;
    children.forEach(img => img.remove());
    const cakeimage = createImage('Pizza_pictures/klassicheskij-bortik_1556622914630.png', 'cake');
    cake.append(cakeimage)

    const elemrntPrice = document.querySelector('#price');
    const sauce = document.querySelector('#sauce');
    const topping = document.querySelector("#topping");

    let price = 0;
    price = price +  parseFloat(pizza.size.price);


    if(pizza.sauce){
        price = price + parseFloat(pizza.sauce.price);
        cake.append(createImage(pizza.sauce.src));
        sauce.textContent = pizza.sauce.publickName
    }

    const [...telement] = topping.children;
    telement.forEach(el => el.remove())
    if(pizza.topping.length > 0){
        price = pizza.topping.reduce(function(acc, top, index ){
            cake.append(createImage(top.src));
            topping.append(badge(index, top.publickName, top.count, (e) => {
                const toppingIndex = e.target.id;
                if (--pizza.topping[toppingIndex].count < 1) {
                    pizza.topping.splice(toppingIndex, 1);  
                }
                showPrice(pizza);
            }))
            return acc + top.price * top.count;
        }, price)
    }
    

    elemrntPrice.textContent = price + ' грн.'
}

function createImage (src, alt = 'pizza') {
    const img = document.createElement('img')
    img.src = src;
    img.alt = alt

    return img
}

function badge (id, name, count, listener) {
    const badge = document.createElement('span');
    const del = document.createElement('span');
    badge.className = "badge";
    del.innerText = 'x';
    del.className = 'del';
    del.id = id;
    badge.innerText = name;
    del.addEventListener('click', listener);
    badge.append(del);
    if (count > 1) {
        const countElement = document.createElement('span');
        countElement.innerText = count;
        countElement.className = 'count';
        badge.append(countElement);
    }
    return badge
}
 
showPrice(pizza)

