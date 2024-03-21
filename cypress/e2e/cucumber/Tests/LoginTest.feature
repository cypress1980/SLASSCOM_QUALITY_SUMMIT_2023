Feature: I want to login into the site with valid data

  Background: Navigate to the Website
    Given I navigate to the Website

@SmokeTest
  Scenario: Login as new sign up user with valid data
    When I entered valid credential
      | email                  | validpassword |
      | lambdatest@yopmail.com | lambdatest    |
    And User click on sign in button
    Then Validate the title after login

@SanityTest
  Scenario: Login as new sign up user with valid data
    When I entered valid credential
      | email                  | validpassword |
      | lambdatest@yopmail.com | lambdatest    |
    And User click on sign in button
    Then Validate the title after login