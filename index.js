//expansion panel

let button = document.querySelector('.btn')

button.onclick = () => {
    let list = document.querySelector('.wrapper-list')
    list.classList.toggle('hidden')
    list.classList.toggle('show')
}

// slider

let images = document.querySelectorAll('.image')
let current = 0

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity')
    }
    images[current].classList.remove('opacity')
}

document.querySelector('.btn-next').onclick = () => {
    slider()
    if ( current + 1 == images.length ) {
        current = 0
    } else {
        current++
    }

}

document.querySelector('.btn-back').onclick = () => {
    slider()
    if ( current - 1 == -1 ) {
        current = images.length - 1
    } else {
        current--
    }
}

// btn-up

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
        document.querySelector('.btn-up').style.display = 'flex'
    } else if (window.pageYOffset < 200) {
        document.querySelector('.btn-up').style.display = 'none'
    }
});

document.querySelector('.btn-up').onclick = () => {
    window.scrollTo(0, 0)
}
