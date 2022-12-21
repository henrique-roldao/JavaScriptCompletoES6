const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;

const h2rect = primeiroH2.getBoundingClientRect();

console.log(h2rect);

if(h2rect.top < 0){
    console.log('Passou do elemento');
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
    window.pageXOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
    console.log('Tela menor que 600px')
};

// Exercicios
// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log("Distância da primeira imagem em relação ao topo da página " + img.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
let soma = 0;
imgs.forEach((item) => {
    soma += item.offsetWidth;
});
console.log(soma)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((item) => {
    const linkWidth = item.offsetWidth;
    const linkHeight = item.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(item, 'Possui boa acessibilidade');
    } else {
        console.log(item, 'Não possui boa acessibilidade');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');
if(browserSmall) {
    menu.classList.add('menu-mobile');
}
