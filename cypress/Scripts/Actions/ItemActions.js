class ItemActions {

    clickButton(botão) {

        if( botão === 'Excluir') {
            cy.get('header-form').find('.dropdown').find('#dropdown-help').click();
            
            cy.get('.dropdown-menu').contains(botão).click();
            cy.get('.p-dialog-footer').contains('Sim').click();
            cy.get('.p-toast-message ').contains('Registro removido com sucesso').should('be.visible');

        } else {
            cy.get('app-header-grid').find('button').contains(botão).click();
        }
    }
    
    preencherCampo(campo, texto) {
        cy.get('.p-card-content')
            .find('label').contains(campo).siblings('input').focus().should('be.visible').clear().type(texto);
    }

    selecionarOpcao(label, valor) {

        const regexLabel = new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);

        cy.get('.p-card-content')
            .find('.form-group')
            .contains(regexLabel)
            .then(($label) => {
                if ($label.siblings('p-autocomplete').length > 0) {
                    cy.wrap($label)
                        .siblings('p-autocomplete')
                        .find('.p-autocomplete-dropdown')
                        .focus() 
                        .click();

                    cy.get('ul[role="listbox"]')
                        .find('li[role="option"]')
                        .contains(valor)
                        .should('be.visible')
                        .click({ force: true });

                } else if ($label.siblings('p-dropdown').length > 0) {
                    cy.wrap($label)
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
    }
    
    botãoFormulário(botãoFormulário) {
        cy.get('header-form')
            .find('button').contains(botãoFormulário).click();
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
