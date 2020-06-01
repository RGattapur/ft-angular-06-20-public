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

  @HostListener('document:keyup', ['$event'])

  listenForKeys(e: KeyboardEvent) {
    this.sock.sendLetter(e.key)
  }

  constructor( private sock:SockService, private ws:WordService ) {}

  ngOnInit() {

    this.sock.word.subscribe(word => console.log(`WORD ${word}`))
    this.sock.players.subscribe( n => console.log(`PLAYERS ${n}`))

    this.ws.getWord();
  }

}
