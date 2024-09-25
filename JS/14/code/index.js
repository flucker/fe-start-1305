const request = async (url) => {
    const response = await fetch(url);
    if(response.status >= 200 && response.status < 300){
        return response.json()
    } else {
        throw new Error("Сталась помилка під час виконання запиту за url: " + url)
    }
}

function getCharacters(url) {
    request(url).then(data => {
        showCharacters(data.results);
        showPagination(data.info.next, data.info.prev)
    });
}

function showCharacters(characters) {
    const charactersWrapper = document.querySelector(".characters");    
    charactersWrapper.innerHTML = "";
    characters.forEach(async character => {
        const episode = await getEpisode(character.episode[0]);
        charactersWrapper.insertAdjacentHTML("beforeend", `
            <article class="character">
                <div class="character-image">
                    <img src="${character.image}" alt="${character.name}">
                </div>
                <div class="character-content">
                    <div class="section">
                        <a href="${character.url}" rel="noopener noreferrer" target="_blank">
                            <h2>${character.name}</h2>
                        </a><span class="status">
                        <span class="status-icon"></span> ${character.status} - ${character.species}</span>
                    </div>
                    <div class="section"><span class="text-gray">Last known location:</span><a href="${character.location.url}" rel="noopener noreferrer" target="_blank">${character.location.name}</a></div>
                    <div class="section"><span class="text-gray">First seen in:</span><a href="${episode.url}" rel="noopener noreferrer" target="_blank">${episode.name}</a></div>
                </div>
            </article>           
        `);
    });
}

function showPagination(next, prev) {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";
    const nextElement = document.createElement("div");
    const prevElement = document.createElement("div");
    nextElement.className = "next";
    prevElement.className = "prev";
    nextElement.textContent = ">>";
    prevElement.textContent = "<<";
    nextElement.classList.add("disabled");
    prevElement.classList.add("disabled");
 
    if (next) {
        nextElement.classList.remove("disabled");
        nextElement.addEventListener("click", e => {
            getCharacters(next);
        });
    }

    if (prev) {
        prevElement.classList.remove("disabled");
        prevElement.addEventListener("click", e => {
            getCharacters(prev);
        });        
    }
    pagination.append(prevElement, nextElement);
}

async function getEpisode(url) {
    const episode = await request(url);
    return episode;
}

 getCharacters("https://rickandmortyapi.com/api/character"); 