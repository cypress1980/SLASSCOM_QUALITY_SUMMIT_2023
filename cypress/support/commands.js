import '../support/logincommands'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//require('cypress-xpath');

Cypress.Commands.add("getiframe", (iframe) => {
  cy.get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});

/*Cypress.Commands.add("loginIntoApplication", (userName,email,password,newPassword) => {
      //Provide the data read from the fixture

      //cy.get('#reg_username').type(testUserData.Username);
      cy.get('#reg_username').type(userName);
      cy.get('#reg_email').type(email);
      cy.get('#reg_password').type(password)
      cy.log();
      console.log()
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      //cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
      //cy.get('.woocommerce-Button').should('be.disabled');
  
      // Clicking on to register on the Website by entering new password 
      cy.get('#reg_password').type(newPassword);
      cy.get('.woocommerce-Button').click();
  
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', userName);
});*/
