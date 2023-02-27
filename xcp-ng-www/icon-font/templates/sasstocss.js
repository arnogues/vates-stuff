const sass = require("sass");
const fs = require("fs");

function main() {
  let sassString = fs.readFileSync("./build/icons.scss", "utf8");
  sassString += "\n@include icons;";
  let cssString = sassToCss(sassString);
  fs.writeFileSync("./build/icons.css", cssString);
}

function sassToCss(sassString) {
  return sass.compileString(sassString).css.toString();
}

main();
