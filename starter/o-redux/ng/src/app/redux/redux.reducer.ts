
// redux.reducer.ts

import { Film } from './redux.state';

import { ADD_FILM, REMOVE_FILM, EMPTY, SORT, SAMPLE } from './redux.actions';

const INITIAL_STATE = [];

export let reducer = (state=INITIAL_STATE, action ):Film[] => {

    switch (action.type) {
      case ADD_FILM: {
        // Add the film to state.
      }
      case REMOVE_FILM: {
        // Remove the film with matching ID from state.
      }
      case EMPTY: {
        // Empty state
      }
      case SORT: {
        // Sort the state by film-name
      }
      case SAMPLE:{
        // Merge sample films with state.
      }
      default:
        return []
    }
}
