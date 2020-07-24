import { html } from "lit-html";
import "./button.js";

export default {
  title: "Button",
  component: "custom-button",
};

export const GovtButton = () =>
  html`<CustomButton class="btn">Test</CustomButton>`;
