const carousel = document.querySelector(''.carousel);
const slides = carousel.querySelectorAll(''.slide);

let currentIndex = 0;

function goToSlide(index) {
slides.forEach((slide, i) => {
slide.style.transform = `translateX(${100 * (i - index)}%)`;
});

}

document.querySelector(''.prev-button).addEventListener(''.click, () => {
currentIndex = Math.max(currentIndex - 1, 0);
goToSlide(currentIndex);
});

document.querySelector(''.next-button).addEventListener(''.click, () => {
currentIndex = Math.min(currentIndex + 1, slides.length - 1);
goToSlide(currentIndex);
});