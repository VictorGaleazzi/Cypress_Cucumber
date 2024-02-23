const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: "https://erp-homologacao.viasoft.com.br/pt/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // env: {
    //   hideXhr: true
    // }
  },
  
});
