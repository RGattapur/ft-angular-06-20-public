## Angular 9 Training
## Exercise A-INTRO
## April 2020
## John Coumbe

- This exercise creates a Angular project which describes the purpose of some of the key files that make up a typical Angular application.
- Review the snapshot of the finished application: **help/help.png**.
- The user can click on a panel. The filename of the selected panel is added to an array displayed at the bottom of the screen.
- Selected panels become faded and unselectable.

#### Project initialisation

- In Visual Studio Code, open the terminal at the folder containing this project.
- Install and serve the project:

		npm install
		ng serve -o
		
#### Display the project panels
		
- Class property "project" is an array of objects describing key files in any Angular project.
- In the template app.component.html we can iterate over this array using the Angular **ngFor directive**, displaying each object using the Angular **JSON pipe**. 

			<section *ngFor="let ob of project">
			{{ ob | json }}</section>
		
- We can style each object use the CSS "panel" class and markup each sentence using an HTML paragraph/span.

	    <section class="panel" *ngFor="let ob of project">
	      <p><span>{{ ob.name }}</span>{{ ob.purpose }}</p>
	    </section>
		
- To display this as a responsive grid, we can wrap the panels in a FlexBox defined by CSS class "topics".

		<section class="topics">Panels</section>
		
#### Make the panels selectable

- When the user selects a panel, we want the filename to be added to an array of names displayed at the bottom of the screen.
- Using Typescript define an empty array of strings.

		private names:string[] = [];
		
- Create a method which adds names to this array

		  selectPanel( f ) {
				this.names.push( f.name );
		  }
		  
- Note this code will allow duplicate names. 
- To avoid this bug add conditional logic to search the array for duplicates.

		  selectPanel( f ) {
		    this.names.includes( f.name ) ? null : this.names.push( f.name );
		  } 
		  
- Call this method from the template.

		(click)="selectPanel(ob)"
		
- Display the array of names on screen.
- The ngIf directive will only display the array if it contains elements.

		<p *ngIf="names.length">{{ names | json }}</p>
		
#### Add conditional styling to selected panels

- Once a panel has been selected we want to visually indicate that it is no longer selectable.
- We want to apply this CSS class conditionally.

		.selected{
		  opacity: 0.4;
		  cursor: default;
		}

- Create a boolean method which searches the names array to check if a panel has already been selected.

		  isSelected( ob ) {
		    return this.names.find( n => n === ob.name )
		  }		
		
- Use this method with an ngClass directive to conditionally apply the CSS class.

		[ngClass]="{'selected' : isSelected(ob)}"
		
#### Summary

- This exercise has created a minimal Angular app.
- It has used several Angular 	directives including ngClass and ngFor to connect a template and component class.	