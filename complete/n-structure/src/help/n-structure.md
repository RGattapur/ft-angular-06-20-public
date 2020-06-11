#### Angular 9 Training Course 
#### Exercise N-STRUCTURE 
#### April 2020
#### John Coumbe

#### Project overview

- This exercise demonstrates the use of **Angular modules** and **lazy loading** to add structure to a medium sized project.
- The code creates **loosely coupled** communication between parts of the project using a **message service**. 
- Angular modules are classes decorated with the **@NgModule decorator**.
- The root module **app.module.ts** is the entry point for the project. It **bootstraps** the application.

#### Routing

- The project was created using the Angular CLI with a routing module.

		ng new myApp --routing
		
- The routing is defined in **routes/app-routing.module.ts**.

		const AppRoutes: Routes = [
		  { path: '', pathMatch: 'full', component:HomeComponent },
		  { path: '**', component: ErrorComponent }
		];
		
- Currently there are no feature routes. Clicking on fruit or vegetables in the navigation bar routes to the ErrorComponent.

#### Module structure of the project.

- The **Core module** contains things that should be created only once. It contains services which should be singletons.
- The **Feature modules** (FruitModule, VegtModule) define clear boundaries for specific parts of the application. 
- Feature modules can load eagerly at launch or be **lazy-loaded** later.
- Feature modules may make use of reuseable code defined in a **SharedModule**.
- Project-wide CSS styles are defined in **app/styles**.
- The main routing file is defined in **routes/app-routing.module.ts**.
- Run-time assets such as JSON files are held in **src/assets**.
- The **useful** folder contains code fragments which we will use to build this project.

#### Descriptive filenames

- We will use descriptive filename conventions that describe the type of Angular entity and file extension.
		
		city.pipe.ts
		city.component.ts
		city.component.html
		city.component.css

#### Create a Feature Module

- We want to create a new **feature module** where the user can buy fruit.
- The feature module will contain a **fruit component**.
- The module will use a **simple router** to load the fruit component when the application route changes to localhost:4200/fruit.
- The feature module will be **lazy loaded**.

		# This command creates a feature module
		# features/fruit/fruit.module.ts
		# It creates routing to load the fruit component.
		# It adds lazy loading code to routes/app-routing.module.ts
		# Check the order of the routes
				
		ng generate module features/fruit --route fruit --module routes/app-routing.module

- Clicking on fruit in the navigation-bar should load the fruit component.

#### Debug the lazy loading		

- To confirm that lazy loading is working, open the **browser developer tools network** tab and restart the application.
- On navigating to the fruit route, the fruit-module file should appear in the network tab.
- Additionally, open the **browser developer tools elements** tab.
- Restart the application and navigate to the fruit route. You should see the fruit-module being injected as a script tag into the head of the DOM.

#### Create a data service

- We need to add a service to the existing **CoreModule** to read the JSON data in the assets folder.

		ng generate service core/services/data
		
- This creates an empty service with an Injectable decorator.
- The providedIn property means that the service is in scope throughout the entire project.

		@Injectable({ providedIn: 'root' })
		
- We can limit the scope of the service by changing the providedIn property to just the CoreModule.

		import { CoreModule } from '../core.module';
		
		@Injectable({
		  providedIn: CoreModule
		})
		
- Add the code for this service from the **useful.code** file.

#### Create a message service

- We will use a message service containing an **Observable Subject** to create **loosely coupled** communication between the Fruit/Vegetable components and the main AppComponent.

		ng generate service core/services/messages
		
- Add the code for this service from the **useful.code** file.

#### Implement buy fruit functionality

- Add code from useful.code.
- We define a path to the JSON file 

		private path : string = "assets/json/fruit.json" ;
		
- We inject the DataService and MessagesService into the constructor.

		constructor( private ds:DataService, private ms:MessagesService) {}

- We populate the fruit array from the JSON file.

	  this.ds.getData( this.path )
	  .subscribe( data => this.fruit=data);

- The select method sends a message to the MessageService.
  
		select = (f) => this.ms.sendMessage(f)

- Ensure the import statements are updated.
- Ensure that the component points at the project-wide styles.
- Add the component template from useful.code
- Test if this displays fruit. Clicking on an item should display a message in the browser console.
- Add code to **app.component.ts** to listen for messages and add fruit to the basket.
- Test that this populates the basket with the selected fruit.

#### Implement buy vegetables functionality

- Create a vegetables feature module.
- Ensure the lazy loaded routes in app-routing.module.ts are in the correct order.

		ng generate module features/vegetables --route vegetables --module routes/app-routing.module

- Edit features/vegetables/vegetables.component.ts
- Edit features/vegetables/vegetables.component.html
- Import the Shared Module
- Add code to use the first Pipe.

#### Shared Module

- A Shared Module contains code that can be re-used multiple times across many feature modules.
- By contrast, a Core Module contains things that should be created only once, e.g. a service.

		ng generate module shared
		
- Create a pipe named first in the shared module.

		ng generate pipe shared/pipes/first --module shared
		
- Add code from useful.code for the pipe function.

		  transform(value: any): any {
		    return value.split(" ")[0]
		  }
		  
- The Shared Module needs to export the things it wants to share.

		  exports: [ FirstPipe ]
		  
- Add the Shared Module to the imports array of the FruitModule.
- The pipe is now in scope and can be used in the fruit component template

		{{ f.name | first }}
		
- Add the Shared Module to the Vegetables feature module.

#### Ensure Core Module loaded only once.

- We want to ensure that this Core Module is only added to the root module and not to any feature module.
- We can add this code from useful.code. It will throw a run-time error if other code attempts to load this module more than once. 

#### Finely controlled lazy loading.

- We can define more precisely how modules lazy load.
- Currently the Fruit and Vegetables modules load when that route is selected for the first time.
- Alternatively, we can preload all modules.
- View the results in the browser developer tools network tab.

		  imports: [RouterModule.forRoot( AppRoutes,{preloadingStrategy:PreloadAllModules} )],
		  
- Another approach is to add a data object to each route. 

		data : { lazy:true }
		
- We then add a class which interprets this data to decide on an individual route basis whether to lazy load a route.

		class CustomLoader implements PreloadingStrategy {}
		
- We then make use of this class. Note the providers array.

		@NgModule({
		  imports: [RouterModule.forRoot( AppRoutes,{preloadingStrategy:CustomLoader} )],
		  exports: [RouterModule],
		  providers: [CustomLoader]
		})
		
- Test if this selectively lazy loads modules.

#### Additional notes

- If we want to add a component to a module and their names do not match, we incldue the module name as an argument:

		ng g component features/fruit/berries --module=features/fruit/fruit.module.ts


		