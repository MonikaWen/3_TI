$(document).ready(function(){
	
		var obiekty = new L.LayerGroup();

L.marker([49.7487, 18.6334]).bindPopup('Rynek').addTo(obiekty),
L.marker([49.7500, 18.6305]).bindPopup('Teatr').addTo(obiekty),
L.marker([49.7476, 18.6342]).bindPopup('Park Pokoju').addTo(obiekty),
L.marker([49.7514, 18.6261]).bindPopup('Wieża Piastowska').addTo(obiekty);

var miejscowosci_sasiednie = new L.LayerGroup();

L.marker([49.8027, 18.6005]).bindPopup('Pogwizdów').addTo(miejscowosci_sasiednie),
L.marker([49.8041, 18.6635]).bindPopup('Hażlach').addTo(miejscowosci_sasiednie),
L.marker([49.7176, 18.6671]).bindPopup('Puńców').addTo(miejscowosci_sasiednie),
L.marker([49.7400, 18.7008]).bindPopup('Bażanowice').addTo(miejscowosci_sasiednie);

	var w = new L.geoJson(wycieczka);
	
	    var mapboxAttributes = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			mapboxUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';
			mapboxUrl2 = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

	    var mapa_podstawowa = L.tileLayer(mapboxUrl2, {attribution: mapboxAttributes}),
	    	grayscale   = L.tileLayer(mapboxUrl, {id: 'examples.map-20v6611k', attribution: mapboxAttributes});

	

		var map = L.map('map', {
			center: [49.7500, 18.6300],
			zoom: 12,
			layers: [mapa_podstawowa, grayscale, obiekty, miejscowosci_sasiednie, w]
		});

		var baseLayers = {
			"Mapa podstawowa": mapa_podstawowa,
			"Grayscale": grayscale
		};

		var overlays = {
			"obiekty": obiekty,
			"miejscowości sąsiednie": miejscowosci_sasiednie,
			"wycieczka":wycieczka
		};

		L.control.layers(baseLayers, overlays).addTo(map);
		
		L.circle([49.7477, 18.6489], 100, {
			color: 'green',
			fillColor: '#00FF00',
			fillOpacity: 0.7
		}).addTo(map).bindPopup("Uniwersytet Slaski").openPopup();
		
		L.circle([49.7447, 18.6409], 100, {
			color: 'yellow',
			fillColor: '#FFFF00',
			fillOpacity: 0.7
		}).addTo(map).bindPopup("Szpital Slaski").openPopup();

		L.polygon([
			[49.7501, 18.6271],
			[49.7495, 18.6279],
			[49.7489, 18.6268],
			[49.7495, 18.6258] 
		]).addTo(map).bindPopup("Przejscie graniczne").openPopup(); 	

$('#m').click(function() {
		
    		var marker = new L.marker();

		function onMapClick(ee) {
			marker
				new L.marker(ee.latlng).addTo(map);
		}

		map.on('click', onMapClick);

    	});

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("wspolrzedne punktu klikniecia " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

 }
);
