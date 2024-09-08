describe('Example to demonstrate the handling of new browser windows in cypress', () => {

    it('Handling new Browser Tab', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        
        //The first approach involves manipulating the target attribute to open the link in the same tab in a below way:

        cy.get('.example > a').invoke('removeAttr', 'target').click()


    //***The second approach involves directly manipulating the target attribute of the link to “_self”
        //which will also result in the link opening in the same tab. Therefore, if the “target” attribute is set to “_self”, 
        //the link will open in the same tab.
       
        //cy.get('.example > a').invoke("attr", "target", "_self").click();


        cy.url().should('include', '/windows/new');
        cy.get('h3').should('have.text', 'New Window')
        
        ///go back to the previous tab
        //cy.go('back') 
        //cy.go(-1)
    })
})