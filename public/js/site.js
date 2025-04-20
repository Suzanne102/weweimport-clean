document.addEventListener('DOMContentLoaded'), function () {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
 
    navToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('active');
      mobileNav.classList.toggle('slide-down');
    });
    
    navToggle.addEventListener('click', function () {
      desktopNav.classList.toggle('active');
    });
  }
  