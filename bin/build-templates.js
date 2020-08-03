const fs = require("fs");
const jsdom = require("jsdom");
const glob = require("glob-promise");
const path = require("path");

const { generateTemplates } = require("metacomponent");

const fsPromises = fs.promises;

const generateFilesOfType = 'REACT';
const templateType = (type, nameSpace) => {
  const templates = {
    REACT: `react/${nameSpace}.tsx`,
    REACT_STYLED: `react-styled-components/${nameSpace}.tsx`,
    VUE: `vue/${nameSpace}.js`,
    VUE_JSX: `vue-jsx/${nameSpace}.ts`,
    ANGULAR: `angular/${nameSpace}.ts`
  };
  return templates[type]
};

const { JSDOM } = jsdom;
const jsdomInstance = new JSDOM(``, { pretendToBeVisual: true });

const makeJSFiles = async (sourceFolder) => {
  let writeJS = async (nameSpace) => {
    const filePath = `src/template-sources/${sourceFolder}/${nameSpace}`;
    let htmlFile = "",
      cssFile = "";
    try {
      htmlFile = await fsPromises.readFile(`${filePath}.html`);
      cssFile = await fsPromises.readFile(`${filePath}.css`);
    } catch (error) {
      throw new Error(error);
    }
    const result = generateTemplates({
      domDocument: jsdomInstance.window.document,
      templateId: nameSpace,
      metaHTMLString: htmlFile.toString(),
      cssString: cssFile.toString(),
      haltOnErrors: true,
    });
    jsdomInstance.window.close();
    const fileNameSpace = templateType(generateFilesOfType, nameSpace);
    const target = `dist/${fileNameSpace}`;
    await fsPromises.mkdir(`dist/${generateFilesOfType.toLowerCase()}`, { recursive: true });
    fs.writeFileSync(target, result.files[fileNameSpace]);
  };
  let files = await glob(
    path.join(`src/template-sources/${sourceFolder}`, "*.html"),
  );
  files.map((file) => {
    const fileBaseName = file
      .replace(`src/template-sources/${sourceFolder}/`, "")
      .replace(".html", "");
    writeJS(fileBaseName);
  });
};

// makeJSFiles("govtnz-import");
makeJSFiles("custom");
