
const $h1 = document.querySelector('h1.active');

$h1.addEventListener('click', () => {
    $h1.classList.toggle('active');
})