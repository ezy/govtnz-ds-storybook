const { generateTemplates } = require("metacomponent");
const jsdom = require("jsdom");

const templateType = {
  REACT: 'react',
  REACT_STYLED: 'react-styled-components',
  VUE: 'vue',
  VUE_JSX: 'vue-jsx',
  ANGULAR: 'angular',
  EMBER: 'ember'
}

const { JSDOM } = jsdom;
const jsdomInstance = new JSDOM(``, { pretendToBeVisual: true });

const result = generateTemplates({
  domDocument: jsdomInstance.window.document,
  templateId: "test",
  metaHTMLString: "<p>hello</p>",
  cssString: "p { color: red }",
  haltOnErrors: true,
});
jsdomInstance.window.close();
console.log(result);
