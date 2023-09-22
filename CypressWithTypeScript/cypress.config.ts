import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://dev.seaplify.com',
    //defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    sign_up_url: '/sign-up',
    login_url: '/login',
    login_api_url: 'https://sailajob-be.azurewebsites.net/auth/login',
    dashboard_url: '/dashboard',
    jobs_url: '/jobs'
  },
});
