declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Gets an input or textarea field based on its visible label text.
       * Works with both for-linked and nested-label structures.
       * @param labelText - The text of the label
       */
      getFieldByLabel(labelText: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add(
  "getFieldByLabel",
  (labelText: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy
      .contains("label", labelText)
      .invoke("attr", "for")
      .then((id) => {
        if (id) {
          // Label is linked to input via "for"
          return cy.get(`#${id}`);
        } else {
          // Input is nested inside label
          return cy.contains("label", labelText).find("input, textarea");
        }
      });
  },
);
