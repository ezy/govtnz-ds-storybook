import { html } from "lit-html";
import "../template-sources/nzgovt-import/MainNavLink.css";

export default {
  title: "nzgovt-import",
  component: "MainNavLink",
};

export const MainNavLink = () => html`<li class="g-main-nav__link">
  <a class="g-main-nav__link__a" href="example">
    Example item text
  </a>
</li> `;
