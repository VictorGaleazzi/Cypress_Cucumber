import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import marcaItemActions from '../Actions/MarcaItemActions' 

When(`clico no botão {string} na tela de Marca Item`, (param) => { marcaItemActions.clickButton(param)})

When(`preencho o campo {string} com o valor {string}`, (param, texto) => { marcaItemActions.preencherCampo(param, texto) });

When(`clico no botão {string} no Formulário de Marca Item`, (param) => { marcaItemActions.botãoFormulário(param) });

When(`seleciono o registro com ultimo id`, () => { marcaItemActions.getRegistro() });

Then(`armazeno o valor do ID`, () => { marcaItemActions.salvaId() });