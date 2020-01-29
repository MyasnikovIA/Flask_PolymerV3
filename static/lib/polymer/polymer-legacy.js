/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { LegacyElementMixin } from '/lib/polymer/legacy-element-mixin.js';
export { Polymer } from '/lib/polymer/polymer-fn.js';
/* template elements */

import '/lib/polymer/templatizer-behavior.js';
import '/lib/polymer/dom-bind.js';
import '/lib/polymer/dom-repeat.js';
import '/lib/polymer/dom-if.js';
import '/lib/polymer/array-selector.js';
/* custom-style */

import '/lib/polymer/custom-style.js';
/* bc behaviors */

import '/lib/polymer/mutable-data-behavior.js';
/* import html-tag to export html */

export { html } from '/lib/polymer/html-tag.js'; // bc

export const Base = LegacyElementMixin(HTMLElement).prototype;