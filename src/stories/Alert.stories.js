import { html } from "lit-html";
import "../template-sources/govtnz-import/Alert.css";

export default {
  title: "govtnz-import",
  component: "Alert",
};

export const Alert = () => html`<div
    aria-atomic="true"
    aria-live="polite"
    role="note"
  >
    <div class="g-alert g-alert--info">
      Example alert content
    </div>
  </div>

  <div role="note">
    <div class="g-alert g-alert--info">
      Example alert content
    </div>
  </div>

  <div aria-atomic="true" aria-live="polite" role="note">
    <div class="g-alert g-alert--warning">
      Example alert content
    </div>
  </div>

  <div aria-atomic="true" aria-live="polite" role="note">
    <div class="g-alert g-alert--warning">
      Example alert content
    </div>
  </div>

  <div aria-atomic="true" aria-live="polite" role="note" tabindex="-1">
    <div class="g-alert g-alert--success">
      Example alert content
    </div>
  </div>

  <div aria-atomic="true" aria-live="polite" role="note" tabindex="-1">
    <div class="g-alert g-alert--success">
      Example alert content
    </div>
  </div>

  <div aria-atomic="true" aria-live="polite" role="note" tabindex="-1">
    <div class="g-alert g-alert--error">
      Example alert content
    </div>
  </div>

  <div aria-atomic="true" aria-live="polite" role="note" tabindex="-1">
    <div class="g-alert g-alert--error">
      Example alert content
    </div>
  </div>

  <div role="note">
    <div class="g-alert g-alert--info">
      Example alert content
    </div>
  </div>

  <div role="note">
    <div class="g-alert g-alert--info">
      Example alert content
    </div>
  </div>

  <div role="note">
    <div class="g-alert g-alert--warning">
      Example alert content
    </div>
  </div>

  <div role="note">
    <div class="g-alert g-alert--warning">
      Example alert content
    </div>
  </div>

  <div role="note" tabindex="-1">
    <div class="g-alert g-alert--success">
      Example alert content
    </div>
  </div>

  <div role="note" tabindex="-1">
    <div class="g-alert g-alert--success">
      Example alert content
    </div>
  </div>

  <div role="note" tabindex="-1">
    <div class="g-alert g-alert--error">
      Example alert content
    </div>
  </div>

  <div role="note" tabindex="-1">
    <div class="g-alert g-alert--error">
      Example alert content
    </div>
  </div> `;
