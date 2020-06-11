
const createPromise = (upMessage,downMessage) => {

	return new Promise((resolve, reject) => {

		const config = {
			outcome : Math.random() > 0.5,
			time : Math.floor(Math.random() * 1000)
		}

		drawJson(config);

		const result = () => config.outcome ? resolve(upMessage) : reject(downMessage);

		setTimeout(result, config.time);
	});

};

createPromise("score","miss")
	.then( s => {
		draw(s,true)
		return createPromise("promote","sack")
	})
	.then( s => draw(s,true))
	.catch( e => draw(e,false))


// Run immediately resolved promises from the browser console.

// new Promise( (resolve,reject) => reject("crash") ).catch( s => draw(s,false))
// new Promise( (resolve,reject) => resolve("done") ).then( s => draw(s,true))