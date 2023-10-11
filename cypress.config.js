const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    failOnStatusCode: false,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
