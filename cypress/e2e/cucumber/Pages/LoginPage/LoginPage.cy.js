class LoginPage {
   enterURL() {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
  }
   enterUserNamePassword(username, password) {
    cy.get('[id="input-email"]').type(username);
    cy.get('[id="input-password"]').type(password);
    return this;
  }
   clickSubmitButton() {
    cy.get('[type="submit"]').eq(2).click();
    return this;
  }
   verifyPageTitle() {
    return cy.title().should("eq", "My Account");
  }
}
const login = new LoginPage();
export default login;