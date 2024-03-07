import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import filtroActions from '../Actions/FiltroActions'

Given(`que cliquei no botão {string}`, (param) => { filtroActions.filtroMarca(param) });

When(`clico no botão {string} no Formulário de Marca Item`, (param) => { filtroActions.botãoFormulário(param) });

When(`clico no botão Filtrar na janela de filtro`, () => { filtroActions.envioFiltroForm() });

When(`preencho o campo {string} do filtro com valor {string}`, (param, codigo) => { filtroActions.prenchoFiltro(param, codigo) });
