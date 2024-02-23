class MarcaItemActions {

    mostrarMenu() {
        cy.get('.toolbar-menu').find('button').click()
    }

    botãoCadastros() {
        cy.get('.itens-menu-principal').contains('Cadastros').click()
    }
    botãoItens() {
        cy.get('.item').contains('Itens').click()
    }
    botãoMarca() {
        cy.get('[ng-reflect-router-link="/fiscal/marca"]').contains('Marca').click()
    }
    botãoNovo() {
        cy.get('.breadcrumb-right').find('button').contains('Novo').click()
    }

    preencherCampo(texto) {
        cy.get('#descricao').type(texto)
    }

    botãoSalvar() {
        cy.get('.breadcrumb-right').find('button').contains('Salvar').click()
    }

    botãoHome() {
        cy.get('.perfil-container').contains().should('be.visible');
    }
}
export default new MarcaItemActions 