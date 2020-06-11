## Angular 9 Training
## Exercise Z-WORDS
## April 2020
## John Coumbe

- This exercise creates a 2-player game using a socket server.

#### Project initialisation

- Install and run the Socket Server.
- From the server folder run

		npm install
		node server.js
		
- Install and run the Angular front-end
- From the ng folder run

		npm install
		ng serve -o
				
#### Game play

- The game should play if 2 players are connected.
- A warning message is displayed otherwise.
- A Spanish and English word are displayed.
- The order of letters in the Spanish word is randomised.
- Both players can type letters to spell the word.
- A different word is chosen for each day of the week.

#### Data

- Each word contains the English, Spanish, randomised-Spanish and day-of-the-week.

	  { 
	  en:"closed",
	  es:"cerrado", 
	  showEs:"odarrec",
	  day:"monday"
	  },

#### Communication

- The Angular front-end can send letter events to the socket server.
- The socket server builds words from the letters.

		this.socket.emit('letter', "A");
		
- The Angular sock service listens for 2 events.
- The socket server emits WORD events each time a word changes.

        this.socket.on('word', word => console.log(word))
        
- The socket server emits a STATUS event each time the number of active connections changes.

        this.socket.on('status', n => console.log(n))
		
