const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: "https://erp-homologacao.viasoft.com.br/pt/",
    specPattern: "cypress/Scenarios/**/*.{js,jsx,ts,tsx,feature}",
  },
  
});
