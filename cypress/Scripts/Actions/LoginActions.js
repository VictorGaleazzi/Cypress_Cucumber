class LoginActions {
    login() {
        cy.login()
    }

    menuButton(menu) {
        cy.get('.toolbar-menu').find('button').click()
        cy.get('.itens-menu-principal').contains(menu).click()
    }

    firstSubMenu(firstSubMenu) {
        cy.get('.item').contains(firstSubMenu).click()
    }

    secondSubMenu(secondSubMenu) {
        cy.get('app-sidenav-link').contains(secondSubMenu).click()
    }
}

export default new LoginActions();
