## Word Game

- Create a word game using an ES6 class.
- The game randomly picks an English phrase and displays it.

		The shop is CLOSED
		
- The Spanish translation of the word CLOSED is displayed: CERRADO with the order of the letters randomised.

		radorec
		
- The user has to click on the letters in the correct order.
- If they spell the word correctly, it changes colour to orange.

#### Data

- Define this data in a separate file and import it.

		const WORDS = [
			{ en:"The shop is CLOSED",es:"cerrado"},
			{ en:"The street is NOISY",es:"ruidoso"},
			{ en:"The book is HEAVY",es:"pesado"},
			{ en:"The code is COMPLEX",es:"complejo"},
			{ en:"The train is LATE",es:"tarde"}
		]

        
        
#### CSS styles

	*{
		padding:0;
		margin:0;
	}
	
	body{
		font-family: lato, helvetica;
		text-align: center;
		font-size: 1.5rem;
		margin:2rem auto;
	}
	
	.letters{
		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		margin:2rem;
	}
	
	.letter{
		padding:1rem;
		border:4px solid darkslategrey;
		margin:0.5rem;
		text-align: center;
		width:4rem;
		height:4rem;
		background-color: orangered;
		color:white;
		font-size: 2.5rem;
		border-radius: 50%;
		cursor: pointer;
		user-select: none;
	}
	
	.letter:hover{
		color:black;
	}
	
	.faded{
		opacity: 0.4;
		cursor: default;
	}
	
	.answer{
		font-size: 4rem;
	}
	
	.correct{
		color:orangered;
	}		
	
#### HTML

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <title>JS game</title>
	    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
	    <link rel="stylesheet" href="style.css">
	</head>
	<body>
	
	    <section class="game">
	
	        <section class="phrase"></section>
	
	        <section class="letters">
	            <!-- <p class="letter">A</p> -->
	        </section>
	
	        <section class="answer"></section>
	    </section>
	
	    <script src="language.js"></script>
	</body>
	</html>	

#### Code hints

- A method to shuffle order of an array

	  shuffle = ar => 
	  ar.sort( () => Math.random() > 0.5 ? 1 : -1 )	
		    
- What letter have I clicked on?

		e.currentTarget.textContent

- Code that prevents a letter from being clicked more than once.

		el.removeEventListener( "click" , someMethod )

- Make the letter look unselectable by adding CSS class:
			
	    el.classList.add( someClass )

- Code to add click handlers to every letter

		document.querySelectorAll(".letter")
		.forEach( letter => letter.addEventListener("click", this.select ))
			
#### Enhancements

- Add a NEXT WORD feature. 
- Clicking it displays another phrase from the array.