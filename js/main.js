let SERVICES = {'geology': 'We provide a variety of geological expertise including mapping, prospecting, assessment report writing, and designing exploration programs.',
                'geochemistry': 'Each crew member is trained in the proper sampling techniques and handling of your samples. Samples are properly labeled, sorted, plotted, and shipped to ensure minimal contamination and to avoid the dreaded “missing sample” syndrome.',
                'geophysics': 'Our crews have performed countless kilometers of Mag/VLF . We also manage I.P. programs worldwide.',
                'line_cutting': 'We strive for accuracy on our grids, and ease of movement for your personnel through the bush, check out the photos.',
                'tenure_acquisition': 'Our professional crew has been staking claims and acquiring concessions for over three decades.  We are incorporated in Canada, the USA, Jamaica, and Ireland and offer claim and concession searches and acquisition in any jurisdiction worldwide. We handle all aspects of the acquisition process for a true “no worries” job.',
                'project_management': 'Placeholder description',
                'trenching': 'Whether through mechanized or manual means, we can arrange trenching and road building projects to assist your project.',
                'drill_programs': 'Our proven expertise in coordinating drill programs around the world means that we approach your project with the professionalism and thoroughness it deserves.',
                'camp_building': 'Convenient, safe, minimal disturbance, and most of all functional. We will build a camp anywhere tailored to your specifications.',
                'pad_building': 'We have many years experience building solid helicopter and drill pads around the world, providing a stable and safe platform to perform your work.'
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

//document.addEventListener('DOMContentLoaded', initMobileMenu);

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

/* the function breaks when we add "sm:" breakpoints to the javascript class addition */
function changeService(serviceString){

  
  document.getElementById('services-image-grid').innerHTML = '';
  

  for (var i=1; i<=PHOTOS_IN['service_' + serviceString]; i++){

    const container = document.createElement('div');
    container.className += 'flex flex-wrap w-1/3 p-1';

    const div = document.createElement('div');
    div.className += 'w-full';

    const img = document.createElement('img');
    img.className += 'block object-cover object-center w-full h-full';
    img.src = 'images/' + serviceString + '/' + i + '.jpeg';

    div.appendChild(img);
    container.appendChild(div);
    document.getElementById('services-image-grid').appendChild(container);
  }
}




/* 
            
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img class="block object-cover object-center w-full h-full"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
              </div>
            </div>
*/




