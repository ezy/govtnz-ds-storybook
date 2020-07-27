import { html } from "lit-html";
import "../template-sources/govtnz-import/MainNavLink.css";

export default {
  title: "govtnz-import",
  component: "MainNavLink",
};

export const MainNavLink = () => html`<li class="g-main-nav__link">
  <a class="g-main-nav__link__a" href="example">
    Example item text
  </a>
</li> `;
