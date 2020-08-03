import fs from "fs";
import jsdom from "jsdom";
import glob from "glob-promise";
import path from "path";

import * as metacomponent from "metacomponent";
const { generateTemplates } = metacomponent.default;

const fsPromises = fs.promises;
const { JSDOM } = jsdom;

/**
 * Change the string in generateFilesOfType to one of the object keys in templateType().templates
 * to output a specific set of js templates
 */
const generateFilesOfType = "REACT";

export const templateType = (type, nameSpace) => {
  const templates = {
    REACT: `react/${nameSpace}.tsx`,
    REACT_STYLED: `react-styled-components/${nameSpace}.tsx`,
    VUE: `vue/${nameSpace}.js`,
    VUE_JSX: `vue-jsx/${nameSpace}.ts`,
    ANGULAR: `angular/${nameSpace}.ts`,
  };
  return templates[type];
};

export const makeJSFiles = async (sourceFolder, outputFolder) => {
  console.log(`started components build for ${sourceFolder}`);
  let writeJS = async (nameSpace) => {
    const filePath = `src/template-sources/${sourceFolder}/${nameSpace}`;
    let htmlFile = "",
      cssFile = "";
    try {
      if (fs.existsSync(`${filePath}.html`)) {
        htmlFile = await fsPromises.readFile(`${filePath}.html`);
      }
      if (fs.existsSync(`${filePath}.css`)) {
        cssFile = await fsPromises.readFile(`${filePath}.css`);
      }
      const jsdomInstance = new JSDOM(``, { pretendToBeVisual: true });
      const result = generateTemplates({
        domDocument: jsdomInstance.window.document,
        templateId: nameSpace,
        metaHTMLString: htmlFile.toString(),
        cssString: cssFile.toString(),
        haltOnErrors: true,
      });
      jsdomInstance.window.close();
      const fileNameSpace = templateType(generateFilesOfType, nameSpace);
      const target = `${outputFolder}/${fileNameSpace}`;
      await fsPromises.mkdir(
        `${outputFolder}/${generateFilesOfType.toLowerCase()}`,
        { recursive: true },
      );
      fs.writeFileSync(target, result.files[fileNameSpace]);
      return;
    } catch (error) {
      throw new Error(error);
    }
  };
  let files = await glob(
    path.join(`src/template-sources/${sourceFolder}`, "*.html"),
  );
  await Promise.all[
    files.map((file) => {
      const fileBaseName = file
        .replace(`src/template-sources/${sourceFolder}/`, "")
        .replace(".html", "");
      writeJS(fileBaseName);
    })
  ];
  console.log(`finished components build for ${sourceFolder}`);
};

(async function () {
  await makeJSFiles("govtnz-import", "dist");
  await makeJSFiles("custom", "dist");
})();
