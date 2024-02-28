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
            cy.root().submit().wait(5000)
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