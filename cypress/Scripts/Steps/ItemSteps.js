import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import itemActions from '../Actions/ItemActions'

When(`clico no botão {string} na tela de Item`, (botão) => { itemActions.clickButton(botão) });

When(`preencho o campo {string} com o valor {string} na tela de Item`, (label, valor) => { itemActions.preencherCampo(label , valor) });

When(`clico no botão {string} no Formulário de Item`, (botão) => { itemActions.botãoFormulário(botão) });

When(`seleciono o campo {string} com o valor {string} na tela de Item`, (label, valor) => { itemActions.selecionarOpcao(label, valor) })

Then(`armazeno o valor do ID na tela de Item`, () => { itemActions.salvaId() });
