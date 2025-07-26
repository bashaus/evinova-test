import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the homepage", () => {
  cy.visit("/");
});

Given("I am on the contact page", () => {
  cy.visit("/contact-us");
});

Then("I should be on the About page", () => {
  cy.url().should("include", "/about");
});
