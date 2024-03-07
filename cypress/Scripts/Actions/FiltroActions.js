class FiltroActions {

    filtroMarca(param) {
        cy.wait(200)
        cy.get('app-header-grid').find(`button[data-title=${param}]`).should('be.visible').click();
    }

        
    botãoFormulário(param) {
        cy.get('header-form').find('button').contains(param).click();
    }


    prenchoFiltro(param, codigo) {
        if (codigo === 'IDMARCA') {
            const id = Cypress.env('idGlobal');

            cy.get('.p-sidebar-content')
                .find('label')
                .contains(param)
                .should('be.visible')
                .type(id);
        }
    }

    envioFiltroForm() {
        cy.get('.p-sidebar-content').find('button').contains('Filtrar').click()
    }
}

export default new FiltroActions