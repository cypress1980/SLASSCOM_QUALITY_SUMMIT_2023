describe('Example for JavaScript Alerts, Confirm, Prompt in Cypress', () => {
    it("Test Failure when trying to find incorrect locator- error Message", () =>
    {
        cy.on("fail", (err, runnable) => {
            cy.log(err.message);
            return false;
          });
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login" )
    cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com")
     cy.get('[id="input-password"]').type("Cypress1234!!")
     cy.get('[value="Login"]').click()
     cy.get(".err.message").should("be.visible")
    })
  })

  //https://www.lambdatest.com/learning-hub/exception-handling-in-cypress#unexpected