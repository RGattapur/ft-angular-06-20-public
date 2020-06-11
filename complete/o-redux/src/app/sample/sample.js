
const movies =
["Insidious: The Last Key", "The Strange Ones", "Sweet Country", "The Commuter", "Proud Mary", "Acts of Violence", "Freak Show", "Humor Me", "12 Strong", "Den of Thieves", "Forever My Girl", "Maze Runner: The Death Cure", "The Insult", "Please Stand By", "Winchester", "A Fantastic Woman", "Armed", "The Cloverfield Paradox", "The 15:17 to Paris", "Peter Rabbit", "La Boda de Valentina", "Permission", "Monster Family", "Golden Exits", "Black Panther", "Nostalgia", "Samson", "Game Night", "Annihilation", "Every Day", "The Lodgers", "The Cured", "Red Sparrow", "Pickings", "Death Wish", "The Vanishing of Sidney Hall", "A Wrinkle in Time", "Gringo", "Thoroughbreds", "The Hurricane Heist", "The Strangers: Prey at Night", "Tomb Raider", "Love, Simon", "I Can Only Imagine", "7 Days in Entebbe", "Furlough", "Josie", "Flower", "Pacific Rim Uprising", "Isle of Dogs", "Sherlock Gnomes", "Unsane", "Paul, Apostle of Christ", "Final Portrait", "Midnight Sun", "Followers", "Ready Player One", "Tyler Perry's Acrimony", "God's Not Dead: A Light in Darkness", "Gemini", "The Last Movie Star", "A Quiet Place", "Blockers", "You Were Never Really Here", "Chappaquiddick", "Pandas", "The Miracle Season", "Beirut", "Rampage", "Truth or Dare", "The Rider", "Sgt. Stubby: An American Hero", "I Feel Pretty", "Super Troopers 2", "Traffik", "The House of Tomorrow", "Avengers: Infinity War", "Disobedience", "Backstabbing for Beginners", "Kings", "Overboard", "The Cleanse", "Tully", "Bad Samaritan", "Life of the Party", "Breaking In", "The Seagull", "Terminal", "Deadpool 2", "Book Club", "First Reformed", "Pope Francis: A Man of His Word", "Show Dogs", "Solo: A Star Wars Story", "In Darkness", "Future World", "Action Point", "Adrift" ]

const createSample = () => {

    let films = [...movies ].sort( () => 0.5 - Math.random())
	films = films.slice(0, Math.ceil(Math.random() * 5))

	return films.map( f =>({ name:f, id:Math.floor(Math.random() * 10000 )}));
}

export { createSample }
