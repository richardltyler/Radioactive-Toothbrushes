//What do we want to test?
//describe('RadioActive')

describe('Radioactive Toothbrushes', () => {

  const baseURL = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(baseURL);
  });
  // how do we test how many movies there are in the API

  describe('App', () => {

  });

  describe('RT Header', () => {
    it('Should display a header', () => {
      cy.get('header')
    });

    it('Should have a title/logo', () => {
      cy.get('h1').contains('Radioactive Toothbrushes')
    });

    it('Should have a clickable home icon', () => {
      cy.get('img').click();
    })
  });

  describe('RT Film', () => {
    //other stuff
  });

  describe('RT Movies', () => {
    it('Should display many movie cards', () => {
      cy.get('.movies-container').should(($article) => {
        expect($article).to.have.length
        expect($article.first()).to.contain('Money Plane')
      })
    })
    it('Should contain clickable movie cards', () =>{
      cy.get('.movies-container > article').contains('Money Plane').click()
    })
  });

  describe('RT Card', () => {
    it('Should display a movie card with an id', () => {
        cy.get('.card').should('have.attr', 'id')
        //how to test for functions/methods
    })
    it('Should have an img with alt text', () => {
        cy.get('.card > img')
          .get('.card > img').should('have.attr', 'alt')
    })
  });
});
