describe('Cypress Commands to Verify Updating Password / new Password', function () {

    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
      cy.fixture('example').then(function (data) {
        this.data = data;
      })
    })
  
    it('Cypress Test Case - Understanding Fixtures', function () {
        cy.visit('https://shop.demoqa.com/my-account/');
        cy.loginIntoApplication(this.data.Username,this.data.Email,this.data.Password,this.data.NewPassword)

    })
  })