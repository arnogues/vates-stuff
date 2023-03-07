/* To test one test, add .only on a it : it.only() 
   It will show the last state of the test
   You can also add a return before the end of the function to show a step
   and check the visual state of the page
*/

describe("Deploy", () => {
  beforeEach(() => {
    Cypress.Keyboard.defaults({
      keystrokeDelay: 0,
    });
    Cypress.Screenshot.defaults({
      overwrite: true,
    });
    cy.viewport(1280, 1200);
    cy.visit("http://localhost:8000/XCP-ng-index.html");
  });
  it("Xen Orchestra Page", () => {
    cy.get("html").screenshot();
  });

  it("close the modal", () => {
    cy.contains("Quick deploy").click();
    // button X of modal
    cy.get(".modal").should("be.visible");
    cy.get(".close-modal").click();
    cy.get(".modal").should("not.be.visible");
    cy.contains("Quick deploy").click();
    cy.get(".modal").should("be.visible");
    cy.contains("Close").click();
    cy.get(".modal").should("not.be.visible");
  });

  it.only("Xen Orchestra Quick Deploy Spinner", () => {
    cy.clock();

    // mock session.ligin_with_password
    require("./mocks/jsonRpc.js");
    cy.contains("Quick deploy").click();

    // connect
    cy.get("#pwd").type("password");
    cy.contains("Connect").click();

    // Xen Orchestra Quick Deploy form
    cy.get("#ip").type("127.0.0.1:8000");
    cy.get("#gateway").type("127.0.0.1");
    cy.get("#dns").type("1.1.0.0");
    cy.contains("Next").click();

    // Xen orchestra Quick Deploy form 2
    cy.get("#updaterEmail").type("update@vates.fr");
    cy.get("#updaterPwd").type("password");
    cy.get("#xoaPwd").type("password");

    cy.intercept("POST", "api", {
      status: 200,
      delay: 1000,
      body: {
        result: "rue",
      },
    });

    cy.contains("Deploy").click();
    cy.contains("Deploy").first().screenshot();
    return;
    cy.contains("XOA is ready! Redirecting…").should("be.visible");
    cy.tick(3000);
    cy.origin("http://127.0.0.1:8000", () => {
      cy.location("href").should("match", /127.0.0.1/);
    });
  });
});
