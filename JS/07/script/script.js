/*
Реализовать функцию для создания объекта "пользователь".
Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser. 

При вызове функция должна спросить у вызывающего имя и фамилию. 

Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName. 

Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko). 

Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.
*/
class CreateNewUser1 {
    constructor(firstName, lastName) {
        this.firstName = ucFirst(firstName);
        this.lastName = ucFirst(lastName);
    }

    getLogin() {
        return `${this.firstName[0]}${this.lastName}`.toLowerCase();
    }
}

function validateUserData(userData) {
    if (userData !== null) {
        if (userData) {
            userData = userData.split(" ");
            if (userData[0] && userData[1]) {
                return true;
            } else {
                alert("Дані введені невірно!");
            }
        } else {
            alert("Дані не введені!");
        }       
    }
    return false;
}

function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const userData1 = prompt("Введіть свої дані", "Ім'я Прізвище");
if (validateUserData(userData1)) {
    const [firstName, lastName] = userData1.split(" ");
    const newUser1 = new CreateNewUser1(firstName, lastName);
    console.log(newUser1.getLogin());
}    
    
/**
Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.

Возьмите выполненное задание выше (созданная вами функция createNewUser()) и дополните ее следующим функционалом: При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday. 

Создать метод getAge() который будет возвращать сколько пользователю лет. 

Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992). Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.
*/

class CreateNewUser {
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

function validateBirthday(day, month, year) {
    if (day && month && year) {
        const birthdayDate = new Date(year, parseInt(month) - 1, day);
        if (birthdayDate.toString() !== "Invalid Date") {
            return true;
        } else {
            alert("Дата народження не вірна");
        }                   
    } else {
        alert("Дата народження не вірна");
    }
    return false;
}

function createBirthdayDate(birthday) {
    const [day, month, year] = birthday.split(".");
    if (validateBirthday(day, month, year)) {
        return new Date(year, parseInt(month) - 1, day);
    }
    return false;
}

const userData = prompt("Введіть свої дані", "Ім'я Прізвище");
if (validateUserData(userData)) {
    const [firstName, lastName] = userData.split(" ");
    const birthday = prompt("Введіть дату народження", "dd.mm.yyyy");
    const birthdayDate = createBirthdayDate(birthday);
    if (birthdayDate) {
        const newUser = new CreateNewUser(firstName, lastName, birthdayDate);
        console.log(newUser.getPassword());
        console.log(newUser.getAge());
    }                  
}    