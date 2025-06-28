function bttCopy() {
    const text = document.getElementById('text')
    const copy = document.getElementById('bttCopy')

    copy.addEventListener('click', function(e){
    navigator.clipboard.writeText(text.innerText)
})
};

export default bttCopy;