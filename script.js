// side bar 

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const sidebar = document.querySelector('.sidebar');
const logoName = document.querySelector('.logo-name');
const logoImg = document.querySelector('.logo img');
menuOpen.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar');
    menuOpen.style.opacity = '.06';
    logoImg.classList.add('box-shadow');
    logoName.classList.add('text-shadow');
})
menuClose.addEventListener('click', () => {
    menuOpen.style.opacity = '1';
    sidebar.classList.remove('show-sidebar');
    menuOpen.style.display = 'block';
    logoImg.classList.remove('box-shadow');
    logoName.classList.remove('text-shadow');
})
