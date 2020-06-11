
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

const demo = async () => {

	let message;

	message = await createPromise("score","miss");
	draw(message,true);

	message = await createPromise("promote","sack");
	draw(message,true);
}

demo().catch(e => draw(e,false));

/*
PROMISE-ALL ========================================

const pA = createPromise("sun","rain");

const pB = createPromise("summer","winter");

Promise.all([ pA,pB ])
	.then( message => draw(message,true))
	.catch(e => draw(e,false));
*/



