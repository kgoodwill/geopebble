var APP_KEY = "Fmjtd%7Cluur2q0z29%2Cb5%3Do5-9ab256"

var SAMPLE_POST = 'http://www.mapquestapi.com/geocoding/v1/address?&key=YOUR-KEY-HERE&inFormat=json&json={"location":{"street": "1555 Blake St","city":"Denver","state":"CO","postalCode":"80202"}}'
;

function showBasicURL() {
    var safe = SAMPLE_POST;
    document.getElementById('basicSampleUrl').innerHTML = safe.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

function doClick() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    showBasicURL();
    var newURL = SAMPLE_POST.replace('YOUR_KEY_HERE', APP_KEY);
    script.src = newURL;
    document.body.appendChild(script);
};

function renderGeocode(response) {
    var html = '';
    var i = 0;
    var j = 0;
	
	html = "<p>Location: ";
	var location = response.results[0].locations[0];
	html += "(" + location.latLng.lat + ", " + location.latLng.lng + ")";
  	html += "</p>";
    
    document.getElementById('narrative').innerHTML = html;
}