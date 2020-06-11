import { Injectable } from '@angular/core';
import {WORDS} from "../data/words";
import {Word} from "../data/word.type";

@Injectable({
  providedIn: 'root'
})

export class WordService {

  word:Word;

  constructor() {
    let word = WORDS.find( w => w.day === this.getDayOfWeek())
    let showEs = this.shuffle( word.es.split("")).join("");
    this.word = {...word, showEs:showEs }
    console.table(this.word)
  }

  getWord = () => this.word;

  private shuffle = ar => ar.sort( () => Math.random() > 0.5 ? 1 : -1 );

  private getDayOfWeek = () => new Intl.DateTimeFormat('en-GB', { weekday:"long"}).format(new Date()).toLowerCase()
}
