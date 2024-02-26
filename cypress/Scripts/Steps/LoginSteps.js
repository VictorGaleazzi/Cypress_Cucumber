import { Before, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions from '../Actions/LoginActions';

Before(() => {
    loginActions.login()
    cy.visit('/')
  });

And(`cliquei no menu {string}`, (menu) => {
    loginActions.menuButton(menu)
});

And(`cliquei no primeiro sub-menu {string}`, (firstSubMenu) => {
    loginActions.firstSubMenu(firstSubMenu)
});

And(`cliquei no segundo sub-menu {string}`, (secondSubMenu) => {
    loginActions.secondSubMenu(secondSubMenu)
});