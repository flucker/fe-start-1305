// Створіть на сторінці div і дайте йому зовнішній відступ 150 пікселів. Використовуючи JS виведіть у консоль відступ
window.onload = () => {
    console.log(window.getComputedStyle(document.querySelector('.obj')).margin);
}