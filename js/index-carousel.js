

const carouselImages = ['images/Unsorted/geochem-11.webp',
                        'images/Unsorted/crew-8.webp',
                        'images/Unsorted/P2120014.webp',
                        'images/Unsorted/frontpage-1-4.webp',
                        'images/Unsorted/donkeys.webp',
                        'images/Unsorted/Scenic001.webp',
                        'images/Unsorted/1_IMG_4029.webp',
                        'images/Unsorted/IMG_4136.webp',
                        'images/Unsorted/p7180580-1.webp',
                        'images/Unsorted/p7180584.webp',
                        'images/trenching/1.webp',
                        'images/trenching/19.webp',
                        'images/camp_building/35.webp',
                        'images/project_management/3.webp',
                        'images/project_management/2.webp',
                        'images/geophysics/1.webp',
                        'images/line_cutting/1.webp',
                        'images/geophysics/8.webp',
                        'images/geochemistry/1.webp',
                        'images/geochemistry/2.webp',
                        'images/geochemistry/32.webp',
                        'images/project_management/4.webp',
                        'images/geochemistry/15.webp',
                        'images/geochemistry/8.webp',
                        'images/trenching/19.webp',
                        'images/project_management/9.webp',
                        'images/geochemistry/13.webp',
                        'images/geochemistry/46.webp',
                        'images/geochemistry/47.webp',
                        'images/geochemistry/50.webp',
                        'images/drill_programs/2.webp',
                        'images/geology/59.webp',
                        'images/geochemistry/13.webp',
                        'images/drill_programs/9.webp',
                        'images/geology/3.webp',];
                        


const carousel = document.querySelector('.carousel-images');
function loadImages(){

  for (let i = 0; i < carouselImages.length; i++) {
    const imageSrc = carouselImages[i];

    const div = document.createElement('div');
    if (window.innerWidth <= 640 && i > 0) {
      div.className = "hidden carousel-cell animate__animated h-[500px]";
    } else if (i > 2) {
      div.className = "hidden carousel-cell animate__animated h-[500px]";
    } else {
      div.className = "carousel-cell animate__animated h-[500px]";
    }
    const img = document.createElement('img');
    img.className = "object-cover w-full";
    img.src = imageSrc;
    img.onclick = showLightbox;
    div.appendChild(img);
    carousel.appendChild(div);
  }
  
}

window.addEventListener('load', loadImages);

function getVisibleImagesCount() {
    return window.innerWidth <= 640 ? 1 : 3;
}


/* --- update carousel on resize --- */
let currentFirstVisibleIndex = 0;
let prevVisibleImagesCount = getVisibleImagesCount();

function onResize() {
  const newVisibleImagesCount = getVisibleImagesCount();

  // Only update the visible cells if the visible images count has changed
  if (newVisibleImagesCount !== prevVisibleImagesCount) {
    const carouselCells = document.querySelectorAll('#carousel-images .carousel-cell');

    for (let i = 0; i < carouselCells.length; i++) {
      if (i >= currentFirstVisibleIndex && i < currentFirstVisibleIndex + newVisibleImagesCount) {
        carouselCells[i].classList.remove('hidden');
      } else {
        carouselCells[i].classList.add('hidden');
      }
    }

    // Update the previous visible images count
    prevVisibleImagesCount = newVisibleImagesCount;
  }
}

window.addEventListener('resize', onResize);



/* ----- carousel navigation ----- */
  
function prevImage() {
    const carouselCells = document.querySelectorAll('#carousel-images .carousel-cell');
    let firstVisibleIndex = -1;
    const visibleImagesCount = getVisibleImagesCount();

    for (let i = 0; i < carouselCells.length; i++) {
        if (!carouselCells[i].classList.contains('hidden')) {
            firstVisibleIndex = i;
            break;
        }
    }

    if (firstVisibleIndex > 0) {
        currentFirstVisibleIndex--;
        carouselCells[firstVisibleIndex - 1].classList.remove('hidden');
        setTimeout(() => {
          carouselCells[firstVisibleIndex + visibleImagesCount - 1].classList.add('hidden');
        }, 25);
      }
}
  
function nextImage() {
    const carouselCells = document.querySelectorAll('#carousel-images .carousel-cell');
    let lastVisibleIndex = -1;
    const visibleImagesCount = getVisibleImagesCount();

    for (let i = carouselCells.length - 1; i >= 0; i--) {
        if (!carouselCells[i].classList.contains('hidden')) {
        lastVisibleIndex = i;
        break;
        }
    }

    if (lastVisibleIndex < carouselCells.length - 1) {
        currentFirstVisibleIndex++;
        carouselCells[lastVisibleIndex + 1].classList.remove('hidden');
        setTimeout(() => {
          carouselCells[lastVisibleIndex - visibleImagesCount + 1].classList.add('hidden');
        }, 25);
      }
}
  


/* ----- lightbox ----- */
// Get the lightbox container and image elements
const lightboxContainer = document.getElementById('lightbox');
const lightboxImage = lightboxContainer.querySelector('img');
const lightboxNavButtonPrev = lightboxContainer.querySelector('.lightbox-nav-button-prev');
const lightboxNavButtonNext = lightboxContainer.querySelector('.lightbox-nav-button-next');
const lightboxCloseButton = lightboxContainer.querySelector('.lightbox-close-button');
const lightboxCount = document.getElementById('lightbox-count');

  // Set the position of the lightbox count element
  const setPosition = () => {
    const imgWidth = lightboxImage.offsetWidth;
    const imgHeight = lightboxImage.offsetHeight;
    lightboxCount.style.left = `calc(50% - ${imgWidth / 2}px)`;
    lightboxCount.style.top = `calc(50% - ${imgHeight / 2}px - 40px)`;
  }
  window.requestAnimationFrame(setPosition);
  window.addEventListener('resize', setPosition);

function showLightbox(event) {  
  // Get a reference to the clicked image element
  const clickedImage = event.target;

  // Set the lightbox image source to the clicked image source
  const clickedImageSrc = clickedImage.src;
  const jpegSrc = clickedImageSrc.replace(/\.\w+$/, '.jpeg');
  lightboxImage.src = jpegSrc;
  // Show the lightbox container
  lightboxContainer.style.display = 'block';

  // Disable scrolling on the document body
  document.body.style.overflow = 'hidden';

  // Get all images in the grid and the index of the clicked image
  const images = document.querySelectorAll('#carousel-images .carousel-cell img');
  const currentIndex = Array.prototype.indexOf.call(images, clickedImage);

  // Display the current image number
  const countElement = document.getElementById('lightbox-count');
  countElement.textContent = '(' + (currentIndex + 1) + '/' + images.length + ')';

  // Add click event listener to the lightbox container to hide it when clicked
  lightboxContainer.addEventListener('click', function(event) {
    if (event.target === this) {
      hideLightbox();
    }
  });

  // Play the zoomIn animation
  lightboxImage.classList.add('animate__animated', 'animate__zoomIn');

  // Remove the zoomIn animation after it's played
  lightboxImage.addEventListener('animationend', function() {
    lightboxImage.classList.remove('animate__animated', 'animate__zoomIn');
  }, { once: true });

  // Set the position of the lightbox count element
  window.requestAnimationFrame(() => {
    const imgWidth = lightboxImage.offsetWidth;
    const imgHeight = lightboxImage.offsetHeight;
    lightboxCount.style.left = `calc(50% - ${imgWidth / 2}px)`;
    lightboxCount.style.top = `calc(50% - ${imgHeight / 2}px - 40px)`;
  });
}




function fadeIn(element, direction, countElement) {
  const animationClass = direction === 'left' ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig';
  element.classList.remove('animate__fadeInLeftBig', 'animate__fadeInRightBig', 'animate__fadeOutLeftBig', 'animate__fadeOutRightBig');
  element.classList.add('animate__animated', animationClass);
  element.style.display = 'block';
  if (countElement) {
    countElement.classList.remove('animate__fadeOutLeftBig', 'animate__fadeOutRightBig', 'animate__fadeInLeftBig', 'animate__fadeInRightBig');
    countElement.classList.add('animate__animated', animationClass);
    countElement.style.display = 'block';
  }
}


function hideLightbox() {
  lightboxContainer.style.display = 'none';

  // Reset the lightbox image source
  lightboxImage.src = '';

  // Remove all animation classes
  lightboxImage.classList.remove('animate__animated', 'animate__zoomOut', 'animate__fadeInLeftBig', 'animate__fadeInRightBig', 'animate__fadeOutLeftBig', 'animate__fadeOutRightBig');

  // Enable scrolling on the document body
  document.body.style.overflow = '';
}

lightboxCloseButton.addEventListener('click', function() {
  hideLightbox();
});

lightboxNavButtonPrev.addEventListener('click', function() {
    prevImage();
  // Get all images in the grid
  const images = document.querySelectorAll('#carousel-images .carousel-cell img');

  // Get the current image index
  let currentIndex = -1;
  for (let i = 0; i < images.length; i++) {
    if (images[i].src === lightboxImage.src) {
      currentIndex = i;
      break;
    }
  }

  // Set the lightbox image source to the previous image source
  if (currentIndex > 0) {
    const newImageSrc = images[currentIndex - 1].src;
    const direction = 'left';

    // Update the current image number
    const countElement = document.getElementById('lightbox-count');
    countElement.textContent = '(' + (currentIndex) + '/' + images.length + ')';
    

    fadeOut(lightboxImage, direction, function() {
      lightboxImage.src = newImageSrc;
      
      // Set the position of the lightbox count element
      window.requestAnimationFrame(() => {
        const imgWidth = lightboxImage.offsetWidth;
        const imgHeight = lightboxImage.offsetHeight;
        lightboxCount.style.left = `calc(50% - ${imgWidth / 2}px)`;
        lightboxCount.style.top = `calc(50% - ${imgHeight / 2}px - 40px)`;
      });

      fadeIn(lightboxImage, direction, countElement);
    }, countElement);
  }
});


lightboxNavButtonNext.addEventListener('click', function() {
    nextImage();
  // Get all images in the grid
  const images = document.querySelectorAll('#carousel-images .carousel-cell img');

  // Get the current image index
  let currentIndex = -1;
  for (let i = 0; i < images.length; i++) {
    if (images[i].src === lightboxImage.src) {
      currentIndex = i;
      break;
    }
  }
  // Set the lightbox image source to the next image source
  if (currentIndex < images.length - 1) {
    const newImageSrc = images[currentIndex + 1].src;
    const direction = 'right';
    // Declare countElement variable
    const countElement = document.getElementById('lightbox-count');
    fadeOut(lightboxImage, direction, function() {
      // Update the current image number
      countElement.textContent = '(' + (currentIndex + 2) + '/' + images.length + ')';

      // Set the lightbox image source to the new image source
      lightboxImage.src = newImageSrc;

      // Set the position of the lightbox count element
      window.requestAnimationFrame(() => {
        const imgWidth = lightboxImage.offsetWidth;
        const imgHeight = lightboxImage.offsetHeight;
        lightboxCount.style.left = `calc(50% - ${imgWidth / 2}px)`;
        lightboxCount.style.top = `calc(50% - ${imgHeight / 2}px - 40px)`;
      });

      fadeIn(lightboxImage, direction, countElement); // <-- pass countElement as the third parameter
    }, countElement);
  }
});





function fadeOut(element, direction, callback, countElement) {
  const animationClass = direction === 'left' ? 'animate__fadeOutRightBig' : 'animate__fadeOutLeftBig';
  element.classList.add('animate__animated', animationClass);
  const onAnimationEnd = function() {
    element.removeEventListener('animationend', onAnimationEnd);
    element.style.display = 'none';
    element.classList.remove('animate__animated', animationClass, 'animate__fadeInLeftBig', 'animate__fadeInRightBig');
    if (countElement) {
      countElement.style.display = 'none';
      countElement.classList.remove('animate__animated', animationClass, 'animate__fadeInLeftBig', 'animate__fadeInRightBig');
    }
    callback();
  };
  element.addEventListener('animationend', onAnimationEnd);
  if (countElement) {
    countElement.classList.add('animate__animated', animationClass);
  }
}



/* ----- carousel tap ----- */

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