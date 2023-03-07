const { spawn } = require("node:child_process");

const cliArgs = process.argv.slice(2);

console.log(cliArgs);

const ws = spawn("npm", ["run", "ws", "--", "--directory", cliArgs[0]]);

ws.stdout.on("data", (data) => {
  console.log(`WS stdout: ${data}`);
});

ws.stderr.on("data", (data) => {
  console.error(`WS stderr: ${data}`);
});

ws.on("close", (code) => {
  console.log(`WS child process exited with code ${code}`);
});

const cypress = spawn("npm", ["run", "cypress:run"]);

cypress.stdout.on("data", (data) => {
  console.log(`Cypress stdout: ${data}`);
});

cypress.stderr.on("data", (data) => {
  console.error(`Cypress stderr: ${data}`);
});

cypress.on("close", (code) => {
  console.log(`Cypress child process exited with code ${code}`);
});

const closeAllProcesses = () => {
  ws.kill();
  cypress.kill();
};

process.on("SIGINT", closeAllProcesses);
process.on("SIGTERM", closeAllProcesses);
process.on("SIGUSR1", closeAllProcesses);
process.on("SIGUSR2", closeAllProcesses);
