/// <reference types="Cypress" />

describe("Mock the POST API", () => {
  it("Mock POST API", () => {
    

    cy.intercept('GET', '*/**/api-mocking/api/v1/fruits', {
      statusCode: 201,
      body: [
        {
            "name": "Fruit 1",
            "id": 3
        },
        {
            "name": "Fruit 2",
            "id": 1
        },
        {
            "name": "Fruit 3",
            "id": 5
        },
        {
            "name": "Fruit 4",
            "id": 4
        },
        {
            "name": "Fruit 5",
            "id": 64
        },
        {
            "name": "Fruit 6",
            "id": 66
        },
        {
            "name": "Fruit 7",
            "id": 10
        },
        {
            "name": "Fruit 8",
            "id": 70
        },
        {
            "name": "Fruit 9",
            "id": 2
        },
        {
            "name": "Fruit 10",
            "id": 23
        },
        {
            "name": "Fruit 11",
            "id": 25
        },
        {
            "name": "Fruit 12",
            "id": 26
        },
        {
            "name": "Fruit 13",
            "id": 27
        },
        {
            "name": "Fruit 14",
            "id": 33
        },
        {
            "name": "Fruit 15",
            "id": 6
        },
        {
            "name": "Fruit 16",
            "id": 41
        },
        {
            "name": "Fruit 17",
            "id": 44
        }
     ]
    })
    cy.visit("https://demo.playwright.dev/api-mocking/");
    });
  })
