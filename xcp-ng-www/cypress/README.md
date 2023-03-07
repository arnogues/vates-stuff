# Tools to start the XCP-NG deploy page

Cypress project to test the www deploy page of XCP-NG : https://github.com/xcp-ng/xcp-ng-release/blob/master/src/xenserver/opt/xensource/www/XCP-ng-index.html

## Install dependencies

```
  npm install
```

## Run cypress and http server in parallel

```
  npm start -- <xcpng-release-folder>/src/xenserver/opt/xensource/www
```

## Others commands

### Start the local static server

Start the local static server

```
  npm run ws -- --directory  <xcpng-release-folder>/src/xenserver/opt/xensource/www
```

### Run tests

```
  npm run cypress:open
```

## How to test

- Choose the type of browser, and click on "Start E2E Testing in Chrome"
- Click on the Spec File to run the tests

If you want only run one test and want it to run only one test add `.only` after the `it` function.

```js
it.only("should display the XCP-NG deploy page", () => {
  // ...
});
```

You can also add a return to avoid other commands to be executed.

```js
it("close the modal", () => {
  cy.contains("Quick deploy").click();
  cy.get(".modal").should("be.visible");
  cy.get(".close-modal").click();
  return;
  // this command will not be executed
  cy.get(".modal").should("not.be.visible");
  cy.contains("Quick deploy").click();
});
```
