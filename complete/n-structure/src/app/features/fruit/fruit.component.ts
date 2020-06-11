import { Component, OnInit } from '@angular/core';
import { DataService } from "../../core/services/data.service" ;
import { MessagesService } from "../../core/services/messages.service" ;

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['../../styles/project.css']
})

export class FruitComponent implements OnInit {

    path : string = "assets/json/fruit.json" ;
    fruit:any = [];

    constructor( private ds:DataService, private ms:MessagesService) {}

    ngOnInit() {
      this.ds.getData( this.path ).subscribe( data => this.fruit=data);
    }

    select = (f) => this.ms.sendMessage(f)

}
