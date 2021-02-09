describe('Radioactive Toothbrushes', () => {

  const baseURL = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(baseURL);
  });

  describe('App', () => {
    it('Should display a header', () => {
      cy.get('header').should('be.visible')
    });

    it('Should display a loading message', () => {
      cy.get('div').contains('Please wait...')
    })

    //how do we test API isn't functioning?
    // it('Should display an error message', () => {
    //   cy.get('div').contains('We are having a technical difficulty')
    // })

    // how do we test how many movies there are in the API
    it('Should display the listed movies', () => {
      cy.get('div > section').should('be.visible')
    })
  });

  describe('RT Header', () => {
    it('Should have a title/logo', () => {
      cy.get('h1').contains('Radioactive Toothbrushes')
    });

    it('Should click home icon to navigate back to main', () => {
      cy.get('section > article')
        .contains('Mulan')
        .click()
      cy.get('header > img').click();
    });
  });

  describe('RT Film', () => {
    it('Should have a loading message', () => {
      //set up to access Film
      cy.get('section > article')
        .contains('Mulan')
        .click()
        //inside of Film
        .get('h2').should('be.visible')
    });

    //how do we test API isn't functioning?
    // it('Should have an error message', () => {
    //   cy.get('section > article')
    //     .contains('Mulan')
    //     .click()
    //     .get('h2').should('be.visible')
    // });

    //how do we test that API is functioning?
    it('Should be able to display a single movie\'s details', () => {
      //set up to access Film
      cy.get('section > article')
        .contains('Mulan')
        .click()
        //inside of Film
        .get('h2').should('be.visible')
        .get('article').should('be.visible')
        .get('article > section > div').should('have.class', 'film-title-container')
        .get('article > img').should('be.visible')
        .get('article > section > article > h3').contains('Summary')
        .get('article > section > article > h3').contains('Summary')
    });
  });

  describe('RT Movies', () => {
    it('Should display many movie cards', () => {
      cy.get('.movies-container').should(($article) => {
        expect($article).to.have.length
        expect($article.first()).to.contain('Money Plane')
      });
    });

    it('Should contain clickable movie cards', () =>{
      cy.get('.movies-container > article').contains('Money Plane').click()
    });
  });

  describe('RT Card', () => {
    it('Should display a movie card with an id', () => {
        cy.get('.card').should('have.attr', 'id')
        //how to test for functions/methods
    });

    it('Should have an img with alt text', () => {
        cy.get('.card > img')
          .get('.card > img').should('have.attr', 'alt')
    });
  });
});
