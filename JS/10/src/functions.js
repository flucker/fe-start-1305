// Расчет
function calculate(operand1, operand2, operator) {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;
    }
}

// Отображение на дисплее
function inputShow(value) {
    document.querySelector(".display input").value = value;
}

// Сохранить в память
function memorySave() {
    document.querySelector(".memory").classList.remove('hide');
    return getDisplayValue();
}

// Удалить из памяти
function memoryClear() {
    document.querySelector(".memory").classList.add('hide');    
    return '';
}

// Чтение из памяти
function memoryRead(memory) {
    if (memory) {
        inputShow(memory);
    }
}

// Получить значение с дисплея
function getDisplayValue() {
    return document.querySelector(".display input").value;
}

// Создание нового значения дисплея
function createDisplayValue(displayValue, inputValue) {
    if (inputValue === '.' && displayValue.indexOf(".") !== -1) {
        return displayValue;
    }
    if (displayValue === '0' && inputValue !== '.') {
        return inputValue;
    }
    return displayValue + inputValue;    
}


export {calculate, inputShow, memorySave, memoryClear, memoryRead, createDisplayValue, getDisplayValue};