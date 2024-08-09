// descrição das funcionalidades no 'api-heroes'

const publicKey3 = "64c3f324cdab8ebcd2600031ee3f0ea8"
const timeStamp3 = "1692670954";
const md53 = "b35f5f9e9c24e4dd98abacab12937cdd"

const loadingDiv = document.querySelector('#loading');
const divComics = document.querySelector('#comics');

showLoading(loadingDiv);

fetch(`https://gateway.marvel.com:443/v1/public/series?ts=${timeStamp3}&apikey=${publicKey3}&hash=${md53}&limit=19`).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    console.log(jsonParsed);

    const divSeries = document.querySelector('#series');

    jsonParsed.data.results.forEach(element => {
        const imageSeries = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameSeries = element.title

        createDivSeries(imageSeries, nameSeries, divSeries);
    });

    hideLoading(loadingDiv);
})