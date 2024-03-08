const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    retries: 2,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    // includeShadowDom: true,
    // trashAssetsBeforeRuns: true,
    baseUrl: "https://erp-homologacao.viasoft.com.br/pt/",
    specPattern: "cypress/Scenarios/**/*.{js,jsx,ts,tsx,feature}",
  },
  
});
