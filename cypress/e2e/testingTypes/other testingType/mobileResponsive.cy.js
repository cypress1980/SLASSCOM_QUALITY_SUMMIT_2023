describe("Responsive Design Test", () => {
  beforeEach(() => {
    //cy.viewport('iphone-x')
    cy.visit("https://qaautomationlabs.com/");
  });

  it("In iipad-2 Open URL and Click on Menu - > Blog", () => {
    cy.viewport("ipad-2");
    cy.xpath("(//a[normalize-space()='Blog'])[2]").click({ force: true });
    cy.contains("Cypress 13 Integration With BDD/Cucumber & POM");
  });
  it("In iphone-x : Open URL and Click on Menu - > Blog ", () => {
    cy.viewport("iphone-x");
    cy.xpath("(//a[normalize-space()='Blog'])[2]").click({ force: true });
    cy.contains("Cypress 13 Integration With BDD/Cucumber & POM");
  });
});
