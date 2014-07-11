$.get('data/data.json', function(strikes){

	// var allocs = _.pluck(strikes['strikes'], 'alloc')
	// var scale = d3.scale.linear()
	//   .domain([_.min(allocs), _.max(allocs)])
	//   .range([2,20])

	var isis = new L.LayerGroup();
	var contested = new L.LayerGroup();
	var iraqiGovernment = new L.LayerGroup();
	var peshmerga = new L.LayerGroup();
	var unitedStates = new L.LayerGroup();
	var unknown = new L.LayerGroup();
	  		  
	var map = L.mapbox.map('map', 'examples.map-i86nkdio', {
		center: [34.3688, 41.0945],
		zoom: 7,
		minZoom: 7,
		maxZoom: 10,
		layers: [isis,contested,iraqiGovernment,peshmerga,unitedStates,unknown],

		// zoomControl: false
	});

	var markers = new L.MarkerClusterGroup();

	map.addLayer(markers);

	var latLong = [];

	console.log(strikes.rows);

	strikes.rows.forEach(function(strike){

		if ( strike.level == "ISIS"){
			var marker = markers.addLayer(new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#750a58',weight: '0'}).setRadius("20").bindPopup(strike.desc).addTo(isis).addTo(map));
		}

		if ( strike.level == "United States"){
			var marker = markers.addLayer(new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#1c0cf1',weight: '0'}).setRadius("20").bindPopup(strike.desc).addTo(unitedStates).addTo(map));
		}

		if ( strike.level == "Contested"){
			var marker = markers.addLayer(new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#000000',weight: '0'}).setRadius("20").bindPopup(strike.desc).addTo(contested).addTo(map));
		}

		if ( strike.level == "Peshmerga Controlled"){
			var marker = markers.addLayer(new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#02b770',weight: '0'}).setRadius("20").bindPopup(strike.desc).addTo(peshmerga).addTo(map));
		}

		if ( strike.level == "Iraqi Government"){
			var marker = markers.addLayer(new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#520907',weight: '0'}).setRadius("20").bindPopup(strike.desc).addTo(iraqiGovernment).addTo(map));
		}

		if ( strike.level == "Unknown"){
			var marker = markers.addLayer(new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#520907',weight: '0'}).setRadius("20").bindPopup(strike.desc).addTo(unknown).addTo(map));
		}

		var strikes = $.parseJSON('[' + strike.lat + ',' + strike.lon + ']');
		latLong.push(strikes);


	});

	// var heat = L.heatLayer(latLong, {
	// 	maxZoom: 10,
	// 	radius: 50, 
	// 	gradient: {
	// 		0.45: "#f698dd",
	// 		0.55: "#f15ac8",
	// 		0.65: "#ec1bb3",
	// 		0.95: "#b40f87",
	// 		1.0: "#750a58" }
	// }).addTo(map);

})



	// $.get('data/charters.json', function(strikes){

	// 	var allocs = _.pluck(strikes['charters'], 'alloc')
	// 	var scale = d3.scale.linear()
	// 	  .domain([_.min(allocs), _.max(allocs)])
	// 	  .range([2,20])
		  		  
		 	 							
	// 	strikes.charters.forEach(function(strike){
	// 		if ( strike.lat !== undefined && strike.long !== undefined){
	// 			var marker = new L.CircleMarker([strike.lat, strike.long], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(strike.alloc)).bindPopup(strike.name).addTo(map)
	// 		}
	// 	});
		
	// })


// var bushLayer = new L.LayerGroup();
// var obamaLayer = new L.LayerGroup();
// var layer04 = new L.LayerGroup();
// var layer05 = new L.LayerGroup();
// var layer06 = new L.LayerGroup();
// var layer07 = new L.LayerGroup();
// var layer08 = new L.LayerGroup();
// var layer09 = new L.LayerGroup();
// var layer10 = new L.LayerGroup();
// var layer11 = new L.LayerGroup();
// var layer12 = new L.LayerGroup();
// var layer13 = new L.LayerGroup();
// var layer14 = new L.LayerGroup();

// var bushMarker, i;
// for (i = 0; i < bush.length; i++){
//     var markerLocation = new L.LatLng(bush[i][0], bush[i][1]);
//     bushMarker = new L.circleMarker(markerLocation, {
//         weight: 1,
//         color: 'black',
//         fillColor: '#9b2523',
//         fillOpacity: 0.3
//     });
//     if(bush[i][4]==2004){
//         bushMarker.addTo(layer04).addTo(bushLayer);  
//     }
//     if(bush[i][4]==2005){
//         bushMarker.addTo(layer05).addTo(bushLayer);  
//     }
//     if(bush[i][4]==2006){
//         bushMarker.addTo(layer06).addTo(bushLayer);  
//     }
//     if(bush[i][4]==2007){
//         bushMarker.addTo(layer07).addTo(bushLayer);  
//     }
//     if(bush[i][4]==2008){
//         bushMarker.addTo(layer08).addTo(bushLayer);  
//     }
//     if(bush[i][4]==2009){
//         bushMarker.addTo(layer09).addTo(bushLayer);  
//     };
//     bushMarker.bindPopup(bush[i][2]);
//     bushMarker.setRadius(bush[i][3]);
// };
// var obamaMarker, i;
// for (i = 0; i < obama.length; i++){
//     var markerLocation = new L.LatLng(obama[i][0], obama[i][1]);
//     obamaMarker = new L.circleMarker(markerLocation, {
//         weight: 1,
//         color: 'black',
//         fillColor: '#5367b0',
//         fillOpacity: 0.3
//     });
//     obamaMarker.bindPopup(obama[i][2]);
//     obamaMarker.setRadius(obama[i][3]);
//     obamaMarker.addTo(obamaLayer);
//     if(obama[i][4]==2009){
//         obamaMarker.addTo(layer09);  
//     }
//     else if(obama[i][4]==2010){
//         obamaMarker.addTo(layer10);  
//     }
//     else if(obama[i][4]==2011){
//         obamaMarker.addTo(layer11);  
//     }
//     else if(obama[i][4]==2012){
//         obamaMarker.addTo(layer12);  
//     }
//     else if(obama[i][4]==2013){
//         obamaMarker.addTo(layer13);  
//     }
//     else if(obama[i][4]==2014){
//         obamaMarker.addTo(layer14);  
//     };
// };
// var map = L.map('map', {
//   center: [34.3688, 41.0945],
//   zoom: 7,
//   minZoom: 7,
//   maxZoom: 10,
//   layers: [bushLayer, obamaLayer],
//   zoomControl: false
// });
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
// var zoomControl = new L.Control.Zoom({ position: 'topright'} );
// zoomControl.addTo(map);

// var map = L.mapbox.map('map', 'examples.map-i86nkdio', {
// 	center: [34.3688, 41.0945],
// 	zoom: 7,
// 	minZoom: 7,
// 	maxZoom: 10,
// 	zoomControl: false
// });
// omnivore.csv('/data/isis2.csv')
//     .on('ready', function(layer) {
//         // An example of customizing marker styles based on an attribute.
//         // In this case, the data, a CSV file, has a column called 'state'
//         // with values referring to states. Your data might have different
//         // values, so adjust to fit.
//         this.eachLayer(function(marker) {
//             if (marker.toGeoJSON().properties.state === 'CA') {
//                 // The argument to L.mapbox.marker.icon is based on the
//                 // simplestyle-spec: see that specification for a full
//                 // description of options.
//                 marker.setIcon(L.circle({}));
//             } else {
//                 marker.setIcon(L.circle({}));
//             }
//         });
//     })
// .addTo(map);
// var zoomControl = new L.Control.Zoom({ position: 'topright'} );
// zoomControl.addTo(map);

// $('button#bush').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.addLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#obama').click(function (e) {
//     map.addLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#all').click(function (e) {
//     map.addLayer(obamaLayer);
//     map.addLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn04').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.addLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn05').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.addLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn06').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.addLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn07').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.addLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn08').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.addLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn09').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.addLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn10').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.addLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn11').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.addLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn12').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.addLayer(layer12);
//     map.removeLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn13').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.addLayer(layer13);
//     map.removeLayer(layer14);
// });
// $('button#btn14').click(function (e) {
//     map.removeLayer(obamaLayer);
//     map.removeLayer(bushLayer);
//     map.removeLayer(layer04);
//     map.removeLayer(layer05);
//     map.removeLayer(layer06);
//     map.removeLayer(layer07);
//     map.removeLayer(layer08);
//     map.removeLayer(layer09);
//     map.removeLayer(layer10);
//     map.removeLayer(layer11);
//     map.removeLayer(layer12);
//     map.removeLayer(layer13);
//     map.addLayer(layer14);
// });


