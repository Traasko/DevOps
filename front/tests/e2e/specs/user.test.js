describe("User", () => {
  it("test display users", () => {
    cy.intercept(
        {
          method: "GET",
          url: "/users",
        },
        {
          statusCode: 200,
          body: {
            users: [{id: 1, pseudo : "pseudo", email : "test@mail.com"}],
          },
        }
    ).as("USERS_ENDPOINT");

    cy.visit("/");

    cy.wait("@USERS_ENDPOINT");

    cy.get("#1").should('have.text', 'test@mail.com');

  });
});
