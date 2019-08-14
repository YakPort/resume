function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: -33.8625035,
            lng: 151.0882192
        }
    });
    var lables = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }

    ];
    var markers = locations.map(function (locations, i) {
        return new google.maps.Marker({
            position: locations,
            label: lables[i % lables.length]
        });

    });
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
