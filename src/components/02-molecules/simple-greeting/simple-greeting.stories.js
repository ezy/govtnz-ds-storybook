import { document } from "global";
import { storiesOf } from "@storybook/web-components";
import { html } from "lit-element";
import "./simple-greeting.js";

storiesOf("Simple Greeting", module).add("simple-greeting", () => {
  const a = document.createElement("simple-greeting");
  return a;
});

// storiesOf("Simple Greeting", module)
//   .add("simple-greeting", () => {
//     const el = document.createElement("simple-greeting");
//     return el;
//   })
//   .add("simple-greeting-alternative", () => {
//     return html`<simple-greeting></simple-greeting>`;
//   });
