import generateText from "./generateText.js";

function bttGenerate() {
    const bttGenerate = document.getElementById('bttGenerate');

    bttGenerate.addEventListener("click", function (e) {
    generateText();
    e.preventDefault();
});
}

export default bttGenerate;
