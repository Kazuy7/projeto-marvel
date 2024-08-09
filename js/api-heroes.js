const publicKey1 = "64c3f324cdab8ebcd2600031ee3f0ea8"
const timeStamp1 = "1692670954";
const md51 = "b35f5f9e9c24e4dd98abacab12937cdd"

const loadingDiv = document.querySelector('#loading');
const divComics = document.querySelector('#comics');

showLoading(loadingDiv);

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp1}&apikey=${publicKey1}&hash=${md51}&limit=19`).then((response) => { //chamando a API
    return response.json(); //chama o arquivo json
}).then((jsonParsed) => {
    console.log(jsonParsed); //exibe os valores do json no log

    const divHero = document.querySelector('#heroes'); //cria uma variável e linka na id que está no html através do querySelector

    jsonParsed.data.results.forEach(element => { //cria o array dentro da API
        const imageHero = element.thumbnail.path + '.' + element.thumbnail.extension //cria variável que recebe imagem concatenada a extensão
        const nameHero = element.name //cria variável que recebe o nome/título

        createDivHeroes(imageHero, nameHero, divHero); //chama a função que está no 'backend' com os parâmetros indicados
    });

    hideLoading(loadingDiv);
})