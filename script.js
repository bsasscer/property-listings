var map;
//Create empty array for the listing markers
var markers = [];
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 9
    });
    // Locations
    // Normally these would be in a database
    // var locations = [
    //     {title: 'Hornby Lighthouse', location: {lat: -33.8456968, lng: 151.2487337}},
    //     {title: 'The Rocks', location: {lat: -33.8587567, lng: 151.2036252}},
    //     {title: 'Bondi Beach', location {lat: -33.8909923, lng: 151.2638244}},
    //     {title: 'Manly Beach', location: {lat: -33.8033432, lng: 151.2559778}}
    // ];
    var sydney = {lat:-33.8679049, lng: 151.1924394};
    var marker = new google.maps.Marker({
        position: sydney,
        map: map,
        title: 'First Marker!'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Testing' + ' Ready to test again'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
