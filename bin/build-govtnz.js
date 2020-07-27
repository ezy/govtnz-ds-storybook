const fs = require("fs-extra");
const path = require("path");

const htmlPath = "node_modules/@govtnz/ds/build/html";
const cssPath = "node_modules/@govtnz/ds/build/css";

const target = path.join("src", "template-sources", "govtnz-import");

try {
  console.log(
    "Begin copying html and css from govtnz-ds to src/template-sources",
  );
  // TODO: only copy html and css files
  fs.copySync(htmlPath, target);
  fs.copySync(cssPath, target);
  console.log("Copying govtnz-ds to src/template-sources complete");
} catch (err) {
  console.error(err);
}
