import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I have declined cookies", () => {
  cy.contains("Decline All Optional").click();
});
