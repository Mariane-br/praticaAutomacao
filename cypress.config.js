const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            baseUrl: 'https://www.saucedemo.com',
        }
    },
});