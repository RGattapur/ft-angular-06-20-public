import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['../app.component.css']
})
export class DrawComponent implements OnInit {

  @Input() dnaSequence;

  ngOnInit() {
    console.log( "draw ngOnInit", this.dnaSequence )
  }

  // ngDoChanges does not pick up changes to the contents of the sequence array.
  // Create a new copy of sequence in app.component.ts to trigger ngDoChanges here.
  
  ngDoCheck() {
    // console.log( JSON.stringify( this.dnaSequence ))
  }
}
