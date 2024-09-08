Cypress.Commands.add("loginIntoApplication", (userName,email,password,newPassword) => {
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
});