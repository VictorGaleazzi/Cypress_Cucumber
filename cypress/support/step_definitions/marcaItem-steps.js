import { When } from 'cypress-cucumber-preprocessor/steps';
import marcaItemActions from '../action-definitons/marcaItem-actions'

When(`clico no botão Mostrar menu`, () => { marcaItemActions.mostrarMenu() });

When(`clico no botão Cadastros`, () => { marcaItemActions.botãoCadastros() });

When(`clico no botão Itens`, () => { marcaItemActions.botãoItens() });

When(`clico no botão Marca`, () => { marcaItemActions.botãoMarca() });

When(`clico no botão Novo`, () => { marcaItemActions.botãoNovo() });

When(`preencho o campo descrição com o valor {string}`, (texto) => { marcaItemActions.preencherCampo(texto) });

When(`clico no botão Salvar`, () => { marcaItemActions.botãoSalvar() });

// When(`clico no botão Home`, () => { marcaItemActions.botãoHome() });