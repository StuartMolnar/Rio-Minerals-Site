// Get the lightbox container and image elements
const lightboxContainer = document.getElementById('lightbox');
const lightboxImage = lightboxContainer.querySelector('img');
const lightboxNavButtonPrev = lightboxContainer.querySelector('.lightbox-nav-button-prev');
const lightboxNavButtonNext = lightboxContainer.querySelector('.lightbox-nav-button-next');
const lightboxCloseButton = lightboxContainer.querySelector('.lightbox-close-button');
const lightboxCount = document.getElementById('lightbox-count');

function showLightbox(event) {
  // Get a reference to the clicked image element
  const clickedImage = event.target;

  // Set the lightbox image source to the clicked image source
  lightboxImage.src = clickedImage.src;

  // Show the lightbox container
  lightboxContainer.style.display = 'block';

  // Disable scrolling on the document body
  document.body.style.overflow = 'hidden';

  // Update the current image number
  const images = document.querySelectorAll('#services-image-grid img');
  const currentIndex = Array.prototype.indexOf.call(images, clickedImage);

  // Set the position of the lightbox count element
  window.requestAnimationFrame(() => {
    const imgWidth = lightboxImage.offsetWidth;
    const imgHeight = lightboxImage.offsetHeight;
    lightboxCount.style.left = `calc(50% - ${imgWidth / 2}px)`;
    lightboxCount.style.top = `calc(50% - ${imgHeight / 2}px - 40px)`;
  });

  lightboxCount.textContent = '(' + (currentIndex + 1) + '/' + images.length + ')';

  lightboxContainer.addEventListener('click', function(event) {
    if (event.target === this) {
      hideLightbox();
    }
  });

  // Add click event listeners to the close button to hide the lightbox
  lightboxCloseButton.addEventListener('click', function() {
    hideLightbox();
  });

  // Add the 'animate__zoomIn' class to the lightbox image element
  lightboxImage.classList.add('animate__zoomIn');
}





function fadeIn(element, direction) {
  const animationClass = direction === 'left' ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig';
  element.classList.remove('animate__fadeInLeftBig', 'animate__fadeInRightBig');
  element.classList.add('animate__animated', animationClass);
  element.style.display = 'block';
}



function hideLightbox() {
  // Play the zoomOut animation
  lightboxImage.classList.add('animate__animated', 'animate__zoomOut');

  // Remove the lightbox container and reset the lightbox image source after the animation is finished
  lightboxImage.addEventListener('animationend', function() {
    // Hide the lightbox container
    lightboxContainer.style.display = 'none';

    // Reset the lightbox image source
    lightboxImage.src = '';

    // Remove all animation classes
    lightboxImage.classList.remove('animate__animated', 'animate__zoomOut', 'animate__fadeInLeftBig', 'animate__fadeInRightBig', 'animate__fadeOutLeftBig', 'animate__fadeOutRightBig');
  }, { once: true });

  // Enable scrolling on the document body
  document.body.style.overflow = 'auto';
}


// Add click event listeners to the navigation buttons to change the lightbox image
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

  // Set the position of the lightbox count element
  window.requestAnimationFrame(() => {
    const imgWidth = lightboxImage.offsetWidth;
    const imgHeight = lightboxImage.offsetHeight;
    lightboxCount.style.left = `calc(50% - ${imgWidth / 2}px)`;
    lightboxCount.style.top = `calc(50% - ${imgHeight / 2}px - 40px)`;
  });

  // Set the lightbox image source to the previous image source
  if (currentIndex > 0) {
    lightboxImage.src = images[currentIndex - 1].src;

    // Update the current image number
    const lightboxCount = document.getElementById('lightbox-count');
    lightboxCount.textContent = '(' + currentIndex + '/' + images.length + ')';
  }
});


// Add click event listener to the navigation buttons to change the lightbox image
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

  // Set the position of the lightbox count element
  window.requestAnimationFrame(() => {
    const imgWidth = lightboxImage.offsetWidth;
    const imgHeight = lightboxImage.offsetHeight;
    lightboxCount.style.left = `calc(50% - ${imgWidth / 2}px)`;
    lightboxCount.style.top = `calc(50% - ${imgHeight / 2}px - 40px)`;
  });

  // Play the fade out animation
  fadeOut(lightboxImage, 'left', function() {
    // Increment the current image index
    currentIndex++;

    // Set the lightbox image source to the next image source
    if (currentIndex < images.length) {
      lightboxImage.src = images[currentIndex].src;

      // Update the current image number
      const lightboxCount = document.getElementById('lightbox-count');
      lightboxCount.textContent = '(' + (currentIndex + 1) + '/' + images.length + ')';
    }

    // Play the fade in animation
    fadeIn(lightboxImage, 'right');
  });
});