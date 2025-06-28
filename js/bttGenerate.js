import generateText from "./generateText.js";

function bttGenerate() {
    const bttGenerate = document.getElementById('bttGenerate');
    // const texto = document.querySelector('.texto');
    // const container = document.querySelector('.container');
    // const botoes = document.querySelector('.botoes')

bttGenerate.addEventListener("click", function (e) {
    // texto.classList.remove('oculto')
    // botoes.classList.remove('oculto')
    // container.classList.add('oculto')
    generateText();
    e.preventDefault();
});
}

export default bttGenerate;