/*
Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут виводить своє value в параграф з id="test"
*/
window.addEventListener("DOMContentLoaded", () => {
    const [...inputs] = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("focusout", (e) => {
            document.querySelector("#test").textContent = input.value;
        });
    });
})