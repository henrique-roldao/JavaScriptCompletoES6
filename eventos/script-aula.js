const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackListaa(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

//animaisLista.addEventListener('click', callbackListaa);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    //console.log(event);
    console.log(this);
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');
function handleEvent(event) {
    console.log(event.type, event);
}

/*
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);

window.addEventListener('scroll', handleEvent); 
window.addEventListener('resize', handleEvent); 
*/

function handleKeyboard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul');
    } else if (event.key === 'v') {
        document.body.classList.toggle('vermelho');
    }
}

window.addEventListener('keydown', handleKeyboard); 

const imgs = document.querySelectorAll('img');
function handleImg(event) {
    console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
}) 


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
