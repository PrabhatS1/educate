hamburger = document.querySelector('.hamburger')
navbar = document.querySelector('.navbar')
list = document.querySelector('.list')
rightnav = document.querySelector('.rightnav')


hamburger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class');
    list.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})