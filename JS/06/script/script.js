/*
Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.
*/
function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
}
Worker.prototype.getSalary = function() {
    document.write(this.rate * this.days);
}

const worker = new Worker("John", "Garlic", 25, 15);
worker.getSalary();
document.write("<hr>");

/*
Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/
function MyString() {
    
}
MyString.prototype.reverse = function(string) {
    return string.split("").reverse().join("");
}
MyString.prototype.ucFirst = function(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
MyString.prototype.ucWords = function(string) {
    const stringArray = string.split(" ");
    const stringArrayUc = stringArray.map(function(word) {
        return new MyString().ucFirst(word);
    });
    return stringArrayUc.join(" ");
}
const myString = new MyString();
document.write(myString.reverse("test") + "<br>");
document.write(myString.ucFirst("test") + "<br>");
document.write(myString.ucWords("simple test words"));