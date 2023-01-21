const initApp = () => {
    //mobile menu
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

//contact page map
function initMap() {

    // The location of Rio Minerals office
    const rio_office = {
      lat: 49.2852619,
      lng: -123.1164446
    };
  
    // Create the map, centered at rio_office
    const map = new google.maps.Map(
        document.getElementById("map"), {
  
      // Set the zoom of the map
      zoom: 18,
      center: rio_office,
    });

    new google.maps.Marker({
        position: rio_office,
        map,
        title: "Rio Minerals Office",
      });
    
  }

document.addEventListener('DOMContentLoaded', initApp);

