describe('a negative results should warn the user', () => {
  it("displays an error message with negative numbers", () => {
    cy.visit("http://localhost:3001");
    cy.get("#weight").type("-90");
    cy.get("#height").type("140");
    cy.get("#Calculate").click();
    cy.get("#results").should("contain", "negative numbers");
  });
});