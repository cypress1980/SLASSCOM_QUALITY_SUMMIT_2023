import "cypress-iframe";
import { isTypedArray } from "lodash";
describe("Tutorialspoint Test", function () {
  // test case
  it(" Example 1 iframe", function () {
    // launch URL
    cy.visit("https://jqueryui.com/draggable/");
    // frame loading
    cy.frameLoaded(".demo-frame");
    //shifting focus
    cy.iframe()
      .find("#draggable")
      .then(function (t) {
        const frmtxt = t.text();
        //assertion to verify text
        expect(frmtxt).to.contains("Drag me around");
        cy.log(frmtxt);
      });
  });
  it("Example 2 iframe Using the Plugin", function () {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    cy.iframe('#mce_0_ifr').clear().type("Hi Test Tribe.");
  });
});
