describe("API Mocking in Cypress using cy.intercept Methid ", () => {
  beforeEach(() => {
    cy.visit("https://demo.playwright.dev/api-mocking/");
    cy.intercept("GET", "*/**/api-mocking/api/v1/fruits", {
      fixture: "mockNewTags.json",
    });
  });

  it("Mock API List of Fruits, and then validate on UI", () => {
    cy.get(".py-4", { timeout: 1000 })
      .should("contain", "Fruit 14")
      .and("contain", "Fruit 10");
  });
});
