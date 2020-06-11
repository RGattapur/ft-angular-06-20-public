import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { StorageService } from "./service/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: FormGroup;

  items = [] ;

  constructor( private store:StorageService ) {}

  ngOnInit() {

    this.list = new FormGroup({
      item: new FormControl("" )
    })

    this.items = this.store.read();
  }

  addItem = () => {
    let ob = { desc : this.list.value.item.trim(), id:Date.now() }
    this.items.push( ob );
    this.clearItem();
    this.store.write( this.items );
  }

  clearItem = () => this.list.reset( { item:"" });

  empty = () => {
    this.items = [];
    this.store.write( this.items );
  }

  removeItem = removed => {
    this.items = this.items.filter( item => item.id != removed.id )
    this.store.write( this.items );
  }

}
