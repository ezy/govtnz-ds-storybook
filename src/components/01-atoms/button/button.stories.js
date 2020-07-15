/* eslint-disable import/extensions */
import { html } from "lit-html";
// import "./button.js";
import { CustomButton } from './button.js';

customElements.define('cb', CustomButton);

export default {
  title: "Button",
  component: "custom-button",
};

export const GovtButton = () =>
  html`${CustomButton()}`;
