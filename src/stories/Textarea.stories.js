import { html } from "lit-html";
import "../template-sources/nzgovt-import/Textarea.css";

export default {
    title: "nzgovt-import",
    component: "Textarea",
};

export const Textarea = () => html`<textarea class="g-textarea" name="example" autocomplete="example"></textarea>
`;