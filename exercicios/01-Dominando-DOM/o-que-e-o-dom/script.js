const title = document.querySelector('h1');
title.innerHTML = 'Olá Devs!';

function CallBackH1(){
    console.log('Have a click')
}

title.addEventListener('click', CallBackH1);

// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(urlAtual);

// Selecione o primeiro elemento da página que possua a classe ativo
const primeiroAtivo = document.querySelector('.ativo');
console.log(primeiroAtivo);

// Retorne a linguagem do navegador
const LinguagemNavegador = window.navigator.language;
console.log(LinguagemNavegador);

// Retorne a largura da janela
const LarguraJanela = window.innerWidth;
console.log(LarguraJanela);