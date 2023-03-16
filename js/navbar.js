//minimize navbar on scroll
// function minimizeNav() {
//     if (document.body.scrollTop > 192 || document.documentElement.scrollTop > 192) {
//       document.getElementById("navbar-full").classList.add('hidden');
//       document.getElementById("navbar-min").classList.remove('hidden');
//     } else {
//       document.getElementById("navbar-full").classList.remove('hidden');    
//       document.getElementById("navbar-min").classList.add('hidden');
//     }
//   }
  
//   window.onscroll = function() {minimizeNav()}

//mobile menu
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

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = window.innerHeight * 0.4;

    if (scrollTop > scrollThreshold) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('translate-y-up');
      } else {
        // Scrolling up
        header.classList.remove('translate-y-up');
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

  