/**
 * Created by aleksandra on 24.05.17.
 */
function showGoogleMaps() {
    var latlng1 = new google.maps.LatLng(46.479337, 30.722654);

    var myOptions1 = {
        zoom: 18,
        center: latlng1,
        scrollwheel: false,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#19bd9a'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#19bd9a'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            }
        ]
    };


    var map1 = new google.maps.Map(document.getElementById("map"), myOptions1);

    var markerImage = new google.maps.MarkerImage(
        'img/faviconmarker.png',
        new google.maps.Size(56, 76),
        new google.maps.Point(0, 0),
        new google.maps.Point(0, 33)
    );

    var infowindow = new google.maps.InfoWindow({
        content: 'Beetroot'
    });

    var myMarker1 = new google.maps.Marker({
        icon: markerImage,
        position: latlng1,
        map: map1,
        title: "Beetroot",
        draggable: false,
        animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(myMarker1, 'click', function () {
        infowindow.open(map, myMarker1);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    showGoogleMaps()
});
