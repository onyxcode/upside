function TimeNow() {
	var now = new Date();
	if (now.getHours() > 12) {
		var hours = now.getHours() - 12;
	}
	else {
		var hours = now.getHours();
	}
	if (now.getSeconds() < 10) {
		var seconds = "0" + now.getSeconds();
	}
	else {
		var seconds = now.getSeconds();
	}
	return hours + ":" + now.getMinutes() + ":" + seconds;
}

function updateClock() {
	document.getElementById('time-widget').innerText = TimeNow();
}

setInterval(function () {
    updateClock()
}, 100);