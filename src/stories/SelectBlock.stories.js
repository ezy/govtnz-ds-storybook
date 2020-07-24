import { html } from "lit-html";
      import "../template-sources/nzgovt-import/SelectBlock.css";
      
      export default {
          title: "nzgovt-import",
          component: "SelectBlock",
      };
      
      export const SelectBlock = () => html`<div>
  <label class="g-selectBlock-label">
    Example label text
  </label>
  <select class="g-selectBlock-select" name="example">
    <option>Options</option>
  </select>
</div>
`;