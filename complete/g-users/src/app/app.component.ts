
import { Component,OnInit } from '@angular/core';
import {DataService} from "./services/data.service" ;

import {Person} from "./types/person.type";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    USERS_API = {
      path : "https://randomuser.me/api/?results=",
      size : 40
    };

    users : Person[] = [];

    constructor( private ds:DataService ) {}

    ngOnInit() {
        this.ds.getData( `${this.USERS_API.path}${this.USERS_API.size}` )
        .subscribe(
          (data:any) => this.createUsers(data.results),
          (e : HttpErrorResponse ) => console.log( `[AppComponent error] ${e.statusText} ${e.url}` )
        )
    }

    createUsers( people ) {
      this.users = people.map( this.getPerson );
    }

    getPerson(p) {

      // let {first,last} = p.name;
      // let {city} = p.location;
      // let {medium:image} = p.picture;
      // let {email} = p;

      return {
        first : p.name.first,
        last : p.name.last,
        city : p.location.city,
        image : p.picture.medium,
        email : p.email
      }
    }

}
