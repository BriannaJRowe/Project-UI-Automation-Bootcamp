const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //base url and spec pattern
    baseUrl: 'https://ui-automation-camp.vercel.app/', 
    specPattern: 'cypress/e2e/test/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,

  },
});
