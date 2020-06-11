import { Component, OnInit, Inject } from '@angular/core';
import * as Redux from 'redux'
import { MovieStore } from '../redux/redux.store';
import { removeFilm } from '../redux/redux.actions';
import { Film } from '../redux/redux.state';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  films = [];

  constructor(@Inject(MovieStore) private store:Redux.Store<Film[]>) {
    this.reDraw();
  }

  ngOnInit() {}

  reDraw = () => this.store.subscribe(() => this.films = this.store.getState());

  removeFilm = (film) => this.store.dispatch( removeFilm( film.id ))

}
