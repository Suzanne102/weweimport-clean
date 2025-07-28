// js/site.js
function setupMenuToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const desktopNav = document.querySelector('.desktop-nav');
  const navLinks = document.querySelectorAll('.desktop-nav a');
  const icon = navToggle.querySelector('i');

  if (navToggle && desktopNav) {
    // Toggle menu on hamburger click
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent click from bubbling up
      desktopNav.classList.toggle('active');

      if (desktopNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        desktopNav.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });

    // Close menu if clicking outside
    document.addEventListener('click', function(e) {
      if (!desktopNav.contains(e.target) && !navToggle.contains(e.target)) {
        desktopNav.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
}


document.addEventListener('DOMContentLoaded', function() {
  fetch('../templates/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;
      setupMenuToggle(); // Call after nav inserted
    });

  fetch('../templates/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});
