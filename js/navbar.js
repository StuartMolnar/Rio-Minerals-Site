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
  const navbarFull = document.getElementById('navbar-full');
  const navbarPlaceholder = document.getElementById('navbar-spacer');
  navbarPlaceholder.style.height = `${navbarFull.offsetHeight}px`;
}

  