class ItemActions {

    clickButton(param) {

        if( param === 'Excluir') {
            cy.get('header-form').find('.dropdown').find('#dropdown-help').click();
            cy.get('.dropdown').find('.dropdown-menu').find('span').contains(param).click();
            cy.get('.p-dialog-footer').contains('Sim').click();
            cy.get('.p-toast-message ').contains('Registro removido com sucesso').should('be.visible');

        } else {
            cy.get('app-header-grid').find('button').contains(param).click();
        }
    }
    
    preencherCampo(param, texto) {
        cy.get('.p-card-content')
            .find('label').contains(param).siblings('input').focus().should('be.visible').clear().type(texto);
    }

    selecionarOpcao(param, valor) {
        cy.selectOption(param, valor)
    }
    
    botãoFormulário(param) {
        cy.get('header-form')
            .find('button').contains(param).click();
    }

    getRegistro(registro) {
        if (registro === 'IDMARCA') {
            const id = Cypress.env('idGlobal');
        
            cy.get('.table-body-line')
                .find('.ellipsis')
                .contains(id)
                .click();
        }}
        
    salvaId() {
        cy.wait(500) 
        cy.get('header-form').find('.codigo-format').then(($text) => {
            let txt = $text.text()
            txt = Number(txt).toString();
        
            cy.saveId(txt);
            cy.log(txt);
        });
    }
}
export default new ItemActions 
