// cypress.config.js
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Relatório de Testes",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  // suas configs usuais
  modifyObstructiveCode: true,
  viewportWidth: 1300,
  viewportHeight: 720,
  defaultCommandTimeout: 20000,
  env: { baseUrl: "https://serverest.dev/" },

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/features/**/*.feature",
  },
});
