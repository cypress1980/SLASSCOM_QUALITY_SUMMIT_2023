describe("Cypress Test Case to Check Speed", () => {
  it("Login - Add To Card - Remove the added Product -- And Logout- -", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get("#react-burger-menu-btn").click();
    //cy.pause()
    cy.get("#logout_sidebar_link").click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it.only('CypressStudioExample1', function() {
    cy.viewport('iphone-xr')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    cy.pau
    cy.get('#input-email').clear('lambdatestnew@yopmail.com');
    cy.get('#input-email').type('lambdatestnew@yopmail.com');
    cy.get('#input-password').clear('L');
    cy.get('#input-password').type('Lambda123');
    cy.get('form > .btn').click();
    cy.get(':nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex').click();
    cy.get('#input-lastname').clear('Test1235');
    cy.get('#input-lastname').type('Test12356');
    cy.get('.float-right > .btn').click();
    cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]').click();
    /* ==== End Cypress Studio ==== */
  });
});

//cy.log()
//console.log()
//Cypress runner
//cy.pause()

//Screenshot
//VIDEO
