const inputPriceCreate = () => {
    const inputPrice = document.createElement("input");
    inputPrice.type = "number";
    inputPrice.placeholder = "Price";
    return inputPrice;
}

const inputPriceActivate = (e) => {  
    const inputPrice = e.target;
    inputPrice.classList.add("active");
    clearError(inputPrice);
}

const clearError = (inputPrice) => {
    inputPrice.classList.remove("error");
    const errorText = document.querySelector(`${inputPrice.localName} + div`);
    if (errorText) {
        errorText.remove();
    }
}

const showError = (inputPrice) => {
    inputPrice.classList.add("error");
    inputPrice.insertAdjacentHTML("afterEnd", "<div>Please enter correct price</div>");
}

const priceDelete = (e) => {
    e.target.parentElement.remove();
}

const priceCreate = (inputPrice) => {
    inputPrice.classList.add("success");
    const price = document.createElement("div");
    price.className = "price";
    const priceText = document.createElement("span");
    priceText.textContent = `Price: ${inputPrice.value}`;
    price.append(priceText);
    const priceDel = document.createElement("button");
    priceDel.textContent = "X";
    price.append(priceDel);
    priceDel.addEventListener("click", priceDelete);
    inputPrice.before(price);
}

const priceProcess = (e) => {
    const inputPrice = e.target;
    inputPrice.classList.remove("active");

    if (inputPrice.value > 0) {
        priceCreate(inputPrice);
    } else if (inputPrice.value < 0) {
        showError(inputPrice);
    }    
}

export {inputPriceActivate, priceProcess, inputPriceCreate};