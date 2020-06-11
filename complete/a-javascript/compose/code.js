
// Composition : apply a function to the result of another function.

const double = n => n*2;
const addVat = n => n * 1.20;
const identity = n => n 
const hyphenate = word => word.split(" ").join("-")
const lower = s => s.toLowerCase()

const makePara = s => `<p>${s}</p>`
const addClass = (s,name) => s.replace(">",` class="${name}">`)

const draw = s => document.querySelector(".page").innerHTML += `<section>${s}</section>`

const quote = `We are such stuff as Dreams are made on and our little Life is rounded with a Sleep.`;

const compose = (fA, fB) => value => fB(fA( value ))
const composeArgs = (fA, fB) => (a,b) => fB(fA(a),b)

draw(compose( double,addVat ) (20));
draw(compose( double,identity ) (20));
draw(compose( hyphenate,lower ) ( quote ));
draw(compose( hyphenate,identity ) ( quote ));

draw(composeArgs( makePara, addClass ) ("Seville", "city"))