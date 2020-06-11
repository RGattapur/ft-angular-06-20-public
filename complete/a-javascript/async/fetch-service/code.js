
// ------------------------------------------------------------------
const draw = (s) => document.querySelector(".demo").innerHTML += s;
const drawJson = (s) => document.querySelector(".demo").innerHTML = JSON.stringify(s);
// ------------------------------------------------------------------
class DataService {

	async getRequest( path ){

	  const response = await fetch(path);

	  if(response.ok) {
		return await response.json()
	  } else {
		return this.handleErrors( response );
	  } 
	}

	handleErrors = (response) => {

		const {status, statusText,ok,url} = response;
		return Promise.reject({ status, statusText, ok, url });
	}

}
// ------------------------------------------------------------------	

const shuffle = (list) => [...list].sort(() => Math.random() - 0.5);

const getCity = () => {

	let ds = new DataService();

	ds.getRequest( "http://localhost:4000/europe")
		.then( data => shuffle(data))
		.then( data => ds.getRequest(`http://localhost:4000/${data[0].code}`))
		.then( data => shuffle(data))
		.then( data => draw(`<p>${data[0].city}<span>${data[0].temp}</span></p>`))
		.catch( error => drawJson(error))

}

document.querySelector(".city").addEventListener("click" , getCity )


// ------------------------------------------------------------------
/*
function handleErrors(response) {
	if (response.ok) {
		return response.json();
	} else {
		let { status, statusText, ok, url } = response;
		return Promise.reject({ status, statusText, ok, url });
	}
}

fetch( "http://localhost:4000/europe" )

	.then(response => handleErrors(response))
	.then(data => fetch(`http://localhost:4000/${data[0].code}`)
	.then(response => handleErrors(response))
	.then(data => draw(data))
	.catch(e => console.log(e)))
*/
// ------------------------------------------------------------------

/*
- A Promise is initially in a PENDING state.
- It changes state ONCE to FULFILLED or REJECTED.
- Settled/Resolved means 1 of (Fulfilled/Rejected)
- async/await provides syntactic sugar for Promises.

async function getStuff() {}
const getStuff = async () => {}
*/

// ------------------------------------------------------------------
