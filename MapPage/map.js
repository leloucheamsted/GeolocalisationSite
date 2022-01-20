const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([3.973811, 9.813538], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// Adding Marker

const marker = L.marker([3.973811, 9.813538]).addTo(mymap);

// Add popup message
let template = `
<h3>Empire State Building</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker.bindPopup(template);

// Add circle 

const circle = L.circle([3.973811, 9.813538], {
    radius: 500,
    color: 'green',
    fillColor: 'red',
    fillOpacity: 0.2
}).addTo(mymap).bindPopup('I am a circle')

// Add Polygon

const polygon = L.polygon([

    [3.973811, 9.813538],
    [3.973811, 9.813538],
    [3.973811, 9.813538],
    [3.973811, 9.813538],
], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.2
}).addTo(mymap).bindPopup(' I am a polygone')