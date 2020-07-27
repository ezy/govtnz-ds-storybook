import { html } from "lit-html";
import "../template-sources/govtnz-import/Select.css";

export default {
  title: "govtnz-import",
  component: "Select",
};

export const Select = () => html`<select class="g-select" name="example">
  <option>Options</option>
</select> `;
