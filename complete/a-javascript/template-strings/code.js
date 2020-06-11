// Template strings

let spain = [
	{ image: "sevilla.jpg", name: "Sevilla", region: "Andalusia", popl: 1.2, temp: 104, },
	{ image: "valencia.jpg", name: "Valencia", region: "Valencia", popl: 1.5, temp: 78, },
	{ image: "barcelona.jpg", name: "Barcelona", region: "Catalonia", popl: 4.0, temp: 107, },
	{ image: "granada.jpg", name: "Granada", region: "Andalusia", popl: 1.25, temp: 84, },
	{ image: "caceres.jpg", name: "Caceres", region: "Extremadura", popl: 0.1, temp: 76 },
	{ image: "alicante.jpg", name: "Alicante", region: "Valencia", popl: 0.7, temp: 68 },
	{ image: "zaragoza.jpg", name: "Zaragoza", region: "Aragon", popl: 0.7, temp: 64 },
	{ image: "vigo.jpg", name: "Vigo", region: "Galicia", popl: 0.2, temp: 60 }
];

let inject = (element, markup) => document.querySelector(element).innerHTML += markup;

let toCelcius = (farenheit) => Math.floor((farenheit - 32) * (5 / 9))

let drawCity = city => {

	let markup = `
        <section class="city" data-city="${city.name}">
            <p>${city.name}</p>
            <p>${toCelcius(city.temp)}&deg;</p>
        </section>
    ` ;

	inject(".spain", markup);

	console.log( markup )

}

spain.forEach(drawCity);

// =====================================================================

let holiday = [];

let cities = document.querySelectorAll(".city");

cities.forEach( init );

function init( el ) {
    el.addEventListener( "click" , selectCity );
}

function selectCity( e ) {
	
	let city = e.currentTarget;
	city.removeEventListener( "click" , selectCity );
	city.classList.add("selected");
	holiday.push( city.getAttribute("data-city"));
	
    document.querySelector(".holiday").textContent = holiday.join(", ")
}