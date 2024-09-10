import { numbers, operators, actions } from "./templates.js";
import { calculate, inputShow, memorySave, memoryClear, memoryRead, createDisplayValue, getDisplayValue } from "./functions.js";
let resetInput, operand1, operand2, operator, memory;

resetInput = true;
inputShow(0);

document.querySelector('.keys').addEventListener('click', function(e){
    const inputValue = e.target.value;
    if (numbers.test(inputValue)) { 
        const currentValue = resetInput ? "0" : getDisplayValue();        
        if (operator) {
            document.querySelector('input[value="="]').disabled = false;
        }
        inputShow(createDisplayValue(currentValue, inputValue));
        resetInput = false;
    }

    if (operators.test(inputValue)) {
        if (operator && operand1) {
            operand2 = getDisplayValue();
            inputShow(calculate(operand1, operand2, operator));       
            operator = ''; 
            document.querySelector('input[value="="]').disabled = true;
        } 
        if (inputValue !== "=") {
            operator = inputValue;
        }
        
        operand1 = getDisplayValue();
        resetInput = true;
    }

    if (actions.test(inputValue)) {
        switch(inputValue) {
            case "m+":
                memory = memorySave();
                break;
            case "m-":
                memory = memoryClear();
            break;
            case "mrc":
                memoryRead(memory);
                if (operator) {
                    document.querySelector('input[value="="]').disabled = false;
                }                
                break;
            case "C":
                operator = ''; 
                inputShow(0);                
                break;
        }
        resetInput = true;
    }
});