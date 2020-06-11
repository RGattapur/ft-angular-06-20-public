import { Component, OnInit } from '@angular/core';
import { DataService } from "../../core/services/data.service" ;
import { MessagesService } from "../../core/services/messages.service" ;


@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['../../styles/project.css']
})

export class VegetablesComponent implements OnInit {

  path : string = "assets/json/vegetables.json" ;
  fruit:any = [];

  constructor( private ds:DataService, private ms:MessagesService) {}

  ngOnInit() {
    this.ds.getData( this.path ).subscribe( data => this.fruit=data);
  }

  select = (f) => this.ms.sendMessage(f)

}
