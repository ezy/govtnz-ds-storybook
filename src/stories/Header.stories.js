import { html } from "lit-html";
      import "../template-sources/nzgovt-import/Header.css";
      
      export default {
          title: "nzgovt-import",
          component: "Header",
      };
      
      export const Header = () => html`<header class="g-header" role="banner">
  Example header content
</header>
`;