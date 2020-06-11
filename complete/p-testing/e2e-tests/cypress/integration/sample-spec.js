
describe('Testing TODO', function() {

  beforeEach( () => {
    cy.visit('/'); // Base URL set in cypress.json
  })

  it('should contain a heading', function() {
    cy.get('h1').should('contain', 'TODO');
  })

  it('should populate the list', function() {

    // Test data defined in fixtures/shop.json
    cy.fixture('shop').then( list => {
      list.forEach( item => cy.get('#item').type(`${item}{enter}`))

      cy.get(".remove").then( el => el.first().click())
      cy.get('li').should('have.length', 4);
    })

  })

});
