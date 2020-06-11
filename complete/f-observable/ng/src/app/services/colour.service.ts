import { Injectable } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { map,take } from 'rxjs/operators';
import { Circle } from "../types/type.circle";

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  private colours:string[] = [ "red","green","blue","orange" ];
  private circles:Circle[] = [];

  constructor() {}

  getCircles = () : Observable<Circle[]> => interval( 1000 ).pipe( map( n => this.addColour()));

  addColour = () => {
    this.colours.unshift(this.colours.pop());
    this.circles.push( { colour:this.colours[0], id:Date.now() });
    this.debug();
    return this.circles;
  }

  debug = () => console.log(JSON.stringify( this.circles ))

}
