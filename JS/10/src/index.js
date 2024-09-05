window.addEventListener("DOMContentLoaded", function() {
    let operand1, operand2, operator, result, memory;
    const numbers = /^[\d\.]$/;
    const operators = /^[\+\-\*\/\=]$/;
    const actions = /^mrc|m\+|m\-|C$/;
    inputShow(0);  

    document.querySelector('.keys').addEventListener('click', function(e){
        const inputValue = e.target.value;
        if (numbers.test(inputValue)) {   
            if (!operator) {
                operand1 = operandCreate(operand1, inputValue);
                inputShow(operand1);
            } else {
                operand2 = operandCreate(operand2, inputValue);
                inputShow(operand2);
                document.querySelector('input[value="="]').disabled = false;
            }
        }

        if (operators.test(inputValue)) {
            if (operand1 && operand2 && operator) {
                result = calculate(operand1, operand2, operator);
                inputShow(result);
                document.querySelector('input[value="="]').disabled = true;
                operand1 = '';
                operand2 = '';
                operator = '';
            }
            if (inputValue !== '=') {
                operator = inputValue;
                if (result) {
                    operand1 = result;
                }
                if (!operand1) {
                    operand1 = '0';
                }                     
            }
            result = '';
        }

        if (actions.test(inputValue)) {
            switch(inputValue) {
                case "m+":
                    memory = document.querySelector(".display input").value;
                    document.querySelector(".memory").classList.remove('hide');
                    break;
                case "m-":
                    memory = '';
                    document.querySelector(".memory").classList.add('hide');
                break;
                case "mrc":
                    if (!operator) {
                        operand1 = memory;
                    } else {
                        operand2 = memory;
                        document.querySelector('input[value="="]').disabled = false;
                    }                    
                    inputShow(memory);
                    break;
                case "C":
                    operand1 = '';
                    operand2 = '';
                    operator = '';    
                    inputShow(0);                
                    break;
            }
        }
    });

    // Формирование операнда
    function operandCreate(operand, inputValue) {
        operand = operand ? operand : '0';
        if (inputValue === '.' && operand.indexOf(".") !== -1) {
            return operand;
        }
        if (operand === '0' && inputValue !== '.') {
            return inputValue;
        }
        return operand + inputValue;
    }

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
});