import { html } from "lit-html";
import "../template-sources/nzgovt-import/Radio.css";

export default {
  title: "nzgovt-import",
  component: "Radio",
};

export const Radio = () => html`<input
  class="g-radios__input"
  name="example"
  type="radio"
/> `;
