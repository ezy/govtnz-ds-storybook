import { html } from "lit-html";
      import "../template-sources/overide/A.css";
      
      export default {
          title: "overide",
          component: "A",
      };
      
      export const A = () => html`<a class="g-link example" href="example">
  Example text
</a>
`;