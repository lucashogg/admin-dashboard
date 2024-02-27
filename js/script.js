const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('reveal');
})

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('reveal');
})