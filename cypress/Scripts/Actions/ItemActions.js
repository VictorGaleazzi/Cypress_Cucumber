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
        .find('label').contains(campo).siblings('input').should('be.visible').clear().type(texto);
    }

    // selecionarOpção(label, valor) {
    //     cy.get('.p-card-content')
    //         .find('.form-group').contains(label).siblings('p-autocomplete')
    //         .find('.p-autocomplete-dropdown').click()

    //     cy.get('.ng-trigger')
    //         .find('ul[role="listbox"]')
    //         .find('li[role="option"]')
    //         .find('span').contains(valor).should('be.visible').click({ force: true })
    // }
    
    // selecionarOpcao(label, valor) {
    //     cy.get('.p-card-content')
    //         .find('.form-group').contains(label).siblings('p-dropdown')
    //         .find('div[role="button"]').click()

    //     cy.get('.ng-trigger')
    //         .find('ul[role="listbox"]')
    //         .find('p-dropdownitem')
    //         .find('li[role="option"]')
    //         .find('span').contains(valor).should('exist')as('opcao').click({ force: true })
    //         .click({ force: true })

            // cy.get('span').contains(valor).click({ force: true })
    // }

    selecionarOpcao(label, valor) {
        cy.get('.p-card-content')
            .find('.form-group')
            .contains(label)
            .then(($label) => {
                if ($label.siblings('p-autocomplete').length > 0) {
                    // Se for um p-autocomplete
                    cy.wrap($label)
                        .siblings('p-autocomplete')
                        .find('.p-autocomplete-dropdown')
                        .click();

                    cy.get('ul[role="listbox"]')
                        .find('li[role="option"]')
                        .contains(valor)
                        .click({ force: true });

                } else if ($label.siblings('p-dropdown').length > 0) {
                    // Se for um p-dropdown
                    cy.wrap($label)
                        .siblings('p-dropdown')
                        .find('div[role="button"]')
                        .dblclick();

                        cy.get('.ng-trigger')
                        .find('ul[role="listbox"]')
                        .find('p-dropdownitem')
                        .contains(valor)
                        .click({ force: true })
              
                        cy.get('p-dropdownitem')
                        .contains(valor)
                        .click({ force: true })
                } else {
                    // Tipo de componente não reconhecido
                    throw new Error('Tipo de componente não suportado');
                }
            });
    
    //     // // Comum para ambos os casos
    //     // cy.get('ul[role="listbox"]')
    //     //     .find('li[role="option"]')
    //     //     .contains(valor)
    //     //     .click({ force: true });
    }


    // selecionarOpcao(label, valor) {
    //     // Primeiro, clique no botão do dropdown
    //     cy.get('.p-card-content')
    //       .find('.form-group').contains(label).siblings('p-dropdown')
    //       .find('div[role="button"]').click();
      
    //     // Em seguida, encontre a opção no dropdown e clique nela

    //     cy.get('.ng-trigger')
    //       .find('ul[role="listbox"]')
    //       .find('p-dropdownitem')
    //       .contains(valor)
    //       .click({ force: true })

    //       cy.get('p-dropdownitem')
    //       .contains(valor)
    //       .click({ force: true })

    // }

    
    
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
