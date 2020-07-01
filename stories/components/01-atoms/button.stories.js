import { html } from "lit-html";

export const Button = () => {
  const btnClass = "o-btn";
  const btnText = "Default Button";
  return html`<button class="btn ${btnClass}">${btnText}</button>`;
};
