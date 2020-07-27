import { html } from "lit-html";
import "../template-sources/nzgovt-import/FileUpload.css";

export default {
  title: "nzgovt-import",
  component: "FileUpload",
};

export const FileUpload = () => html`<div class="g-fileUpload__form-group">
  <label class="g-fileUpload__label">
    Upload a file
  </label>
  <input class="g-fileUpload__input" name="example" type="file" />
</div> `;
