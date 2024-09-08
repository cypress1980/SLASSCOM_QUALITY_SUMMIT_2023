describe("Asseration In Cypress", () => {
  it("Implict Asseration", () => {
    cy.visit("https://example.com");
    cy.get("h1").should("contain", "Welcome"); // Implicit assertion
  });

  it("Explicit Assertion", () => {
    cy.visit("https://example.com");
    cy.get("h1").then(($h1) => {
      const text = $h1.debug().text();
      expect(text).to.contain("Welcome"); // Explicit assertion
    });
  });
});
