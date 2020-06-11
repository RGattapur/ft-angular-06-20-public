import { Component,HostListener } from '@angular/core';
import { SockService } from "./services/sock.service";
import { WordService } from './services/word.service';
import { Word } from './data/word.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answer:string = "";
  flag:boolean = false;

  word:Word;

  @HostListener('document:keyup', ['$event'])

  listenForKeys(e: KeyboardEvent) {
    this.addLetter(e.key)
  }

  constructor( private sock:SockService, private ws:WordService ) {}

  ngOnInit() {

    this.sock.word.subscribe(word => this.updateWord(word))
    this.sock.players.subscribe( n => this.flag = (Number(n)=== 2))

    this.word = this.ws.getWord();
  }

  addLetter(letter) {
    this.flag ? this.sock.sendLetter(letter) : null;
  }

  updateWord(word) {
    this.answer = word.toString()
    if (this.answer.toLowerCase() === this.word.es) {
      this.word.showEs = this.word.es
    }
  }
}
