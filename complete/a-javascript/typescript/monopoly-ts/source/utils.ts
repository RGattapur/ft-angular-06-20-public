
const draw = (s:any,flag:boolean) => {
	let colour = flag ? "green" : "red"
	document.querySelector(".messages").innerHTML += `<p class="panel ${colour}">${JSON.stringify(s)}</p>`;
}

interface Move{
	step:string,
	action:string
}

export {draw,Move}