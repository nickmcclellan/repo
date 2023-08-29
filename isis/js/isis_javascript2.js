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
	var all = new L.LayerGroup();
	  		  
	var map = L.mapbox.map('map', 'examples.map-i86nkdio', {
		center: [34.3688, 42.0945],
		zoom: 7,
		minZoom: 7,
		maxZoom: 10,
		layers: [isis,contested,iraqiGovernment,peshmerga,unitedStates,unknown],

		// zoomControl: false
	});

	// var markers = new L.MarkerClusterGroup();

	// map.addLayer(markers);

	var latLong = [];

	strikes.rows.forEach(function(strike){

		if ( strike.level == "ISIS"){
			var marker = new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#750a58',weight: '0', time: strike.date}).setRadius("20").bindPopup("<h2>" + strike.date + "</h2><p><strong>" + strike.city + "</strong></p><p>" + strike.desc + "</p>").addTo(isis).addTo(all).addTo(map);
		}

		if ( strike.level == "United States"){
			var marker = new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#1c0cf1',weight: '0', time: strike.date}).setRadius("20").bindPopup("<h2>" + strike.date + "</h2><p><strong>" + strike.city + "</strong></p><p>" + strike.desc + "</p>").addTo(unitedStates).addTo(all).addTo(map);
		}

		if ( strike.level == "Contested"){
			var marker = new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#000000',weight: '0', time: strike.date}).setRadius("20").bindPopup("<h2>" + strike.date + "</h2><p><strong>" + strike.city + "</strong></p><p>" + strike.desc + "</p>").addTo(contested).addTo(all).addTo(map);
		}

		if ( strike.level == "Peshmerga Controlled"){
			var marker = new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#02b770',weight: '0', time: strike.date}).setRadius("20").bindPopup("<h2>" + strike.date + "</h2><p><strong>" + strike.city + "</strong></p><p>" + strike.desc + "</p>").addTo(peshmerga).addTo(all).addTo(map);
		}

		if ( strike.level == "Iraqi Government"){
			var marker = new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#520907',weight: '0', time: strike.date}).setRadius("20").bindPopup("<h2>" + strike.date + "</h2><p><strong>" + strike.city + "</strong></p><p>" + strike.desc + "</p>").addTo(iraqiGovernment).addTo(all).addTo(map);
		}

		if ( strike.level == "Unknown"){
			var marker = new L.CircleMarker([strike.lat, strike.lon], {fillColor: '#520907',weight: '0', time: strike.date}).setRadius("20").bindPopup("<h2>" + strike.date + "</h2><p><strong>" + strike.city + "</strong></p><p>" + strike.desc + "</p>").addTo(unknown).addTo(all).addTo(map);
		}

		var strikes = $.parseJSON('[' + strike.lat + ',' + strike.lon + ']');
		latLong.push(strikes);

	});

		//Create a marker layer (in the example done via a GeoJSON FeatureCollection)
		var sliderControl = L.control.sliderControl({position: "topright", layer: all});

		//Make sure to add the slider to the map ;-)
		map.addControl(sliderControl);

		//And initialize the slider
		sliderControl.startSlider();

	$('button#all').click(function (e) {
		map.addLayer(isis);
		map.addLayer(contested);
		map.addLayer(iraqiGovernment);
		map.addLayer(peshmerga);
		map.addLayer(unitedStates);
		map.addLayer(unknown);
		map.addLayer(markers);
	});
	$('button#isis').click(function (e) {
		map.addLayer(isis);
		map.removeLayer(contested);
		map.removeLayer(iraqiGovernment);
		map.removeLayer(peshmerga);
		map.removeLayer(unitedStates);
		map.removeLayer(unknown);
		map.removeLayer(markers);
	});
		$('button#contested').click(function (e) {
		map.removeLayer(isis);
		map.addLayer(contested);
		map.removeLayer(iraqiGovernment);
		map.removeLayer(peshmerga);
		map.removeLayer(unitedStates);
		map.removeLayer(unknown);
		map.removeLayer(markers);
	});
	$('button#iraqiGovernment').click(function (e) {
		map.removeLayer(isis);
		map.removeLayer(contested);
		map.addLayer(iraqiGovernment);
		map.removeLayer(peshmerga);
		map.removeLayer(unitedStates);
		map.removeLayer(unknown);
		map.removeLayer(markers);
	});
	$('button#peshmerga').click(function (e) {
		map.removeLayer(isis);
		map.removeLayer(contested);
		map.removeLayer(iraqiGovernment);
		map.addLayer(peshmerga);
		map.removeLayer(unitedStates);
		map.removeLayer(unknown);
		map.removeLayer(markers);
	});
	$('button#unitedStates').click(function (e) {
		map.removeLayer(isis);
		map.removeLayer(contested);
		map.removeLayer(iraqiGovernment);
		map.removeLayer(peshmerga);
		map.addLayer(unitedStates);
		map.removeLayer(unknown);
		map.removeLayer(markers);
	});
	$('button#unknown').click(function (e) {
		map.removeLayer(isis);
		map.removeLayer(contested);
		map.removeLayer(iraqiGovernment);
		map.removeLayer(peshmerga);
		map.removeLayer(unitedStates);
		map.addLayer(unknown);
		map.removeLayer(markers);
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