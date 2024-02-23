import { Before, Given, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions2 from '../action-definitons/newLoginAction';

Before(() => {
    // Executa o login antes de cada cenário
    loginActions2.login();
  });

// Given(`que acessei o Sistema`, () => {
//     loginActions2.login()
//     // [Given] Sets up the initial state of the system.
// });

And(`cliquei no menu {string}`, (menu) => {
    loginActions2.menuButton(menu)
    // [Given] Sets up the initial state of the system.
});

And(`cliquei no sub-menu {string}`, (firstSubMenu) => {
    loginActions2.firstSubMenu(firstSubMenu)
    // [Given] Sets up the initial state of the system.
});

And(`cliquei no segundo sub-menu {string}`, (secondSubMenu) => {
    loginActions2.secondSubMenu(secondSubMenu)
    // [Given] Sets up the initial state of the system.
});