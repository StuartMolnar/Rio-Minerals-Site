function setHeroAndVideoHeight() {
  // Get the height of navbar-max
  const navbarMax = document.getElementById('navbar-max');
  const navbarMaxHeight = navbarMax.offsetHeight;

  // Set the height of video-container and index-hero to fill the rest of the viewport
  const videoContainer = document.querySelector('.video-container');
  const indexHero = document.querySelector('#index-hero');
  videoContainer.style.height = `calc(100vh - ${navbarMaxHeight}px)`;
  videoContainer.style.top = `${navbarMaxHeight}px`; /* Set the top position to the height of the navbar */
  indexHero.style.height = `calc(100vh - ${navbarMaxHeight}px)`;
}


// Call the function on load and on resize
window.addEventListener('load', setHeroAndVideoHeight);
//window.addEventListener('resize', setHeroAndVideoHeight);

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
  threshold: 0.2, // trigger when element is 20% in viewport
});

for (let i = 0; i < indexChild1.length; i++) {
  divObserver.observe(indexChild1[i]);
}

for (let i = 0; i < indexChild2.length; i++) {
  divObserver.observe(indexChild2[i]);
}


