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
  lightboxImage.src = clickedImage.src;
  // Show the lightbox container
  lightboxContainer.style.display = 'block';

  // Disable scrolling on the document body
  document.body.style.overflow = 'hidden';

  // Get all images in the grid and the index of the clicked image
  const images = document.querySelectorAll('#services-image-grid img');
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
  // Get all images in the grid
  const images = document.querySelectorAll('#services-image-grid img');

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
  // Get all images in the grid
  const images = document.querySelectorAll('#services-image-grid img');

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