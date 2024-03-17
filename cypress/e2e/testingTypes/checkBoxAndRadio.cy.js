describe("Responsive Design Test", () => {
  beforeEach(() => {
    cy.visit("http://autopract.com/selenium/form5/");
  });

  xit("Select all Checkboxes and Radio Buttons", () => {
    cy.get('[type="checkbox"]').check();
    //cy.get('[type="radio"]').check();
    cy.get('[type="radio"]').last().check();
  });
  it("Select a Checkbox or Radio Button using a value ", () => {
    cy.get('[type="radio"]').check("IN");
    cy.get('[type="checkbox"]').check("three");
  });
  it("Select multiple checkboxes using values ", () => {
    cy.get("input[name='count']").check(["three", "four"]);
  });
  it("Verify currently selected checkboxes or radio button", () => {
    //Select checkbox using div id and :checked property
    cy.get("#countries :checked").should("be.checked").and("have.value", "one");

    // Select radio button using multiple attributes and values
    cy.get("input[name='country'][checked='checked']")
      .should("be.checked")
      .and("have.value", "US");
  });
});
