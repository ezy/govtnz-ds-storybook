const fs = require("fs");
const glob = require("glob-promise");
const path = require("path");

const writeStories = (sourceFolder, nameSpace) => {
  const htmlFile = fs.readFileSync(
    `src/template-sources/${sourceFolder}/${nameSpace}.html`
  );

  const storyPattern = () => `import { html } from "lit-html";
import "../template-sources/${sourceFolder}/${nameSpace}.css";

export default {
    title: "${sourceFolder}",
    component: "${nameSpace}",
};

export const ${nameSpace} = () => html\`${htmlFile}\`;`;

  const storyPath = `src/stories/${nameSpace}.stories.js`;
  fs.writeFileSync(storyPath, storyPattern());
};

glob(path.join(`src/template-sources/nzgovt-import`, "*.html"))
  .then((files) => {
    files.map((file) => {
      file = file
        .replace("src/template-sources/nzgovt-import/", "")
        .replace(".html", "");
      writeStories("nzgovt-import", file);
    });
  })
  .catch((error) => {
    throw new Error(error);
  });
