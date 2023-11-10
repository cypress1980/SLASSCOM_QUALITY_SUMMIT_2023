describe("Cypress Visual Testing Demo", () => {
  it("Navigate to QAAuyomationLabs home page", () => {
    cy.visit("https://qaautomationlabs.com/");
    //cy.visit('https://www.saucedemo.com/')
    cy.compareSnapshot("home-page", 0.01);
  });
});