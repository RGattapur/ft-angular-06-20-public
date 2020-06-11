
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

// { type:REMOVE_FILM , payload: 456782 }
const removeFilm = (id) => ({ type: REMOVE_FILM, payload: id }) ;

const empty = () => ({ type: EMPTY }) ;

const sort = () => ({ type: SORT }) ;

const sample = (films) => ({ type:SAMPLE, payload:films })

export { addFilm, removeFilm, empty, sort, sample }

// =================================================
