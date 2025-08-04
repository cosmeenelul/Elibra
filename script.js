const images = [
  'poze/poza-masaj.jpg',
  'poze/poza-masaj2.jpg',
  'poze/poza-masaj3.jpg',
];
let idx = 0;
const bg = document.getElementById('bg-slideshow');
function showBg() {
  bg.style.backgroundImage = `url('${images[idx]}')`;
  idx = (idx + 1) % images.length;
}
showBg();
setInterval(showBg, 4000);

const topThreshold = 10;
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > topThreshold) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
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
