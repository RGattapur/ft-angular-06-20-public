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

  constructor(@Inject(MovieStore) private store:Redux.Store<Film[]>) {
    this.totalFilms();
  }

  ngOnInit() {
    this.form = new FormGroup({
      film: new FormControl("" )
    })
  }

  addFilm = () => {
    let film = this.form.value.film.toUpperCase().trim();

    if( film ) {
      let filmObject = { name:film, id:Date.now() }
      this.store.dispatch( addFilm( filmObject ))
      this.form.reset( { film:"" })
    }
  }

  empty = () => this.store.dispatch( empty())

  sort = () => this.store.dispatch( sort())

  createSample = () => this.store.dispatch( sample( createSample()))

  totalFilms = () => {
    this.store.subscribe(() => {
      let films = this.store.getState()
      this.total = films.length;
    })
  }

}
