const Lists = document.querySelectorAll('.list')

console.log(window.innerHeight)
console.log(Lists[4].getBoundingClientRect())
console.log(Lists[4].getBoundingClientRect().top)

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    Lists.forEach((list) => {
        if (list.getBoundingClientRect().top < (window.innerHeight - list.getBoundingClientRect().height)) {
            list.classList.add('show');
        }

        if (list.getBoundingClientRect().top > (window.innerHeight - list.getBoundingClientRect().height)) {
            list.classList.remove('show');
        }
    })
});