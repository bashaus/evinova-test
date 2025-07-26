import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the accordion content {string}", (paragraph: string) => {
  cy.contains("p", paragraph).should("be.visible");
});

Then("I should not see the accordion content {string}", (paragraph: string) => {
  cy.contains("p", paragraph).should("not.be.visible");
});
