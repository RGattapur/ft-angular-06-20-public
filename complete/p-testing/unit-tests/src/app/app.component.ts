
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CityService } from "./services/city.service" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  cities=[];
  observe: Observable<any>;

  constructor( private cityService:CityService ) {}

  ngOnInit() {

    this.observe = this.cityService.getData();

    // Use async pipe on observe in template.
    this.observe.subscribe( data => this.cities = data );
  }

  empty = () => this.cities = [];

  remove = city => this.cities = this.cities.filter( c => c !== city )

}
