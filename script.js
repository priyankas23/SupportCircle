const carouselSlides = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
// buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlides.style.transform = 'translateX('+(-size*counter)+ 'px)';

nextButton.addEventListener('click',()=>{
  carouselSlides.style.transition="transform 0.4s ease-in-out";
  counter++;
  carouselSlides.style.transform= 'translateX('+(-size*counter)+ 'px)';
});