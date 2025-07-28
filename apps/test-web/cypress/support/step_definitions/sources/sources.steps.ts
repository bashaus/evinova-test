import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("The page has sources", () => {
  cy.get("#sources");
});

Then("It should contain valid links", () => {
  cy.get("#sources")
    .closest("section")
    .find("a:not([href^='#']")
    .each(($el) => {
      const href = $el.prop("href");
      if (href) {
        cy.request({
          url: href,
          failOnStatusCode: false,
        })
          .its("status")
          .should("eq", 200);
      }
    });
});
