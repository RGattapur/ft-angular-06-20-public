
// Simple types ===================================================

// Type inference: you do not need to declare every simple type using TS
// An editor like Visual Studio Code will infer simple types.

let flag:boolean = false;
let city:string = "Oslo";
let year:number = 2020;
let book:any = [ "Sally Rooney","Normal People" ];
book = { author:"Sally Rooney", title:"Normal People"};

// book has a type of ANY, 
// It can be assigned to other variables without throwing an error.
year = book; 

// Arrays =========================================================

const letters:string[]=["A"];
// Alternative syntax
// const letters : Array<string> = []	

// This throws a compile-time error, but no run-time error.
// letters.push(4);

// No compile-time error, but throws a run-time error.
letters[45].toUpperCase();


// Objects =========================================================

// The type of an object can be typed using inline syntax.

const person : { name:string, age:number } = { name:"Sigmund Freud" , age:64 };	

// Types or interfaces provide a way to create
// named custom types that are a composition of simple types.

// Interfaces ======================================================

// type City = {}
interface City{
    name:string,
    temp:number
}	

const sv:City = { name:"Seville",temp:40 };

// Tell TS the type rather than let it infer it.
const md:City = {} as City;
md.name = "Madrid";
md.temp = 28;

interface Nation{
    name:string,
    capital?:string
}	

const italy:Nation  = { name:"Italy", capital:"Rome"};

const norway:Nation = { name:"Norway" };
norway.capital = "Oslo";

const europe : Nation[] = [ italy, norway ];

// Differences between Interface and Type =======================

// Interfaces with the same name in the same scope are merged.

interface Phone{
    brand:string
}

interface Phone{
    os:string
}

const iPhone10 : Phone = { brand:"Apple", os:"iOS10.5.1"}

// Types can be defined using simple types. 
// Interfaces always define object-like structures.

// This type is a UNION of possible alternatives. 
type Direction = "left" | "right" | "up" | "down" ;

const move:Direction = "up";

// Combining types and interfaces

interface Movie{
    director:string,
    title:string
}

/*
Define a type which is an intersection of 2 interfaces.

interface Award{
    category:string,
    year:number
}

type Oscar = Movie & Award;
*/

// Or use inheritance on 2 interfaces.

interface Oscar extends Movie{
    category:string,
    year:number
}

const jaws:Oscar = {
    director:"Speilberg",
    title:"Jaws",
    category:"Best Screenplay",
    year:1984
}

// Structural typing : TS works with any type that matches in shape.

interface Boat{
    speed:number,
    type:string
}


const draw = (b:Boat) => `This ${b.type} travels at a speed of ${b.speed}`

// Same function refactored using destructuring of function signature 
const _draw = ({speed,type}:Boat) => `This ${type} travels at a speed of ${speed}`

const ft:Boat = { speed:10, type:"Fishing Trawler"};

draw(ft);

interface Animal{
    speed:number,
    type:string
}

const lp:Animal = { speed:24, type:"Leopard"};

// No error here: the shape of both types matches but names differ.
draw(lp);

// Define type for function signatures ==================================

type Pair = (a:number, b:number) => number;
		
const add:Pair = (x,y) => x+y;	
const multiply:Pair = (x,y) => x*y;		
const divide:Pair = (x,y) => x/y;	
const subtract:Pair = (x,y) => x-y;


// ======================================================================

