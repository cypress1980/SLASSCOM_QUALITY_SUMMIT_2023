describe("API Mocking in Cypress using cy.intercept Method ", () => {
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
      .should("contain", "The Bug Detective")
      .and("contain", "Nigeria Software Testers");
  });

  it("Mock the Article feed, and then validate on UI", () => {
    cy.get("h1").contains("Welcome to Test Feast 2024");
    cy.get(".author").contains("Kailash Pathak");
    cy.get(".preview-link > p").contains("Nigeria Software Testing Qualification Board");
  });
});
