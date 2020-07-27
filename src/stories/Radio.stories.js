import { html } from "lit-html";
import "../template-sources/govtnz-import/Radio.css";

export default {
  title: "govtnz-import",
  component: "Radio",
};

export const Radio = () => html`<input
  class="g-radios__input"
  name="example"
  type="radio"
/> `;
