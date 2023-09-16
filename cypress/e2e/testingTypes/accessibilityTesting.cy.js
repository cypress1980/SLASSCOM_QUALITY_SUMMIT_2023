/// <reference types="cypress" />
describe("Accessibility Tests", () => {
  beforeEach(() => {
    cy.visit("https://qaautomationlabs.com/");
    cy.injectAxe();
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
