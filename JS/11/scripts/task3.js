/*
Використовуючи бібліотеку bootstrap створіть форму у якій запитати у користувача данні.
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - Визначити код оператора та підтягувати логотип оператора. 
Пошта 
Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅

Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані 
*/
import { cities } from "./task3/city.js";
import { formValidation } from "./task3/functions.js";

const citiesSelect = cities.slice(0, 50);
const selectCity = document.querySelector('#city');
citiesSelect.forEach((city) =>{
    selectCity.innerHTML += `<option value="${city.city}">${city.city}</option>`;
}); 

const [...formElements] = document.querySelectorAll(".form-control, .form-select");
formElements.forEach((formElement) => {
    formElement.addEventListener("focusout", formValidation);
});
document.querySelector("#submit").addEventListener("click", formValidation);