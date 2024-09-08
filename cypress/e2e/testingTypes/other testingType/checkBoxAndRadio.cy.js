describe("Responsive Design Test", () => {
  beforeEach(() => {
    //cy.visit("http://autopract.com/selenium/form5/");
  });

  it.only('checks all checkboxes with one command', () => {
    cy.visit('https://bit.ly/3vswFBe')
    cy.get('#check input[type="checkbox"]')
      .as('checkboxes')
      .check()

    cy.get('@checkboxes')
      .each(checkbox => {
        expect(checkbox[0].checked).to.equal(true)
      })
  })
  it("Select all Checkboxes and Radio Buttons", () => {
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
