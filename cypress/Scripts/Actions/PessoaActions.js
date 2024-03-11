class PessoaActions {

    clickButton() {
        cy.get('app-header-grid').find('button').contains('Novo').click();
    }

    selecionarOpcao(label, valor) {
        cy.selectOption(label, valor)
    }

    preencherCampo(param, texto) {

        cy.fillField(param, texto)
        // cy.get('.p-card-content')
        //     .find('.form-group')
        //     .find('label')
        //     .contains(param)
        //     .invoke('attr', 'for')
        //     .then((forValue) => {
        //         // Verifica se o atributo 'for' existe e não é nulo
        //         if (forValue) {
        //             // Usa o valor do atributo 'for' para selecionar o elemento pelo ID
        //             cy.get(`#${forValue}`).type(texto);
        //         } else {
        //             // Caso o atributo 'for' não exista ou seja nulo
        //             cy.log('O atributo "for" não foi encontrado ou é nulo');
        //         }
        //     });
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
