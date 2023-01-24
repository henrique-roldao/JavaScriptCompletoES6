const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animas-descricao')
console.log(h1.innerHTML);
console.log(h1.outerHTML);

// h1.outerHTML = '<p>Novo Título </p>';
// console.log(animaisLista.innerHTML);

// Como navegar na DOM
const lista = document.querySelector('.animais-lista');

lista.parentElement; // Pai
lista.parentElement.parentElement // Pai do Pai
lista.previousElementSibling // Elemento acima
lista.nextElementSibling // Elemento abaixo

lista.children // HTML Collection com os filhos
lista.children[0] // Primeiro Filho
lista.children[--lista.children.length] // Último filho

lista.querySelectorAll('li') // Todas as LI's
lista.querySelector('li:last-child') // Último filho

const novoh1 = document.createElement('h1');

novoh1.innerHTML = 'Novo Título';
novoh1.classList.add('titulo');

console.log(novoh1);