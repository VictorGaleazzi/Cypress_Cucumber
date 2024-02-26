import { When } from 'cypress-cucumber-preprocessor/steps';
import marcaItemActions from '../Actions/MarcaItemActions'

When(`clico no botão Novo`, () => { marcaItemActions.botãoNovo() });

When(`preencho o campo descrição com o valor {string}`, (texto) => { marcaItemActions.preencherCampo(texto) });

When(`clico no botão Salvar`, () => { marcaItemActions.botãoSalvar() });

// When(`clico no botão Home`, () => { marcaItemActions.botãoHome() });