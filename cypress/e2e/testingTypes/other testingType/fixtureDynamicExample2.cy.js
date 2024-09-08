import testUserData from "../../fixtures/example.json";
describe("Automation Test Suite - Fixtures With Dynamic Data", function () {
  //Use the cy.fixture() method to pull data from fixture file
  /*before(function () {
      cy.fixture('example').then(function (data) {
        this.data = data;
      })
    })*/

  it("Cypress Test Case - Understanding Fixtures", function () {
    cy.visit("https://shop.demoqa.com/my-account/");

    cy.fixture("fixtureDynamic")
      .its("data")
      .then((user) => {
        user.forEach((user) => {
            cy.log("Kailash - - - ",user)
          cy.get("#reg_username").clear().type(user.Username);
          //cy.get('#reg_username').type(this.data.Username);
          cy.get("#reg_email").clear().type(user.Email);
          cy.get("#reg_password").clear().type(user.Password);

          //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
          //cy.get(".woocommerce-Button").should("have.attr","disabled","disabled");
          //cy.get(".woocommerce-Button").should("be.disabled");

          // Clicking on to register on the Website by entering new password
          cy.get("#reg_password").clear().type(user.NewPassword);
          cy.get(".woocommerce-Button").click();

          //Checking whether the Registration is successful and whether UserName is populated under login section
          cy.get("#username").should("have.value", user.Username);
        });
      });
  });
});
