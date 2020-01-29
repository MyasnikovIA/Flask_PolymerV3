import { PolymerElement, html } from "/lib/polymer/polymer-element.js";

class CmpWin extends PolymerElement {
    static get template() {
        return html`
      ----PolymerElement cmp-win  ывапждывалпжвылдапэжваылп----
       `;
    }

    static get is() {
        return 'cmp-win';
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

customElements.define('cmp-win', CmpWin);
