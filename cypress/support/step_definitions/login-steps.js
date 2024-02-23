import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import loginActions from "../action-definitons/login-actions"

Given('que acessei a pagina de login do Filt', () => { loginActions.acessarPagina() })

When('preencho o campo CPF com o valor {string}', (cpf) => { loginActions.preencherCampoCPF(cpf) });

And('preencho o campo Senha com o valor {string}', (senha) => { loginActions.preencherCampoSenha(senha) });

And('envio o formulário de login', () => { loginActions.enviarFormularioLogin() });

Then('o nome de usuário {string} deve estar visível', (nomeVisivel) => { loginActions.verificarNomeUsuarioVisivel(nomeVisivel) });
