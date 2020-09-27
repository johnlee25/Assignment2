function initMap() { //initializing the map on load
    // The locations of objects
    let locations = new Array();
    locations[0] = new google.maps.LatLng(43.651865, -79.381651);
    locations[1] = new google.maps.LatLng(43.652854, -79.383865);
    locations[2] = new google.maps.LatLng(43.659637, -79.391885);
    locations[3] = new google.maps.LatLng(43.652270, -79.380128);

    //the names of the objects
    let names = new Array();
    names[0] = "Raptors hands";
    names[1] = "Ball of Light";
    names[2] = "Happy Feet";
    names[3] = "Tree of Height";

    //setup markers and the content inside them
    let marker = new Array();
    let contentString = new Array();
    let infowindow = new google.maps.InfoWindow();

    // The map, centered at the first object
    let map = new google.maps.Map(
        document.getElementById('map-results'), { zoom: 17, center: locations[0] });
    
        //the content
    contentString[0] = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Raptors Hands</h1>' +
        '<div id="bodyContent">' +
        '<p>A pair of large hands that can be seen just outside the TD bank office ' +
        'symbols 25 years of Raptors basketball</p>' +
        '<p><a href="individual_sample.html">' +
        'More Details</a> ' +'</p>' +
        '</div>' +
        '</div>';
    contentString[1] = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Ball of Light</h1>' +
    '<div id="bodyContent">' +
    '<p>A large ball of light shining right outside of Nathan Phillips Square ' +
    'town hall displays an unique shadow of the tree in front of it</p>' +
    '<p><a href="individual_sample.html">' +
    'More Details</a> ' +'</p>' +
    '</div>' +
    '</div>';
    contentString[2] = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Happy Feet</h1>' +
    '<div id="bodyContent">' +
    '<p>Fast pair of penguin statues near queens park shows the history the movie' +
    'has with the city</p>' +
    '<p><a href="individual_sample.html">' +
    'More Details</a> ' +'</p>' +
    '</div>' +
    '</div>';
    contentString[3] = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Tree of Height</h1>' +
    '<div id="bodyContent">' +
    '<p>The tallest tree in Toronto can be found here ' +
    '</p>' +
    '<p><a href="individual_sample.html">' +
    'More Details</a> ' +'</p>' +
    '</div>' +
    '</div>';
        //loop that places all the object markers and its contents
    for (let i = 0; i < locations.length; i++) {

        //markers
        marker[i] = new google.maps.Marker({
            position: locations[i],
            map: map,
            title: names[i]
        });
        //on click info window content
        marker[i].addListener('click', function () {
            infowindow.setContent(contentString[i]);
            infowindow.open(map, marker[i]);
        });
    }
}

