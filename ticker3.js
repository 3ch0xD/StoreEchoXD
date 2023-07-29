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


