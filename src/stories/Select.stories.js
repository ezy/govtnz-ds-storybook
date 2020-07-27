import { html } from "lit-html";
import "../template-sources/nzgovt-import/Select.css";

export default {
  title: "nzgovt-import",
  component: "Select",
};

export const Select = () => html`<select class="g-select" name="example">
  <option>Options</option>
</select> `;
