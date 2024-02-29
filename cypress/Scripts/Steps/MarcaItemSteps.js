import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import marcaItemActions from '../Actions/MarcaItemActions'

When(`preencho o campo {string} do filtro com valor {string}`, (label, codigo) => { marcaItemActions.prenchoFiltro(label, codigo) });

When(`clico no botão {string}`, (botão) => { marcaItemActions.clickButton(botão) });

When(`preencho o campo {string} com o valor {string}`, (campo, texto) => { marcaItemActions.preencherCampo(campo, texto) });

When(`clico no botão {string} no Formulário de Marca Item`, (botãoFormulário) => { marcaItemActions.botãoFormulário(botãoFormulário) });

When(`seleciono o registro com id {string}`, (registro) => { marcaItemActions.getRegistro(registro) });

Then(`armazeno o valor do ID`, () => { marcaItemActions.salvaId() });