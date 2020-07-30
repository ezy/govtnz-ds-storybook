const fs = require("fs");
const fsPromises = fs.promises;
const glob = require("glob-promise");
const path = require("path");

const makeStorybook = async (sourceFolder) => {
  console.log(`starting build of ${sourceFolder}`);
  let writeStories = async (nameSpace) => {
    const filePath = `src/template-sources/${sourceFolder}/${nameSpace}`;
    let htmlFile = "",
      mdxFile = "";
    try {
      htmlFile = await fsPromises.readFile(`${filePath}.html`);
      if (fs.existsSync(`${filePath}.mdx`)) {
        mdxFile = await fsPromises.readFile(`${filePath}.mdx`);
      }
    } catch (error) {
      throw new Error(error);
    }
    const storyPattern = () => `import { Story, Preview, Meta } from "@storybook/addon-docs/blocks";
import { action } from "@storybook/addon-actions";
import { html } from "lit-html";

import "../template-sources/${sourceFolder}/${nameSpace}.css";

# Storybook Docs for ${nameSpace}

<Meta title="${sourceFolder}" />

## Story definition

Hallelujah! HTML is working out of the box without modification.
How you like them apples?!

${mdxFile}

<Preview>
  <Story name="${nameSpace}" height="100px">
    {html\` ${htmlFile.toString().replace(/\n/g, "")} \`}
  </Story>
</Preview>
    `;
    const storyPath = `src/stories/${nameSpace}.stories.mdx`;
    fs.writeFileSync(storyPath, storyPattern());
  };
  let files = await glob(
    path.join(`src/template-sources/${sourceFolder}`, "*.html"),
  );
  files.map((file) => {
    const fileBaseName = file
      .replace(`src/template-sources/${sourceFolder}/`, "")
      .replace(".html", "");
    writeStories(fileBaseName);
  });
  console.log(`finished build of ${sourceFolder}`);
};

(async function () {
  await makeStorybook("govtnz-import");
  await makeStorybook("custom");
})();
