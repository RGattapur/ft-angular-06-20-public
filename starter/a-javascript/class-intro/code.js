
function Film(m) {
	this.movie = m;
}

Film.prototype.about = function() {
	return this.movie;
}

