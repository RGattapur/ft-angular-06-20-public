import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {MessagesService} from "./core/services/messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/project.css']
})
export class AppComponent {

  basket = [];

  constructor(private ms: MessagesService) { }

  ngOnInit() {
      // Subscribe to an Observable stream of messages from the service.
      this.ms.getChannel().subscribe( item => this.basket.push( item ));
  }
}