const fs = require("fs");
const glob = require("glob-promise");
const path = require("path");

const makeStorybook = (sourceFolder) => {
  const writeStories = (nameSpace) => {
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

  glob(path.join(`src/template-sources/${sourceFolder}`, "*.html"))
    .then((files) => {
      files.map((file) => {
        const fileBaseName = file
          .replace(`src/template-sources/${sourceFolder}/`, "")
          .replace(".html", "");
        writeStories(fileBaseName);
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

makeStorybook("nzgovt-import");
makeStorybook("custom");
