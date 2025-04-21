// site.js

// Data from nav-data.js
const sublinks = [
  {
    page: 'Wewe Import - Our products',
    links: [
      { label: 'sandals', icon: 'fas fa-shoe-prints', url: 'pages/sandals.html' },
      { label: 'belts', icon: 'fas fa-ruler-horizontal', url: 'pages/belts.html' },
      { label: 'dog-collars', icon: 'fas fa-dog', url: 'pages/dog-collars.html' },
      { label: 'accessories', icon: 'fas fa-gem', url: 'pages/accessories.html' },
      { label: 'bags', icon: 'fas fa-shopping-bag', url: 'pages/bags.html' },
      { label: 'jewelry', icon: 'fas fa-ring', url: 'pages/jewelry.html' },
      { label: 'kikois', icon: 'fas fa-scroll', url: 'pages/kikois.html' },
    ],
  },
  {
    page: 'gen-info',
    links: [
      { label: 'general info', icon: 'fas fa-info-circle', url: 'pages/gen-info.html' },
      { label: 'shop location', icon: 'fas fa-map-marker-alt', url: 'pages/location.html' },
      { label: 'featured products', icon: 'fas fa-star', url: 'pages/featured-products.html' },
      { label: 'enquiry form', icon: 'fas fa-envelope-open-text', url: 'pages/enquiry-form.html' },
    ],
  },
  {
    page: 'more-info',
    links: [
      { label: 'about us', icon: 'fas fa-users', url: 'pages/about-us.html' },
      { label: 'reviews', icon: 'fas fa-comments', url: 'pages/reviews.html' },
    ],
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;

  // Create and inject the mobile nav container
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';
  mobileNav.id = 'mobile-nav';
  body.appendChild(mobileNav);

  // Build nav content from sublinks
  sublinks.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('mobile-section');

    const title = document.createElement('h3');
    title.textContent = section.page;
    sectionDiv.appendChild(title);

    section.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.label;
      a.classList.add('mobile-link');
      sectionDiv.appendChild(a);
    });

    mobileNav.appendChild(sectionDiv);
  });

  // Toggle visibility
  navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });
});

a.textContent = link.label;
a.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;

