import { loader, container } from "./elements.js";


export const ajax = (url) => {
    loader.classList.remove('hide')
    if(!url){
        throw new Error('Помилка з адерсою запиту' + url)
    }
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send()
    request.addEventListener('readystatechange', () =>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            showComments(JSON.parse(request.responseText));
            loader.classList.add('hide')
        }
    })
}

function showComments (data) {
    if(!Array.isArray(data)) return;

    const comments = data.map((el, index) => {
         return `
            <div class="comment-block">
                <div class="email">${el.email}</div>
                <div class="text">${el.body}</div>
            </div>
         `
    }).join('')

    container.insertAdjacentHTML('beforeend', comments)
}