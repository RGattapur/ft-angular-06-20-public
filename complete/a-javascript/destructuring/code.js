
// Destructuring
// Concise syntax to extract simple values from complex objects.

const draw = s => document.querySelector(".page").innerHTML += s;

// ==========================================================================

let movie = {
	title: "Taxi Driver",
	actor: "Robert De Niro",
	director: "Martin Scorsese",
	from: "Columbia Pictures"
}

// Simple destructuring
let { title, actor } = movie;

// Rename variables
let { director: dr, from: fr } = movie;

let sentence = `<p>${actor} starred in ${title} directed by ${dr} from ${fr}</p>`;

draw(sentence)

// ==========================================================================

// Nested destructuring
let flight = {
	from: { airport: "Gatwick", time: 1040 },
	to: { airport: "Oslo", time: 1400 }
}

let { 
	from: { airport: flyFrom, time: depart }, 
	to: { airport: flyTo, time: arrive } } 
= flight;

let journey = `<p>I fly from ${flyFrom} at ${depart} and land in ${flyTo} at ${arrive}</p>`

draw(journey);

// ==========================================================================

// Destructuring arrays 

// Give meaning to elements of an array
let person = ["John", "Elton", 42, "Green", "Street"];
let [last, first, age, party, town] = person;

// Convert hyphenated-string into variables.
let degree = "york-msc-physics-2-2018-serc";
let [univ, category, subject, duration, yr, funding] = degree.split("-");

// ==========================================================================

// Destructure an object returned from a function.
// Note uses object shorthand to avoid { city:city, temp:temp }

let makeCity = (city, temp) => ({ city, temp });
let { city, temp } = makeCity("Seville", 45);

// ==========================================================================

// Destructuring as you pass an object into a function

const capital = { name:"Rome", temp:24 };

const describe = ({ name,temp }) => console.log(`The temperature in ${name} is ${temp}`)

describe(capital)