## Framework Training
## Angular 9 Training Course
## Exercise P-E2E-CYPRESS-TESTING
## April 2020

- This document describes the use of **Cypress** for end-to-end-testing in Angular.
- Cypress is an **Electron** application.
- Cypress launches a **Chromium browser** instance and runs tests visually against a running copy of your Angular application.
- One limitation of Cypress is that it must use the **Mocha** test library and tests must run in the Chrome browser.

#### Setup

- Cypress needs to be install in the Angular application folder.

		npm i cypress
		
- Create a script in the package.json file.
- https://docs.cypress.io/guides/guides/command-line.html#How-to-run-commands

		// Syntax for MAC-OS:
		"cypress:open": "$(npm bin)/cypress open"
		
		// Syntax for WINDOWS-PC:
		./node_modules/.bin/cypress run
		
- Cypress requires the Angular app to be running at a URL. This can be done by running two terminal windows in the same folder.
- Another alternative is to install a package that runs more than one package in parallel.

		npm i concurrently -D
		"cypress": "concurrently \"ng serve\" \"cypress open\""
		
#### Cypress tests

- Test scripts are created in a folder named **cypress/integration**.
- Tests use the Jasmine-BDD style, wrapping assertions inside **it** functions, and grouping tests **inside** a describe test suite.
- This code tells the Electron app to open a browser instance at the url containing the Angular app.
- The base url of the Angular app is defined in configuration file cypress.json

	  // some-test.spec.js
	  beforeEach( () => {
	    cy.visit('/'); 
	  })
  
		// cypress.json
		"baseUrl": "http://localhost:4200"
		
#### Searching for DOM elements

- Here cy is the object containing Cypress methods. The get method searches the component template using CSS-style selectors.

		  it('should contain a heading', function() {
		    cy.get('h1').should('contain', 'TODO');
		  })
		
#### Fixtures

- Fixtures provide a way to define test data in a JSON file external to the script.
- Here fixtures/shop.json contains a basket of shopping.

		[ "milk","bread","carrots","blueberries","spinach"]

- The fixture method reads the JSON file.

		cy.fixture('shop').then( list => console.log(list))
		
- This code iterates over the basket array, typing each item into an input field. 
- Note the use of template literal syntax to add a return character to each item.

		cy.fixture('shop').then( list => {
      list.forEach( item => cy.get('#item')
      .type(`${item}{enter}`))
    })
    
#### Screenshots

- We can take a screen snapshop at key stages in the script.

		cy.screenshot("todo")   
		
#### Testing removal of a to-do item

- Each to-do has a span of class "remove".
- This code finds all DOM elements of that class, selects the first and clicks on it, removing it from the list.		 
		 
		 cy.get(".remove").then( el => el.first().click())
		 
- This should leave four HTML list items on the page which this assertion tests.

		cy.get('li').should('have.length', 4);

#### Intercepting AJAX requests

- Cypress can set up a router which tracks HTTP requests to specific urls. AJAX requests can be intercepted and changed in test scripts.
- This code starts up the router.

		cy.server();
		
- This code tracks any HTTP POST requests made on urls ending in "vote".

		cy.route({
      method:'POST',
      url: '**/vote',
    }).as('postcard');
    
- This route can tracked using an alias defined by the **as method**.
- We can pause scripts for up to 5 seconds until this request happens using the alias.

		cy.wait('@postcard');
		
- We can intercept and return different data by defining a response. This example reads an array of strings from a JSON fixture file.

		cy.route({
		  method:'POST',
		  url: '**/vote',
		  response : "fixture:testdata"
		}).as('postcard');

