let SERVICE_DESCRIPTION = {'geology': 'We provide a variety of geological expertise including mapping, prospecting, assessment report writing, and designing exploration programs.',
                'geochemistry': 'Each crew member is trained in the proper sampling techniques and handling of your samples. Samples are properly labeled, sorted, plotted, and shipped to ensure minimal contamination and to avoid the dreaded “missing sample” syndrome.',
                'geophysics': 'Our crews have performed countless kilometers of Mag/VLF . We also manage I.P. programs worldwide.',
                'line_cutting': 'We strive for accuracy on our grids, and ease of movement for your personnel through the bush, check out the photos.',
                'tenure_acquisition': 'Our professional crew has been staking claims and acquiring concessions for over three decades.  We are incorporated in Canada, the USA, Jamaica, and Ireland and offer claim and concession searches and acquisition in any jurisdiction worldwide. We handle all aspects of the acquisition process for a true “no worries” job.',
                'project_management': 'Our project management services will oversee every aspect of your project from start to finish, ensuring compliance with regulations, proper communication with clients, and efficient management of all logistics. Our team will handle all necessary paperwork to guarantee a smooth operation.',
                'trenching': 'Whether through mechanized or manual means, we can arrange trenching and road building projects to assist your project.',
                'drill_programs': 'Our proven expertise in coordinating drill programs around the world means that we approach your project with the professionalism and thoroughness it deserves.',
                'camp_building': 'Convenient, safe, minimal disturbance, and most of all functional. We will build a camp anywhere tailored to your specifications.',
                'pad_building': 'We have many years experience building solid helicopter and drill pads around the world, providing a stable and safe platform to perform your work.'
}

let SERVICE_TITLES = {'geology': 'Geology',
                      'geochemistry': 'Geochemistry',
                      'geophysics': 'Geophysics',
                      'line_cutting': 'Line Cutting',
                      'tenure_acquisition': 'Tenure Acquisition',
                      'project_management': 'Project Management',
                      'trenching': 'Trenching',
                      'drill_programs': 'Drill Programs',
                      'camp_building': 'Camp Building',
                      'pad_building': 'Pad Building'
}

let PHOTOS_IN_SERVICE = {'geology': 100,
                 'geochemistry': 52,
                 'geophysics': 12,
                 'line_cutting': 16,
                 'tenure_acquisition': 10,
                 'project_management': 15,
                 'trenching': 31,
                 'drill_programs': 39,
                 'camp_building': 45,
                 'pad_building': 10
}

function toggleDropdown() {
    document.getElementById('services-dropdown-list').classList.toggle("hidden");
    document.getElementById('services-dropdown-button').classList.toggle('hidden');
  }
  
  function setServiceMobile(serviceString){
    /* sets the text content of the dropdown box equal to the text content of the service that was clicked */
    document.getElementById('services-dropdown-button').children[0].textContent = document.getElementById('service-mobile-text-' + serviceString).textContent;
  
    /* loops through all services and removes bold font from them */
    var serviceList = document.getElementById('services-dropdown-list')
    for (var i=0; i<serviceList.children.length; i++){
      serviceList.children[i].classList.remove('fw-600');
      
    }
  
    /* adds bold font to the service that was clicked */
    document.getElementById('service-mobile-text-' + serviceString).classList.add('fw-600');
  
  }


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
  document.body.style.overflow = 'auto';
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




  
function setServiceDesktop(serviceString){
  var serviceListTop = document.getElementById('services-menu-desktop-top');
  var serviceListBottom = document.getElementById('services-menu-desktop-bottom');
  for (var i=0; i<serviceListTop.children.length; i++){
    serviceListTop.children[i].classList.remove('checkmark-enabled');
    serviceListBottom.children[i].classList.remove('checkmark-enabled');
  }

  document.getElementById('service-desktop-' + serviceString).classList.add('checkmark-enabled');

  //document.getElementById()
}

function changeService(serviceString){

  document.getElementById('service-title').textContent = SERVICE_TITLES[serviceString];
  document.getElementById('service-description').textContent = SERVICE_DESCRIPTION[serviceString];

  
  document.getElementById('services-image-grid').innerHTML = '';
  

  for (var i=1; i<=PHOTOS_IN_SERVICE[serviceString]; i++){

    const img = document.createElement('img');
    img.className = "object-cover w-full mb-2.5";
    img.src = 'images/' + serviceString + '/' + i + '.jpeg';
    img.onclick = showLightbox;

    document.getElementById('services-image-grid').appendChild(img);
  }
}

