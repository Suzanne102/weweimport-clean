document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const desktopNav = document.querySelector('.desktop-nav');
  
    navToggle.addEventListener('click', function () {
      desktopNav.classList.toggle('active');
    });
  });
  