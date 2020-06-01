import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable,Subject } from 'rxjs/';

// this._subject.pipe(startWith("awesome"))

@Injectable({
  providedIn: 'root'
})
export class SockService {

    private socket;
    private socketServer :string = 'http://localhost:8000';

    public word = new Subject<string[]>()
    public players = new Subject<number[]>()

    constructor() {

        this.socket = io( this.socketServer );

        this.socket.on('word', word => this.word.next(word))
        this.socket.on('players', n => this.players.next(n))

    }

    sendLetter(l) {
      this.socket.emit('letter', l);
    }

}
