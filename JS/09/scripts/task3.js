/*
    Реалізуйте програму перевірки телефону<br>
    * Використовуючи JS Створіть поле для введення телефону та кнопку збереження<br>
    * Користувач повинен ввести номер телефону у форматі 000-000-00-00 <br>

    * Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер
    правильний
    зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку
    https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg
    якщо буде помилка, відобразіть її в діві до input.
*/
window.onload = () => {
    const showError = (error) => {
        let errorBlock = document.querySelector('.error');
        if (!errorBlock) {
            errorBlock = document.createElement('div');
            errorBlock.classList.add('error');
            document.querySelector('.container').prepend(errorBlock);
        }
        errorBlock.textContent = error;
    }

    const hideError = () => {
        const errorBlock = document.querySelector('.error');
        if (errorBlock) {
            errorBlock.remove();
        }
    }

    const container = document.querySelector('.container');
    const inputPhone = document.createElement('input');
    inputPhone.placeholder = "000-000-00-00";
    container.append(inputPhone);

    const buttonSave = document.createElement('button');
    buttonSave.textContent = "Зберегти";
    buttonSave.onclick = () => {
        hideError();
        const inputPhone = document.querySelector('input');
        if (inputPhone.value) {
            if (/^\d{3}-\d{3}-\d{2}-\d{2}$/.test(inputPhone.value)) {
                inputPhone.classList.add('success');
                setTimeout(() => {
                    document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
                }, 2000);
            }else{
                showError('Невірний формат!');
            }
        }else {
            showError('Номер пустий!');
        }
    }
    container.append(buttonSave);
}