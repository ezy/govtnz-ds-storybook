import { html } from "lit-html";
// import button from "@govtnz/ds";

export const CustomButton = () => {
  const btnClass = "o-btn";
  const btnText = "Default Button";
  return html`<button class="btn ${btnClass}">${btnText}</button>`;
};
