import { html } from "lit-html";
import "../template-sources/govtnz-import/Textarea.css";

export default {
  title: "govtnz-import",
  component: "Textarea",
};

export const Textarea = () => html`<textarea
  class="g-textarea"
  name="example"
  autocomplete="example"
></textarea> `;
