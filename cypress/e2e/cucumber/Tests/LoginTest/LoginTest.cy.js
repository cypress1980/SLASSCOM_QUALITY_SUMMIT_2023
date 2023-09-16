/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../../Pages/LoginPage/LoginPage.cy";
Given("I navigate to the Website", () => {
login.enterURL();
});
When("I entered valid credential", (datatable) => {
datatable.hashes().forEach((element) => {
login.enterUserNamePassword(element.email, element.validpassword);
login.clickSubmitButton()
});
});
And("User click on sign in button", () => {
login.clickSubmitButton();
});
Then("Validate the title after login", () => {
login.verifyPageTitle();
});