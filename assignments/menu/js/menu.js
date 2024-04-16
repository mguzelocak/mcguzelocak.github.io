document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu_icon');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
  });
});