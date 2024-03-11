// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (
    username = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    cy.session([username, password], () => {

        cy.visit('/');
        cy.get('.login-form').within(() => {
            cy.get('#username').focus().type(username)
            cy.get('#password').focus().type(password)
            cy.root().submit().wait(500)
        })
    },
        {
            cacheAcrossSpecs: true
        })

})

Cypress.Commands.add('saveId', (id) => {
    // Armazena o ID em uma variável global chamada 'idGlobal'
    Cypress.env('idGlobal', id);
});

Cypress.Commands.add('selectOption', (param, valor) => {

    cy.get('.p-card-content')
        .find('.form-group')
        .contains(param)
        .then(($param) => {
            if ($param.siblings('p-autocomplete').length > 0) {
                cy.wrap($param)
                    .siblings('p-autocomplete')
                    .find('.p-autocomplete-dropdown')
                    .focus() 
                    .click();

                cy.get('ul[role="listbox"]')
                    .find('li[role="option"]')
                    .contains(valor)
                    .should('be.visible')
                    .click({ force: true });

            } else if ($param.siblings('p-dropdown').length > 0) {
                cy.wrap($param)
                    .siblings('p-dropdown')
                    .find('div[role="button"]')
                    .click();

                    cy.get('ul[role="listbox"]')
                        .find('p-dropdownitem')
                        .contains(valor)
                        .click({ force: true })
                    cy.get('p-dropdownitem')
                        .contains(valor)
                        .should('be.visible')
                        .click({ force: true })
            } else {
                throw new Error('Tipo de componente não suportado');
            }
        })
});

Cypress.Commands.add('fillField', (param, texto) => {
    cy.get('.p-card-content')
    .find('.form-group')
    .find('label')
    .contains(param)
    .invoke('attr', 'for')
    .then((forValue) => {
        // Verifica se o atributo 'for' existe e não é nulo
        if (forValue) {
            // Usa o valor do atributo 'for' para selecionar o elemento pelo ID
            cy.get(`#${forValue}`).type(texto);
        } else {
            // Caso o atributo 'for' não exista ou seja nulo
            cy.log('O atributo "for" não foi encontrado ou é nulo');
        }
    });
});

Cypress.Commands.overwriteQuery("contains", function (contains, param = {}) {
    // Cria a expressão regular com o parâmetro 'param'
    const regexParam = new RegExp(`^\\s*${param}\\s*$`);
    
    // Cria uma nova função 'contains0' vinculada ao contexto original
    let contains0 = contains.bind(this);
  
    // Retorna a chamada da função original 'contains' com os argumentos tratados
    return contains0(regexParam);
  });