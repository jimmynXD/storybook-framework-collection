import fs from "fs";
import * as sass from "sass";
import path from "path";

const inputFile = "../styles/typography-elements.scss";
const outputFile = "../styles/typography-elements.css";

const compileFile = sass.compile(path.join(__dirname, inputFile), {
  loadPaths: ["node_modules"],
});

// create new src folder if it doesn't exist
if (fs.existsSync("./styles")) {
  if (fs.existsSync("./styles/typography-elements.css")) {
    fs.unlinkSync("./styles/typography-elements.css");
  }
} else {
  fs.mkdirSync("./styles");
}

fs.writeFileSync(path.join(__dirname, outputFile), compileFile.css.toString());

console.log(
  "Successfully compiled typography-elements.scss to typography-elements.css"
);
