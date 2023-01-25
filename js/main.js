let PHOTOS_IN = {'service_1' : 6,
                 'service_2' : 4,
                 'service_3' : 4,
                 'service_4' : 4,
                 'service_5' : 4,
                 'service_6' : 4,
                 'service_7' : 4,
                 'service_8' : 4,
                 'service_9' : 4,
                 'service_10' : 4,

}

const initMobileMenu = () => {
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

document.addEventListener('DOMContentLoaded', initMobileMenu);

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

  //use node.closest(node) to close menu when clicking outside of it




  // var tempService = document.getElementById('service-' + serviceString).textContent;
  // document.getElementById('service-' + serviceString).textContent = document.getElementById('service-1').textContent;
  // document.getElementById('service-1').textContent = tempService;
}

function changeService(serviceString){
  /* disregard this and just write it in html
     turn this into a function that hides and unhides relevant html image list */
  const container = document.createElement('div');
  container.className += 'flex flex-wrap w-1/2 p-1 sm:w-1/3 sm:p-2';

  const div = document.createElement('div');
  div.className += 'w-full';

  const img = document.createElement('img');
  img.className += 'block object-cover object-center w-full h-full';

  for (var i=1; i<=PHOTOS_IN['service_' + serviceString]; i++){
    img.src = 'images/services-' + serviceString + '-images/' + i + '.png';
    div.appendChild(img);
    container.appendChild(div);
    document.getElementById('services-image-grid').appendChild(container);
    console.log(container);
    console.log(img.src);

  }
}



/* 
            <div class="flex flex-wrap w-1/2 p-1 sm:w-1/3 sm:p-2">
              <div class="w-full">
                <img alt="gallery" class="block object-cover object-center w-full h-full"
                  src="images/service-1-images/services-test-photo - Copy (2).png">
              </div>
            </div>
*/




