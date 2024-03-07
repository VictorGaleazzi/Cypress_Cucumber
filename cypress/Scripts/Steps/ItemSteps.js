import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import itemActions from '../Actions/ItemActions'

When(`clico no botão {string} na tela de Item`, (param) => { itemActions.clickButton(param) });

When(`preencho o campo {string} com o valor {string} na tela de Item`, (param, valor) => { itemActions.preencherCampo(param , valor) });

When(`clico no botão {string} no Formulário de Item`, (param) => { itemActions.botãoFormulário(param) });

When(`seleciono o campo {string} com o valor {string} na tela de Item`, (param, valor) => { itemActions.selecionarOpcao(param, valor) })

Then(`armazeno o valor do ID na tela de Item`, () => { itemActions.salvaId() });
