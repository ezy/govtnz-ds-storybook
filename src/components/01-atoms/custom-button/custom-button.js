import { html, LitElement } from "lit-element";

class CustomButton extends LitElement {
  render() {
    return html` <button>🚀Rocket Science</button> `;
  }
}

customElements.define("custom-button", CustomButton);
