describe('Radioactive Toothbrushes', () => {

  const baseURL = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(baseURL);
  });

  describe('App', () => {
    // how do we test how many movies there are in the API
  });

  describe('RT Header', () => {
    it('Should display a header', () => {
      cy.get('header')
    });

    it('Should have a title/logo', () => {
      cy.get('h1').contains('Radioactive Toothbrushes')
    });

    it('Should click home icon to navigate back to main', () => {
      cy.get('section > article')
        .contains('Mulan')
        .click()
      cy.get('header > img').click();
    })
  });

  describe('RT Film', () => {
    it('Should be able to display a single movie\'s details', () => {
      cy.get('section > article')
        .contains('Mulan')
        .click()
        .get('article').should('be.visible')
        .get('article > section > div').should('have.class', 'film-title-container').and('have', 'Mulan')

    })
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
