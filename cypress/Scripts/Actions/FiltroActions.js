class FiltroActions {

    filtroMarca(label) {
        cy.wait(200)
        cy.get('app-header-grid').find(`button[data-title=${label}]`).should('be.visible').click();
    }

    prenchoFiltro(label, codigo) {
        if (codigo === 'IDMARCA') {
            const id = Cypress.env('idGlobal');

            cy.get('.p-sidebar-content')
                .find('label')
                .contains(label)
                .should('be.visible')
                .type(id);
        }
    }

    envioFiltroForm(label) {
        cy.get('.p-sidebar-content').find('button').contains(label).click()
    }
}

export default new FiltroActions