// Retorne no console todas as imagens do site.
const todasImagens = document.querySelectorAll('img')
console.log(todasImagens);

// Retorne no console apenas as imagens que começarem com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
linksInternos.forEach(function(item){
    console.log(item);
});

// Selecione todos os h2 dentro de .animais-descricao
const h2Animais = document.querySelectorAll('.animais-descricao h2');
h2Animais.forEach(function(item){
    console.log(item);
});

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);