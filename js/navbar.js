const initMobileMenu = () => {

    
    hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        document.body.classList.toggle('overflow-y-hidden')
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu)

}

  
const initNavbarMinimizer = () => {
  const header = document.getElementById('navbar-full');
  const backToTop = document.getElementById('back-to-top-button');

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = window.innerHeight * 0.4;

    if (scrollTop > scrollThreshold) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('translate-y-up');
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
      } else {
        // Scrolling up
        header.classList.remove('translate-y-up');
        backToTop.classList.add('hidden');
        backToTop.classList.remove('flex');
      }
    }

    lastScrollTop = scrollTop;
  });
};



const initNavbarSpacer = () => {
  console.log('initNavbarSpacer');
  const navbarFull = document.getElementById('navbar-full');
  const navbarPlaceholder = document.getElementById('navbar-spacer');
  navbarPlaceholder.style.height = `${navbarFull.offsetHeight}px`;

  const mediaQuery = window.matchMedia('(max-width: 640px)');
  mediaQuery.addEventListener('change', () => {
    console.log('mediaQuery change');
    const videoContainer = document.querySelector('.video-container');
    const indexHero = document.getElementById('index-hero');
    navbarPlaceholder.style.height = `${navbarFull.offsetHeight}px`;
    videoContainer.style.top = `${navbarFull.offsetHeight}px`;
    videoContainer.style.height = `calc(100vh - ${navbarFull.offsetHeight}px)`;
    indexHero.style.top = `${navbarFull.offsetHeight}px`;
    indexHero.style.height = `calc(100vh - ${navbarFull.offsetHeight}px)`;
  });
}
