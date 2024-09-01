window.onload = () => {
    // Створіть 5 див на сторінці, використовуючи getElementsByTagName і forEath поміняйте дивам колір фону.
    const [...divElements] = document.getElementsByTagName("div");
    divElements.forEach((divElement) => {
        divElement.style.backgroundColor = "black";
    });
    
    /*
    Створіть багаторядкове поле для введення тексту та кнопки. Після натискання кнопки користувачем програма повинна
                 згенерувати тег div з текстом, який був у багаторядковому полі. багаторядкове поле слід очистити після
                 переміщення інформації
    */
    document.querySelector("#getText").onclick = () => {
        const textArea = document.querySelector("#textarea");
        const divElement = document.createElement("div");
        divElement.textContent = textArea.value;
        textArea.value = "";
        textArea.after(divElement);
    }
}