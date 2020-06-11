## Framework Training
## Angular 9 Training Course
## Exercise P-TESTING
## April 2020

- This exercise demonstrates different approaches to writing unit tests using Jasmine and Karma.
- Jasmine is a **framework** for writing tests. Karma is a test-runner which runs tests in a variety of browser and command-line configurations.

#### Review the Angular application

- The application being tested contains a component which injects a service, CityService. CityService uses the HttpClient to read a JSON file. The method getData returns an observable. The component subscribes to this observable and displays an array of city temperatures.
- Install and run the application
		
		npm install
		ng serve -o
		
#### Sanity Test

- The Angular CLI has setup up the Jasmine and Karma tooling.
- Tests will be run against any file with an extension of **.spec.ts**		
- Create a basic sanity test to check your testing environment
		
		describe("Test environment" , () => {
			it( "should run a basic test", () => {
				expect(true).toBe(true);
			})
		})
		
- describe() is a container for multiple tests.
- 	it() is a container for 1 test.
- 	expect : defines an assertion 
- Collectively, the test script is a set of expectations confirming that your code behaves as expected.
		
#### An isolated component test

- We will test the Angular component as an isolated class. Later we will introduce the Angular TestBed utilities.
- We will use beforeEach and afterEach to set-up and tear-down the test case.

		describe("AppComponent" , () => {
			let component;
		
			beforeEach(() => {
			  component = new AppComponent();
			})
		
			it( "should exist", () => {
			  expect(component).toBeTruthy();
			})
		})
		
- Note the component variable is defined first to be **in scope** inside both the beforeEach and it blocks of code.
- This test attempts to create a new component instance and test its existence.
- The test fails because the component is dependent o CityService. We can modify the test.

		let component;
		let service;
	
		beforeEach(() => {
		  service = new CityService();
		  component = new AppComponent(service);
		})
		    
- This solves one bugs and introduces another. 
- CityService itself is dependent on the HttpClient service.
- In this test, we do not want to make real HTTP calls.
- We want to test component/service behaviour in isolation.
- We can pass a null placeholder. The test should now pass.

		service = new CityService(null);
		
#### Test the getData method

- We will write a test for the CityService getData method.
- In the application, getData returns an observable which we can subscribe to.

		this.observe = this.cityService.getData();
		this.observe.subscribe( data => this.cities = data ); 		
		
- If we write an empty test this will trigger the warning **"Spec has no expectations"** because the test contains no expect assertions.

		it( "should getData", () => {})
		    
- We are writing this test without the **Angular TestBed**. This means we need to explicitly call the ngOnInit lifecycle method.
		
		it( "should getData", () => {
		  component.ngOnInit();
		})
		
- The test will fail because ngOnInit the cityService.getData method calls http.get() which is not implemented because we passed null as a placeholder instead of the real HttpClient. 

#### Jasmine spies

- We can use the **Jasmine spyOn** method to intercept calls to getData and return mock data.
- The **of operator** is used to convert the test data into the required Observable return type.

	    it( "should getData", () => {
	      spyOn( service,"getData").and.returnValue(of(TESTDATA));
	      component.ngOnInit();
	    })
		
- This fixes the test errors. 
- We can subscribe to the observable and write an assertion.
				
		component.observe.subscribe( cities => {
			expect(cities).toEqual(TESTDATA)
			console.table(cities)
		} 
		
- The debugging should be visible in the browser console opened by Karma.

#### Async methods

- The spyOn code returns an observable immediately. 
- We can change the code to simulate the async nature of the http.get call in the real code.

		spyOn( cityService,"getData").and
		.returnValue(timer(500).pipe(mapTo(TESTDATA)));
		
- The test will now fail. We need to handle the async nature of the return value from the spyOn call.
- We pass a done callback into the function. The done function is called when we want the test script to complete.


		    it( "should getData", (done) => {
		
		      spyOn( service,"getData").and
		      .returnValue(timer(500).pipe(mapTo(TESTDATA)));
		      component.ngOnInit();
		
		      component.observe.subscribe( cities => {
		        expect(cities).toEqual(TESTDATA)
		        console.table(cities)
		        done();
		      });
		    })

#### An alternative approach for async tests

- fakeAsync is an Angular testing helper function, which wraps a test function and makes the code inside behave in a synchronous way. 
- A tick() function is used to pause the code and allow the function to complete.

	    it( "should getData", fakeAsync(() => {
	
	      spyOn( service,"getData").and
	      .returnValue(timer(500).pipe(mapTo(TESTDATA)));
	      component.ngOnInit();
	
	      component.observe.subscribe( cities => {
	        expect(cities).toEqual(TESTDATA)
	        console.table(cities)
	        // done();
	      });
	      tick(500);
	    }))

#### TestBed

- The Angular TestBed allows components and related dependencies to be set up in a testing environment in a way that emulates the purpose of **app.module.ts**.
- We define the TestBed configuration in a beforeEach function.

		  beforeEach( async(() => {
		
		    TestBed.configureTestingModule( {
		      declarations : [ AppComponent ],
		      providers : [ CityService, { provide:HttpClient, useValue: {} } ]
		    } )
		
		  }))

#### Fixture

- A fixture is an object created by the TestBed which contains both the component class and its associated HTML template.

		  let component: AppComponent;
		  let fixture: ComponentFixture<AppComponent>;
		  let template;
		  let service;
		
		  beforeEach(() => {
		
		    fixture = TestBed.createComponent(AppComponent);
		    component = fixture.componentInstance;
		    service = TestBed.get( CityService );
		    template = fixture.debugElement;
		
		  });

- With the fixture, we can access the component and its associated template.

#### Angular change detection within TestBed

- The Angular change detection can be run from within the TestBed.
- The detectChanges method will run component initialisation, calling ngOnInit.
- If any bound variables change within the component, calling detectChanges will update the template to reflect this.
- Calling detectChanges in the 2nd beforeEach will trigger an error because ngOnInit calls cityService.getData which calls http.get that is not implemented in our test code.

		fixture.detectChanges();
		
- We can set up a spy to handle this error.

		spyOn(cityService,"getData").and.returnValue(of(TESTDATA));
		fixture.detectChanges();
		
- The component template will become visible on the Jasmine browser test page.

#### Test clicking and removing a city

- If the user clicks on a city, it is removed. The total cities displayed in this span should decrease.

		<span class="total">{{cities.length}}</span>
		
- The expression **fixture.debugElement** points to the DOM element that contains the component template. We can search the template by CSS selector

	    let city = fixture.debugElement.query(By.css(".city"));
	    let total = fixture.debugElement.query(By.css(".total"));
		
- We can send simulated clicks to these elements and then apply change detection.

			city.triggerEventHandler("click", null);
	    fixture.detectChanges();
	    
- The assertion confirms the expected city count.

		expect(Number(total.nativeElement.textContent)).toEqual(1)

