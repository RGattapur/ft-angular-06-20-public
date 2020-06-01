
// =============================================================================

const movies = 
["Insidious: The Last Key", "The Strange Ones", "Sweet Country", "The Commuter", "Proud Mary", "Acts of Violence", "Freak Show", "Humor Me", "12 Strong", "Den of Thieves", "Forever My Girl", "Maze Runner: The Death Cure", "The Insult", "Please Stand By", "Winchester", "A Fantastic Woman", "Armed", "The Cloverfield Paradox", "The 15:17 to Paris", "Peter Rabbit", "La Boda de Valentina", "Permission", "Monster Family", "Golden Exits", "Black Panther", "Nostalgia", "Samson", "Game Night", "Annihilation", "Every Day", "The Lodgers", "The Cured", "Red Sparrow", "Pickings", "Death Wish", "The Vanishing of Sidney Hall", "A Wrinkle in Time", "Gringo", "Thoroughbreds", "The Hurricane Heist", "The Strangers: Prey at Night", "Tomb Raider", "Love, Simon", "I Can Only Imagine", "7 Days in Entebbe", "Furlough", "Josie", "Flower", "Pacific Rim Uprising", "Isle of Dogs", "Sherlock Gnomes", "Unsane", "Paul, Apostle of Christ", "Final Portrait", "Midnight Sun", "Followers", "Ready Player One", "Tyler Perry's Acrimony", "God's Not Dead: A Light in Darkness", "Gemini", "The Last Movie Star", "A Quiet Place", "Blockers", "You Were Never Really Here", "Chappaquiddick", "Pandas", "The Miracle Season", "Beirut", "Rampage", "Truth or Dare", "The Rider", "Sgt. Stubby: An American Hero", "I Feel Pretty", "Super Troopers 2", "Traffik", "The House of Tomorrow", "Avengers: Infinity War", "Disobedience", "Backstabbing for Beginners", "Kings", "Overboard", "The Cleanse", "Tully", "Bad Samaritan", "Life of the Party", "Breaking In", "The Seagull", "Terminal", "Deadpool 2", "Book Club", "First Reformed", "Pope Francis: A Man of His Word", "Show Dogs", "Solo: A Star Wars Story", "In Darkness", "Future World", "Action Point", "Adrift" ]

const createSample = () => {
    
    let films = [...movies ].sort( () => 0.5 - Math.random())
	films = films.slice(0, Math.ceil(Math.random() * 5))
	
	return films.map( f =>({ name:f, id:Math.floor(Math.random() * 10000 )}));
}

// =============================================================================

const reducer = (state, action) => {

	switch (action.type) {
		case "ADD_FILM": {
			return [...state, action.payload];
		}
		case "SAMPLE":{
			return [...state, ...action.payload];
		}
		case "EMPTY": {
			return [];
		}
		case "SORT": {
			return [...state.sort((a, b) => (a.name < b.name ? -1 : 1))];
		}
		case "REMOVE": {
			return state.filter( f => f.id !== action.payload )
		}
		default:
			return []
	}
};
	
// =============================================================================
// Functions which dispatch ACTIONS to the reducer.

const addFilm = (e) => {
	e.preventDefault();
	let el = document.querySelector("#filmName");
	let film = el.value.toUpperCase().trim();
	if( film ) {
		let filmObject = { name:film, id:Date.now() }
		store.dispatch({ type: "ADD_FILM", payload:filmObject });
		el.value = "";
	}

};

const addSample = () => {
    store.dispatch({ type: "SAMPLE", payload:createSample() })
};

const dispatch = t => {
    store.dispatch({ type: t });
};

const removeFilm = e => {
	let id = Number(e.currentTarget.getAttribute("data-id"));
	store.dispatch({ type: "REMOVE", payload:id })
}

// =============================================================================
// User interface

const createUI = () => {

	document.querySelector("#film").addEventListener('submit', addFilm)
	document.querySelector("#addFilm").addEventListener('click', addFilm)
    document.querySelector("#empty").addEventListener('click', () => dispatch("EMPTY"))
    document.querySelector("#sample").addEventListener('click', addSample)
    document.querySelector("#sort").addEventListener('click', () => dispatch("SORT"))

} ;

createUI();

// =============================================================================

// Initialise the REDUX store passing it the reducer function as the first argument.
// The 2nd optional argument connects this code to the Chrome Redux DevTools

const store = Redux.createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// =============================================================================
// This RENDER function draws films.
// The REDUX store subscribes to this function: every time state changes, this function runs again.

const render = () => {

	let films = store.getState();
	
	let markup = films.map( film => `<p class="film" data-id=${film.id}>${film.name}</p>`).join("")

	document.querySelector(".films").innerHTML = markup;

	document.querySelectorAll(".film").forEach( function(el) {
		el.addEventListener( "click" , removeFilm )
	})

	document.querySelector(".totalFilms").textContent = `${films.length} film(s)`;
	
}

store.subscribe(render)
// =============================================================================
