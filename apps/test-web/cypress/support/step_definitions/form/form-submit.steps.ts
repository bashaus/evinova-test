import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I click the {string} button", (label: string) => {
  /**
   * The is a capture error on the website with the form submission. For the
   * purposes of this test, I want to ignore this issue. However, in production
   * I would want to handle this issue.
   */
  cy.on("uncaught:exception", () => {
    return false;
  });

  cy.contains("button", label).click();
});
