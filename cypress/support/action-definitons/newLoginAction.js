class LoginActions2 {

    login(username = Cypress.env('username'), password = Cypress.env('password')) {
        cy.session([username, password], () => {
            cy.visit('/');
            cy.get('.login-form').within(() => {
                cy.get('#username').focus().type(username)
                cy.get('#password').focus().type(password)
                cy.root().submit().wait(5000)
            })
        }, {
            cacheAcrossSpecs: true
        });
    }

    menuButton(menu) {
        cy.get('.toolbar-menu').find('button').click()
        cy.get('.itens-menu-principal').contains(menu).click()
    }

    firstSubMenu(firstSubMenu) {
        cy.get('.item').contains(firstSubMenu).click()
    }

    secondSubMenu(secondSubMenu) {
        cy.get('[ng-reflect-router-link="/fiscal/marca"]').contains(secondSubMenu).click()
    }

}

export default new LoginActions2();
