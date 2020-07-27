import { html } from "lit-html";
import "../template-sources/custom/A.css";

export default {
  title: "custom",
  component: "A",
};

export const A = () => html`<a class="g-link example" href="example">
  Example text
</a> `;
