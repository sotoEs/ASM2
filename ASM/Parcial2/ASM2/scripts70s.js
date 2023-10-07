const decades = document.querySelectorAll('.decade');
const image = document.createElement('img');
image.src = './img/600px-Logo-uao.png';
image.style.width = '60px';
image.style.position = 'absolute';
image.style.top = '31%';
image.style.left = '96%';  // Posición inicial
let currentPosition = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    currentPosition = (currentPosition + 1) % decades.length;
    updateImagePosition(decades[currentPosition]);
  } else if (event.key === 'ArrowUp') {
    currentPosition = (currentPosition - 1 + decades.length) % decades.length;
    updateImagePosition(decades[currentPosition]);
  } else if (event.key === ' ') {
    const link = decades[currentPosition].getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  }
});

decades.forEach((decade, index) => {
  decade.addEventListener('click', () => {
    currentPosition = index;
    updateImagePosition(decade);
    const link = decade.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});

function updateImagePosition(decade) {
  const rect = decade.getBoundingClientRect();
  image.style.top = `${rect.top}px`;
  image.style.left = `${rect.right}px`;  // Posiciona al lado derecho del botón
}

document.body.appendChild(image);
