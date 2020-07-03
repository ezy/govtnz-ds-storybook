import { LitElement, html } from "lit-element";

export class SimpleGreeting extends LitElement {
  constructor() {
    this.name = "World";
  }
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define("simple-greeting", SimpleGreeting);
