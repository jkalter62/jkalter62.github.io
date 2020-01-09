function loadvideo(text) {
	var id;
	if (text.indexOf("v=") > -1) {
		var g = text.indexOf("v=");
		id = text.substring(g + 2, g + 13);
	}
	if (text.length === 11) {
		id = text;
	}
	if (id !== undefined) {
		document.getElementById("player").src = "https://www.youtube-nocookie.com/embed/" + id;
	}
}

function go() {
	loadvideo(document.getElementById('inp').value);
}

document.getElementById("inp")
    .addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        go();
    }
});
