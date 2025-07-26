import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I have an empty field for {string}", (label: string) => {
  cy.getFieldByLabel(label).clear();
});

When(
  "I type {string} in the field for {string}",
  (value: string, label: string) => {
    cy.getFieldByLabel(label).type(value);
  },
);
