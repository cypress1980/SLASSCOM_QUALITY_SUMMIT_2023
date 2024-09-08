/// <reference types="Cypress" />

describe("Mock POST", () => {
  it("Mock POST API", () => {
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.intercept('POST','https://jsonplaceholder.cypress.io/comments', //POST url request
      {
        statusCode: 207,
        body: {
          name: 'Peter Pan',
          email: 'thetesttribe@qa.com',
        },
    }).as("postComment");
    cy.get(".network-post").click();
    cy.wait('@postComment').should(({ request, response }) => {
        expect(request.body).to.include('email')
        expect(request.headers).to.have.property('content-type')
        expect(response.body).to.have.property('name', 'Peter Pan')
        expect(response.body).to.have.property('email', 'thetesttribe@qa.com')
      })

  });
});