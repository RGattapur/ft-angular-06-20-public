import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import * as Redux from 'redux'
import { MovieStore } from '../redux/redux.store';
import { addFilm,empty,sort,sample } from '../redux/redux.actions';
import { createSample } from "../sample/sample";
import { Film } from '../redux/redux.state';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {

  form: FormGroup;
  total:number = 0;

  constructor(@Inject(MovieStore) private store:Redux.Store) {}

  ngOnInit() {
    this.form = new FormGroup({
      film: new FormControl("" )
    })
  }

  addFilm = () => null
  empty = () => null
  sort = () => null
  createSample = () => null

}
