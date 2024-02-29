import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import filtroActions from '../Actions/FiltroActions'

Given(`que cliquei no botão {string}`, (label) => { filtroActions.filtroMarca(label) });

Given(`que cliquei no botão {string} na janela de filtro`, (label) => { filtroActions.envioFiltroForm(label) });

When(`preencho o campo {string} do filtro com valor {string}`, (label, codigo) => { filtroActions.prenchoFiltro(label, codigo) });
