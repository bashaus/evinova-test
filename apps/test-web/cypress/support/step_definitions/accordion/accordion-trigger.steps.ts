import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the accordion trigger for {string}", (label: string) => {
  cy.contains("button", label).click();
});

Then(
  "I should see an expanded accordion trigger for {string}",
  (label: string) => {
    cy.contains("button", label).should("have.attr", "aria-expanded", "true");
  },
);

Then(
  "I should not see an expanded accordion trigger for {string}",
  (label: string) => {
    cy.contains("button", label).should("have.attr", "aria-expanded", "false");
  },
);
