import { html } from "lit-html";
    import "../template-sources/nzgovt-import/Button.css";
    
    export default {
      title: "nzgovt-import",
      component: "Button",
    };
    
    export const Button = () =>
      html`<button class="g-button g-button--secondary">
  Example text
</button>
`;