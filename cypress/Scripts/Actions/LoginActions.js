class LoginActions {
    login() {
        cy.login()
    }

    menuButton(param) {
        cy.get('.toolbar-menu').find('button').click()
        cy.get('.itens-menu-principal').contains(param).click()
    }

    firstSubMenu(param) {
        cy.get('.item').contains(param).click()
    }

    // secondSubMenu(secondSubMenu) {
    //     cy.get('app-sidenav-link').contains(secondSubMenu).click()
    // }
    secondSubMenu(param) {
        cy.get('app-sidenav-link')
          .contains(param)
          .click();
    }
    
}

export default new LoginActions();
