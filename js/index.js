// Get references to the carousel and its slides
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-item');

// Set the initial slide to display
let currentSlide = 0;
slides[currentSlide].classList.add('active'); // add the active class to the first slide

// Add event listeners to the navigation buttons
const prevBtns = carousel.querySelectorAll('a[href^="#slide"]');
prevBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    // Hide the current slide
    slides[currentSlide].classList.remove('active');
    // Calculate the index of the new slide to display
    if (btn.getAttribute('href') === '#slide1') {
      currentSlide = 0;
    } else if (btn.getAttribute('href') === '#slide2') {
      currentSlide = 1;
    } else if (btn.getAttribute('href') === '#slide3') {
      currentSlide = 2;
    } else {
      currentSlide = 3;
    }
    // Show the new slide
    slides[currentSlide].classList.add('active');
  });
});
