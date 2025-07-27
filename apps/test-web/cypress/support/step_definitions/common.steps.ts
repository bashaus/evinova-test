import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the {string} link", (linkText: string) => {
  cy.contains(linkText).click();
});

Then("I should see a heading with {string}", (headingText: string) => {
  cy.get("h1").should("contain", headingText);
});
