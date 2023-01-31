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

  