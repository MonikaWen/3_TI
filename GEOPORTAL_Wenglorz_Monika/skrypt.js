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
			layers: [mapa_podstawowa, grayscale, obiekty, miejscowosci_sasiednie]
		});

		var baseLayers = {
			"Mapa podstawowa": mapa_podstawowa,
			"Grayscale": grayscale
		};

		var overlays = {
			"obiekty": obiekty,
			"miejscowości sąsiednie": miejscowosci_sasiednie
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

function addMarker(e){
// Add marker to map at click location; add popup window
var newMarker = new L.marker(e.latlng).addTo(map);
}

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("wspolrzedne punktu klikniecia " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var myLayer = L.geoJson().addTo(map);
myLayer.addData(geojsonFeature);

var geojsonFeature ={
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [18.626922369003296,49.749517920504594],
          [18.627920150756836,49.750342848520475],
          [18.62828493118286,49.750162613345076],
          [18.628692626953125,49.74985759844554],
          [18.629164695739746,49.749677361466965],
          [18.629432916641235,49.75001703829136],
          [18.630645275115967,49.74965656484944],
          [18.630870580673218,49.75010022408985],
          [18.631632328033447,49.74982986972321],
          [18.63107442855835,49.74897027146821],
          [18.630398511886597,49.749171307908696],
          [18.629937171936035,49.74866524907081],
          [18.63030195236206,49.74822157670517],
          [18.630924224853516,49.748422616248654],
          [18.63107442855835,49.748436481014046],
          [18.631407022476196,49.74838795431784],
          [18.631728887557983,49.748762301859855],
          [18.63272398710251,49.748462477438466],
          [18.632898330688477,49.74846594362734],
          [18.633375763893127,49.74830996488296],
          [18.633638620376587,49.74865658363378],
          [18.633880019187927,49.74903266217685],
          [18.633858561515805,49.74910545123548],
          [18.63371640443802,49.74915917642299],
          [18.63354742527008,49.749204236211796],
          [18.633491098880764,49.74920596927976],
          [18.63339990377426,49.74917824018492],
          [18.633386492729187,49.74916437563154]
        ]
      }
    }
  }
);
