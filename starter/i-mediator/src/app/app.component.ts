import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sequence = [] ;

  handleBase( base ) {
    this.sequence.push( { ...base, code:base.code.toUpperCase() } )
  }
}
