const tickerContent = document.getElementById('ticker');
const tickerItems = tickerContent.getElementsByTagName('li');
const itemWidth = tickerItems[0].offsetWidth;
let translateValue = 0;
const scrollSpeed = 1; // Increase this value to make the scrolling faster

// Duplicate the ticker items to create a seamless loop
tickerContent.innerHTML += tickerContent.innerHTML;

function scrollTicker() {
  translateValue -= scrollSpeed; // Increase the scrolling speed
  tickerContent.style.transform = `translateX(${translateValue}px)`;

  // Reset the translateValue when reaching the end of the loop
  if (Math.abs(translateValue) >= itemWidth * tickerItems.length) {
    translateValue = 0;
  }
  
  requestAnimationFrame(scrollTicker);
}

scrollTicker();


// w

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

// Set initial slide index
let currentSlideIndex = 0;

// Function to move the slides
function slideTo(index) {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Function to handle the automatic sliding
function startAutoSlide() {
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    slideTo(currentSlideIndex);
  }, 5000); // Change image every 3 seconds (adjust as needed)
}

// Call the function to start the automatic sliding
startAutoSlide();


// const ptickerContent = document.getElementById('pticker');
// const ptickerItem = ptickerContent.querySelector('li');
// const ptickerContainer = document.querySelector('.products-ticker');

// const ptickerItemWidth = ptickerItem.offsetWidth;
// const ptickerContainerWidth = ptickerContainer.offsetWidth;

// // Duplicate the ticker item content
// ptickerContent.innerHTML += ptickerContent.innerHTML;

// // Set initial position of ticker
// let ptickerPosition = 0;

// function animateProductsTicker() {
//   ptickerPosition -= 1; // Adjust this value to control the scrolling speed
//   if (ptickerPosition <= -ptickerItemWidth) {
//     ptickerPosition += ptickerItemWidth;
//   }

//   ptickerContent.style.transform = `translateX(${ptickerPosition}px)`;

//   requestAnimationFrame(animateProductsTicker);
// }

// // Start the animation
// animateProductsTicker();





