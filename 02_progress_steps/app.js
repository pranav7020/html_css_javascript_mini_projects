const PrevBtn = document.querySelector('.prev-btn');
const NextBtn = document.querySelector('.next-btn');
const Circles = document.querySelectorAll('.circle');
const ProgressLine = document.getElementById('progress');

const totalSteps = Circles.length;
let step = 1;

PrevBtn.addEventListener('click', () => {
    console.log('<<<<<')
    changeButtonState('backward')
    ProgressLine.style.width = `${(step - 1) * (100 / (totalSteps - 1))}%`
    Circles[step].classList.remove('active');
})

NextBtn.addEventListener('click', () => {
    console.log('>>>>>')
    ProgressLine.style.width = `${step * (100 / (totalSteps - 1))}%`
    Circles[step].classList.add('active');
    changeButtonState('forward')
})

function changeButtonState(moveTowards) {
    console.log('step : ', step)

    if (moveTowards === 'forward') step++;
    if (moveTowards === 'backward') step--;

    if (step > 1) PrevBtn.disabled = false;
    if (step === 1) PrevBtn.disabled = true;

    if (step < totalSteps) NextBtn.disabled = false;
    if (step === totalSteps) NextBtn.disabled = true;

}