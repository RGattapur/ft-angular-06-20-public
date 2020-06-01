import { Component } from '@angular/core';

import { FruitVeg } from "./types/type.fruitveg" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fruitVeg : FruitVeg[] = [
    { name:"Carrot", colour:"orangered" },
    { name:"Radish", colour:"firebrick" },
    { name:"Sweet Potato", colour:"purple" },
    { name:"Broccoli", colour:"green" },
    { name:"Banana", colour:"gold" },
  ]

}
