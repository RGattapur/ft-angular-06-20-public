
const drawJson = s => document.querySelector(".messages").innerHTML += `<p>${JSON.stringify(s)}</p>`;

const draw = (s,flag) => {
	let colour = flag ? "green" : "red"
	document.querySelector(".messages").innerHTML += `<p class="panel ${colour}">${s}</p>`;
}
