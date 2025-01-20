// Adiciona um comando customizado no Cypress chamado 'login'
Cypress.Commands.add('login', () => {
    // Intercepta todas as requisições GET feitas pela aplicação e cria um alias chamado 'allRequests'
    cy.intercept('GET', '**').as('allRequests');

    // Localiza os campos de usuário e senha, insere os valores e faz o login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Aguarda que todas as requisições interceptadas sejam concluídas
    cy.wait('@allRequests')
        // Verifica que o código de status da resposta da requisição interceptada é 200 (sucesso)
        .its('response.statusCode').should('eq', 200);
});