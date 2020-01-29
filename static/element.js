import {PolymerElement, html} from "/lib/polymer/polymer-element.js";
import "/lib/polymer/iron-icons.js";
import '/lib/polymer/dom-repeat.js';
import 'https://code.jquery.com/jquery-1.12.4.js';
import 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
import 'https://code.jquery.com/jquery-1.12.4.js';

class IconToggle extends PolymerElement {
    static get template() {
        return html`
      <style>
        /* shadow DOM styles go here */
        span {
          color: blue;
        }
        :host {
          display: inline-block;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <span>Not much here yet.</span>
    `;
    }

    constructor() {
        super();
    }

}

customElements.define('icon-toggle', IconToggle);

class DemoElement extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      
      <h3>Statically-configured icon-toggles</h3>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
        
      <h3>Data-bound icon-toggle</h3>
      <!-- use a computed binding to generate the message -->
      <div><span>[[_message(isFav)]]</span></div>
      <!-- curly brackets ({{}}} allow two-way binding --> 
      <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>
      <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>
    `;
    }

    _message(fav) {
        if (fav) {
            return 'You really like me!';
        } else {
            return 'Do you like me?';
        }
    }

}

customElements.define('demo-element', DemoElement);


class CmpList extends PolymerElement {
    static get template() {
        return html`
   <div> Employee list: </div>
    <dom-repeat items="{{employees}}">
      <template>
        <div>------------------------------</div>
        <div>First name: <span>{{item.first}}</span></div>
        <div>Last name: <span>{{item.last}}</span></div>
      </template>
    </dom-repeat>`;
    }

    static get is() {
        return 'cmp-list';
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

customElements.define('cmp-list', CmpList);

class CmpWin extends PolymerElement {
    static get template() {
        return html`
asdfasdfasfasd
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
sample - element


class CmpWin2 extends PolymerElement {
    static get template() {
        return html`
      <style>
        .red {
          color: red;
        }
      </style>
      <div class="hello">Hello</div>
      <button on-click="toggleClass">Toggle</button>
       `;
    }

    static get is() {
        return 'cmp-win2';
    }

    static get properties() {
        return {
            employees: {
                value() {
                    return {
                        bgc: {
                            type: String,
                            observer: 'bgcChanged'
                        }
                    };
                }
            }
        };
    }
}

customElements.define('cmp-win2', CmpWin);

