import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(
  "I should see the error message {string} next to the field {string}",
  (message: string, label: string) => {
    cy.getFieldByLabel(label)
      .closest(".item-column-form")
      .find(".alert-input-form")
      .should("contain", message);
  },
);

Then(
  "I should not see an error message adjacent to the field {string}",
  (label: string) => {
    cy.getFieldByLabel(label)
      .closest(".item-column-form")
      .find(".alert-input-form")
      .should("not.be.visible");
  },
);
