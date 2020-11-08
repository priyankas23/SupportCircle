document.getElementById("selfcare").style.display = "none";
document.getElementById("empowerment").style.display = "none";
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
  if (counter >= carouselImages-1) return;
  carouselSlides.style.transition="transform 1s ease-in-out";
  counter++;
  carouselSlides.style.transform= 'translateX('+(-size*counter)+ 'px)';
});

prevButton.addEventListener('click',()=>{
  if (counter <= 0) return;
  carouselSlides.style.transition="transform 1s ease-in-out";
  counter--;
  carouselSlides.style.transform= 'translateX('+(-size*counter)+ 'px)';
});

carouselSlides.addEventListener('transitionend', () => {
  console.log(carouselImages[counter]);
  if(carouselImages[counter].id=='lastClone'){
    carouselSlides.style.transition = "none";
    counter = carouselImages.length-2;
    carouselSlides.style.transform= 'translateX('+(-size*counter)+ 'px)';
  }
  if(carouselImages[counter].id=='firstClone'){
    carouselSlides.style.transition = "none";
    counter = 1;
    carouselSlides.style.transform= 'translateX('+(-size*counter)+ 'px)';
  }
});

var selfCareScore = 0;
var empowermentScore = 0;
var count = 0;

var yes = document.getElementById("yes");
var no = document.getElementById("no");

no.addEventListener("click", selfCare);
yes.addEventListener("click", empowerment);

function selfCare(){
  selfCareScore ++;
  count ++;
  if (count == 12) results();
}

function empowerment(){
  empowermentScore ++;
  count ++;
  if (count == 12) results();
}

function results(){
  if(count==12 && selfCareScore>empowermentScore){
    result.innerHTML = "Take some time to take care of yourself!"; 
    document.getElementById("selfcare").style.display = "block";
  }
  else if (count==12 && empowermentScore>selfCareScore){
    result.innerHTML = "Let's get empowered."; 
    document.getElementById("empowerment").style.display = "block";
  }
}