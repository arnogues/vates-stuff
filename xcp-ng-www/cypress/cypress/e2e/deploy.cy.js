describe("template spec", () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 1280);
  });
  it("passes", () => {
    cy.visit("http://localhost:8000/XCP-ng-index.html");
  });
});
