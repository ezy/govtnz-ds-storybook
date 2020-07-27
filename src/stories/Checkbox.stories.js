import { html } from "lit-html";
import "../template-sources/govtnz-import/Checkbox.css";

export default {
  title: "govtnz-import",
  component: "Checkbox",
};

export const Checkbox = () => html`<input
  class="g-checkboxes__input"
  type="checkbox"
  name="example"
/> `;
