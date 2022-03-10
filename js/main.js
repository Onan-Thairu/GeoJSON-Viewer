var map = L.map("map").setView([0, 0], 1); // Setting map extent

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var layers = L.layerGroup().addTo(map);

function showGeojson() {
    layers.clearLayers();  // Removes old GeoJSON layer(s)
    var txt = $("#geojsontext").val();
    txt = JSON.parse(txt);
    L.geoJSON(txt).addTo(layers);  // Display new GeoJSON layer(s)
}
$("#submit").on("click", showGeojson);