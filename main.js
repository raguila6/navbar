import './node_modules/the-new-css-reset/css/reset.css'
import './style.css'

const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => menu.classList.toggle('hidden'))
