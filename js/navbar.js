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
  const scrollHeight = window.innerHeight - 80; // adjust the value 80 to your preference

  const navbarMin = document.getElementById('navbar-min');
  const navbarMax = document.getElementById('navbar-max');
  const backToTop = document.getElementById('back-to-top-button');

  navbarMin.addEventListener('click', () => {
    header.classList.toggle('scrolled');
    navbarMax.classList.toggle('hidden');
    navbarMin.classList.toggle('hidden');
    backToTop.classList.toggle('hidden'); // toggle the hidden class for back-to-top section
    const navbarMinIcon = document.querySelector('#navbar-min .navbar-min-icon');
    if (navbarMinIcon.style.transform === 'rotate(180deg)') {
      navbarMinIcon.style.transform = 'rotate(0deg)';
    } else {
      navbarMinIcon.style.transform = 'rotate(180deg)';
    }
    navbarMin.style.display = 'flex';
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > scrollHeight) {
      header.classList.add('scrolled');
      navbarMax.classList.add('hidden');
      backToTop.classList.add('flex');
      navbarMin.classList.remove('hidden');
      backToTop.classList.remove('hidden'); // remove the hidden class for back-to-top section
      const navbarMinIcon = document.querySelector('#navbar-min .navbar-min-icon');
      navbarMinIcon.style.transform = 'rotate(0deg)';
      navbarMin.style.display = 'flex';
    } else {
      header.classList.remove('scrolled');
      navbarMax.classList.remove('hidden');
      navbarMin.classList.add('hidden');
      backToTop.classList.add('hidden'); // add the hidden class for back-to-top section
      backToTop.classList.remove('flex');
      navbarMin.style.display = 'none';
    }
  });
};

const initNavbarSpacer = () => {
  const navbarFull = document.getElementById('navbar-full');
  const navbarPlaceholder = document.getElementById('navbar-spacer');
  navbarPlaceholder.style.height = `${navbarFull.offsetHeight}px`;
}

  