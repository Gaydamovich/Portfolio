//expansion panel

let button = document.querySelector('.btn')

button.onclick = () => {
    let list = document.querySelector('.wrapper-list')
    list.classList.toggle('hidden')
    list.classList.toggle('show')
}
