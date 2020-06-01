
// Run the transpiled code in a terminal window in this folder: node code.js

const draw = (ob:any) => {
    console.log(JSON.stringify(ob));
    console.log("_______________________________________________");
}

// =============================================================================

// Using a Typescript PARTIAL to change an object of a specific type 
// in a controlled way.

interface Movie{
    name:string,
    services:string[],
    oscar:boolean,
    earnings:number
}

let taxi:Movie = {
    name:"Taxi Driver",
    services:[],
    oscar:false,
    earnings:0
}

// { oscar:true, earnings:45 };
// { services:["Netflix","HBO"], earnings:64 }

// =============================================================================

// Making a type readonly.

let demo:Movie = { name:"Test Card",services:[],oscar:false,earnings:0}

// =============================================================================

// Use a Typescript RECORD to create objects that must contain specific property names.
// Each property shares the same object-structure.

const music = {
    dubstep: { 
        definition:"Sparse, syncopated rhythmic patterns",
        artist:"Pegboard Nerds"
     },
    funk : { 
        definition:"De-emphasizes melody and chord progressions",
        artist:"Bootsy Collins" 
    }
}


// =============================================================================

const MOUNTAINS = [
    { peak:"Mount Everest", range:"Himalayas", height:8848, ranking:1, volcano:false},
    { peak:"Mount Kilimanjaro", range:"Eastern Rift", height:5885, ranking:4, volcano:true},
    { peak:"Vinson Massif", range:"Sentinel Range", height:4892, ranking:8, volcano:false},  
    { peak:"Bogda Peak", range:"Bogda Shan", height:4122, ranking:17, volcano:true}      
]

interface Mountain{
    peak:string,
    range:string,
    height:number,
    volcano:boolean,
    ranking:number
}

// =============================================================================

// Use Typescript PICK to create a new type from the Mountain type.
// It contains a specific subset of fields.

// =============================================================================

// Use Typescript OMIT to create a new type from the Mountain type.
// It contains all the fields except the specified list.

// =============================================================================

// Use Typescript PARAMETERS to create a new type. 
// It works that out from the function argument types.

// Use Typescript RETURNTYPE to create a new type.
// It works this out from the function return type.

// makeCity( "Madrid",28 ) returns {"name":"Madrid","temp":28}

const makeCity = (name,temp) => ({ name,temp })

// =============================================================================
