
// redux.reducer.ts

import { Film } from './redux.state';

import { ADD_FILM, REMOVE_FILM, EMPTY, SORT, SAMPLE } from './redux.actions';

const INITIAL_STATE = [];

export let reducer = (state=INITIAL_STATE, action ):Film[] => {

    switch (action.type) {
      case ADD_FILM: {
        return [...state, action.payload];
      }
      case REMOVE_FILM: {
        return state.filter( f => f.id !== action.payload )
      }
      case EMPTY: {
        return [];
      }
      case SORT: {
        return [...state.sort((a, b) => (a.name < b.name ? -1 : 1))];
      }
      case SAMPLE:{
        return [...state, ...action.payload];
      }
      default:
        return []
    }
}
