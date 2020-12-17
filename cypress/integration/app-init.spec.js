const timezones = {
  timezones: ['Africa/Abidjan', 'Africa/Accra', 'Africa/Algiers', 'Africa/Bissau', 'Africa/Cairo', 'Africa/Casablanca'],
};

describe('App initialization', () => {
  it('Loads on page load', () => {
    cy.server();
    cy.route('GET', 'http://localhost:3030/timezones', timezones);
    cy.visit('/');
    cy.get('#search').type('Africa').should('have.value', 'Africa');
    cy.get('.search-box__menu-list').children().should('have.length', 6);
  });
});
