const ptickerContent = document.getElementById('pticker');
const ptickerItem = ptickerContent.querySelector('li');
const ptickerContainer = document.querySelector('.products-ticker');

const ptickerItemWidth = ptickerItem.offsetWidth;
const ptickerContainerWidth = ptickerContainer.offsetWidth;

// Duplicate the ticker item content
ptickerContent.innerHTML += ptickerContent.innerHTML;

// Set initial position of ticker
let ptickerPosition = 0;

function animateProductsTicker() {
  ptickerPosition += 1; // Adjust this value to control the scrolling speed
  if (ptickerPosition >= ptickerItemWidth) {
    ptickerPosition = 0;
  }

  ptickerContent.style.transform = `translateX(-${ptickerPosition}px)`;

  requestAnimationFrame(animateProductsTicker);
}

// Start the animation
animateProductsTicker();

const ctickerContent = document.getElementById('cticker');
const ctickerItem = ctickerContent.querySelector('li');
const ctickerContainer = document.querySelector('.contact-ticker');

const ctickerItemWidth = ctickerItem.offsetWidth;
const ctickerContainerWidth = ctickerContainer.offsetWidth;

// Duplicate the ticker item content
ctickerContent.innerHTML += ctickerContent.innerHTML;

// Set initial position of ticker
let ctickerPosition = 0;

function animateContactTicker() {
  ctickerPosition += 1; // Adjust this value to control the scrolling speed
  if (ctickerPosition >= ctickerItemWidth) {
    ctickerPosition = 0;
  }

  ctickerContent.style.transform = `translateX(-${ctickerPosition}px)`;

  requestAnimationFrame(animateContactTicker);
}

// Start the animation
animateContactTicker();

