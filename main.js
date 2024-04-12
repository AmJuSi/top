let lat = 47.426944444444;
let lng = 11.4216666666671771;
let zoom = 13;

// var map = L.map('map').setView([lat, lng], zoom);

var map = L.map('map', {
    center: [lat, lng], // [] Array o. Liste, einträge mit komma getrennt
    zoom: zoom
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var marker = L.marker([lat, lng]).addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();