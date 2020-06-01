import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: FormGroup;

  items = [
    { desc:"Fake item", id:1024 }
  ]

  constructor() {}

  ngOnInit() {

    this.list = new FormGroup({
      item: new FormControl("" )
    })

  }

  addItem = () => {}

  clearInput = () => this.list.reset( { item:"" });

  empty = () => {}

  removeItem = removedItem => {}

}
