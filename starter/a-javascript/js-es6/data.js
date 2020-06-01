const draw = s => document.querySelector(".page").innerHTML += s;

const sequence = [2, 12, 4, 6, 10, 8];

const film = { title: "North By Northwest", actor: "Cary Grant" };

const holiday = [{ city: "Paris", year: 2014 }, { city: "Oslo", year: 2018 }]

let movie = {
	title: "Taxi Driver",
	actor: "Robert De Niro",
	director: "Martin Scorsese",
	from: "Columbia Pictures"
}

let flight = {
	from: { airport: "Gatwick", time: 1040 },
	to: { airport: "Oslo", time: 1400 }
}

let person = ["John", "Elton", 42, "Green", "Street"];

let degree = "york-msc-physics-2-2018-serc";

const spain = [
	{ image: "sevilla.jpg", name: "Sevilla", region: "Andalusia", popl: 1.2, temp: 104, },
	{ image: "valencia.jpg", name: "Valencia", region: "Valencia", popl: 1.5, temp: 78, },
	{ image: "barcelona.jpg", name: "Barcelona", region: "Catalonia", popl: 4.0, temp: 107, },
	{ image: "granada.jpg", name: "Granada", region: "Andalusia", popl: 1.25, temp: 84, },
	{ image: "caceres.jpg", name: "Caceres", region: "Extremadura", popl: 0.1, temp: 76 },
	{ image: "alicante.jpg", name: "Alicante", region: "Valencia", popl: 0.7, temp: 68 },
	{ image: "zaragoza.jpg", name: "Zaragoza", region: "Aragon", popl: 0.7, temp: 64 },
	{ image: "vigo.jpg", name: "Vigo", region: "Galicia", popl: 0.2, temp: 60 }
];