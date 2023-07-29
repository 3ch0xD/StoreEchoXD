const ptickerContent = document.getElementById('pticker');
const ptickerItem = ptickerContent.querySelector('li');
const ptickerContainer = document.querySelector('.products-ticker');

const ptickerItemWidth = ptickerItem.offsetWidth;
const ptickerContainerWidth = ptickerContainer.offsetWidth;


ptickerContent.innerHTML += ptickerContent.innerHTML;


let ptickerPosition = 0;

function animateProductsTicker() {
  ptickerPosition += 1; 
  if (ptickerPosition >= ptickerItemWidth) {
    ptickerPosition = 0;
  }

  ptickerContent.style.transform = `translateX(-${ptickerPosition}px)`;

  requestAnimationFrame(animateProductsTicker);
}


animateProductsTicker();

const ctickerContent = document.getElementById('cticker');
const ctickerItem = ctickerContent.querySelector('li');
const ctickerContainer = document.querySelector('.contact-ticker');

const ctickerItemWidth = ctickerItem.offsetWidth;
const ctickerContainerWidth = ctickerContainer.offsetWidth;


ctickerContent.innerHTML += ctickerContent.innerHTML;


let ctickerPosition = 0;

function animateContactTicker() {
  ctickerPosition += 1; 
  if (ctickerPosition >= ctickerItemWidth) {
    ctickerPosition = 0;
  }

  ctickerContent.style.transform = `translateX(-${ctickerPosition}px)`;

  requestAnimationFrame(animateContactTicker);
}


animateContactTicker();

