//Setup my variables
var lat //latitude
var long //longitude

function getLocation() { //function used to call the functions to get the lat and long coord or errors
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else { //if the browser does not support geolocation
        x.innerHTML = "This broswer does not support Geolocation";
    }
}

function showPosition(position) { //function called upon when the location button is pressed, this stores the nubers in the respective variable and goes to the results and add page
    lat = position.coords.latitude;
    long = position.coords.longitude;

    //setup variables
    var geocoder = new google.maps.Geocoder;
    var latlng = { lat: lat, lng: long };
    var addy

    //use googles geocoder api to pull the location from the lat long
    geocoder.geocode({ 'location': latlng }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                addy = results[0].formatted_address;
            } else {
                window.alert('No results found'); //if nothing was found
            }
        } else {
            window.alert('Geocoder failed due to: ' + status); //if it fails
        }
        filltext(lat, long, addy); //call upon function to fill out the text 
    });
    
}

function filltext(lat, long, addy) { //this function will set the text for the address, long, lat input boxes
    var address = document.getElementById("locaddress");
    var longitude = document.getElementById("loclong");
    var latitude = document.getElementById("loclat");
    address.value = addy;
    longitude.value = long;
    latitude.value = lat;
}



function showError(error) { //in the event any of the errors are called upon
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Request Denied");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;
        case error.TIMEOUT:
            alert("Request Timeout");
            break;
        case error.UNKNOWN_ERROR:
            alert("An Unknown Error Has Occurred.");
            break;
    }
}





