//função que cria a div 'heroes'
function createDivHeroes(images, names, divToAppend) { //função responsável por criar a div dos heróis com parâmetros já determinados
    const divImg = document.createElement('div') //cria variável que recebe um elemento do tipo div
    const divBox = document.createElement('div')
    const textName = document.createElement('text') //cria variável que recebe um elemento do tipo text
    const img = document.createElement('img') //cria variável que recebe um elemento do tipo image

    textName.textContent = names //coloca o valor 'name' do array dentro da variável 'textName'
    img.src = images //coloca o endereço da imagem do array dentro da variável 'img'

    divImg.appendChild(img) //coloca a img dentro da 'divimg'
    divBox.appendChild(divImg) //coloca a div com a img dentro da 'divbox'
    divBox.appendChild(textName) //coloca a div com a img dentro da 'divbox'
    divToAppend.appendChild(divBox) //coloca todos as divs geradas através do array dentro da 'divbox'
    
    divBox.classList.add("pb-5", "col-md-4", "col-sm-6"); //define classes para a div mencionada
    divImg.classList.add("imgs") //define classes para a div mencionada
    img.classList.add("image") //define classes para a div mencionada
    img.style.height = ("210px"); //define um style para a div mencionada
    img.style.width = ("210px"); //define um style para a div mencionada
}


//igual a função 'heroes'
function createDivComics(images, title, divToAppend) {
    const divImg = document.createElement('div')
    const divBox = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = title
    img.src = images

    divImg.appendChild(img)
    divBox.appendChild(divImg)
    divBox.appendChild(textName)
    divToAppend.appendChild(divBox)
    
    divBox.classList.add("pb-5", "col-md-4", "col-sm-6");
    divImg.classList.add("imgs")
    img.classList.add("image")
    img.style.height = ("260px");
    img.style.width = ("210px");
}


//igual a função 'heroes'
function createDivSeries(images, title, divToAppend) {
    const divImg = document.createElement('div')
    const divBox = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = title
    img.src = images

    divImg.appendChild(img)
    divBox.appendChild(divImg)
    divBox.appendChild(textName)
    divToAppend.appendChild(divBox)
    
    divBox.classList.add("pb-5", "col-md-4", "col-sm-6");
    divImg.classList.add("imgs")
    img.classList.add("image")
    img.style.height = ("240px");
    img.style.width = ("210px");
}