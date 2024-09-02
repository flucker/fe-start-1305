/*
    Створіть слайдер кожні 3 сек змінюватиме зображення <br>
    Зображення для відображення<br>
    https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg<br>
    https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg<br>
    https://naukatv.ru/upload/files/shutterstock_418733752.jpg<br>
    https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg<br>
    https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg
*/

window.onload = () => {
    const images = [
        "https://focus.ua/static/storage/thumbs/920x465/6/77/d561ce6a-986085b605e64bc91ef2fa5f66c4d776.png",
        "https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg",
        "https://img.freepik.com/premium-photo/venus-planet-solar-system_297535-4536.jpg",
        "https://naurok-test.nyc3.cdn.digitaloceanspaces.com/uploads/test/15208/325961/310188_1588011418.jpg",
        "https://www.eetimes.com/wp-content/uploads/shutterstock_1450308851-1.jpg"
    ];
    let image_index = 0;
    document.querySelector('.slider img').src = images[image_index];

    setInterval(() => {
        const slider = document.querySelector('.slider');
        const image = document.querySelector('.slider img');
        if (++image_index === images.length) {
            image_index = 0;
        }
        image.src = images[image_index];
    }, 3000);
}