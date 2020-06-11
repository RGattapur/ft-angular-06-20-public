
import {draw,Move} from "./utils";

const moves:Move[] = [
	{ step:"A", action:"Collect $200" }, 
	{ step:"B", action:"Pay bill" },
	{ step:"C", action:"Buy Mayfair" }, 
	{ step:"D", action:"Go straight to jail. Do not pass go." } 
]
 
const GAMEOVER = { step:"Z", action:"Bankrupt" }

const monopoly = (move:Move) => {

	return new Promise<Move>((resolve,reject) => {
		let time = Math.floor(Math.random() * 1000);

		if( Math.floor(Math.random() * 5) === 4) {
			reject(GAMEOVER)
		}

		setTimeout(() => resolve(move),time);
	});

};

// The moves will be displayed in a random order 

/*
const playGame = () => {
	for (let m of moves) {
		monopoly( m )
			.then( m => draw(m,true))
			.catch( e => draw(e,false))
	}
}
*/

// Using async await we can wait for each move to complete and display them in the original order.

const playGame = async () => {

	for (let m of moves) {
		let play = await monopoly( m )
		draw(play,true)
	}
}

playGame().catch(e => draw(e,false));