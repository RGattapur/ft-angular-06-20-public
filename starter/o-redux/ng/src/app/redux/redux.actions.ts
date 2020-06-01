
// Constants for the names of the ACTIONS
// Used by redux.reducer.ts

const ADD_FILM : string = "addFilm" ;
const REMOVE_FILM : string = "removeFilm" ;
const EMPTY : string = "empty" ;
const SORT : string = "sort" ;
const SAMPLE : string = "sample" ;

export { ADD_FILM, REMOVE_FILM, EMPTY, SORT, SAMPLE }

// =================================================

// ACTION-CREATORS : functions which return action-objects

// { type:ADD_FILM , payload: { name:"Jaws", id:456782 }}
const addFilm = (film) => ({ type: ADD_FILM, payload: film }) ;

const removeFilm = (id) => null
const empty = () => null
const sort = () => null
const sample = (films) => null

export { addFilm, removeFilm, empty, sort, sample }

// =================================================
