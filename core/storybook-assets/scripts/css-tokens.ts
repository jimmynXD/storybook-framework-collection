import { colors } from "../src/msk-colors";
import fs from "fs";
import path from "path";
const rootVariables = Object.entries(colors)
  .flatMap(([brand, brandColors]) => {
    return Object.entries(brandColors).flatMap(([colorName, colorShades]) => {
      return Object.entries(colorShades).map(([shade, hex]) => {
        const variableName = `--${brand}-${colorName}-${shade}`;
        return `${variableName}: ${hex};`;
      });
    });
  })
  .join("\n");

const css = `:root {
  ${rootVariables}
}`;

// create new src folder if it doesn't exist
if (fs.existsSync("./styles")) {
  if (fs.existsSync("./styles/msk-colors.css")) {
    fs.unlinkSync("./styles/msk-colors.css");
  }
} else {
  fs.mkdirSync("./styles");
}

fs.writeFileSync(path.join(__dirname, "../styles/msk-colors.css"), css);

console.log("Successfully compiled css color tokens");
