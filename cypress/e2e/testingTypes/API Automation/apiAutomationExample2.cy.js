describe("API Automation Using GoRest API", () => {
  let randomNumber = Math.floor(Math.random() * 1000);
  let userId;
  let token;
  it("POST API Automation Using GoRest API", () => {
    const user = {
      username: "admin",
      password: "password123",
    };
    cy.request({
      method: "POST",
      url: "https://restful-booker.herokuapp.com/auth",
      /*headers: {
        Authorization:
          "Bearer 84bb7773414ee1a1247f6830428a2ab051d763d7cb24c97583f10ca96a59ddde",
      },*/
      body: user,
    }).then((response) => {
      token = response.body.token;
      expect(response.status).to.equal(200);
      cy.log("Genereted Token",token)
      //expect(response.body.data.name).to.equal(user.name);
      //expect(response.body.data.email).to.equal(user.email);
    });
  });
});
