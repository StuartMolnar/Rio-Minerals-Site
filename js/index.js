const carouselImages = ['images/Unsorted/geochem-11.jpeg',
                        'images/Unsorted/crew-8.jpeg',
                        'images/Unsorted/P2120014.jpeg',
                        'images/Unsorted/frontpage-1-4.jpeg',
                        'images/Unsorted/donkeys.jpeg',
                        'images/Unsorted/Scenic001.jpeg',
                        'images/Unsorted/1_IMG_4029.jpeg',
                        'images/Unsorted/IMG_4136.jpeg',
                        'images/Unsorted/p7180580-1.jpeg',
                        'images/Unsorted/p7180584.jpeg',
                        'images/trenching/1.jpeg',
                        'images/trenching/19.jpeg',
                        'images/camp_building/35.jpeg',
                        'images/tenure_acquisition/9.jpeg',
                        'images/project_management/3.jpeg',
                        'images/project_management/5.jpeg',
                        'images/project_management/2.jpeg',
                        'images/geophysics/1.jpeg',
                        'images/drill_programs/6.jpeg',
                        'images/line_cutting/1.jpeg',
                        'images/geophysics/8.jpeg',
                        'images/geochemistry/1.jpeg',
                        'images/geochemistry/2.jpeg',
                        'images/geochemistry/32.jpeg',
                        'images/project_management/4.jpeg',
                        'images/geochemistry/15.jpeg',
                        'images/geochemistry/8.jpeg',
                        'images/trenching/19.jpeg',
                        'images/project_management/9.jpeg',
                        'images/geochemistry/13.jpeg',
                        'images/geochemistry/46.jpeg',
                        'images/geochemistry/47.jpeg',
                        'images/geochemistry/50.jpeg',
                        'images/drill_programs/2.jpeg',
                        'images/geology/59.jpeg',
                        'images/geochemistry/13.jpeg',
                        'images/drill_programs/9.jpeg',
                        'images/geology/3.jpeg',
                        'images/camp_building/49.jpeg',];

const carousel = document.querySelector('.carousel-images');
const carouselCells = document.querySelectorAll('.carousel-cell img');
let currentImageIndex = 0;

function prevImage() {
  currentImageIndex = (currentImageIndex === 0) ? carouselImages.length - 1 : currentImageIndex - 1;
  for (let i = 0; i < carouselCells.length; i++) {
    carouselCells[i].src = carouselImages[(currentImageIndex + i) % carouselImages.length];
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  for (let i = 0; i < carouselCells.length; i++) {
    carouselCells[i].src = carouselImages[(currentImageIndex + i) % carouselImages.length];
  }
}

if (window.innerWidth <= 640) {
  const hammer = new Hammer(carousel);

  hammer.on('tap', function(event) {
    const carouselWidth = carousel.offsetWidth;
    const tapX = event.center.x;
  
    if (tapX < carouselWidth * 0.3) {
      prevImage();
    } else if (tapX > carouselWidth * 0.7) {
      nextImage();
    }
  });
}

/* Set index video height */
const navbar = document.getElementById('navbar-full');
const videoContainer = document.querySelector('.video-container');
const heroSection = document.getElementById('index-hero');

function setVideoHeight() {
  const navbarHeight = navbar.offsetHeight;
  const viewportHeight = window.innerHeight;
  heroSection.style.height = `${viewportHeight - navbarHeight}px`;
}

// set initial video height
setVideoHeight();

// update video height on window resize
window.addEventListener('resize', setVideoHeight);


/* Divs Animation */
const indexChild1 = document.querySelectorAll('.index-child-1');
const indexChild2 = document.querySelectorAll('.index-child-2');

function handleDivIntersect(entries) {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      if (entries[i].target.classList.contains('index-child-1')) {
        entries[i].target.classList.add('animate__fadeInLeftBig');
      } else if (entries[i].target.classList.contains('index-child-2')) {
        entries[i].target.classList.add('animate__fadeInRightBig');
      }
      entries[i].target.style.opacity = 1;
    }
  }
}

const divObserver = new IntersectionObserver(handleDivIntersect, {
  threshold: 0.0, // trigger when element is 0% in viewport
});

for (let i = 0; i < indexChild1.length; i++) {
  divObserver.observe(indexChild1[i]);
}

for (let i = 0; i < indexChild2.length; i++) {
  divObserver.observe(indexChild2[i]);
}



// Get the lightbox container and image elements
const lightboxContainer = document.getElementById('lightbox');
const lightboxImage = lightboxContainer.querySelector('img');

function showLightbox(event) {
  // Get a reference to the clicked image element
  const clickedImage = event.target;

  // Check if the screen resolution is less than or equal to 640 pixels
  if (window.innerWidth <= 640) {
    // Calculate the 30% and 70% positions of the image
    const imgWidth = clickedImage.width;
    const thirtyPercent = imgWidth * 0.3;
    const seventyPercent = imgWidth * 0.7;

    // Check if the click occurred within the 30%-70% range of the image width
    const clickX = event.clientX - clickedImage.offsetLeft;
    if (clickX >= thirtyPercent && clickX <= seventyPercent) {
      // Set the lightbox image source to the clicked image source
      lightboxImage.src = clickedImage.src;

      // Show the lightbox container
      lightboxContainer.style.display = 'block';

      // Disable scrolling on the document body
      document.body.style.overflow = 'hidden';
    }
  } else {
    // Set the lightbox image source to the clicked image source
    lightboxImage.src = clickedImage.src;

    // Show the lightbox container
    lightboxContainer.style.display = 'block';

    // Disable scrolling on the document body
    document.body.style.overflow = 'hidden';
  }
}


function hideLightbox() {
  // Hide the lightbox container
  lightboxContainer.style.display = 'none';

  // Reset the lightbox image source
  lightboxImage.src = '';

  // Enable scrolling on the document body
  document.body.style.overflow = 'auto';
}

// Add click event listeners to the lightbox container and close button to hide the lightbox
lightboxContainer.addEventListener('click', function(event) {
  // Only hide the lightbox if the click occurred on the background
  if (event.target === this) {
    hideLightbox();
  }
});

const closeButton = document.createElement('button');
closeButton.innerHTML = 'Close';
closeButton.addEventListener('click', function() {
  hideLightbox();
});
lightboxContainer.appendChild(closeButton);

// Add keydown event listener to the document to close the lightbox on escape key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && lightboxContainer.style.display === 'block') {
    hideLightbox();
  }
});
