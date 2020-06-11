#### Setup

- Globally install Typescript using NPM.

		npm install -g typescript
		
- Create a folder that contains a code.ts Typescript file. 
- Create a Typescript configuration file named tsconfig.json in the same folder.

		{
			"compilerOptions": {
			"target": "es6"
			},
			"include":[ 
				"*.ts"
			],
		}

- Run the Typescript compiler in watch mode from the terminal

		tsc -w

- Open a 2nd terminal window in the same folder. Run the transpiled code in Node.

		node code.js
		
#### Reasons to use Typescript		

- An optional type system for JS
- More understandable self-documenting code.
- Catch errors at compile time, not runtime
- TS is a compile-time technology. Types do not exist at run-time.

- Generates compile-time errors EARLY in terminal inside editor (Visual Studio)
- Self-documenting code that describes your intentions to you/team.

- Spot errors EARLIER at compile-time in the editor.,
- Your code communicates its intent/meaning more clearly,
- Encourages a workflow where code is always working,
- Allows a gradual migration path from JS to TS in projects,
- Optional. You do not have to define types, you can use any.,
- No run-time performance overhead: types, interfaces are erased at run-time. But slows build time.

#### Type inference

- Let TS infer types for you. 
- Keep explicit types to a minimum, e.g. complex types.

#### What is a type?

- A TYPE is a set of possible values (and range of operations on that set.)
- Boolean variables can contain only 2 possible values.
- A string variable can contain an infinite set of characters.
- The loosest type is any. It can contain any value.


#### Variables

- These statements define simple TS types.
- These are DECLARED types. They do not exist at runtime.
		
		let flag:boolean = false;
		let city:string = "Oslo";
		let year:number = 2020;
		let book:any = [ "Sally Rooney","Normal People" ];
		book = { author:"Sally Rooney", title:"Normal People"};
		
- However, once book has a type of ANY, it can be assigned to variables of specific types without throwing an error.

		year = book; // No TS error.
		
#### Arrays

- Arrays can be defined in 2 ways

		let towns : string[] = [];
		let villages : Array<string> = []	
		
- This will throw a compile-time error, but no run-time error. Why?

		towns.push(45);
		
- If an array contains 4 elements, this throws a run-time error but no compile-time error. Why?

		console.log(villages[45].toUpperCase())

- Ensure every element of an array has same type. 
		
#### Objects

- Objects can be typed using inline syntax. 

		let person : { name:string, age:number } 
		= { name:"Sigmund Freud" , age:64 };			
		
#### Functions

- Both arguments and return types can be defined

		const double = (n:number) : number => n*2;	

- Function arguments can use custom types or interfaces. 

		type Film = {
			name:string,
			studio:string
		}

		const show = ({name,studio}:Film) => `${name} was made at ${studio}`

		
#### Interfaces, Types

- Custom types can be defined as Interfaces or Types

		interface City{
			name:string,
			temp:number
		}	
		
- An object can be typed using the Interface.

		let sv:City = { name:"Seville",temp:40 };
				
- We can define optional fields in the Interface using "?"

		temp?:number
		
		let os:City = { name:"Oslo" };
		
- We can define read only fields in the Interface.	

		readonly name:string
		
		os.name = "Copenhagen"; // Compile-time error.
		
- We can use type assertion to allow object properties to be defined over multiple lines.
- The AS keyword is a type operation. It does not exist at run-time.

		let sv:City = {} as City;
		sv.name = "Seville";
		sv.temp = 40;

- An array of objects can be typed.

		let holiday:City[] = [ os,sv ];
		
- We cannot test a custom type at run-time. It does not exist.

		console.log( sv instanceof City);

#### Differences between Interface and Type

- Interfaces with the same name in the same scope are merged.
- Types can be defined using simple types. Interfaces always define object-like structures.


#### Complex types

- We can define a custom type as an intersection of two interfaces.

		type CountryCodes = "PT" | "ES" | "FR" | "IT" | "UK" ;
		
		interface Place{
		  readonly name:string,
		  temp?:number
		}
		
		interface Capital{
		  population:number,
		  code?:CountryCodes
		}
		
		type City = Place & Capital;		
		
- Or we can use inheritance.

		interface Capital extends Place{
		    population:number,
		    code:string
		}
		
		let md:Capital = { name:"Madrid" } as Capital;
		md.population = 1.8;
		
		let os:Capital = { name:"Oslo",temp:24, code:"NO",population:1.4 }
		
		let holiday:Capital[] = [ md,os ]
		
#### Structural typing

- Structural typing : function draw allows any type with matching properties. It does not match by name.
- Typescript will allow arguments with a different name and additional properties.

		interface Boat{
			speed:number,
			type:string
		}

		interface Flight{
			speed:number,
			type:string,
			airport:string,
			duration:number
		}

		const draw = (b:Boat) => `This ${b.type} travels at a speed of ${b.speed}`

		const fishingBoat:Boat = { speed:10, type:"Trawler"};

		const flightSpain:Flight = { speed:2000, type:"Boeing 747", airport:"Gatwick", duration:2.4 };

		draw( fishingBoat )
		draw( flightSpain );

#### Function signatures

- We can define the shape of a functions arguments and return value as a type.

		type PairFn = (a:number, b:number) => number;
		
		const add:PairFn = (x,y) => x+y;	
		const multiply:PairFn = (x,y) => x*y;		
		const divide:PairFn = (x,y) => x/y;	
		const subtract:PairFn = (x,y) => x-y;
		
#### Generics

	class List<T> {
	
	    private items = [];
	
	    add = (item:T) => this.items.push( item );
	    remove = ():T => this.items.shift()
	}

	let fruit = new List<string>();
	fruit.add("apples");
	fruit.remove();
	
	let lottery = new List<number>();
	lottery.add(41);
	lottery.remove();		
	
- Using functions

		const func = <T>(a:T):T => a ;
		
		func<string>("Hello");
		func<number>(4)
		
		const funk = <T,U>(a:T,b:U):U => b ;
		
		funk<string,number>("Seville",40);
		funk<number,string>(40,"Seville");