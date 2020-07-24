const fs = require("fs");

const writeStories = async (sourceFolder, nameSpace) => {
  const filePath = `../template-sources/${sourceFolder}`;
  const htmlFile = fs.readFileSync(
    `src/template-sources/${sourceFolder}/${nameSpace}.html`
  );
  const storyPattern = () => `import { html } from "lit-html";
import "${filePath}/${nameSpace}.css";

export default {
    title: "${sourceFolder}",
    component: "${nameSpace}",
};

export const ${nameSpace} = () => html\`${htmlFile}\`;`;

  const storyPath = `src/stories/${nameSpace}.stories.js`;

  fs.writeFileSync(storyPath, storyPattern());
};

try {
  writeStories("nzgovt-import", "Button");
} catch (error) {
  throw new Error(error);
}
