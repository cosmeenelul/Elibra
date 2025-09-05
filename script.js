const topThreshold = 10;
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > topThreshold) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
const bg = document.querySelector('.hero-section');
document.addEventListener('DOMContentLoaded', function () {
  bg.classList.add('visible');
});
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible');
      }
    });
  },
  { threshold: 0.2 }
);
cards.forEach((card) => observer.observe(card));

const text = document.querySelector('.bg-overlay-text');
const btn = document.querySelector('.btn-smecher');
document.addEventListener('DOMContentLoaded', function () {
  text.classList.add('visible');
  btn.classList.add('visible');
});
