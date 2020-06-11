
// Using ES5 prototypal inheritance:

// We can define an ordinary function
function Film(m) {
	this.movie = m;
}

// We can define a 2nd function which is prototypally linked to the first.
Film.prototype.about = function() {
	return this.movie;
}

// We can instantiate an object using the Film function.
// This creates an object with a movie property.
// It also contains a prototypal link to the about function.
// We can create multiple instances each with their own data. 
// All the instances share the same about function.

let td = new Film("Taxi Driver");
td.about();
let mp = new Film("Mary Poppins");
mp.about();

// Review TD and MP in the Chrome Developer Tools console.
// The about function has a PROTOTYPE property that points back to the Film function.

// If we refactor the about function using arrow syntax, it does not have a prototype
// property. 
// The expression "this.movie" returns undefined.
// Film.prototype.about = () => this.movie;


// ============================================================

// We can re-write this code using ES6 class syntax.
// This provides syntactic sugar over existing prototypal inheritance.

class Movie {
	constructor(m){
		this.movie = m;
	}
	about() {
		console.log(this,this.movie);
	}
	
}

let taxi = new Movie("Taxi Driver");
taxi.about();
let mary = new Movie("Mary Poppins");
mary.about();

typeof Movie; // returns "function"

// This code fails because setTimeout changes the runtime value of THIS
// inside the about function to point to the global namespace WINDOW

window.setTimeout( taxi.about, 250 );

// This code changes the runtime value of THIS inside the about function
// to point at the DOM element that was clicked on.

let el = document.querySelector(".page");
el.addEventListener( "click", taxi.about );

// We can solve this problem by explicitly binding the runtime value of this
// to the correct object.
window.setTimeout( taxi.about.bind(taxi), 500 );

// But this approach does allow us to bind to the wrong object.
window.setTimeout( taxi.about.bind(mary), 750 );

// Wrapping the function call in an anonymous arrow function also solves this.
window.setTimeout( () => taxi.about(), 1000 );

// A better solution is to refactor the class method as an arrow function.
// Arrow functions lexically bind to their containing object.
// about = () => console.log(this,this.movie);
// Keyword THIS now points to the class that contains this method.