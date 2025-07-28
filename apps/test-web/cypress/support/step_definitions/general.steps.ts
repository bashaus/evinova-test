import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: "@xFail" }, function () {
  cy.log("This test is expected to fail.");
});
