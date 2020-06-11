import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../app.component.css']
})
export class ItemComponent implements OnInit {

  // The input contains for example { desc: "Blueberries", price: 2.55,size:"200g", quantity:2, code:"fr-567800-uk-0" }
  @Input() item;

  @Output() select = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }

}
