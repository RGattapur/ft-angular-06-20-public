import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute,GuardsCheckEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}


  // Programmatic navigation to routes.

  goRadio = station => null

  goBBC4 = () => null

  go17 = () => null

  goHome = () => null

}
