
// Run the transpiled code in a terminal window in this folder: node code.js

const draw = (ob:any) => {
    console.log(JSON.stringify(ob));
    console.log("_______________________________________________");
}

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

const update = (movie:Movie,update:Partial<Movie>) => ({...movie, ...update})

let award:Partial<Movie> = { oscar:true, earnings:45 };

let streaming:Partial<Movie> = { services:["Netflix","HBO"], earnings:64 }

taxi = update( update( taxi, award ), streaming ) ;

draw(taxi);

// =============================================================================

let demo:Readonly<Movie> = { name:"Test Card",services:[],oscar:false,earnings:0}

// TS compile-time error : demo.earnings = 0;
demo = update( demo, { earnings:24 }); // No error

draw(demo);

// =============================================================================

interface Detail{
    definition:string,
    artist:string
}

type Genre = "dubstep" | "funk" ;

const music : Record<Genre,Detail > = {
    dubstep: { 
        definition:"Sparse, syncopated rhythmic patterns",
        artist:"Pegboard Nerds"
     },
    funk : { 
        definition:"De-emphasizes melody and chord progressions",
        artist:"Bootsy Collins" 
    }
}

for ( const genre in music ) {
    console.log(`${genre.toUpperCase()} ${music[genre].definition}`)
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

type Volcanic = Pick<Mountain, "peak" | "volcano">;

const volcanicStatus : Volcanic[] = MOUNTAINS.map( m => ({ peak:m.peak, volcano:m.volcano }))

draw( volcanicStatus )

// =============================================================================

type Peak = Omit<Mountain, "volcano">;

const peaks : Peak[] = MOUNTAINS.map( m => {
    delete m.volcano;
    return m;
})

draw(peaks);

// =============================================================================

// makeCity( "Madrid",28 ) returns {"name":"Madrid","temp":28}

const makeCity = (name:string,temp:number) => ({ name,temp })

// Define a tuple containing the argument types used by makeCity.
// type CityInfo = [ string,number ];

// Generate a tuple containing [string,number] from the makeCity function arguments.
type CityArgs = Parameters<typeof makeCity>

// Generate a type from the makeCity function return type.
type CityReturn = ReturnType<typeof makeCity>

const sv:CityArgs = ["Seville",42];

// Call makeCity using the tuple sv. Use the ES6 rest-operator to break it into arguments. 
draw(makeCity( ...sv ));

const md:CityReturn = makeCity( "Madrid",28 );

draw(md);

// =============================================================================
