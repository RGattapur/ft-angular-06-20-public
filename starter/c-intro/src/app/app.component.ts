
import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import {topics} from "./topics/data";

@Component({
  selector: 'about-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

class AppComponent{

  constructor() {
    console.table(topics)
  }
}

export { AppComponent }

