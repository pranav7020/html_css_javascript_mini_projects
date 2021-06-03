const pannels = document.querySelectorAll('.panel');

pannels.forEach((pannel) => {
    pannel.addEventListener('click', () => {
        removeClasslist();
        pannel.classList.add('active');
    })
})

function removeClasslist() {
    pannels.forEach(pannel => {
        pannel.classList.remove('active');
    })
}