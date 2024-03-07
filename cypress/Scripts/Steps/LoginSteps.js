import { Before, Given, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions from '../Actions/LoginActions';

Before(() => {
    loginActions.login()
    cy.visit('/')
  });

Given(`cliquei no menu {string}`, (param) => {
    loginActions.menuButton(param)
});

And(`cliquei no primeiro sub-menu {string}`, (param) => {
    loginActions.firstSubMenu(param)
});

And(`cliquei no segundo sub-menu {string}`, (param) => {
    loginActions.secondSubMenu(param)
});