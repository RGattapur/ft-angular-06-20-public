
// Run the transpiled code in a terminal window in this folder: node code.js

// =============================================================================
// A PARTIAL defines a type which contains a subset of any of the properties
// in the original type. 

interface Movie{
    name:string,
    services:string[],
    oscar:boolean,
    earnings:number
}

const changeMovie = (m:Movie,changes:Partial<Movie>) => ({...m, ...changes})

const taxi:Movie = {
    name:"Taxi Driver",
    services:[],
    oscar:false,
    earnings:0
}

const award:Partial<Movie> = { oscar:true, earnings:45 };

const streaming:Partial<Movie> = { services:["Netflix","HBO"], earnings:64 }

const film = changeMovie( changeMovie( taxi, award ), streaming ) ;

console.log( "\nPARTIAL" , JSON.stringify(film));

// =============================================================================

// PICK and OMIT define a subset of an existing type/interface

interface Mountain {
    peak:string,
    range:string,
    height:number,
    volcano:boolean,
    ranking:number
}

const MOUNTAINS:Mountain[] = [
    { peak:"Mount Everest", range:"Himalayas", height:8848, ranking:1, volcano:false},
    { peak:"Mount Kilimanjaro", range:"Eastern Rift", height:5885, ranking:4, volcano:true},
    { peak:"Vinson Massif", range:"Sentinel Range", height:4892, ranking:8, volcano:false},  
    { peak:"Bogda Peak", range:"Bogda Shan", height:4122, ranking:17, volcano:true}      
]

type Volcanic = Pick<Mountain, "peak" | "volcano">;

type Peak = Omit<Mountain, "volcano">;

const volcanicPeaks : Volcanic[] = MOUNTAINS.map( m => ({ peak:m.peak, volcano:m.volcano }))

// Use destructuring and rest operator to return objects WITHOUT the volcano property.

const peaks : Peak[] = MOUNTAINS.map(({ volcano,...peak}) => peak);

console.log( "\nPICK" , JSON.stringify(volcanicPeaks));
console.log( "\nOMIT" , JSON.stringify(peaks));

// =============================================================================

const makeCity = (name:string,temp:number) => ({ name,temp })

// TS Parameters function creates a tuple containing [string,number] from the makeCity function arguments
type CityArgs = Parameters<typeof makeCity>

// Work out new type based on return type from function makeCity.
type CityReturn = ReturnType<typeof makeCity>

const svArgs:CityArgs = ["Seville",42];
const seville = makeCity( ...svArgs );

console.log( "\nPARAMETERS" , JSON.stringify(seville));

const madrid:CityReturn = makeCity( "Madrid",28 );

console.log( "\nRETURNTYPE" , JSON.stringify(madrid));

// =============================================================================

// A Typescript RECORD uses the values in the Directions UNION as keys in a new type called Path.
// The rectangle object is very strongly typed: it must have all these keys and each must be an object with a specific shape.

type Directions = "left" | "right" | "up" | "down" ;

interface Walk{
    steps:number, 
    pause:number
}

type Path = Record<Directions,Walk>

const rectangle:Path = {
    right:{ steps:10,pause:1 },
    down:{ steps:4, pause:0 },
    left:{ steps:10, pause:1 },
    up:{ steps:4, pause:0 }
}

for ( const side in rectangle ) {
    console.log(`${side} ${rectangle[side].steps}`)
}

// =============================================================================
