
import { HostBinding,Input,Directive,ElementRef,Renderer2,HostListener,OnInit, Output, EventEmitter } from '@angular/core';

import { FruitVeg } from "../types/type.fruitveg" ;

// The directive selector uses CSS custom data-attribute selector syntax.

// <p single [item]="fv" *ngFor="let fv of fruitVeg" (select)="addBasket($event)">{{ fv.name }}</p>

@Directive({
  selector: '[single]'
})
export class SingleDirective implements OnInit {

  // This binding attaches class="selected" to the DOM-element this directive is attached to,
  // if the boolean variable state becomes true.

  @HostBinding('class.selected') state: boolean = false;

  @Input() item:FruitVeg;
  @Output() select = new EventEmitter();

  // el refers to the DOM element that this directive is attached to.
  // render allows us to make style changes in a platform-independent way.

  constructor( private el: ElementRef, private render: Renderer2) {
    //console.log(this.el)
  }

  ngOnInit() {
    this.setColor( this.item.colour );
  }

  setColor(color: string) {
    //this.el.nativeElement.style.backgroundColor = color;
    this.render.setStyle(this.el.nativeElement,'backgroundColor',color)
  }

  // This picks up DOM events that happen on the DOM-element this directive is attached to.
  @HostListener('click') onClick() {
    if( !this.state ) {
      this.select.emit( this.item.name )
    }
    this.state = true;
  }

}
