/* eslint-disable import/extensions */
import { html } from "lit-element";
import "../src/components/04-templates/demo-card/demo-card.js";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Demo Card",
  component: "demo-card",
  decorators: [withA11y],
};

export const Front = () => html` <demo-card>A simple card</demo-card> `;

export const Back = () => html`
  <demo-card back-side>A simple card</demo-card>
`;

export const FrontOwnHeader = () => html`
  <demo-card header="My own Header">A simple card</demo-card>
`;

export const BackWithData = () => html`
  <demo-card
    back-side
    .rows=${[
      { header: "health", value: "200" },
      { header: "mana", value: "100" },
    ]}
  >
    A simple card
  </demo-card>
`;
