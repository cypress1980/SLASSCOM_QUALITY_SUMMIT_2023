describe("Example to demonstrate API Mocking in Cypress using cy.intercept", () => {
  beforeEach(() => {
    cy.visit("https://angular.realworld.io/");
    cy.intercept("GET", "https://api.realworld.io/api/tags", {
      fixture: "tags.json",
    });
    cy.intercept(
      "GET",
      "https://api.realworld.io/api/articles?limit=10&offset=0",
      { fixture: "articles.json" }
    );
  });

  it("Mock the Tags from the API Response and then validate on UI", () => {
    cy.get(".tag-list", { timeout: 10000 })
      .should("contain", "Cypress")
      .and("contain", "Playwright");
  });

  it("Mock the Article feed from the API Response and then validate on UI", () => {
    cy.get("app-favorite-button.pull-xs-right").contains("10");
    cy.get(".author").contains("Kailash Pathak");
    cy.get(".preview-link > p").contains("This is a test description");
  });
});
