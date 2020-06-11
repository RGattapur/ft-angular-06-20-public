import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Base } from "../types/base.type";

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['../app.component.css']
})
export class DrawComponent implements OnInit {

  dnaSequence:Base[] = [] ;

  constructor(private ms:MessageService) {}

  ngOnInit() {
    // Subscribe to an Observable stream of messages from the service.
    this.ms.getChannel().subscribe( s => this.dnaSequence.push(s))
  }

}
