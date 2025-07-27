import { resolve } from "node:path";

import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { defineConfig } from "cypress";

export default defineConfig({
  reporter: resolve(
    __dirname,
    "..",
    "..",
    "node_modules",
    "cypress-mochawesome-reporter",
  ),
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },

  e2e: {
    /**
     * @override process.env.CYPRESS_BASE_URL
     */
    baseUrl: "https://www.evinova.com",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },

    specPattern: "**/*.feature",
  },
});
