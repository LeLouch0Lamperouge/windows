setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? + hour : hour;
	min = min < 10 ? "0" + min : min;

	let currentTime = hour + ":" + min + " " + am_pm;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
