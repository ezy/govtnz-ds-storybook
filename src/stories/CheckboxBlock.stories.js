import { html } from "lit-html";
import "../template-sources/nzgovt-import/CheckboxBlock.css";

export default {
    title: "nzgovt-import",
    component: "CheckboxBlock",
};

export const CheckboxBlock = () => html`<div class="g-checkboxes__item">
  <input class="g-checkboxes__input" type="checkbox" name="example" />
  <label class="g-checkboxes__label">Label text</label>

  <div class="g-checkboxes__hint">
    Hint text
  </div>

  <div class="g-error-message">
    <span class="g-visually-hidden">
      Error:
    </span>
    Error text
  </div>
</div>
`;