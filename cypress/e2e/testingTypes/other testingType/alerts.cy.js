describe('Example for JavaScript Alerts, Confirm, Prompt in Cypress', () => {
    beforeEach(() => {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })
  
    it(' Validate JS Alert Text and then Click on  OK button', () => {
      cy.contains('Click for JS Alert').click()
      //cy.on(): This is a Cypress command that allows you to listen for specific events during the test execution.
      //'window:alert': This is the event name that Cypress listens for. Specifically,

      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am a JS Alert')
      })

      cy.on('window:confirm', () => true)
      cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
  
    it('Validate JS Confirm Text and Click OK', () => {
      cy.contains('Click for JS Confirm').click()
      cy.on('window:confirm', (str) => {
        expect(str).to.equal(`I am a JS Confirm`)
      })
      cy.on('window:confirm', () => true)
      cy.get('#result').should('have.text', 'You clicked: Ok')
    })
  
    it('Handling JS Confirm - By Clickin on Cancel button', () => {
      cy.contains('Click for JS Confirm').click()
      cy.on('window:confirm', () => false)
      cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
  
    it.only('Input text in prompt, Click OK and Validate Input Text', () => {
        // cy.window(): gets the global window object of the browser.
        //.then(($win) => {...}) is a callback function that receives the window object as $win.
      cy.window().then((winObj) => {
        cy.stub(winObj, 'prompt').returns('Hi,Test Tribe')
        cy.contains('Click for JS Prompt').click()
      })
      cy.get('#result').should('have.text', 'You entered: Hi,Test Tribe')
    })
})
  //https://docs.cypress.io/api/cypress-api/catalog-of-events