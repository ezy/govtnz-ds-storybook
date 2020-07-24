import { html } from "lit-html";
      import "../template-sources/nzgovt-import/FooterLink.css";
      
      export default {
          title: "nzgovt-import",
          component: "FooterLink",
      };
      
      export const FooterLink = () => html`<li class="g-footer-link">
  <a class="g-footer-link__a" href="example">
    Example header content
  </a>
</li>
`;