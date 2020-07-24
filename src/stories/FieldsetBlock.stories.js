import { html } from "lit-html";
      import "../template-sources/nzgovt-import/FieldsetBlock.css";
      
      export default {
          title: "nzgovt-import",
          component: "FieldsetBlock",
      };
      
      export const FieldsetBlock = () => html`<div class="g-fieldsetBlock-form-group">
  <fieldset class="g-fieldsetBlock-fieldset">
    <legend class="g-fieldsetBlock-fieldset__legend">
      Legend text
    </legend>

    <div class="g-fieldsetBlock-hint">
      Hint text
    </div>

    <div class="g-fieldsetBlock-error-message">
      <span class="g-fieldsetBlock-visually-hidden">
        Error:
      </span>
      Error text
    </div>

    <div>Fieldset contents</div>
  </fieldset>
</div>
`;