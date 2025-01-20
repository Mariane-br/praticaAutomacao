Cypress.Commands.add('login', () => {
    cy.intercept('GET', '**').as('allRequests')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.wait('@allRequests').its('response.statusCode').should('eq', 200)
})