## Angular 9 Training Course
## Exercise G-USERS
## January 2020
## John Coumbe

- This exercise reads the randomuser.me API to display data about users.
- The starter version of this exercise implements this project using plain Javascript ES6 classes.
- Review this code and the image **help.png**.
- Create a new Angular project.
- Add a **service** to the project.

		ng generate service services/data
		
- The service will use the HttpClient class to read the API, which is injected into the service constructor.
- Here the getData method returns an Observable which will be subscribed to in the main component.

		export class DataService {

			constructor( private http:HttpClient ) {}
	
			getData(path) {
				return this.http.get( path );
			}
			
- In the main component, inject the new service into the components constructor.

		constructor( private ds:DataService ) {}
		
- Call the service getData method passing it the API url.	
		
		ngOnInit() {	
			this.ds.getData( this.USERS_API )
			.subscribe( data => this.createUsers(data));
		}

- The data comes back from the API as one object containing a results property which is an array of objects.
- The createUsers getPerson methods map over the data constructing a simpler array of objects.

	  createUsers( data ) {
		  this.users = data.results.map( this.getPerson );
		}

		getPerson(p) {
	
		  return {
		    first : p.name.first,
		    last : p.name.last,
		    city : p.location.city,
		    image : p.picture.medium,
		    email : p.email
		  }
		}
		
- In the template we can loop over the array of objects created using an *ngFor iterator.

		<section *ngFor="let p of users" class="person">
		
#### Summary

- This exercise used the HttpClient to connect to an API to read people data.		