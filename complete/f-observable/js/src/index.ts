
import { of as ObservableOf,from, Subject, interval as ObservableInterval } from 'rxjs';
import { filter,map,reduce,tap,take } from 'rxjs/operators';

import './styles.css';

const randomColour = () => "#" + Math.floor(Math.random()*16777215).toString(16)

const drawSquare = (s:any,c:string) => document.querySelector(".demo").innerHTML 
+= `<p style="background-color:${c}">${s}</p>`

const drawCircle = (s:any,c:string) => document.querySelector(".demo").innerHTML 
+= `<p class="circle" style="background-color:${c}">${s}</p>`

const debug = (ob:any) => console.log(JSON.stringify(ob))

// ===================================================================

// OF creates an Observable from an array of data.
// Use the spread operator to pass in multiple arguments.

const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const letters = ObservableOf(...alphabet)
.pipe(
	take(20),
	map( l => l.toUpperCase())
)

letters.subscribe(
	l => drawSquare(l,randomColour()),
	e => console.error(e),
	() => drawSquare("@","white")
)

// ===================================================================

ObservableInterval(50)
	.pipe(take(26),map(v => String.fromCharCode(v + 97)))
	.subscribe(v => drawSquare(v,"orangered"));	

// ===================================================================

const fourBases = [ 
	{letter:"A",colour:"red"},
	{letter:"G",colour:"orange"},
	{letter:"C",colour:"blue"},
	{letter:"T",colour:"sienna"}
]

const pickRandom = () => fourBases[ Math.floor( Math.random() * fourBases.length )]

ObservableInterval(250)
	.pipe(
		take(10),
		map( n => pickRandom())
		)
	.subscribe( base => drawCircle( base.letter, base.colour ))

// ===================================================================

const europe = [
	{ name:"Oslo", nation:"Norway", temp:-4, price:125 },
	{ name:"Athens", nation:"Greece", temp:12, price:75 },
	{ name:"Copenhagen", nation:"Denmark", temp:-2, price:100 },
	{ name:"Lisbon", nation:"Portugal", temp:17, price:120 }
]

from( europe )
.pipe(
    tap( city => debug(city)),
    map( city => city.price ),
    reduce((total,price) => total+price,0 )
)
.subscribe(n => drawSquare(n,"yellow"))

// ===================================================================

const subj = new Subject();

const upper = subj.subscribe( l => drawSquare(l,"gold"))

const lower = subj.pipe(map((l:string) => l.toUpperCase()))
.subscribe( l => drawCircle(l,"orangered"))

document.body.addEventListener( "keypress" , (e) => {
	if(e.key === "z") {
		lower.unsubscribe();
		upper.unsubscribe();
	} else {
		subj.next(e.key)
	}
})

// ===================================================================

