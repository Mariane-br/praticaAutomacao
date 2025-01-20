// Lista de usuários para os testes, com combinações de credenciais (válidas e inválidas)
const pessoas = [{
        // Usuário inválido e senha válida
        "usuario": "joao",
        "senha": "secret_sauce"
    },
    {
        // Usuário válido e senha inválida
        "usuario": "standard_user",
        "senha": "123entrar"
    },
    {
        // Usuário e senha inválidos
        "usuario": "ana",
        "senha": "master123"
    }
]

describe('login', () => {

    // Visita a URL definida na variável de ambiente 'baseUrl' no arquivo de configuração do Cypress antes de cada teste dentro deste bloco
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    });

    // Teste para login com dados válidos
    it('login com dados válidos', () => {
        // Comando customizado que realiza o login com credenciais válidas
        cy.login();
    });

    // Teste para login com dados inválidos
    it('Login com dados inválidos', () => {
        // Itera sobre o array 'pessoas', realizando o teste para cada combinação de usuário e senha
        pessoas.forEach(pessoa => {
            // Limpa o campo do usuário antes de inserir um novo valor e insere o nome de usuário da iteração atual
            cy.get('#user-name').clear().type(pessoa.usuario);

            // Limpa o campo da senha antes de inserir um novo valor e insere a senha da iteração atual
            cy.get('#password').clear().type(pessoa.senha);

            // Clica no botão de login
            cy.get('#login-button').click();

            // Verifica se a mensagem de erro é exibida após o envio de credenciais inválidas
            cy.get('h3[data-test="error"]').should('be.visible');
        });
    });
});