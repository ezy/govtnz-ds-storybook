import { html } from "lit-html";
import "../template-sources/govtnz-import/FooterLink.css";

export default {
  title: "govtnz-import",
  component: "FooterLink",
};

export const FooterLink = () => html`<li class="g-footer-link">
  <a class="g-footer-link__a" href="example">
    Example header content
  </a>
</li> `;
