import { PolymerElement, html } from "/lib/polymer/polymer-element.js";

class CmpButton extends PolymerElement {
    static get template() {
        return html`
      ----PolymerElement cmp-button----
       `;
    }

    static get is() {
        return 'cmp-button';
    }

    static get properties() {
        return {
            employees: {
                value() {
                    return [
                        {first: 'Bob', last: 'Smith'},
                        {first: 'Sally', last: 'Johnson'},
                    ];
                }
            }
        };
    }
}
customElements.define('cmp-button', CmpButton);