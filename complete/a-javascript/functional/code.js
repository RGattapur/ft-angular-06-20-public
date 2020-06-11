
// Functional programming with arrow functions.

// Useful PURE Functions have parameters/arguments.
// Useful PURE functions have a return value
// Pure Functions always produce the same output given the same inputs.
// Pure functions create no side effects.

const draw = s => document.querySelector(".page").innerHTML += s;

let spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:0.8, temp:94,  },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:70,  },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:92,  },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:0.6, temp:72,  },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:84 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:1.7, temp:82 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:1.4, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galician", popl:0.2, temp:60 }
];

console.table( spain );

// =========================================

// MAP : runs a function on each object in the Spain-array and returns a new array.
// MAP : returns the SAME NUMBER of elements in the array it creates.
// MAP : the structure of each element may change.
// MAP : is PURE. It does not change the original Spain-array.

let getRegion = city => city.region;
let regions = spain.map( getRegion );

// This can be implemented with an anonymous arrow function.
regions = spain.map( city => city.region );
// Regions is an array of strings. It has the same length but different element-structure to spain.
console.log( regions );

// This code returns an array of temperatures.
// But it is not clear which city each temperature relates to.
let temps = spain.map( city => city.temp );

// A simplified array of objects is more useful : { city, temp }
// NOTE: returning an object from an arrow function requires additional parentheses

temps = spain.map( city => ( { name:city.name, temp:city.temp }));

// Destructuring makes the code more concise
temps = spain.map( ({name,temp}) => ( { name:name,temp:temp }));
// ES6 object short-hand syntax can also be used.
temps = spain.map( ({name,temp}) => ( { name,temp }));

// =========================================

// FILTER : applies a boolean function to each element of the array.
// FILTER : creates an array of different length, but each element has the same structure.
// FILTER : is a PURE function
// FILTER : should usually be run before MAP if the two functions are chained together.

let isBig = city => city.popl > 1;
let bigCities = spain.filter( isBig );

// Inline anonymous functions can be used.
let hotCities = spain.filter( city => city.temp > 80 );

// All cities
spain.filter( city => true );
// No cities
spain.filter( city => false );

// =========================================

// FILTER and MAP can be chained together. The order of chaining matters.

// The names of large cities
spain.filter( city => city.popl > 1 ).map( city => city.name );
// The regions where hot cities are located
spain.filter( city => city.temp > 80 ).map( city => city.region );

// =========================================

// REDUCE applies a function to successive adjacent pairs in an array to create a single value.

let sequence = [ 2,12,4,6,10,8 ];
// Add up the sequence
sequence.reduce((accumulator,value) => accumulator+value );
// Multiply the sequence values
sequence.reduce((a,b) => a*b );
// Largest value
sequence.reduce((a,b) => Math.max(a,b))
// Smallest value
sequence.reduce((a,b) => Math.min(a,b))

// Can use reduce to concatenate strings
let lyrics = ["We", "are", "family", "I", "got", "all", "my", "sisters", "with", "me"]
lyrics.reduce((a,b) => a + "-" + b );
// Using back-ticks and template strings
lyrics.reduce((a,b) => `${a}-${b}`);

// Find the hottest city given an array of objects : [ { name:"Seville",temp:84 } ]

spain.map( ({name,temp}) => ( { name,temp })).reduce((a,b) => a.temp > b.temp ? a : b );

// =========================================

// SORT : the default sort converts elements to strings then compares their values.

sequence.sort()

// Pass the sort a function which compares adjacent elements 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let ascendingSort = (a,b) => a - b;

sequence.sort( ascendingSort );

// =========================================

// FOREACH iterates over an array calling a function with each element.
// It avoids the need for a for-loop with associated hoisting/no-block-scope problems in ES5.

spain.forEach( city => console.log(`${ city.name } has a temperature of ${ city.temp }`));

// NOTE forEach returns undefined.

// =========================================

// Convert array to markup ===========================================

// Uses template-literal strings and back-ticks for string interpolation

let markup = spain
	.filter( city => city.region !== "Andalusia" )
	.sort( (a,b) => a-b )
	.map( city => `<li>${city.name}<span>${city.temp}</span></li>` )
	.reduce( (a,b) => a+b );

draw( markup );


