const navbar = document.getElementById('navbar')
const menu = document.getElementById('menu-burger')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})