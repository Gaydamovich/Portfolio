document.querySelector('.btn-back').onclick = () => {
    window.open('../index.html')
}

document.querySelector('.btn-mobile').onclick = () => {
    document.querySelector('.btn-mobile').style.display = 'none'
    document.querySelector('.btn-desktop').style.display = 'block'

    document.querySelector('div').style.width = '640px'
}

document.querySelector('.btn-desktop').onclick = () => {
    document.querySelector('.btn-desktop').style.display = 'none'
    document.querySelector('.btn-mobile').style.display = 'block'

    document.querySelector('div').style.width = '1300px'
}