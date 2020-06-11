
import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import {topics} from "./topics/data";
import {Topic} from "./topics/topic.type";

// Decorator : TS annotation : adding metadata to a class
@Component({
  selector: 'about-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

// ES6 class : decorated with Component decorator
class AppComponent implements OnInit{

  names:string[] = [];
  topics:Topic[] = [];

  heading:string = "About Angular";
  version:number = 1.04;

  ngOnInit() {
    // Randomly sort the topics.
    this.topics = topics.sort((a,b) => (Math.random() - 0.5))
  }

  selectPanel(e) {
    // Alternative approach: check for duplicates here : this.names.includes( file )
    this.names.push( e.name )
  }

}

export { AppComponent }

