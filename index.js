//expansion panel

let buttonPlus = document.querySelector('.btn-plus')
let buttonMinus = document.querySelector('.btn-minus')

buttonPlus.onclick = () => {
    document.querySelector('.btn-minus').style.display = 'flex'
    buttonPlus.style.display = 'none'
    let list = document.querySelector('.wrapper-list')
    list.classList.add('show')
}

buttonMinus.onclick = () => {
    document.querySelector('.btn-plus').style.display = 'flex'
    buttonMinus.style.display = 'none'
    let list = document.querySelector('.wrapper-list')
    list.classList.remove('show')
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


// slider is ready

let slides = document.querySelectorAll('.content__item')
let current = 0

function slider() {
    slides.forEach( slide => slide.classList.add('hidden-slide'))
    slides[current].classList.remove('hidden-slide')
}

slider()

function nextSlide() {
    if (current + 1 == slides.length) {
        current = 0
    } else current++
    slider()
}

function prevSlide() { 
    if (current - 1 == -1) {
        current = slides.length - 1
    } else current--
    slider()
}

document.querySelector('.btn-left').addEventListener('click', prevSlide)
document.querySelector('.btn-right').addEventListener('click', nextSlide)


// swiper

let content = document.querySelector('.content')

let swipeContainer = (el) => {

    let swipe = el
    let startX = 0
    let startY = 0
    let distanceX = 0
    let distanceY = 0

    let initTime = 0
    let fullTime = 0

    let allowedTime = 2000
    let allowDistanceX = 150
    let allowDistanceY = 50

    swipe.addEventListener('touchstart', (event) => {
        startX = event.changedTouches[0].pageX
        startY = event.changedTouches[0].pageY
        initTime = new Date().getTime()

        event.preventDefault()
    })

    swipe.addEventListener('touchend', (event) => {
        distanceX = event.changedTouches[0].pageX - startX
        distanceY = event.changedTouches[0].pageY - startY

        fullTime = new Date().getTime() - initTime

        if (Math.abs(distanceX) > allowDistanceX && Math.abs(distanceY) < allowDistanceY) {
            if (fullTime < allowedTime) {
                if (distanceX < 0) {
                    nextSlide()
                } else {
                    prevSlide()
                }
            }
        }
        event.preventDefault()
    })


}

swipeContainer(content)