(function seekSongKeybinds() {
	if (!Spicetify.Mousetrap || !Spicetify.Player) {
		setTimeout(seekSongKeybinds, 1000);
		return;
	}

	bindKeys();
})();


function bindKeys() {
	for (let i = 0; i < 10; i++) {
		setKeybind(`${i}`, () => setToPercent(i * 10));
	}

	setKeybind("left", () => Spicetify.Player.skipBack(5000));
	setKeybind("right", () => Spicetify.Player.skipForward(5000));
}


function setKeybind(key, action) {
	Spicetify.Mousetrap.bind(key, action);
}

function setToPercent(percent) {
	Spicetify.Player.seek((percent / 100) * Spicetify.Player.getDuration())
}
