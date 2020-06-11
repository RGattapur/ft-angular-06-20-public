
// SPREAD OPERATOR

const draw = s => document.querySelector(".page").innerHTML += s;

// Spread operator
let sequence = [2, 12, 4, 6, 10, 8];

// Compare the results of these 2 statements.
// The first logs 6 separate numbers. The 2nd creates a new array from these values.

console.log(...sequence);
console.log([...sequence]);

// This is a copy-by-reference error: 2 pointers to the same array
let series = sequence;
console.log(series === sequence);

// Create a new empty array containing the spread elements of an existing array
series = [...sequence];
console.log(series === sequence);

// Math.max requires arguments and will not work on an array.
console.log(Math.max(sequence));
// Solution : use the spread operator
console.log(Math.max(...sequence));


// Spread operator on objects.
let film = { title: "North By Northwest", actor: "Cary Grant" };
let movie = { ...film };

// Augment an object with other properties
movie = { ...film, oscar: "Best Actor", year: 1957 }

// Using a spread operator on an array of objects 

let holiday = [{ city: "Paris", year: 2014 }, { city: "Oslo", year: 2018 }]

// This is a SHALLOW copy: a new array containing the same original objects.
let hols = [...holiday];

// This is a DEEP copy containing a new array of new objects.
hols = holiday.map(ob => ({ ...ob }));

holiday[0].year++;
hols[0].city = "Lisbon";

console.table(holiday);
console.table(hols);

// The REST parameter uses spread operator syntax in the function signature.
// Only 1 argument of this type can be defined in a function, no other arguments must follow it.
// It takes in multiple arguments.
// Inside the function it treats them as a single array.

// https://en.wikipedia.org/wiki/Slug_(publishing)

const makeSlug = (paper, ...words) => {

    const FILE_EXTENSION = ".html";
    return `<p>${paper}${words.join("-").trim().toLowerCase()}${FILE_EXTENSION}</p>`;

}

let story = makeSlug("https://www.nytimes.com/", "Big", "storm", "arrives", "Friday", "morning");

draw(story);