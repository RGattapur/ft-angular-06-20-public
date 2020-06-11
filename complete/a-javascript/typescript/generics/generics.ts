
// Typescript GENERICS create reusable code by requiring consistent types without
// saying what the specific type is. The range of types can be constrained.

// ---------------------------------------------------------------------------

// tsc -w runs the Typescript compiler in watch mode. 
// It reads configuration settings from tsconfig.json
// Run the transpiled JS code in NODE in a 2nd terminal window
// node code.js

// ---------------------------------------------------------------------------

type Genre = "COUNTRY" | "METAL" | "BLUES" | "JAZZ" | "FOLK" ;

interface Media{
    artist:string,
    title:string
}

interface Song extends Media{
    emmy:boolean,
    genre:Genre
}

interface Film extends Media{
    released:number,
    oscar:boolean
}

interface List<T> {
    addItem( item:T ) : void
    // addMany( items:T[]) : void
}

// ---------------------------------------------------------------------------

const records : Song[] = [
    { artist:"Thrash Digit",title:"Classes Rock",   emmy:true,genre:"METAL" },
    { artist:"Howling Wilf",title:"Closure Blues",  emmy:true,genre:"BLUES" },
    { artist:"Dylan Beard", title:"Artisan Code",   emmy:true,genre:"FOLK" },
    { artist:"Herbie Type", title:"Generic Melody", emmy:true,genre:"JAZZ" }       
]

const movies : Film[] = [
    { artist:"Alfred Hitchcock",title:"North By North West", released:1958, oscar:true },
    { artist:"Martin Scorsese",title:"Taxi Driver", released:1984, oscar:false }  
];

// ---------------------------------------------------------------------------

class Catalog<T extends Media> implements List<T> {

    private items: T[] = [];

    constructor() {}

    addItem = (item:T) => {
        // let artist = item.artist.toUpperCase();
        this.items.push( {...item }); 
    }

    // (many:Array<T>)
    addMany = (many:T[]) => {
        this.items = [...this.items, ...many ];
        this.debug();
    }

    // contains = (newItem:T) => this.items.find( item => JSON.stringify( item ) === JSON.stringify(newItem))

    debug = () => console.table(this.items);

}

// ---------------------------------------------------------------------------

// This version works with primitives (strings,numbers) by removing the constraint from the class generic type

class SimpleCatalog<T> implements List<T> {

    private items: T[] = [];

    constructor() {}

    addItem = (item:T) => this.items.push( item );

    addLots = (many:T[]) => {
        this.items = [...this.items, ...many ];
        this.show();
    }

    show = () => console.table(this.items);
}

// ---------------------------------------------------------------------------

let songs:Catalog<Song> = new Catalog<Song>();
let track:Song = { artist:"Dwayne Coder",title:"Lonesome Variable",emmy:false,genre:"COUNTRY" }
songs.addItem( track );
songs.addMany( records );
// ---------------------------------------------------------------------------
let films:Catalog<Film> = new Catalog<Film>();
films.addMany( movies );

// ---------------------------------------------------------------------------

const vowels : Array<string> = [ "A","E","I","O","U" ]; 
let alphabet:SimpleCatalog<string> = new SimpleCatalog<string>();
alphabet.addItem("Z");
alphabet.addLots( vowels );

// ---------------------------------------------------------------------------

const olympicYears : number[] = [ 1964, 1968, 1972, 1976, 1980 ];
let years:SimpleCatalog<number> = new SimpleCatalog<number>();
years.addItem(2012);
years.addLots(olympicYears);

// ---------------------------------------------------------------------------


