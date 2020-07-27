import { html } from "lit-html";
import "../template-sources/govtnz-import/RadioBlock.css";

export default {
  title: "govtnz-import",
  component: "RadioBlock",
};

export const RadioBlock = () => html`<div class="g-radios__item">
  <input class="g-radios__input" name="example" type="radio" />
  <label class="g-radios__label">
    Label text
  </label>

  <div class="g-radios__hint">
    Hint text
  </div>
</div> `;
