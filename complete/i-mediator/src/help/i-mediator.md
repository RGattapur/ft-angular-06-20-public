## Angular 9 Training Course
## Exercise I-MEDIATOR
## April 2020
## John Coumbe 

- This exercise uses the mediator pattern to pass information between two components.
- The first version passes data using Inputs and Ouput events with the parent component as the mediator.
- The second version refactors the code to pass messages using a service and an Observable message stream. The service becomes the mediator.

#### The application
- The application generates a random sequence of DNA base chemicals. 
- The data is an array of objects containing the four bases.

		const fourBases = [
		    { name:"adenine", code:"a" },
		    { name:"guanine", code:"g" },
		    { name:"cytosine", code:"c" },
		    { name:"thymine", code:"t" }
		];
		
- The **base component** should pick a random base and then **emit a changeBase event** containing that object.
- This code uses an Observable to call the setBase method once a second.

		interval( 1000 )
		.subscribe(n => this.setBase())
		
- The setBase method picks a random object from the array and emits a changeBase event containing that object.

			setBase() {
				this.base = this.fourBases[Math.floor(Math.random() * this.fourBases.length)];
				this.changeBase.emit( this.base );
			}

- The base component displays the base-name in the template. 

		<section>{{ base.name }}</section>
		
- But this template code can cause a race condition.
- Before the observable creates the stream, variable base is null and has no property name.
- To avoid this runtime error, suffix base with a safe navigation operator. 

		<section>{{ base?.name }}</section>
		
- The parent component can listen for changeBase events and call its own changeBase method.

		<app-base (changeBase)="handleBase($event)">
		
- The parent component constructs an array of objects, adding to the array after each changeBase event.

		  sequence = [] ;
		
		  handleBase( base ) {
				this.sequence.push( { ...base } )
		  }
		  
- It passes this array as an **Input** named "dnaSequence" into the draw-component

		<app-draw [dnaSequence]="sequence">
		
- The draw-component defines this Input decorator but does not require any additional logic in its class.

		  @Input() dnaSequence;
		  
	- Its template uses an *ngFor iterator to draw the dnaSequence

			<span 
			*ngFor="let base of dnaSequence" class="square" 
			[ngClass]="base.name">{{ base.code }}</span>
			
- This approach works but requires the parent-component to act as a mediator.
- It listens for events from the base-component and passes the dna-sequence as an Input to the draw-component.

#### Service as a mediator

- We can refactor the code by passing messages via a service using Observables.
- Generate a new service using the Angular-CLI.

		ng generate service services/message
		
- This service will use a Subject which is a type of Observable.
- The application can add messages to the Observable stream using sendMessage. 
- Listeners can be notified when a message has been added by subscribing to the stream using getChannel.
- This approach will create a more loosely coupled connection between the base and draw components.

		  export class MessageService {
		
		    private channel = new Subject<string>();
		
		    constructor() {}
		
		    sendMessage(s: any) {
		      this.channel.next(s);
		    }
		
		    getChannel() {
		      return this.channel.asObservable()
		    }
		  }
		  
- The base component no longer needs to emit events.
- It can simply send messages to the service

		this.ms.sendMessage( this.base );
		
- The draw component can create the dnaSequence and push objects into it by subscribing to the Observable stream in the service.

		dnaSequence = [] ;
		
		this.ms.getChannel().subscribe( s => this.dnaSequence.push(s))
		
- The parent component is no longer required as a mediator. Its class can be empty.

		export class AppComponent {}
		
- The parent template does not need to listen for events or pass in inputs.

		  <app-base></app-base>
		  <app-draw></app-draw>
		  
#### Summary

- This exercise demonstrated two alternative approaches for component communication.
- The first approach used Inputs and Outputs via a parent component.
- The second approach used	 messages via a service.
- The second approach creates a more loosely coupled architecture.  
