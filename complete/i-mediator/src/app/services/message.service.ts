import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Base } from '../types/base.type';

// To make messaging local to just app.component and phrase.component:
// Remove this code which defines this message within app.module.ts
@Injectable({
  providedIn: 'root'
})
// Add a provider in app.component.ts
// providers:[MessageService]

export class MessageService {

  private channel = new Subject<Base>();

  constructor() {}

  sendMessage(s: any) {
    this.channel.next(s);
  }

  getChannel() {
    return this.channel.asObservable()
  }
}
