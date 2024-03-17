describe("API Mocking in Cypress using cy.intercept Methid ", () => {
  beforeEach(() => {
    cy.visit("https://demo.realworld.io/");
    cy.intercept("GET", "https://api.realworld.io/api/tags", {
      fixture: "mockTags.json",
    });
    cy.intercept(
      "GET",
      "https://api.realworld.io/api/articles?limit=10&offset=0",
      { fixture: "mockArticles.json" }
    );
  });

  it("Mock API Tags, and then validate on UI", () => {
    cy.get(".tag-list", { timeout: 1000 })
      .should("contain", "Cypress")
      .and("contain", "Playwright");
  });

  it("Mock the Article feed, and then validate on UI", () => {
    cy.get("app-favorite-button.pull-xs-right").contains("10");
    cy.get(".author").contains("Kailash Pathak");
    cy.get(".preview-link > p").contains("SLASSCOM QUALITY SUMMIT 2023");
  });
});
