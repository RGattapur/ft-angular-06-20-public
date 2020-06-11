
// ES6 LET variables have block-scope and are not hoisted.

for (let k = 0; k < 5; k++) {
	//
}
console.log(typeof k === "undefined");

// =====================================================

// The Temporal Dead Zone: a LET variable is not hoisted and cannot be
// tested for existence above its declaration.


if (true) {
	// Runtime error : console.log( typeof planet );
	let planet = "Saturn";
}

console.log(typeof planet === "undefined");

// =====================================================

// ES6 constants

const CITY = "Cambridge";

// Constants cannot be changed.
// CITY = "Oxford";

// Constants must have an initial value.
// const COUNTY

// Constants have block-level scope.
// Constants, like LET, are not hoisted.

if (true) {
	// Runtime error : console.log( typeof COUNTY );
	const COUNTY = "Cambs";
}

console.log(typeof COUNTY === "undefined");

// ===================================================

// NOTE : using const does not create an immutable/unchangeable value.
// It does mean that a constant cannot be reassigned.
// But the contents of a complext constant (array, object) can be changed.
// Object.freeze can be used to stop this behaviour.

const DENMARK = {
	lang: "Danish",
	capital: "Copenhagen"
}

DENMARK.lang = "Dansk";
DENMARK.capital = "København";

const fruit = [];

fruit.push("Apples");
console.log(JSON.stringify(fruit));

// Stop the array being changed.

const berries = Object.freeze([]);

// So this will cause a runtime error:
// berries.push( "Blueberries");

// ============================================

// Programming style

// Some developers use CONST by default and ony use LET if a variable needs to change.
// Most variables do not change value after initialisation and remain CONST
// As the project evolves some change back to LET.
// This might eliminate a common source of bugs: unexpected value changes.

// NOTE : both let and const have block-scope and do not hoist.
// Both have a temporal dead zone (TDZ) above their declaration.



