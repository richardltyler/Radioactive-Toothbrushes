//What do we want to test?
//describe('RadioActive')
describe('RT App', () => {
const baseURL = 'http://localhost:3000/';
  //beforeEach to account for cy.visit(baseURL)
  //header is showing
  // how do we test how many movies there are in the API
  describe('RT Header', () => {
    //other stuff
  });
  describe('RT Film', () => {
    //other stuff
  });
  describe('RT Movies', () => {
    //other stuff
    //is it displaying cards
    //section?
  });
  describe('RT Card', () => {
    it('Should display a movie card with an id', () => {
      cy.visit(baseURL)
        .get('.card').should('have.attr', 'id')
        //how to test for functions/methods
    })
    it('Should have an img with alt text', () => {
      cy.visit(baseURL)
        .get('.card > img')
        .get('.card > img').should('have.attr', 'alt')
    })
  });
});
