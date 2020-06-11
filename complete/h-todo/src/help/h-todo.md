## Angular 9 Training Course
## Exercise H-TODO
## April 2020
## John Coumbe

- This exercise implements a simple TODO list.
- Users can **add items** to the list.
- They can **remove** individual items
- They can click **empty** to clear the list.
- The state of the list is saved to **localStorage**.

## Setup

- Rebuild the starter version of this project

		npm install
		ng serve -o
		

#### Add an item to the list

- The template has been created so that hitting return or clicking the Add-Item button will run the addItem method.

		<form (ngSubmit)="addItem()">
		
- Inside the method log the value property of the FormControl.

		  addItem = () => {
		    console.log(this.list.value)
		  }
		  
- This logs an object containing an item property

		{item: "buy milk"}
		
- Create an object containing this text with a unique ID

		let ob = { desc : this.list.value.item.trim(), id:Date.now() }
		
- Add this item-object to the items array.

		this.items.push( ob );
		
- Call clearItem to reset the state of the form.

		this.clearItem();
		
#### Empty list

- Implement the empty function simply by emptying the array.

		empty = () => this.items = [];
		
#### Remove item

- Note the template calls removeItem and passes it the item-object as an argument.

		(click)="removeItem(item)"
		
- Implement this method using filter.

		  removeItem = removed => this.items = this.items.filter( item => item.id != removed.id )
		  
#### Persist state in localStorage

- The TODO list should save its state to localStorage.
- The write function should write a stringified version of the array of objects to localStorage

		  write = list => localStorage.list = JSON.stringify( list );
		  
- The read function needs to parse the stringified list out of localStorage and handle the case where localStorage is empty.

		  read = () => localStorage.list ? JSON.parse( localStorage.list ) : []
		  
- Create a new service.

			ng generate service service/storage --d
			ng generate service service/storage
			
- Add read and write methods to the service.
- Import the service into the main component.

		import { StorageService } from "./service/storage.service";
		
- Inject the service into the constructor.

		  constructor( private store:StorageService ) {}
		  
- Call the read and write methods in the constructor, add, remove and empty methods.

		this.items = this.store.read();
		this.store.write( this.items );
		
- Check localStorage in the browser console.