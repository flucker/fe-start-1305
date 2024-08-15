/*
Реализовать функцию для создания объекта "пользователь".
Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser. 

При вызове функция должна спросить у вызывающего имя и фамилию. 

Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName. 

Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko). 

Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.
*/
class NewUser1 {
    constructor(firstName, lastName) {
        this.firstName = ucFirst(firstName);
        this.lastName = ucFirst(lastName);
    }

    getLogin() {
        return `${this.firstName[0]}${this.lastName}`.toLowerCase();
    }
}

function createNewUser1() {
    const userData = prompt("Введіть свої дані", "Ім'я Прізвище");
    if (userData !== null) {
        if (userData) {
            const [firstName, lastName] = userData.split(" ");
            if (firstName && lastName) {
                return new NewUser1(firstName, lastName);
            } else {
                alert("Дані введені невірно!");
            }
        } else {
            alert("Дані не введені!");
        }
    }    
}

function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const newUser = createNewUser1();
if (newUser) {
    console.log(newUser.getLogin());
}
    
/**
Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.

Возьмите выполненное задание выше (созданная вами функция createNewUser()) и дополните ее следующим функционалом: При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday. 

Создать метод getAge() который будет возвращать сколько пользователю лет. 

Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992). Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.
*/

class NewUser {
    constructor(firstName, lastName, birthday) {
        this.firstName = ucFirst(firstName);
        this.lastName = ucFirst(lastName);
        this.birthday = birthday;
    }

    getLogin() {
        return `${this.firstName[0]}${this.lastName}`.toLowerCase();
    }

    getAge() {
        return Math.floor((Date.now() - this.birthday.getTime()) / 1000 / 60 / 60 / 24 / 365);
    }

    getPassword() {
        return `${this.firstName[0]}${this.lastName.toLowerCase()}${this.birthday.getFullYear()}`;
    }
}

function createNewUser() {
    const userData = prompt("Введіть свої дані", "Ім'я Прізвище");
    if (userData !== null) {
        if (userData) {
            const [firstName, lastName] = userData.split(" ");
            if (firstName && lastName) {
                const birthday = prompt("Введіть дату народження", "dd.mm.yyyy");
                const [day, month, year] = birthday.split(".");
                if (day && month && year) {
                    const birthdayDate = new Date(year, parseInt(month) - 1, day);
                    if (birthdayDate.toString() !== "Invalid Date") {
                        return new NewUser(firstName, lastName, birthdayDate);
                    } else {
                        alert("Дата народження не вірна");
                    }                   
                } else {
                    alert("Дата народження не вірна");
                }
            } else {
                alert("Дані введені невірно!");
            }
        } else {
            alert("Дані не введені!");
        }
    }    
}

const newUser1 = createNewUser();
if (newUser1) {
    console.log(newUser1.getLogin());
    console.log(newUser1.getPassword());
    console.log(newUser1.getAge());
}