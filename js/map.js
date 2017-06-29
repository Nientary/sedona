
function initialize(){var mapOptions={zoom:7,center:new google.maps.LatLng(34.8697809,-111.7609631),scrollwheel:false}
var map=new google.maps.Map(document.getElementById("map-canvas"),mapOptions);var image="../img/icon-map-marker-1.svg";var myLatLng=new google.maps.LatLng(34.8697809,-111.7609631);var marker=new google.maps.Marker({position:myLatLng,map:map,icon:image});}
google.maps.event.addDomListener(window,"load",initialize);
