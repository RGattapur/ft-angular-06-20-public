
## Angular 8 Training Course
## Exercise O-REDUX
## January 2020
## John Coumbe

- This exercise will use the **Redux** design pattern to centralise/isolate application state.
- A plain JS implementation of this REDUX project is available: **plain-js/index.html**.

#### Revew the plain-JS version

- Install the Chrome Redux extension.
- Install the angular-starter version

		npm install
		ng serve -o

#### Add Film

- When the user types in the name of a film and clicks ADD-FILM, this will **dispatch an action to the Redux store**.
- The store will manage an array of objects. Each object contains the name of the film and a unique ID:

		{ name:"Jaws", id:456782 }
		
- When the user types in a name and clicks ADD-FILM, method addFilm is called.

		  <form (ngSubmit)="addFilm()">
		  <input [formControl]="form.controls.film" />
		  
- Method addFilm gets the film name.

		let film = this.form.value.film.toUpperCase().trim();
		
- It creates an object from it with a unique ID>

		let filmOb = { name:film, id:Date.now() }
		
- It dispatches a Redux action to the reducer.

		this.store.dispatch( 
		{ type:"addFilm", payload: filmOb })
		
- The form is cleared.

		this.form.reset( { film:"" })
		
- The reducer handles the ADD_FILM action.
- It adds the payload (the film object containing name and ID) to a copy of the array of objects. 
- It returns this updated copy to the Redux store. 

		case ADD_FILM: return [...state, action.payload];
		
- Components can **subscribe** to changes in the Redux store.
- They can read the current state of the store using **getState**.
	
		  constructor(@Inject(MovieStore) 
		  private store:Redux.Store<Film[]>) {
		  
		    this.store.subscribe(() => 
			  this.films = this.store.getState())
		  }	
		  
- Review the results of this change in the **Chrome Redux Dev Tools**.
  
#### Empty action

- Dispatch an empty action from the addFilm component.

		empty = () => this.store.dispatch( empty())
		
- Implement an action creator

		const empty = () => ({ type: EMPTY })
		
- Add code to the reducer.

		  case EMPTY: {
	    return []
		
- Test this.

#### Sort action

- This action should sort films by name.
- Dispatch an action in addFilm.

		sort = () => this.store.dispatch( sort())
		
- Create an action creator.

		const sort = () => ({ type: SORT }) ;
		
- Add code to the reducer.

		  case SORT: {
	    return [...state.sort((a, b) => 
	    (a.name < b.name ? -1 : 1))];

#### Create samples

- The function createSample generates an array of 1-5 objects, each containing a name and ID.
- Dispatch an action containing this sample

		  createSample = () => this.store.dispatch( sample( createSample()))

- Add an action creator

			const sample = (films) => ({ type:SAMPLE, payload:films })
			
- Add code to the reducer to merge the sample data with the store.

		  case SAMPLE:{
		  return [...state, ...action.payload];

#### Remove Film

- Click on a film in the draw component runs the removeFilm method:

		(click)="removeFilm(film)"
		
- Dispatch a removeFilm action passing the film ID as an argument:

		  removeFilm = (film) => this.store.dispatch( removeFilm( film.id ))
		  
- Create a removeFilm action creator.

			const removeFilm = (id) => 
			({ type: REMOVE_FILM, payload: id }) ;

- Add code in the reducer to filter out the film by ID.

		  case REMOVE_FILM: {
		  return state.filter( f => f.id !== action.payload )

#### Total number of films

- Add code to addFilms component to get the size of the Redux store. Call this method in the constructor.

		  totalFilms = () => {
		    this.store.subscribe(() => {
		      let films = this.store.getState()
		      this.total = films.length;
		    })
		  }
		  
#### Add Typescript

- File redux.state.ts defines an Interface describing the shape of each film in the store.

		export interface Film{
		    name:string;
		    id:number;
		}
		
- This can be used in the constructor of both components to describe the type of the store as an array of type Film.

		  constructor(@Inject(MovieStore) private store:Redux.Store<Film[]>) {
				  

