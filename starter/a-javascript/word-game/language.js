
const WORDS = [
    { en:"The shop is CLOSED",es:"cerrado"},
    { en:"The street is NOISY",es:"ruidoso"},
    { en:"The book is HEAVY",es:"pesado"},
    { en:"The code is COMPLEX",es:"complejo"},
    { en:"The train is LATE",es:"tarde"}
]

class Game{

    constructor( words ) {}

    shuffle = ar => ar.sort( () => Math.random() > 0.5 ? 1 : -1 )

    // Display the English phrase
    // document.querySelector(".phrase").innerHTML = this.word.en;

    // Add a click handler to every letter
    // document.querySelectorAll(".letter").forEach( letter => letter.addEventListener("click", this.select ))

    // Draw letter
    // document.querySelector(".letters").innerHTML += `<p class="letter">${l}</p>`;
    
    // Text inside the letter clicked on
    // e.currentTarget.textContent

    // Show answer as correct.
    // document.querySelector(".answer").classList.add("correct")

}

const game = new Game( WORDS )