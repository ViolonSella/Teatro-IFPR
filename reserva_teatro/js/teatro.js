const frm = document.querySelector('form')
const divPalco = document.querySelector('#divPalco')

// constante para definir o número de poltronas

const POLTRONAS = 248

// vetor com as poltronas reservadas pelo cliente

const reservadas = [];

window.addEventListener('load', () => {

    //se huver dados salvos em localstorage, faz um split(',') e atribui esses dados ao array, caso contrário, inicializamos o array
    const ocupadas = localStorage.getItem
    // montar o número total de poltronas definidas pela constante
    for(let i = 1; i<=POLTRONAS; i++){
        const figure = document.createElement('figure') //cria a tag figura
        const imgStatus = document.createElement('img') // cria a tag img

        // se a posição estiver ocupada, exibe a imagem ocupada, senão exibe a imagem disponível
        imgStatus.src=ocupada    
    }
})