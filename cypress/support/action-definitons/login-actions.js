class LoginActions {

    acessarPagina() {
        cy.visit('https://erp-homologacao.viasoft.com.br/pt/login')
    }

    preencherCampoCPF(cpf) {
        cy.get('#username').focus().type(cpf);
    }

    preencherCampoSenha(senha) {
        cy.get('#password').focus().type(senha);
    }

    enviarFormularioLogin() {
        cy.get('form').submit().wait(5000);
    }

    verificarNomeUsuarioVisivel(nomeVisivel) {
        cy.get('.perfil-container').contains(nomeVisivel).should('be.visible');
    }
}
export default new LoginActions 