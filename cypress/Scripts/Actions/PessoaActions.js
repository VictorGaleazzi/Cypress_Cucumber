class PessoaActions {

    clickButton() {
        cy.get('app-header-grid').find('button').contains('Novo').click();
    }

    selecionarOpcao(label, valor) {
        cy.selectOption(label, valor)
    }
    
    preencherCampo(param, texto) {

    //     let fodase = cy.get('.p-card-content').find('.form-group')
    //         .contains(param).its('[0].htmlFor').then((value) => {
    //             fodase = value; // Armazena o valor da propriedade htmlFor
    //           });
        
    //         cy.get(`#`+value).debug()
    // }

    cy.get('.p-card-content').find('.form-group').contains(param)
    cy.get('input[name="teacher[0].number"]').type('8000-1612023')

    cy.get('.p-card-content').find('.form-group').invoke('attr', 'innerHtml').then((param) => 

        cy.get('.p-card-content')
        .find('.form-group')
        .find('label')
        .invoke('attr','for')
        .should('eq', 'nome') // Verifica se o elemento label possui o atributo 'for'
        .then(($el) => {
            cy.get('#nome').type('123')
            // cy.wrap($el).should('have.attr', 'for', 'nome'); 
        })
        )
    }

    // cy.get('.p-card-content')
    // .find('.form-group')
    // .contains(param)
    // .should('exist') // Verifica se o elemento label existe
    // .then(($el) => {
    //     cy.wrap($el).should('have.attr', 'for', 'nome'); // Verifica se o atributo 'for' tem o valor 'nome'
    // });
  
  
    // preencherCampo(param, texto) {
    //     cy.get('.p-card-content').find('.form-group')
    //         .find('#nome')

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
