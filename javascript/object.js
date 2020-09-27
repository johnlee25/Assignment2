function initMap() { //initializing the map on load
    // The location of object
    var object = {lat: 43.651865, lng: -79.381651};
    // The map, centered at object
    var map = new google.maps.Map(
        document.getElementById('map-sample'), {zoom: 16, center: object});
    // The marker, positioned at object
    var marker = new google.maps.Marker({
        position: object, 
        map: map
    });
  }