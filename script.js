const tickerContent = document.getElementById('ticker');
const tickerItems = tickerContent.getElementsByTagName('li');
const itemWidth = tickerItems[0].offsetWidth;
let translateValue = 0;
const scrollSpeed = 1; 


tickerContent.innerHTML += tickerContent.innerHTML;

function scrollTicker() {
  translateValue -= scrollSpeed; 
  tickerContent.style.transform = `translateX(${translateValue}px)`;

  
  if (Math.abs(translateValue) >= itemWidth * tickerItems.length) {
    translateValue = 0;
  }
  
  requestAnimationFrame(scrollTicker);
}

scrollTicker();




const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");


let currentSlideIndex = 0;


function slideTo(index) {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}


function startAutoSlide() {
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    slideTo(currentSlideIndex);
  }, 5000); 
}


startAutoSlide();

const tickerContent1 = document.getElementById('ticker1');
const tickerItems1 = tickerContent1.getElementsByTagName('li');
const itemWidth1 = tickerItems1[0].offsetWidth;
let translateValue1 = 0;
const scrollSpeed1 = 1; 

tickerContent1.innerHTML += tickerContent1.innerHTML;

function scrollTicker1() {
  translateValue1 -= scrollSpeed1;
  tickerContent1.style.transform = `translateX(${translateValue1}px)`;

  if (Math.abs(translateValue1) >= itemWidth1 * tickerItems1.length) {
    translateValue1 = 0;
  }

  requestAnimationFrame(scrollTicker1);
}

scrollTicker1();






