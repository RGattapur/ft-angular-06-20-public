import { Component, OnInit, Input } from '@angular/core';
import { ColourService } from '../services/colour.service';
import { Subscription,Observable } from "rxjs";
import { Circle } from "../types/type.circle";

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['../app.component.css']
})

// The commented code here uses an ASYNC PIPE.
// The pipe is used in the template: *ngFor="let c of circles | async"
// The pipe automatically subscribes to the Observable.
// The advantage of this approach is that the pipe automatically unsubscribes from
// the observable if DrawComponent is destroyed.

// The code shown here manually subscribes to the Observable
// It saves a reference to the observable and unsubscribes on the OnDestroy method.

export class DrawComponent implements OnInit {

  subs:Subscription;

  // circles: Observable<Circle[]> ;
  circles:Circle[] = [];

  constructor( private cs:ColourService ) {}

  // ngOnInit() {
  //   this.circles = this.cs.getCircles();
  // }

  ngOnInit() {
    this.subs = this.cs.getCircles().subscribe( data => this.circles = data );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    console.log("DrawComponent ngOnDestroy");
  }

}
