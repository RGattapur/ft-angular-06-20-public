
import { Component, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as Redux from 'redux'
import { MovieStore } from './redux/redux.store';
import { Film } from './redux/redux.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    constructor() {}

}
