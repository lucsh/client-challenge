const timezones = {
  timezones: [
    'Africa/Abidjan',
    'Africa/Accra',
    'Africa/Algiers',
    'Africa/Bissau',
    'Africa/Cairo',
    'Africa/Casablanca',
    'America/Argentina/Buenos_Aires',
  ],
};

describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();
    cy.route('GET', 'http://localhost:3030/timezones/', timezones);
  });
  it('focuses input on load', () => {
    cy.focused().should('have.id', 'search');
  });

  it('accepts input', () => {
    const typedText = 'Buenos Aires';
    cy.get('#search').type(typedText).should('have.value', typedText);
  });

  context('submit', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.route('GET', 'http://localhost:3030/timezones/', timezones);
      cy.server();
    });
    it('Adds a new timezone', () => {
      const itemText = 'Buenos Aires';

      cy.route('PUT', 'http://localhost:3030/timezones/America/Argentina/Buenos_Aires', {
        message: 'Timezone Selected America/Argentina/Buenos_Aires',
      });

      cy.route('GET', 'http://localhost:3030/timezones/America/Argentina/Buenos_Aires', {
        timezone: 'America/Argentina/Buenos_Aires',
        time: '9:56:37 PM',
        date: '12/16/2020',
      });

      cy.get('#search').type(itemText).type('{enter}').should('have.value', '');

      cy.get('.timezones li').should('have.length', 1).and('contain', itemText);
    });
  });
});
