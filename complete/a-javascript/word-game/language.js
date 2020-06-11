
const WORDS = [
    { en:"The shop is CLOSED",es:"cerrado"},
    { en:"The street is NOISY",es:"ruidoso"},
    { en:"The book is HEAVY",es:"pesado"},
    { en:"The code is COMPLEX",es:"complejo"},
    { en:"The train is LATE",es:"tarde"}
]

class Game{

    constructor( words ) {
        this.words = this.shuffle(words);
        this.nextWord();
        this.answer = "";
    }

    shuffle = ar => ar.sort( () => Math.random() > 0.5 ? 1 : -1 )

    nextWord() {
        if( this.words.length ) {
            this.word = this.words.shift();
            this.draw()
        }
    }

    draw() {
        document.querySelector(".phrase").innerHTML = this.word.en;
        this.drawLetters();
    }

    drawLetters() {
       let letters = this.shuffle( this.word.es.split(""));
       letters.forEach( this.drawLetter );
       document.querySelectorAll(".letter").forEach( letter => letter.addEventListener("click", this.select ))
    }

    drawLetter( l ) {
        let letter = `<p class="letter">${l}</p>`
        document.querySelector(".letters").innerHTML += letter;
    }

    select = (e) => {
        
        let el = e.currentTarget;
        this.answer = this.answer + e.currentTarget.textContent;
        el.removeEventListener( "click" , this.select )
        el.classList.add("selected")
        document.querySelector(".answer").innerHTML = this.answer;

        if( this.answer === this.word.es ) {
            document.querySelector(".answer").classList.add("correct")
        }

    }
}

const game = new Game( WORDS )