
// ES6 arrow functions

// A simple arrow function has a name, argument and return value.
const double = n => n * 2;
double(2);

// A multiple-line arrow function requires brackets and a return statement
const debugDouble = n => {
	console.log(n);
	return n * 2;
}
debugDouble(2);

// If you pass more than 1 argument, you need to add paretheses
const add = (a, b) => a + b;

// A function with NO arguments needs paretheses.
const getYear = () => "2016";

// An arrow function that does nothing
const doNothing = () => null

// To return an object, wrap {} in ()
const createCity = (c, n) => ({ city: c, nation: n })

console.log(createCity("Oxford", "UK"));


// Default parameters
// This handles UNDEFINED/missing arguments but not other non-numeric arguments.

// multiply(4,NaN);
// multiply(4);
// multiply(4,undefined);
// multiply(4,2);

const multiply = ( x, y=1) => x*y;

// Adding a default value to just 1 argument requires ()

const quad = (n=1) => n * 4
quad();

// An anonymous arrow function
(a, b) => a * b

// A self-executing anonymous arrow function
((a, b) => a * b)(4, 2);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

