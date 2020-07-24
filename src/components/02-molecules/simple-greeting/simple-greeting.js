import { html, LitElement } from "lit-element";

export class SimpleGreeting extends LitElement {
  render() {
    return html`<p>Hello!</p>`;
  }
}

customElements.define("simple-greeting", SimpleGreeting);
