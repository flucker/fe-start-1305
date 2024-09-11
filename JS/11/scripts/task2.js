/*
Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів. 
Скільки символів має бути в інпуті, зазначається в атрибуті data-length. 
Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.
*/
const [...inputs] = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener("focusout", (e) => {
        if ( e.target.value.length == e.target.dataset.length ) {
            e.target.classList.add("success");
        } else {
            e.target.classList.add("error");
        }
    });
    input.addEventListener("focus", (e) => {
        e.target.classList.remove("success", "error");
    });
});