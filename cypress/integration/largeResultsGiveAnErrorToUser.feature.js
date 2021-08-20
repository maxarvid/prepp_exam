describe("a very large result should warn the user", () => {
  it("too large for our BMI categories", () => {
    cy.visit("localhost:3001");
    cy.get("#weight").type("500000");
    cy.get("#height").type("0.0001");
    cy.get("#Calculate").click();
    cy.get("#results").should('contain', 'breaking this website');
  });
});
