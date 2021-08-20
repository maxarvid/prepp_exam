describe("User can check their BMI", () => {
  it("user can enter weight and height", () => {
    cy.visit("http://localhost:3001");
    cy.contains("BMI Calculator");
    cy.get("#weight").type("90");
    cy.get("#height").type("186");
    cy.get("#Calculate").click();
  });
  it("displays a BMI value of 24.80", () => {
    cy.get("#results").should("contain", "24.80");
  });
  it("displays a message of you are Overweight", () => {
    cy.get("#results").should("contain", "Overweight");
  });
});
