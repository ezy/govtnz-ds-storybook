import { document } from "global";
import { storiesOf } from "@storybook/web-components";
import "./custom-button.js";

storiesOf("Buttons", module).add("custom-button", () => {
  const el = document.createElement("custom-button");
  return el;
});
