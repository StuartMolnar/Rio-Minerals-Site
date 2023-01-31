let SERVICE_DESCRIPTION = {'geology': 'We provide a variety of geological expertise including mapping, prospecting, assessment report writing, and designing exploration programs.',
                'geochemistry': 'Each crew member is trained in the proper sampling techniques and handling of your samples. Samples are properly labeled, sorted, plotted, and shipped to ensure minimal contamination and to avoid the dreaded “missing sample” syndrome.',
                'geophysics': 'Our crews have performed countless kilometers of Mag/VLF . We also manage I.P. programs worldwide.',
                'line_cutting': 'We strive for accuracy on our grids, and ease of movement for your personnel through the bush, check out the photos.',
                'tenure_acquisition': 'Our professional crew has been staking claims and acquiring concessions for over three decades.  We are incorporated in Canada, the USA, Jamaica, and Ireland and offer claim and concession searches and acquisition in any jurisdiction worldwide. We handle all aspects of the acquisition process for a true “no worries” job.',
                'project_management': 'We offer comprehensive project management services that oversee every aspect of your project from start to finish, ensuring compliance with regulations, proper communication with clients, and efficient management of all logistics. Our team will handle all necessary paperwork and ensure that everything runs smoothly, giving you a stress-free and seamless experience.',
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

let PHOTOS_IN_SERVICE = {'geology': 101,
                 'geochemistry': 55,
                 'geophysics': 16,
                 'line_cutting': 20,
                 'tenure_acquisition': 11,
                 'project_management': 18,
                 'trenching': 35,
                 'drill_programs': 43,
                 'camp_building': 49,
                 'pad_building': 14
}

/* TODO
RESTRICT GOOGLE API KEY BEFORE PUBLISHING
use node.closest(node) to close menu when clicking outside of it
add image gallery lightbox
update the base images in /images with the ones from wordpress in /site-downloads
add a description for project management
add an image loading animation for the masonry grid: https://tympanus.net/codrops/2013/07/02/loading-effects-for-grid-items-with-css-animations/
fix the medium screen size to include the checkmark service list from mobile
*/

//minimize navbar on scroll
function minimizeNav() {
  if (document.body.scrollTop > 192 || document.documentElement.scrollTop > 192) {
    document.getElementById("navbar-full").classList.add('hidden');
    document.getElementById("navbar-min").classList.remove('hidden');
  } else {
    document.getElementById("navbar-full").classList.remove('hidden');    
    document.getElementById("navbar-min").classList.add('hidden');
  }
}

window.onscroll = function() {minimizeNav()}

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

function changeService(serviceString){

  document.getElementById('service-title').textContent = SERVICE_TITLES[serviceString];
  document.getElementById('service-description').textContent = SERVICE_DESCRIPTION[serviceString];

  
  document.getElementById('services-image-grid').innerHTML = '';
  

  for (var i=1; i<=PHOTOS_IN_SERVICE[serviceString]; i++){

    const img = document.createElement('img');
    img.className = "object-cover w-full mb-2.5";
    img.src = 'images/' + serviceString + '/' + i + '.jpeg';

    document.getElementById('services-image-grid').appendChild(img);
  }
}




/* 
            
            
          <div class="grid grid-cols-12">
          <div class="hidden col-span-1 sm:block"></div>

          <div id="services-image-grid" class="col-span-10 gap-8 columns-3">
            <img class="object-cover w-full mb-2.5" src="images/geology/1.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/2.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/3.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/4.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/5.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/6.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/7.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/8.jpeg" />
            <img class="object-cover w-full mb-2.5" src="images/geology/9.jpeg" />
          </div>

          <div class="hidden col-span-1 sm:block"></div>
        </div>
*/




