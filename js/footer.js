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