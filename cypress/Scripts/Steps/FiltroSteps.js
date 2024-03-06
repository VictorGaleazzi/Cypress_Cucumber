import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import filtroActions from '../Actions/FiltroActions'

Given(`que cliquei no botão {string}`, (label) => { filtroActions.filtroMarca(label) });

When(`clico no botão {string} no Formulário de Marca Item`, (botãoFormulário) => { filtroActions.botãoFormulário(botãoFormulário) });

When(`clico no botão Filtrar na janela de filtro`, () => { filtroActions.envioFiltroForm() });

When(`preencho o campo {string} do filtro com valor {string}`, (label, codigo) => { filtroActions.prenchoFiltro(label, codigo) });
