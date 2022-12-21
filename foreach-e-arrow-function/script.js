//const imgs = document.querySelectorAll('img');

/*imgs.forEach((item, index, array) => {
    console.log("Comentado para não sujar os próximos exemplos");
    //console.log(item, index, array);
});
*/

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => {
    console.log(item);
});

// Quando temos apenas uma linha de código, podemos omitir as chaves
//let i = 0;
//imgs.forEach(item => console.log(i++));

// Exercicios
// Mostre cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => console.log(item));

// Mostre o texto do parágrafo no console
paragrafos.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let j = 0;
imgs.forEach(() => j++);
