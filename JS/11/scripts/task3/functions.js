import { phonePattern, emailPattern, phoneOperators } from "./patterns.js";

const checkPhone = (phone) => {
    return phonePattern.test(phone);
}

const findPhoneOperator = (phone) => {
    phoneOperators.forEach((phoneOperator) => {
        if (new RegExp(`\\+380(${phoneOperator.codes})`).test(phone)) {
            const icon = document.createElement("span");
            icon.className = "phoneOperator";
            icon.style.backgroundImage = `url("${phoneOperator.logo}")`;
            document.querySelector("#phone").after(icon);    
            return;         
        }
    });
}

const checkEmail = (email) => {
    return emailPattern.test(email);
}

const removeValidation = (formElementId) => {
    const validation = document.querySelector(`#${formElementId} + .validation`);
    if (validation) {
        validation.remove();
    }
    if (formElementId === "phone") {
        const phoneOperator = document.querySelector(`#${formElementId} + .phoneOperator`);
        if (phoneOperator) {
            phoneOperator.remove();
        }
    }
}
const setValidation = (formElement, isOk) => {
    const icon = document.createElement("span");
    icon.className = "validation";
    if (isOk) {
        icon.textContent = "✅";
    } else {
        icon.textContent = "❌";
    }
    formElement.after(icon);    
}

const formValidation = (e) => {
    let formSelector = ".form-control, .form-select";
    if (e.type !== "click") {
        formSelector = `#${e.target.id}`;
    }
    const [...formElements] = document.querySelectorAll(formSelector);
    formElements.forEach((formElement) => {
        let isOk = true;
        removeValidation(formElement.id);
        if (formElement.value.trim()) {
            switch (formElement.id) {
                case "phone":
                    isOk = checkPhone(formElement.value);
                    if (isOk) {
                        findPhoneOperator(formElement.value);
                    }
                    break;
                case "email":
                    isOk = checkEmail(formElement.value);
                    break;
            }
        } else {
            isOk = false;
        }
        
        setValidation(formElement, isOk);
    });
}

export {formValidation};