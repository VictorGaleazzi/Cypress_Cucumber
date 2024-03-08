import { When } from 'cypress-cucumber-preprocessor/steps';
import pessoaActions from '../Actions/PessoaActions'

When(`clico no botão {string} no Formulário de Pessoa`, (param) => { pessoaActions.clickButton(param) });

When(`seleciono o campo {string} com valor {string} na tela de Pessoa`, (param, valor) => { pessoaActions.selecionarOpcao(param, valor) });

When(`preencho o campo {string} com o valor {string} na tela de Pessoa`, (param, texto) => { pessoaActions.preencherCampo(param, texto) });