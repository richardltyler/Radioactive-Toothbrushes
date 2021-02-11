describe('Radioactive Toothbrushes', () => {
  const baseURL = 'http://localhost:3000/';

  describe('App', () => {
    beforeEach(() => {
      cy.fixture('Movies-data.json')
        .then(movies => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
            body: movies
          })
        });

      cy.visit(baseURL);
    });

    it('Should display a header', () => {
      cy.get('header').should('be.visible');
    });

    it('Should display a loading message', () => {
      cy.get('div').contains('Please wait...');
    });

    it('Should display the listed movies', () => {
      cy.get('.movies-container')
        .should('be.visible');
    });
  });

  describe('RT Header', () => {
    beforeEach(() => {
      cy.fixture('Film-data.json')
        .then(movie => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
            body: movie
          })
        });

      cy.fixture('Movies-data.json')
        .then(movies => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
            body: movies
          })
        });

      cy.visit(baseURL);
    });

    it('Should have a title/logo', () => {
      cy.get('h1').contains('Radioactive Toothbrushes');
    });

    it('Should click home icon to navigate back to main', () => {
      cy.get('section > a')
        .contains('Mulan')
        .click();

      cy.get('header > a').click();
    });
  });

  describe('RT Movies', () => {
    beforeEach(() => {
      cy.fixture('Film-data.json')
        .then(movie => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            body: movie
          })
        });

      cy.fixture('Movies-data.json')
        .then(movies => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
            body: movies
          })
        });

      cy.visit(baseURL);
    });

    it('Should display many movie cards', () => {
      cy.get('.movies-container').should(($article) => {
        expect($article).to.have.length;

        expect($article.first()).to.contain('Money Plane');
      });
    });

    it('Should contain clickable movie cards', () => {
      cy.get('.movies-container > a').contains('Money Plane').click();
    });
  });

  describe('RT Card', () => {
    beforeEach(() => {
      cy.fixture('Movies-data.json')
        .then(movies => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
            body: movies
          })
        });

      cy.visit(baseURL);
    });

    it('Should display a movie card with an id', () => {
        cy.get('.card').should('have.attr', 'id');
    });

    it('Should have an img with alt text', () => {
        cy.get('.card > img')
          .get('.card > img').should('have.attr', 'alt');
    });
  });

  describe('RT Film', () => {
    beforeEach(() => {
      cy.fixture('Film-data.json')
        .then(movie => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
            body: movie
          })
        });

      cy.fixture('Movies-data.json')
        .then(movies => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
            body: movies
          })
        });

      cy.visit(baseURL);
    });

    // it.only('Should have a loading message', () => {
    //   cy.get('section > a')
    //     .contains('Mulan')
    //     .click()
    //     // .get('h2').should('be.visible');
    //     .get('.message').contains('Looking for your movie...');
    });

    it('Should be able to display a single movie\'s details', () => {
      cy.get('section > a')
        .contains('Mulan')
        .click()
        .get('h2').should('be.visible')
        .get('article').should('be.visible')
        .get('article > section > div').should('have.class', 'film-title-container')
        .get('article > img').should('be.visible')
        .get('article > section > article > h3').contains('Summary')
        .get('article > section > article > h3').contains('Summary');
    });
  });

  describe('RT Error', () => {
    it('Should display an error message if movies can\'t be loaded on home page because of a client side error', () => {
      cy.fixture('Movies-data.json')
        .then(movies => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
            statusCode: 404,
            body: movies
          })
        });

      cy.visit(baseURL);

      cy.get('.error-message').should('be.visible');
    })

    it('Should display an error message if movies can\'t be loaded on home page because of a server side error', () => {
      cy.fixture('Movies-data.json')
        .then(movies => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
            statusCode: 500,
            body: movies
          })
        });

      cy.visit(baseURL);

      cy.get('.error-message').should('be.visible');
    })

    it('Should display an error message if a film can\'t load', () => {
      cy.fixture('Film-data.json')
        .then(() => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            statusCode: 404,
          })
        });

      cy.visit(baseURL);

      cy.get('section > a')
        .contains('Money Plane')
        .click()
        .get('.error-message').should('be.visible');
    });

    it('Should display an error message if a film can\'t load', () => {
      cy.fixture('Film-data.json')
        .then(() => {
          cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            statusCode: 404,
          })
        });

      cy.visit(baseURL);

      cy.get('section > a')
        .contains('Money Plane')
        .click()
        .get('.error-message').should('be.visible');
    });
  });
});
