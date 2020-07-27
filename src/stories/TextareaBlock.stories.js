import { html } from "lit-html";
import "../template-sources/govtnz-import/TextareaBlock.css";

export default {
  title: "govtnz-import",
  component: "TextareaBlock",
};

export const TextareaBlock = () => html`<div class="g-textareaBlock-form-group">
  <label class="g-textareaBlock-label">
    Label text
  </label>

  <div class="g-textareaBlock-hint">
    Hint text
  </div>

  <div class="g-textareaBlock-error-message">
    <span class="g-textareaBlock-visually-hidden">
      Error:
    </span>
    Error text
  </div>

  <textarea
    class="g-textareaBlock-textarea g-textareaBlock-textarea--width-30"
    name="example"
    autocomplete="example"
  ></textarea>
</div> `;
