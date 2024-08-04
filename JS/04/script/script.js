/*Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на Анг. языке*/
const weekDay = parseInt(prompt("Введіть число"));
function weekDayGet(weekDay) {
    switch (weekDay) {
        case 1:
            return "Monday";
        case 2:  
            return "Tuesday";
        case 3:  
            return "Wednesday";
        case 4:  
            return "Thursday";
        case 5:  
            return "Friday";
        case 6:  
            return "Saturday";
        case 7:  
            return "Sunday";
        default:
            return "Ваше число не є днем тижня";
    }
}
document.write(weekDayGet(weekDay));

/*Создайте функцию которая будет заполнять массив 10-ю иксами с помощью цикла.*/
function arrayXCreate() {
    const arrayX = new Array(10);
    for (let i = 0; i < arrayX.length; i++) {
        arrayX[i] = "x";
    }
    return arrayX;
}
document.write(arrayXCreate());

/*Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два !*/
const a = 5;
let ggg;
if (a > 0) {
    ggg = function () {
        document.write("!");
    }
} else {
    ggg = function () {
        document.write("!!");
    }
}
ggg();

/*Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4. */
function ggg(function1, function2) {
    return function1() + function2();
}
document.write(ggg(function() { return 3; }, function() { return 4; }));

/*Сделайте функцию, которая считает и выводит количество своих вызовов.*/
let functionCalls = 0;

function functionCallsCalc() {
    return ++functionCalls;
}
functionCallsCalc();
functionCallsCalc();
functionCallsCalc();
functionCallsCalc();
document.write(functionCallsCalc());