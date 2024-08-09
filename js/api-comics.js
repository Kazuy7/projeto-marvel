// descrição das funcionalidades no 'api-heroes'

const publicKey2 = "64c3f324cdab8ebcd2600031ee3f0ea8"
const timeStamp2 = "1692670954";
const md52 = "b35f5f9e9c24e4dd98abacab12937cdd"

const loadingDiv = document.querySelector('#loading');
const divComics = document.querySelector('#comics');

showLoading(loadingDiv);

fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${timeStamp2}&apikey=${publicKey2}&hash=${md52}&limit=19`).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    console.log(jsonParsed);

    const divComics = document.querySelector('#comics');

    jsonParsed.data.results.forEach(element => {
        const imageComics = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameComics = element.title

        createDivComics(imageComics, nameComics, divComics);
    });

    hideLoading(loadingDiv);
})