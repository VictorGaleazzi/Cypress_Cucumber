class PessoaActions {

    clickButton() {

            cy.get('app-header-grid').find('button').contains('Novo').click();
        
    }

    selecionarOpcao(label, valor) {
        cy.selectOption(label, valor)
    }
    
    preencherCampo() {
        cy.get('.p-card-content')
            .find('label').contains('Nome').focus().should('be.visible').clear().type('TESTE');
    }

    getRegistro() {
        const id = Cypress.env('idGlobal');
    
        cy.get('.table-body-line')
            .find('.ellipsis')
            .contains(id)
            .click();
       }
        
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
export default new PessoaActions 
