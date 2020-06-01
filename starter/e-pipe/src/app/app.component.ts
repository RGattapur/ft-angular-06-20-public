
import {Component} from '@angular/core';
import {europe} from "./data/europe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  europe = [];

  ngOnInit() {
    this.europe = europe;
  }

}

