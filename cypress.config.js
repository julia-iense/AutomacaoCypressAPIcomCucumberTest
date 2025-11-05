const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  modifyObstructiveCode: true,
  projectId: 'test-master',
  viewportWidth: 1300,
  viewportHeight: 720,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 50000,
  retries: { runMode: 1 },
  env: { baseUrl: `https://serverest.dev/` },
  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber());
    },
    supportFile: 'cypress/support/e2e.js',
    baseUrl: `https://serverest.dev/`,
    specPattern: ['cypress/features/**/*.feature'],
  },
});