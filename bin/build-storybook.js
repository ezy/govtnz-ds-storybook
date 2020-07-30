const fs = require("fs");
const fsPromises = fs.promises;
const glob = require("glob-promise");
const path = require("path");

const readFile = (fileName) => {
  return new Promise((resolve) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) throw err;
      return data;
    });
    resolve();
  });
};

const makeStorybook = (sourceFolder) => {
  let writeStories = async (nameSpace) => {
    const filePath = `src/template-sources/${sourceFolder}/${nameSpace}`;
    let htmlfile = "",
      mdxFile = "";
    try {
      htmlfile = await fsPromises.readFile(`${filePath}.html`);
      if (await fs.existsSync(`${filePath}.mdx`)) {
        mdxFile = await fsPromises.readFile(`${filePath}.mdx`);
      }
      const storyPattern = () => `import { Story, Preview, Meta } from "@storybook/addon-docs/blocks";
      import { action } from "@storybook/addon-actions";
      
      import "../template-sources/${sourceFolder}/${nameSpace}.css";
      
      # Storybook Docs for ${nameSpace}
      
      <Meta title="${sourceFolder}" />
      
      ## Story definition
      
      Hallelujah! HTML is working out of the box without modification.
      How you like them apples?!
      
      ${mdxFile}
      
      <Story name="${nameSpace}" height="100px">
        {\` ${htmlFile.toString().replace(/\n/g, "")} \`}
      </Story>
      `;
      const storyPath = `src/stories/${nameSpace}.stories.mdx`;
      fs.writeFileSync(storyPath, storyPattern());
      let files = await glob(
        path.join(`src/template-sources/${sourceFolder}`, "*.html"),
      );
      files.map((file) => {
        const fileBaseName = file
          .replace(`src/template-sources/${sourceFolder}/`, "")
          .replace(".html", "");
        writeStories(fileBaseName);
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

makeStorybook("govtnz-import");
makeStorybook("custom");
