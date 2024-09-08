// type definitions for Cypress object "cy"
// <reference types="cypress" />
import testUserData from "../../fixtures/example.json"
describe('Automation Test Suite - Fixtures', function () {

    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
      cy.fixture('example').then(function (data) {
        this.data = data;
      })
    })
  
    it('Cypress Test Case - Understanding Fixtures', function () {
  
      //Provide the data read from the fixture
      cy.visit('https://shop.demoqa.com/my-account/');
      //cy.get('#reg_username').type(testUserData.Username);
      cy.get('#reg_username').type(this.data.Username);
      cy.get('#reg_email').type(this.data.Email);
      cy.get('#reg_password').type(this.data.Password)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      //cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
      //cy.get('.woocommerce-Button').should('be.disabled');
  
      // Clicking on to register on the Website by entering new password 
      cy.get('#reg_password').type(this.data.NewPassword);
      cy.get('.woocommerce-Button').click();
  
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', this.data.Username);
    })
  })