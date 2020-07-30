/* global window */
import { addParameters } from "@storybook/web-components";

const SOURCE_REGEX = /^\(\) => [`'"](.*)['`"]$/;

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  docs: {
    iframeHeight: "200px",
    transformSource: (src) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    },
  },
});
