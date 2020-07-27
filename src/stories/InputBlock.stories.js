import { html } from "lit-html";
import "../template-sources/govtnz-import/InputBlock.css";

export default {
  title: "govtnz-import",
  component: "InputBlock",
};

export const InputBlock = () => html`<div class="g-inputBlock-form-group">
  <label class="g-inputBlock-label">
    Example text
  </label>

  <div class="g-inputBlock-hint">
    Example text
  </div>

  <div class="g-inputBlock-error-message">
    <span class="g-inputBlock-visually-hidden">Error: </span>
    Example text
  </div>

  <input
    class="g-inputBlock-input g-inputBlock-input--width-30"
    name="example"
    type="example"
    autocomplete="example"
  />
</div> `;
