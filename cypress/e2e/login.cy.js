describe('login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('login com dados válidos', () => {
        cy.intercept('GET', '**').as('allRequests')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.wait('@allRequests').its('response.statusCode').should('eq', 200)
    })

    it.only('Login com usuário inválido e senha válida', () => {
        cy.get('#user-name').type('mariane')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('h3[data-test="error"]').should('be.visible')
    })

    it('Login com usuário válido e senha inválida', () => {

    })

    it('Login com usuário e senha inválidos', () => {

    })
})