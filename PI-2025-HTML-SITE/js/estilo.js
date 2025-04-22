document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuNav = document.querySelector('.menu-nav');

    menuToggle.addEventListener('click', function() {
        menuNav.classList.toggle('active');
        // Altera o ícone
        menuToggle.textContent = menuNav.classList.contains('active') ? '✕' : '☰';
    });
});