/*
    Створіть програму секундомір.
    * Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
    * При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий
    * Виведення лічильників у форматі ЧЧ:ММ:СС
    * Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
*/
window.onload = () => {
    let timer;
    let interval;
    
    const containerStopwatchClassReset = () => {
        document.querySelector('.container-stopwatch').classList.remove('red', 'green', 'silver');
    }

    const timerCreate = () => timer = {seconds:0, minutes:0, hours:0};
    const createValue = (value) => value < 10 ? `0${value}` : value;
    const setValues = (timer) => {
        Object.entries(timer).forEach(([name, value]) => {
            document.querySelector(`#${name}`).textContent = createValue(value);
        });
    };
    const setSeconds = () => timer.seconds++;
    const setMinutes = () => {
        if (timer.seconds === 60) {
            timer.seconds = 0;
            timer.minutes++;
        }   
    };
    const setHours = () => {
        if (timer.minutes === 60) {
            timer.minutes = 0;
            timer.hours++;
        }
    }
    const removeInterval = () => {
        clearInterval(interval);
        interval = null;
    }
    
    document.querySelector('#start').onclick = () => {
        if (interval) return;
        if (!timer) timerCreate();
        containerStopwatchClassReset();
        document.querySelector('.container-stopwatch').classList.add('green');
        interval = setInterval(() => {
            setSeconds();
            setMinutes();
            setHours();
            setValues(timer);
        }, 1000);
    } 

    document.querySelector('#stop').onclick = () => {
        containerStopwatchClassReset();
        document.querySelector('.container-stopwatch').classList.add('red');
        removeInterval();       
    } 
    
    document.querySelector('#reset').onclick = () => {
        containerStopwatchClassReset();
        document.querySelector('.container-stopwatch').classList.add('silver');
        removeInterval();
        timerCreate();
        setValues(timer);
    } 
}