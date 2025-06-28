function switchTheme() {
    const switchTheme = document.getElementById('switchTheme');
    const body = document.getElementById('body');
    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');

    switchTheme.addEventListener("click", function (e) {
        body.classList.toggle('dark')
        moon.classList.toggle('hidden')
        sun.classList.toggle('hidden')
})
};

export default switchTheme;