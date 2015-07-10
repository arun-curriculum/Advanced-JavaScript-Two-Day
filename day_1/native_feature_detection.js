//Detect geolocation capability

function supports_geo() {
	return "geolocation" in navigator;
}

//Detect canvas support

function supports_canvas() {
	return !!document.createElement("canvas").getContext;
}

//Detect any video support at all

function supports_video() {
	return !!document.createElement("video").canPlayType;
}

//Detect support for particular format. Does not return true or false, but rather "probably" if it is fairly confident it can play this format, "maybe" if the browser thinks it might work, and "" or an empty string if the browser cannot play this.

function supports_h264() {
	if (!supports_video()) {
		return false;
	} else {
		var v = document.createElement("video");
		return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
	}
}