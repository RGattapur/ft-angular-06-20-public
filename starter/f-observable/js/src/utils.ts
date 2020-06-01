
// draw("Hello","green");

const draw = (s:any,c:string) => {
	let el = document.querySelector(".demo")
	el.innerHTML += `<p style="background-color:${c}">${s}</p>`
}

const randomLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65)

const europe = [
	{ name:"Oslo", nation:"Norway", temp:-4, price:125 },
	{ name:"Athens", nation:"Greece", temp:12, price:75 },
	{ name:"Copenhagen", nation:"Denmark", temp:-2, price:100 },
	{ name:"Lisbon", nation:"Portugal", temp:17, price:120 }
]

const fourBases = [ 
	{letter:"A",colour:"red"},
	{letter:"G",colour:"orange"},
	{letter:"C",colour:"blue"},
	{letter:"T",colour:"sienna"}
]

export {draw,randomLetter,fourBases,europe}