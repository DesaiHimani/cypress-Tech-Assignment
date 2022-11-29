const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    specPattern: "cypress/e2e/*/*.*",
    baseUrl: "https://wave-trial.getbynder.com",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    env: {
      allureReuseAfterSpec: true,
    }
  }
});
