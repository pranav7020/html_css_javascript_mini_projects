const Background = document.querySelector('.container');
const Loader = document.querySelector('.loading');

let load = 0;
let timer = setInterval(blur, 30);

function blur() {
    load++;
    if (load === 100) clearInterval(timer);
    console.log('blur');
    Loader.innerText = `${load}%`;
    Background.style.filter = `blur(${(100 - load) / 10}px)`
    Loader.style.opacity = `${(100 - load) / 100}`
}