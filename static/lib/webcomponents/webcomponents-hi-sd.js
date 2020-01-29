/**
 @license @nocompile
 Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function () {/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    'use strict';
    var n,
        p = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };

    function ba() {
        ba = function () {
        };
        p.Symbol || (p.Symbol = ca)
    }

    var ca = function () {
        var a = 0;
        return function (b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }();

    function ea() {
        ba();
        var a = p.Symbol.iterator;
        a || (a = p.Symbol.iterator = p.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return fa(this)
            }
        });
        ea = function () {
        }
    }

    function fa(a) {
        var b = 0;
        return ha(function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        })
    }

    function ha(a) {
        ea();
        a = {next: a};
        a[p.Symbol.iterator] = function () {
            return this
        };
        return a
    }

    function ia(a) {
        ea();
        ba();
        ea();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : fa(a)
    }

    function ja(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    (function (a) {
        function b(a, b) {
            if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
            return c
        }

        function c(a) {
            if (J) return a.ownerDocument !== document ? a.ownerDocument : null;
            var b = a.__importDoc;
            if (!b && a.parentNode) {
                b = a.parentNode;
                if ("function" === typeof b.closest) b = b.closest("link[rel=import]"); else for (; !h(b) && (b = b.parentNode);) ;
                a.__importDoc = b
            }
            return b
        }

        function d(a) {
            var b = m(document, "link[rel=import]:not([import-dependency])"),
                c = b.length;
            c ? t(b, function (b) {
                return g(b, function () {
                    0 === --c && a()
                })
            }) : a()
        }

        function e(a) {
            function b() {
                "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a())
            }

            document.addEventListener("readystatechange", b);
            b()
        }

        function f(a) {
            e(function () {
                return d(function () {
                    return a && a()
                })
            })
        }

        function g(a, b) {
            if (a.__loaded) b && b(); else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b(); else {
                var c = function (d) {
                    a.removeEventListener(d.type,
                        c);
                    a.__loaded = !0;
                    b && b()
                };
                a.addEventListener("load", c);
                Oa && "style" === a.localName || a.addEventListener("error", c)
            }
        }

        function h(a) {
            return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel
        }

        function k() {
            var a = this;
            this.a = {};
            this.b = 0;
            this.c = new MutationObserver(function (b) {
                return a.za(b)
            });
            this.c.observe(document.head, {childList: !0, subtree: !0});
            this.loadImports(document)
        }

        function l(a) {
            t(m(a, "template"), function (a) {
                t(m(a.content, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"],script[type="module"]'),
                    function (a) {
                        var b = document.createElement("script");
                        t(a.attributes, function (a) {
                            return b.setAttribute(a.name, a.value)
                        });
                        b.textContent = a.textContent;
                        a.parentNode.replaceChild(b, a)
                    });
                l(a.content)
            })
        }

        function m(a, b) {
            return a.childNodes.length ? a.querySelectorAll(b) : R
        }

        function t(a, b, c) {
            var d = a ? a.length : 0, e = c ? -1 : 1;
            for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) b(a[c], c)
        }

        var C = document.createElement("link"), J = "import" in C, R = C.querySelectorAll("*"), Pa = null;
        !1 === "currentScript" in document && Object.defineProperty(document, "currentScript",
            {
                get: function () {
                    return Pa || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)
                }, configurable: !0
            });
        var Gd = /(url\()([^)]*)(\))/g, Hd = /(@import[\s]+(?!url\())([^;]*)(;)/g,
            Id = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, D = {
                ta: function (a, b) {
                    a.href && a.setAttribute("href", D.P(a.getAttribute("href"), b));
                    a.src && a.setAttribute("src", D.P(a.getAttribute("src"), b));
                    if ("style" === a.localName) {
                        var c = D.fa(a.textContent, b, Gd);
                        a.textContent = D.fa(c, b, Hd)
                    }
                }, fa: function (a, b, c) {
                    return a.replace(c,
                        function (a, c, d, e) {
                            a = d.replace(/["']/g, "");
                            b && (a = D.P(a, b));
                            return c + "'" + a + "'" + e
                        })
                }, P: function (a, b) {
                    if (void 0 === D.T) {
                        D.T = !1;
                        try {
                            var c = new URL("b", "http://a");
                            c.pathname = "c%20d";
                            D.T = "http://a/c%20d" === c.href
                        } catch (af) {
                        }
                    }
                    if (D.T) return (new URL(a, b)).href;
                    c = D.ka;
                    c || (c = document.implementation.createHTMLDocument("temp"), D.ka = c, c.$ = c.createElement("base"), c.head.appendChild(c.$), c.Z = c.createElement("a"));
                    c.$.href = b;
                    c.Z.href = a;
                    return c.Z.href || a
                }
            }, Mb = {
                async: !0, load: function (a, b, c) {
                    if (a) if (a.match(/^data:/)) {
                        a =
                            a.split(",");
                        var d = a[1];
                        d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
                        b(d)
                    } else {
                        var e = new XMLHttpRequest;
                        e.open("GET", a, Mb.async);
                        e.onload = function () {
                            var a = e.responseURL || e.getResponseHeader("Location");
                            a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
                            var d = e.response || e.responseText;
                            304 === e.status || 0 === e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
                        };
                        e.send()
                    } else c("error: href must be specified")
                }
            }, Oa = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
        k.prototype.loadImports = function (a) {
            var b = this;
            a = m(a, "link[rel=import]");
            t(a, function (a) {
                return b.w(a)
            })
        };
        k.prototype.w = function (a) {
            var b = this, c = a.href;
            if (void 0 !== this.a[c]) {
                var d = this.a[c];
                d && d.__loaded && (a.__import = d, this.f(a))
            } else this.b++, this.a[c] = "pending", Mb.load(c, function (a, d) {
                a = b.Aa(a, d || c);
                b.a[c] = a;
                b.b--;
                b.loadImports(a);
                b.B()
            }, function () {
                b.a[c] = null;
                b.b--;
                b.B()
            })
        };
        k.prototype.Aa = function (a, b) {
            if (!a) return document.createDocumentFragment();
            Oa && (a = a.replace(Id, function (a, b, c) {
                return -1 ===
                a.indexOf("type=") ? b + " type=import-disable " + c : a
            }));
            var c = document.createElement("template");
            c.innerHTML = a;
            if (c.content) a = c.content, l(a); else for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            if (c = a.querySelector("base")) b = D.P(c.getAttribute("href"), b), c.removeAttribute("href");
            c = m(a, 'link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type="application/javascript"],script[type="text/javascript"],script[type="module"]');
            var d = 0;
            t(c, function (a) {
                g(a);
                D.ta(a, b);
                a.setAttribute("import-dependency", "");
                if ("script" === a.localName && !a.src && a.textContent) {
                    if ("module" === a.type) throw Error("Inline module scripts are not supported in HTML Imports.");
                    a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n")));
                    a.textContent = "";
                    d++
                }
            });
            return a
        };
        k.prototype.B = function () {
            var a = this;
            if (!this.b) {
                this.c.disconnect();
                this.flatten(document);
                var b = !1, c = !1, d = function () {
                    c &&
                    b && (a.loadImports(document), a.b || (a.c.observe(document.head, {
                        childList: !0,
                        subtree: !0
                    }), a.xa()))
                };
                this.Ca(function () {
                    c = !0;
                    d()
                });
                this.Ba(function () {
                    b = !0;
                    d()
                })
            }
        };
        k.prototype.flatten = function (a) {
            var b = this;
            a = m(a, "link[rel=import]");
            t(a, function (a) {
                var c = b.a[a.href];
                (a.__import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.__import = a, b.flatten(c), a.appendChild(c))
            })
        };
        k.prototype.Ba = function (a) {
            function b(e) {
                if (e < d) {
                    var f = c[e], h = document.createElement("script");
                    f.removeAttribute("import-dependency");
                    t(f.attributes, function (a) {
                        return h.setAttribute(a.name, a.value)
                    });
                    Pa = h;
                    f.parentNode.replaceChild(h, f);
                    g(h, function () {
                        Pa = null;
                        b(e + 1)
                    })
                } else a()
            }

            var c = m(document, "script[import-dependency]"), d = c.length;
            b(0)
        };
        k.prototype.Ca = function (a) {
            var b = m(document, "style[import-dependency],link[rel=stylesheet][import-dependency]"), d = b.length;
            if (d) {
                var e = Oa && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
                t(b, function (b) {
                    g(b, function () {
                        b.removeAttribute("import-dependency");
                        0 === --d &&
                        a()
                    });
                    if (e && b.parentNode !== document.head) {
                        var f = document.createElement(b.localName);
                        f.__appliedElement = b;
                        f.setAttribute("type", "import-placeholder");
                        b.parentNode.insertBefore(f, b.nextSibling);
                        for (f = c(b); f && c(f);) f = c(f);
                        f.parentNode !== document.head && (f = null);
                        document.head.insertBefore(b, f);
                        b.removeAttribute("type")
                    }
                })
            } else a()
        };
        k.prototype.xa = function () {
            var a = this, b = m(document, "link[rel=import]");
            t(b, function (b) {
                return a.f(b)
            }, !0)
        };
        k.prototype.f = function (a) {
            a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState =
                "complete"), a.dispatchEvent(b(a.import ? "load" : "error", {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            })))
        };
        k.prototype.za = function (a) {
            var b = this;
            t(a, function (a) {
                return t(a.addedNodes, function (a) {
                    a && a.nodeType === Node.ELEMENT_NODE && (h(a) ? b.w(a) : b.loadImports(a))
                })
            })
        };
        var Qa = null;
        if (J) C = m(document, "link[rel=import]"), t(C, function (a) {
            a.import && "loading" === a.import.readyState || (a.__loaded = !0)
        }), C = function (a) {
            a = a.target;
            h(a) && (a.__loaded = !0)
        }, document.addEventListener("load", C, !0), document.addEventListener("error",
            C, !0); else {
            var da = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
            Object.defineProperty((!da || da.configurable ? Node : Element).prototype, "baseURI", {
                get: function () {
                    var a = h(this) ? this : c(this);
                    return a ? a.href : da && da.get ? da.get.call(this) : (document.querySelector("base") || window.location).href
                }, configurable: !0, enumerable: !0
            });
            Object.defineProperty(HTMLLinkElement.prototype, "import", {
                get: function () {
                    return this.__import || null
                }, configurable: !0, enumerable: !0
            });
            e(function () {
                Qa = new k
            })
        }
        f(function () {
            return document.dispatchEvent(b("HTMLImportsLoaded",
                {cancelable: !0, bubbles: !0, detail: void 0}))
        });
        a.useNative = J;
        a.whenReady = f;
        a.importForElement = c;
        a.loadImports = function (a) {
            Qa && Qa.loadImports(a)
        }
    })(window.HTMLImports = window.HTMLImports || {});/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    function ka() {
        this.ea = this.root = null;
        this.M = !1;
        this.v = this.J = this.V = this.assignedSlot = this.assignedNodes = this.A = null;
        this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.D = void 0;
        this.aa = this.ba = !1;
        this.I = {}
    }

    ka.prototype.toJSON = function () {
        return {}
    };

    function q(a) {
        a.__shady || (a.__shady = new ka);
        return a.__shady
    }

    function r(a) {
        return a && a.__shady
    };var u = window.ShadyDOM || {};
    u.va = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var la = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    u.i = !!(la && la.configurable && la.get);
    u.W = u.force || !u.va;
    u.C = u.noPatch || !1;
    u.da = u.preferPerformance;

    function v(a) {
        return (a = r(a)) && void 0 !== a.firstChild
    }

    function w(a) {
        return "ShadyRoot" === a.ma
    }

    function ma(a) {
        return (a = (a = r(a)) && a.root) && na(a)
    }

    var x = Element.prototype,
        oa = x.matches || x.matchesSelector || x.mozMatchesSelector || x.msMatchesSelector || x.oMatchesSelector || x.webkitMatchesSelector,
        pa = document.createTextNode(""), qa = 0, ra = [];
    (new MutationObserver(function () {
        for (; ra.length;) try {
            ra.shift()()
        } catch (a) {
            throw pa.textContent = qa++, a;
        }
    })).observe(pa, {characterData: !0});

    function sa(a) {
        ra.push(a);
        pa.textContent = qa++
    }

    var ta = !!document.contains;

    function ua(a, b) {
        for (; b;) {
            if (b == a) return !0;
            b = b.__shady_parentNode
        }
        return !1
    }

    function va(a) {
        for (var b = a.length - 1; 0 <= b; b--) {
            var c = a[b], d = c.getAttribute("id") || c.getAttribute("name");
            d && "length" !== d && isNaN(d) && (a[d] = c)
        }
        a.item = function (b) {
            return a[b]
        };
        a.namedItem = function (b) {
            if ("length" !== b && isNaN(b) && a[b]) return a[b];
            for (var c = ia(a), d = c.next(); !d.done; d = c.next()) if (d = d.value, (d.getAttribute("id") || d.getAttribute("name")) == b) return d;
            return null
        };
        return a
    }

    function y(a, b, c, d) {
        c = void 0 === c ? "" : c;
        for (var e in b) {
            var f = b[e];
            if (!(d && 0 <= d.indexOf(e))) {
                f.configurable = !0;
                var g = c + e;
                if (f.value) a[g] = f.value; else try {
                    Object.defineProperty(a, g, f)
                } catch (h) {
                }
            }
        }
    }

    function z(a) {
        var b = {};
        Object.getOwnPropertyNames(a).forEach(function (c) {
            b[c] = Object.getOwnPropertyDescriptor(a, c)
        });
        return b
    };var wa = [], xa;

    function ya(a) {
        xa || (xa = !0, sa(za));
        wa.push(a)
    }

    function za() {
        xa = !1;
        for (var a = !!wa.length; wa.length;) wa.shift()();
        return a
    }

    za.list = wa;

    function Aa() {
        this.a = !1;
        this.addedNodes = [];
        this.removedNodes = [];
        this.L = new Set
    }

    function Ba(a) {
        a.a || (a.a = !0, sa(function () {
            a.flush()
        }))
    }

    Aa.prototype.flush = function () {
        if (this.a) {
            this.a = !1;
            var a = this.takeRecords();
            a.length && this.L.forEach(function (b) {
                b(a)
            })
        }
    };
    Aa.prototype.takeRecords = function () {
        if (this.addedNodes.length || this.removedNodes.length) {
            var a = [{addedNodes: this.addedNodes, removedNodes: this.removedNodes}];
            this.addedNodes = [];
            this.removedNodes = [];
            return a
        }
        return []
    };

    function Ca(a, b) {
        var c = q(a);
        c.A || (c.A = new Aa);
        c.A.L.add(b);
        var d = c.A;
        return {
            la: b, oa: d, na: a, takeRecords: function () {
                return d.takeRecords()
            }
        }
    }

    function Da(a) {
        var b = a && a.oa;
        b && (b.L.delete(a.la), b.L.size || (q(a.na).A = null))
    }

    function Ea(a, b) {
        var c = b.getRootNode();
        return a.map(function (a) {
            var b = c === a.target.getRootNode();
            if (b && a.addedNodes) {
                if (b = Array.from(a.addedNodes).filter(function (a) {
                    return c === a.getRootNode()
                }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
                    value: b,
                    configurable: !0
                }), a
            } else if (b) return a
        }).filter(function (a) {
            return a
        })
    };var Fa = /[&\u00A0"]/g, Ga = /[&\u00A0<>]/g;

    function Ha(a) {
        switch (a) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "\u00a0":
                return "&nbsp;"
        }
    }

    function Ia(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
        return b
    }

    var Ja = Ia("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        Ka = Ia("style script xmp iframe noembed noframes plaintext noscript".split(" "));

    function La(a, b) {
        "template" === a.localName && (a = a.content);
        for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
            a:{
                var h = g;
                var k = a, l = b;
                switch (h.nodeType) {
                    case Node.ELEMENT_NODE:
                        k = h.localName;
                        for (var m = "<" + k, t = h.attributes, C = 0, J; J = t[C]; C++) m += " " + J.name + '="' + J.value.replace(Fa, Ha) + '"';
                        m += ">";
                        h = Ja[k] ? m : m + La(h, l) + "</" + k + ">";
                        break a;
                    case Node.TEXT_NODE:
                        h = h.data;
                        h = k && Ka[k.localName] ? h : h.replace(Ga, Ha);
                        break a;
                    case Node.COMMENT_NODE:
                        h = "\x3c!--" + h.data + "--\x3e";
                        break a;
                    default:
                        throw window.console.error(h),
                            Error("not implemented");
                }
            }
            c += h
        }
        return c
    };var Ma = u.i, Na = {
        querySelector: function (a) {
            return this.__shady_native_querySelector(a)
        }, querySelectorAll: function (a) {
            return this.__shady_native_querySelectorAll(a)
        }
    }, Ra = {};

    function Sa(a) {
        Ra[a] = function (b) {
            return b["__shady_native_" + a]
        }
    }

    function Ta(a, b) {
        y(a, b, "__shady_native_");
        for (var c in b) Sa(c)
    }

    function A(a, b) {
        b = void 0 === b ? [] : b;
        for (var c = 0; c < b.length; c++) {
            var d = b[c], e = Object.getOwnPropertyDescriptor(a, d);
            e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Na[d] || (Na[d] = e.value) : Sa(d))
        }
    }

    var B = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        Ua = document.implementation.createHTMLDocument("inert");

    function Va(a) {
        for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b)
    }

    var Wa = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
        Xa = ["querySelector", "querySelectorAll"];

    function Ya() {
        var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
        window.EventTarget ? A(window.EventTarget.prototype, a) : (A(Node.prototype, a), A(Window.prototype, a));
        Ma ? A(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Ta(Node.prototype, {
            parentNode: {
                get: function () {
                    B.currentNode = this;
                    return B.parentNode()
                }
            }, firstChild: {
                get: function () {
                    B.currentNode = this;
                    return B.firstChild()
                }
            }, lastChild: {
                get: function () {
                    B.currentNode =
                        this;
                    return B.lastChild()
                }
            }, previousSibling: {
                get: function () {
                    B.currentNode = this;
                    return B.previousSibling()
                }
            }, nextSibling: {
                get: function () {
                    B.currentNode = this;
                    return B.nextSibling()
                }
            }, childNodes: {
                get: function () {
                    var a = [];
                    B.currentNode = this;
                    for (var c = B.firstChild(); c;) a.push(c), c = B.nextSibling();
                    return a
                }
            }, parentElement: {
                get: function () {
                    E.currentNode = this;
                    return E.parentNode()
                }
            }, textContent: {
                get: function () {
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            for (var a = document.createTreeWalker(this,
                                NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = a.nextNode();) c += d.nodeValue;
                            return c;
                        default:
                            return this.nodeValue
                    }
                }, set: function (a) {
                    if ("undefined" === typeof a || null === a) a = "";
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            Va(this);
                            (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(a), void 0);
                            break;
                        default:
                            this.nodeValue = a
                    }
                }
            }
        });
        A(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
        a = {
            firstElementChild: {
                get: function () {
                    E.currentNode = this;
                    return E.firstChild()
                }
            }, lastElementChild: {
                get: function () {
                    E.currentNode = this;
                    return E.lastChild()
                }
            }, children: {
                get: function () {
                    var a = [];
                    E.currentNode = this;
                    for (var c = E.firstChild(); c;) a.push(c), c = E.nextSibling();
                    return va(a)
                }
            }, childElementCount: {
                get: function () {
                    return this.children ? this.children.length : 0
                }
            }
        };
        Ma ? (A(Element.prototype, Wa), A(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML"]), Object.getOwnPropertyDescriptor(HTMLElement.prototype,
            "children") && A(HTMLElement.prototype, ["children"]), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && A(HTMLElement.prototype, ["innerHTML"])) : (Ta(Element.prototype, a), Ta(Element.prototype, {
            previousElementSibling: {
                get: function () {
                    E.currentNode = this;
                    return E.previousSibling()
                }
            }, nextElementSibling: {
                get: function () {
                    E.currentNode = this;
                    return E.nextSibling()
                }
            }, innerHTML: {
                get: function () {
                    return La(this, function (a) {
                        return a.__shady_native_childNodes
                    })
                }, set: function (a) {
                    var b = "template" === this.localName ?
                        this.content : this;
                    Va(b);
                    var d = this.localName || "div";
                    d = this.namespaceURI && this.namespaceURI !== Ua.namespaceURI ? Ua.createElementNS(this.namespaceURI, d) : Ua.createElement(d);
                    d.innerHTML = a;
                    for (a = "template" === this.localName ? d.content : d; d = a.__shady_native_firstChild;) b.__shady_native_insertBefore(d, void 0)
                }
            }
        }));
        A(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
        A(Element.prototype, Xa);
        A(HTMLElement.prototype, ["focus", "blur", "contains"]);
        Ma && A(HTMLElement.prototype,
            ["parentElement", "children", "innerHTML"]);
        window.HTMLTemplateElement && A(window.HTMLTemplateElement.prototype, ["innerHTML"]);
        Ma ? A(DocumentFragment.prototype, Wa) : Ta(DocumentFragment.prototype, a);
        A(DocumentFragment.prototype, Xa);
        Ma ? (A(Document.prototype, Wa), A(Document.prototype, ["activeElement"])) : Ta(Document.prototype, a);
        A(Document.prototype, ["importNode", "getElementById"]);
        A(Document.prototype, Xa)
    };var Za = z({
        get childNodes() {
            return this.__shady_childNodes
        }, get firstChild() {
            return this.__shady_firstChild
        }, get lastChild() {
            return this.__shady_lastChild
        }, get textContent() {
            return this.__shady_textContent
        }, set textContent(a) {
            this.__shady_textContent = a
        }, get childElementCount() {
            return this.__shady_childElementCount
        }, get children() {
            return this.__shady_children
        }, get firstElementChild() {
            return this.__shady_firstElementChild
        }, get lastElementChild() {
            return this.__shady_lastElementChild
        }, get innerHTML() {
            return this.__shady_innerHTML
        },
        set innerHTML(a) {
            return this.__shady_innerHTML = a
        }, get shadowRoot() {
            return this.__shady_shadowRoot
        }
    }), $a = z({
        get parentElement() {
            return this.__shady_parentElement
        }, get parentNode() {
            return this.__shady_parentNode
        }, get nextSibling() {
            return this.__shady_nextSibling
        }, get previousSibling() {
            return this.__shady_previousSibling
        }, get nextElementSibling() {
            return this.__shady_nextElementSibling
        }, get previousElementSibling() {
            return this.__shady_previousElementSibling
        }, get className() {
            return this.__shady_className
        },
        set className(a) {
            return this.__shady_className = a
        }
    }), ab;
    for (ab in Za) Za[ab].enumerable = !1;
    for (var bb in $a) $a[bb].enumerable = !1;
    var cb = u.i || u.C, db = cb ? function () {
    } : function (a) {
        var b = q(a);
        b.ba || (b.ba = !0, y(a, $a))
    }, eb = cb ? function () {
    } : function (a) {
        var b = q(a);
        b.aa || (b.aa = !0, y(a, Za))
    };
    var fb = "__eventWrappers" + Date.now(), gb = function () {
        var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
        return a ? function (b) {
            return a.get.call(b)
        } : null
    }(), hb = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0
    }, ib = {
        DOMAttrModified: !0,
        DOMAttributeNameChanged: !0,
        DOMCharacterDataModified: !0,
        DOMElementNameChanged: !0,
        DOMNodeInserted: !0,
        DOMNodeInsertedIntoDocument: !0,
        DOMNodeRemoved: !0,
        DOMNodeRemovedFromDocument: !0,
        DOMSubtreeModified: !0
    };

    function jb(a) {
        return a instanceof Node ? a.__shady_getRootNode() : a
    }

    function kb(a, b) {
        var c = [], d = a;
        for (a = jb(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;
        c[c.length - 1] === document && c.push(window);
        return c
    }

    function lb(a) {
        a.__composedPath || (a.__composedPath = kb(a.target, !0));
        return a.__composedPath
    }

    function mb(a, b) {
        if (!w) return a;
        a = kb(a, !0);
        for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = jb(d), f !== e && (g = a.indexOf(f), e = f), !w(f) || -1 < g) return d
    }

    function nb(a) {
        function b(b, d) {
            b = new a(b, d);
            b.__composed = d && !!d.composed;
            return b
        }

        b.__proto__ = a;
        b.prototype = a.prototype;
        return b
    }

    var ob = {focus: !0, blur: !0};

    function pb(a) {
        return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget
    }

    function qb(a, b, c) {
        if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!pb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++) ;
    }

    function rb(a) {
        var b = a.composedPath();
        Object.defineProperty(a, "currentTarget", {
            get: function () {
                return d
            }, configurable: !0
        });
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c];
            qb(a, d, "capture");
            if (a.R) return
        }
        Object.defineProperty(a, "eventPhase", {
            get: function () {
                return Event.AT_TARGET
            }
        });
        var e;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            var f = r(d);
            f = f && f.root;
            if (0 === c || f && f === e) if (qb(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.R) break
        }
    }

    function sb(a, b, c, d, e, f) {
        for (var g = 0; g < a.length; g++) {
            var h = a[g], k = h.type, l = h.capture, m = h.once, t = h.passive;
            if (b === h.node && c === k && d === l && e === m && f === t) return g
        }
        return -1
    }

    function tb(a, b, c) {
        if (b) {
            var d = typeof b;
            if ("function" === d || "object" === d) if ("object" !== d || b.handleEvent && "function" === typeof b.handleEvent) {
                if (ib[a]) return this.__shady_native_addEventListener(a, b, c);
                if (c && "object" === typeof c) {
                    var e = !!c.capture;
                    var f = !!c.once;
                    var g = !!c.passive
                } else e = !!c, g = f = !1;
                var h = c && c.S || this, k = b[fb];
                if (k) {
                    if (-1 < sb(k, h, a, e, f, g)) return
                } else b[fb] = [];
                k = function (e) {
                    f && this.__shady_removeEventListener(a, b, c);
                    e.__target || ub(e);
                    if (h !== this) {
                        var g = Object.getOwnPropertyDescriptor(e, "currentTarget");
                        Object.defineProperty(e, "currentTarget", {
                            get: function () {
                                return h
                            }, configurable: !0
                        })
                    }
                    e.__previousCurrentTarget = e.currentTarget;
                    if (!w(h) || -1 != e.composedPath().indexOf(h)) if (e.composed || -1 < e.composedPath().indexOf(h)) if (pb(e) && e.target === e.relatedTarget) e.eventPhase === Event.BUBBLING_PHASE && e.stopImmediatePropagation(); else if (e.eventPhase === Event.CAPTURING_PHASE || e.bubbles || e.target === h || h instanceof Window) {
                        var k = "function" === d ? b.call(h, e) : b.handleEvent && b.handleEvent(e);
                        h !== this && (g ? (Object.defineProperty(e,
                            "currentTarget", g), g = null) : delete e.currentTarget);
                        return k
                    }
                };
                b[fb].push({node: h, type: a, capture: e, once: f, passive: g, Ka: k});
                ob[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
                    capture: [],
                    bubble: []
                }, this.__handlers[a][e ? "capture" : "bubble"].push(k)) : this.__shady_native_addEventListener(a, k, c)
            }
        }
    }

    function vb(a, b, c) {
        if (b) {
            if (ib[a]) return this.__shady_native_removeEventListener(a, b, c);
            if (c && "object" === typeof c) {
                var d = !!c.capture;
                var e = !!c.once;
                var f = !!c.passive
            } else d = !!c, f = e = !1;
            var g = c && c.S || this, h = void 0;
            var k = null;
            try {
                k = b[fb]
            } catch (l) {
            }
            k && (e = sb(k, g, a, d, e, f), -1 < e && (h = k.splice(e, 1)[0].Ka, k.length || (b[fb] = void 0)));
            this.__shady_native_removeEventListener(a, h || b, c);
            h && ob[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1))
        }
    }

    function wb() {
        for (var a in ob) window.__shady_native_addEventListener(a, function (a) {
            a.__target || (ub(a), rb(a))
        }, !0)
    }

    var xb = z({
        get composed() {
            void 0 === this.__composed && (gb ? this.__composed = "focusin" === this.type || "focusout" === this.type || gb(this) : !1 !== this.isTrusted && (this.__composed = hb[this.type]));
            return this.__composed || !1
        }, composedPath: function () {
            this.__composedPath || (this.__composedPath = kb(this.__target, this.composed));
            return this.__composedPath
        }, get target() {
            return mb(this.currentTarget || this.__previousCurrentTarget, this.composedPath())
        }, get relatedTarget() {
            if (!this.__relatedTarget) return null;
            this.__relatedTargetComposedPath ||
            (this.__relatedTargetComposedPath = kb(this.__relatedTarget, !0));
            return mb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)
        }, stopPropagation: function () {
            Event.prototype.stopPropagation.call(this);
            this.R = !0
        }, stopImmediatePropagation: function () {
            Event.prototype.stopImmediatePropagation.call(this);
            this.R = this.__immediatePropagationStopped = !0
        }
    });

    function ub(a) {
        a.__target = a.target;
        a.__relatedTarget = a.relatedTarget;
        if (u.i) {
            var b = Object.getPrototypeOf(a);
            if (!Object.hasOwnProperty(b, "__shady_patchedProto")) {
                var c = Object.create(b);
                c.__shady_sourceProto = b;
                y(c, xb);
                b.__shady_patchedProto = c
            }
            a.__proto__ = b.__shady_patchedProto
        } else y(a, xb)
    }

    var yb = nb(Event), zb = nb(CustomEvent), Ab = nb(MouseEvent);

    function Bb() {
        if (!gb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var a = function () {
                var a = new MouseEvent("click", {bubbles: !0, cancelable: !0, composed: !0});
                this.__shady_dispatchEvent(a)
            };
            Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a)
        }
    }

    var Cb = Object.getOwnPropertyNames(Document.prototype).filter(function (a) {
        return "on" === a.substring(0, 2)
    });

    function Db(a, b) {
        return {index: a, F: [], K: b}
    }

    function Eb(a, b, c, d) {
        var e = 0, f = 0, g = 0, h = 0, k = Math.min(b - e, d - f);
        if (0 == e && 0 == f) a:{
            for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
            g = k
        }
        if (b == a.length && d == c.length) {
            h = a.length;
            for (var l = c.length, m = 0; m < k - g && Fb(a[--h], c[--l]);) m++;
            h = m
        }
        e += g;
        f += g;
        b -= h;
        d -= h;
        if (0 == b - e && 0 == d - f) return [];
        if (e == b) {
            for (b = Db(e, 0); f < d;) b.F.push(c[f++]);
            return [b]
        }
        if (f == d) return [Db(e, b - e)];
        k = e;
        g = f;
        d = d - g + 1;
        h = b - k + 1;
        b = Array(d);
        for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;
        for (l = 0; l < h; l++) b[0][l] = l;
        for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] =
            b[l - 1][m - 1]; else {
            var t = b[l - 1][m] + 1, C = b[l][m - 1] + 1;
            b[l][m] = t < C ? t : C
        }
        k = b.length - 1;
        g = b[0].length - 1;
        d = b[k][g];
        for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], t = l < m ? l < h ? l : h : m < h ? m : h, t == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : t == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));
        a.reverse();
        b = void 0;
        k = [];
        for (g = 0; g < a.length; g++) switch (a[g]) {
            case 0:
                b && (k.push(b), b = void 0);
                e++;
                f++;
                break;
            case 1:
                b || (b = Db(e, 0));
                b.K++;
                e++;
                b.F.push(c[f]);
                f++;
                break;
            case 2:
                b || (b = Db(e, 0));
                b.K++;
                e++;
                break;
            case 3:
                b || (b = Db(e, 0)), b.F.push(c[f]), f++
        }
        b && k.push(b);
        return k
    }

    function Fb(a, b) {
        return a === b
    };

    function Gb(a, b, c) {
        db(a);
        c = c || null;
        var d = q(a), e = q(b), f = c ? q(c) : null;
        d.previousSibling = c ? f.previousSibling : b.__shady_lastChild;
        if (f = r(d.previousSibling)) f.nextSibling = a;
        if (f = r(d.nextSibling = c)) f.previousSibling = a;
        d.parentNode = b;
        c ? c === e.firstChild && (e.firstChild = a) : (e.lastChild = a, e.firstChild || (e.firstChild = a));
        e.childNodes = null
    }

    function Hb(a, b, c) {
        eb(b);
        var d = q(b);
        void 0 !== d.firstChild && (d.childNodes = null);
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            d = a.__shady_childNodes;
            for (var e = 0; e < d.length; e++) Gb(d[e], b, c);
            a = q(a);
            b = void 0 !== a.firstChild ? null : void 0;
            a.firstChild = a.lastChild = b;
            a.childNodes = b
        } else Gb(a, b, c)
    }

    function Ib(a, b) {
        var c = q(a);
        b = q(b);
        a === b.firstChild && (b.firstChild = c.nextSibling);
        a === b.lastChild && (b.lastChild = c.previousSibling);
        a = c.previousSibling;
        var d = c.nextSibling;
        a && (q(a).nextSibling = d);
        d && (q(d).previousSibling = a);
        c.parentNode = c.previousSibling = c.nextSibling = void 0;
        void 0 !== b.childNodes && (b.childNodes = null)
    }

    function Jb(a) {
        var b = q(a);
        if (void 0 === b.firstChild) {
            b.childNodes = null;
            var c = b.firstChild = a.__shady_native_firstChild || null;
            b.lastChild = a.__shady_native_lastChild || null;
            eb(a);
            b = c;
            for (c = void 0; b; b = b.__shady_native_nextSibling) {
                var d = q(b);
                d.parentNode = a;
                d.nextSibling = b.__shady_native_nextSibling || null;
                d.previousSibling = c || null;
                c = b;
                db(b)
            }
        }
    };var Kb = null;

    function F() {
        Kb || (Kb = window.ShadyCSS && window.ShadyCSS.ScopingShim);
        return Kb || null
    }

    function Lb(a, b) {
        var c = F();
        c && c.unscopeNode(a, b)
    }

    function Nb(a, b) {
        var c = F();
        if (!c) return !0;
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            c = !0;
            a = a.__shady_childNodes;
            for (var d = 0; c && d < a.length; d++) c = c && Nb(a[d], b);
            return c
        }
        return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b
    }

    function Ob(a) {
        if (a.nodeType !== Node.ELEMENT_NODE) return "";
        var b = F();
        return b ? b.currentScopeForNode(a) : ""
    }

    function Pb(a, b) {
        if (a) {
            a.nodeType === Node.ELEMENT_NODE && b(a);
            a = a.__shady_childNodes;
            for (var c = 0, d; c < a.length; c++) d = a[c], d.nodeType === Node.ELEMENT_NODE && Pb(d, b)
        }
    };var Qb = window.document, Rb = u.da, Sb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
        Tb = Sb && Sb.get;

    function Ub(a) {
        for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b)
    }

    function Vb(a) {
        var b = r(a);
        if (b && void 0 !== b.D) {
            b = a.__shady_childNodes;
            for (var c = 0, d = b.length, e = void 0; c < d && (e = b[c]); c++) Vb(e)
        }
        if (a = r(a)) a.D = void 0
    }

    function Wb(a) {
        var b = a;
        a && "slot" === a.localName && (b = (b = (b = r(a)) && b.v) && b.length ? b[0] : Wb(a.__shady_nextSibling));
        return b
    }

    function Xb(a, b, c) {
        if (a = (a = r(a)) && a.A) b && a.addedNodes.push(b), c && a.removedNodes.push(c), Ba(a)
    }

    var Zb = z({
        get parentNode() {
            var a = r(this);
            a = a && a.parentNode;
            return void 0 !== a ? a : this.__shady_native_parentNode
        }, get firstChild() {
            var a = r(this);
            a = a && a.firstChild;
            return void 0 !== a ? a : this.__shady_native_firstChild
        }, get lastChild() {
            var a = r(this);
            a = a && a.lastChild;
            return void 0 !== a ? a : this.__shady_native_lastChild
        }, get nextSibling() {
            var a = r(this);
            a = a && a.nextSibling;
            return void 0 !== a ? a : this.__shady_native_nextSibling
        }, get previousSibling() {
            var a = r(this);
            a = a && a.previousSibling;
            return void 0 !== a ? a : this.__shady_native_previousSibling
        },
        get childNodes() {
            if (v(this)) {
                var a = r(this);
                if (!a.childNodes) {
                    a.childNodes = [];
                    for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b)
                }
                var c = a.childNodes
            } else c = this.__shady_native_childNodes;
            c.item = function (a) {
                return c[a]
            };
            return c
        }, get parentElement() {
            var a = r(this);
            (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
            return void 0 !== a ? a : this.__shady_native_parentElement
        }, get isConnected() {
            if (Tb && Tb.call(this)) return !0;
            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
            var a = this.ownerDocument;
            if (ta) {
                if (a.__shady_native_contains(this)) return !0
            } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;
            for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (w(a) ? a.host : void 0);
            return !!(a && a instanceof Document)
        }, get textContent() {
            if (v(this)) {
                for (var a = [], b = 0, c = this.__shady_childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.__shady_textContent);
                return a.join("")
            }
            return this.__shady_native_textContent
        }, set textContent(a) {
            if ("undefined" ===
                typeof a || null === a) a = "";
            switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                    if (!v(this) && u.i) {
                        var b = this.__shady_firstChild;
                        (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Ub(this);
                        this.__shady_native_textContent = a
                    } else Ub(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));
                    break;
                default:
                    this.nodeValue = a
            }
        }, insertBefore: function (a, b) {
            if (this.ownerDocument !== Qb && a.ownerDocument !== Qb) return this.__shady_native_insertBefore(a,
                b), a;
            if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (b) {
                var c = r(b);
                c = c && c.parentNode;
                if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (b === a) return a;
            var d = [], e = (c = G(this)) ? c.host.localName : Ob(this), f = a.__shady_parentNode;
            if (f) {
                var g = Ob(a);
                f.__shady_removeChild(a, !!c ||
                    !G(a))
            }
            f = !0;
            var h = (!Rb || void 0 === a.__noInsertionPoint) && !Nb(a, e),
                k = c && !a.__noInsertionPoint && (!Rb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
            if (k || h) h && (g = g || Ob(a)), Pb(a, function (a) {
                k && "slot" === a.localName && d.push(a);
                if (h) {
                    var b = g;
                    F() && (b && Lb(a, b), (b = F()) && b.scopeNode(a, e))
                }
            });
            if ("slot" === this.localName || d.length) d.length && (c.c = c.c || [], c.a = c.a || [], c.b = c.b || {}, c.c.push.apply(c.c, d instanceof Array ? d : ja(ia(d)))), c && H(c);
            v(this) && (Hb(a, this, b), c = r(this), ma(this) ? (H(c.root), f = !1) : c.root && (f = !1));
            f ? (c =
                w(this) ? this.host : this, b ? (b = Wb(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
            Xb(this, a);
            return a
        }, appendChild: function (a) {
            return this.__shady_insertBefore(a)
        }, removeChild: function (a, b) {
            b = void 0 === b ? !1 : b;
            if (this.ownerDocument !== Qb) return this.__shady_native_removeChild(a);
            if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
            var c = G(a), d = c && Yb(c, a), e = r(this);
            if (v(this) && (Ib(a, this), ma(this))) {
                H(e.root);
                var f = !0
            }
            if (F() && !b && c) {
                var g = Ob(a);
                Pb(a, function (a) {
                    Lb(a, g)
                })
            }
            Vb(a);
            c && ((b = this && "slot" === this.localName) && (f = !0), (d || b) && H(c));
            f || (f = w(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
            Xb(this, null, a);
            return a
        }, replaceChild: function (a, b) {
            this.__shady_insertBefore(a, b);
            this.__shady_removeChild(b);
            return a
        }, cloneNode: function (a) {
            if ("template" == this.localName) return this.__shady_native_cloneNode(a);
            var b = this.__shady_native_cloneNode(!1);
            if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
                a = this.__shady_childNodes;
                for (var c = 0, d; c < a.length; c++) d = a[c].__shady_cloneNode(!0), b.__shady_appendChild(d)
            }
            return b
        }, getRootNode: function (a) {
            if (this && this.nodeType) {
                var b = q(this), c = b.D;
                void 0 === c && (w(this) ? (c = this, b.D = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.D = c)));
                return c
            }
        }, contains: function (a) {
            return ua(this, a)
        }
    });

    function $b(a, b, c) {
        var d = [];
        ac(a.__shady_childNodes, b, c, d);
        return d
    }

    function ac(a, b, c, d) {
        for (var e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) {
            var h;
            if (h = g.nodeType === Node.ELEMENT_NODE) {
                h = g;
                var k = b, l = c, m = d, t = k(h);
                t && m.push(h);
                l && l(t) ? h = t : (ac(h.__shady_childNodes, k, l, m), h = void 0)
            }
            if (h) break
        }
    }

    var I = z({
        get firstElementChild() {
            var a = r(this);
            if (a && void 0 !== a.firstChild) {
                for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
                return a
            }
            return this.__shady_native_firstElementChild
        }, get lastElementChild() {
            var a = r(this);
            if (a && void 0 !== a.lastChild) {
                for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
                return a
            }
            return this.__shady_native_lastElementChild
        }, get children() {
            return v(this) ? va(Array.prototype.filter.call(this.__shady_childNodes,
                function (a) {
                    return a.nodeType === Node.ELEMENT_NODE
                })) : this.__shady_native_children
        }, get childElementCount() {
            var a = this.__shady_children;
            return a ? a.length : 0
        }
    }), bc = z({
        querySelector: function (a) {
            return $b(this, function (b) {
                return oa.call(b, a)
            }, function (a) {
                return !!a
            })[0] || null
        }, querySelectorAll: function (a, b) {
            if (b) {
                b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));
                var c = this.__shady_getRootNode();
                return b.filter(function (a) {
                    return a.__shady_getRootNode() == c
                })
            }
            return $b(this, function (b) {
                return oa.call(b,
                    a)
            })
        }
    }), cc = u.da ? Object.assign({}, I) : I;
    Object.assign(I, bc);
    var dc = z({
        getElementById: function (a) {
            return "" === a ? null : $b(this, function (b) {
                return b.id == a
            }, function (a) {
                return !!a
            })[0] || null
        }
    });
    var ec = z({
        get activeElement() {
            var a = u.i ? document.__shady_native_activeElement : document.activeElement;
            if (!a || !a.nodeType) return null;
            var b = !!w(this);
            if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;
            for (b = G(a); b && b !== this;) a = b.host, b = G(a);
            return this === document ? b ? null : a : b === this ? a : null
        }
    });
    var fc = document.implementation.createHTMLDocument("inert"), gc = z({
        get innerHTML() {
            return v(this) ? La("template" === this.localName ? this.content : this, function (a) {
                return a.__shady_childNodes
            }) : this.__shady_native_innerHTML
        }, set innerHTML(a) {
            if ("template" === this.localName) this.__shady_native_innerHTML = a; else {
                Ub(this);
                var b = this.localName || "div";
                b = this.namespaceURI && this.namespaceURI !== fc.namespaceURI ? fc.createElementNS(this.namespaceURI, b) : fc.createElement(b);
                for (u.i ? b.__shady_native_innerHTML = a : b.innerHTML =
                    a; a = b.__shady_firstChild;) this.__shady_insertBefore(a)
            }
        }
    });
    var hc = z({
        addEventListener: function (a, b, c) {
            "object" !== typeof c && (c = {capture: !!c});
            c.S = this;
            this.host.__shady_addEventListener(a, b, c)
        }, removeEventListener: function (a, b, c) {
            "object" !== typeof c && (c = {capture: !!c});
            c.S = this;
            this.host.__shady_removeEventListener(a, b, c)
        }
    });

    function ic(a, b) {
        y(a, hc, b);
        y(a, ec, b);
        y(a, gc, b);
        y(a, I, b);
        u.C && !b ? (y(a, Zb, b), y(a, dc, b)) : u.i || (y(a, $a), y(a, Za))
    };var jc = {}, K = u.deferConnectionCallbacks && "loading" === document.readyState, kc;

    function lc(a) {
        var b = [];
        do b.unshift(a); while (a = a.__shady_parentNode);
        return b
    }

    function mc(a, b, c) {
        if (a !== jc) throw new TypeError("Illegal constructor");
        this.ma = "ShadyRoot";
        this.host = b;
        this.mode = c && c.mode;
        Jb(b);
        a = q(b);
        a.root = this;
        a.ea = "closed" !== this.mode ? this : null;
        a = q(this);
        a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;
        a.childNodes = [];
        this.U = this.u = !1;
        this.c = this.b = this.a = null;
        if (u.preferPerformance) for (; a = b.__shady_native_firstChild;) b.__shady_native_removeChild(a); else H(this)
    }

    function H(a) {
        a.u || (a.u = !0, ya(function () {
            return nc(a)
        }))
    }

    function nc(a) {
        var b;
        if (b = a.u) {
            for (var c; a;) a:{
                a.u && (c = a), b = a;
                a = b.host.__shady_getRootNode();
                if (w(a) && (b = r(b.host)) && 0 < b.H) break a;
                a = void 0
            }
            b = c
        }
        (c = b) && c._renderSelf()
    }

    mc.prototype._renderSelf = function () {
        var a = K;
        K = !0;
        this.u = !1;
        if (this.a) {
            oc(this);
            for (var b = 0, c; b < this.a.length; b++) {
                c = this.a[b];
                var d = r(c), e = d.assignedNodes;
                d.assignedNodes = [];
                d.v = [];
                if (d.V = e) for (d = 0; d < e.length; d++) {
                    var f = r(e[d]);
                    f.J = f.assignedSlot;
                    f.assignedSlot === c && (f.assignedSlot = null)
                }
            }
            for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) pc(this, b);
            for (b = 0; b < this.a.length; b++) {
                c = this.a[b];
                e = r(c);
                if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) pc(this, d, c);
                (d = (d = r(c.__shady_parentNode)) && d.root) && (na(d) || d.u) && d._renderSelf();
                qc(this, e.v, e.assignedNodes);
                if (d = e.V) {
                    for (f = 0; f < d.length; f++) r(d[f]).J = null;
                    e.V = null;
                    d.length > e.assignedNodes.length && (e.M = !0)
                }
                e.M && (e.M = !1, rc(this, c))
            }
            c = this.a;
            b = [];
            for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = r(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);
            for (c = 0; c < b.length; c++) {
                f = b[c];
                e = f === this ? this.host : f;
                d = [];
                f = f.__shady_childNodes;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    if ("slot" == h.localName) {
                        h = r(h).v;
                        for (var k = 0; k <
                        h.length; k++) d.push(h[k])
                    } else d.push(h)
                }
                f = Array.prototype.slice.call(e.__shady_native_childNodes);
                g = Eb(d, d.length, f, f.length);
                k = h = 0;
                for (var l = void 0; h < g.length && (l = g[h]); h++) {
                    for (var m = 0, t = void 0; m < l.F.length && (t = l.F[m]); m++) t.__shady_native_parentNode === e && e.__shady_native_removeChild(t), f.splice(l.index + k, 1);
                    k -= l.K
                }
                k = 0;
                for (l = void 0; k < g.length && (l = g[k]); k++) for (h = f[l.index], m = l.index; m < l.index + l.K; m++) t = d[m], e.__shady_native_insertBefore(t, h), f.splice(m, 0, t)
            }
        }
        if (!u.preferPerformance && !this.U) for (b =
                                                      this.host.__shady_childNodes, c = 0, e = b.length; c < e; c++) d = b[c], f = r(d), d.__shady_native_parentNode !== this.host || "slot" !== d.localName && f.assignedSlot || this.host.__shady_native_removeChild(d);
        this.U = !0;
        K = a;
        kc && kc()
    };

    function pc(a, b, c) {
        var d = q(b), e = d.J;
        d.J = null;
        c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);
        c ? (q(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
        e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).M = !0)
    }

    function qc(a, b, c) {
        for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
            var f = r(e).assignedNodes;
            f && f.length && qc(a, b, f)
        } else b.push(c[d])
    }

    function rc(a, b) {
        b.__shady_native_dispatchEvent(new Event("slotchange"));
        b = r(b);
        b.assignedSlot && rc(a, b.assignedSlot)
    }

    function oc(a) {
        if (a.c && a.c.length) {
            for (var b = a.c, c, d = 0; d < b.length; d++) {
                var e = b[d];
                Jb(e);
                var f = e.__shady_parentNode;
                Jb(f);
                f = r(f);
                f.H = (f.H || 0) + 1;
                f = sc(e);
                a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];
                a.a.push(e)
            }
            if (c) for (var g in c) a.b[g] = tc(a.b[g]);
            a.c = []
        }
    }

    function sc(a) {
        var b = a.name || a.getAttribute("name") || "__catchall";
        return a.ja = b
    }

    function tc(a) {
        return a.sort(function (a, c) {
            a = lc(a);
            for (var b = lc(c), e = 0; e < a.length; e++) {
                c = a[e];
                var f = b[e];
                if (c !== f) return a = Array.from(c.__shady_parentNode.__shady_childNodes), a.indexOf(c) - a.indexOf(f)
            }
        })
    }

    function Yb(a, b) {
        if (a.a) {
            oc(a);
            var c = a.b, d;
            for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
                var g = e[f];
                if (ua(b, g)) {
                    e.splice(f, 1);
                    var h = a.a.indexOf(g);
                    0 <= h && (a.a.splice(h, 1), (h = r(g.__shady_parentNode)) && h.H && h.H--);
                    f--;
                    g = r(g);
                    if (h = g.v) for (var k = 0; k < h.length; k++) {
                        var l = h[k], m = l.__shady_native_parentNode;
                        m && m.__shady_native_removeChild(l)
                    }
                    g.v = [];
                    g.assignedNodes = [];
                    h = !0
                }
            }
            return h
        }
    }

    function na(a) {
        oc(a);
        return !(!a.a || !a.a.length)
    }

    (function (a) {
        a.__proto__ = DocumentFragment.prototype;
        ic(a, "__shady_");
        ic(a);
        Object.defineProperties(a, {
            nodeType: {value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0},
            nodeName: {value: "#document-fragment", configurable: !0},
            nodeValue: {value: null, configurable: !0}
        });
        ["localName", "namespaceURI", "prefix"].forEach(function (b) {
            Object.defineProperty(a, b, {value: void 0, configurable: !0})
        });
        ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
            Object.defineProperty(a, b, {
                get: function () {
                    return this.host[b]
                },
                configurable: !0
            })
        })
    })(mc.prototype);
    if (window.customElements && u.W && !u.preferPerformance) {
        var uc = new Map;
        kc = function () {
            var a = [];
            uc.forEach(function (b, c) {
                a.push([c, b])
            });
            uc.clear();
            for (var b = 0; b < a.length; b++) {
                var c = a[b][0];
                a[b][1] ? c.ha() : c.ia()
            }
        };
        K && document.addEventListener("readystatechange", function () {
            K = !1;
            kc()
        }, {once: !0});
        var vc = function (a, b, c) {
            var d = 0, e = "__isConnected" + d++;
            if (b || c) a.prototype.connectedCallback = a.prototype.ha = function () {
                K ? uc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this))
            }, a.prototype.disconnectedCallback = a.prototype.ia =
                function () {
                    K ? this.isConnected || uc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this))
                };
            return a
        }, wc = window.customElements.define;
        Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
            value: function (a, b) {
                var c = b.prototype.connectedCallback, d = b.prototype.disconnectedCallback;
                wc.call(window.customElements, a, vc(b, c, d));
                b.prototype.connectedCallback = c;
                b.prototype.disconnectedCallback = d
            }
        })
    }

    function G(a) {
        a = a.__shady_getRootNode();
        if (w(a)) return a
    };

    function L(a) {
        this.node = a
    }

    n = L.prototype;
    n.addEventListener = function (a, b, c) {
        return this.node.__shady_addEventListener(a, b, c)
    };
    n.removeEventListener = function (a, b, c) {
        return this.node.__shady_removeEventListener(a, b, c)
    };
    n.appendChild = function (a) {
        return this.node.__shady_appendChild(a)
    };
    n.insertBefore = function (a, b) {
        return this.node.__shady_insertBefore(a, b)
    };
    n.removeChild = function (a) {
        return this.node.__shady_removeChild(a)
    };
    n.replaceChild = function (a, b) {
        return this.node.__shady_replaceChild(a, b)
    };
    n.cloneNode = function (a) {
        return this.node.__shady_cloneNode(a)
    };
    n.getRootNode = function (a) {
        return this.node.__shady_getRootNode(a)
    };
    n.contains = function (a) {
        return this.node.__shady_contains(a)
    };
    n.dispatchEvent = function (a) {
        return this.node.__shady_dispatchEvent(a)
    };
    n.setAttribute = function (a, b) {
        this.node.__shady_setAttribute(a, b)
    };
    n.getAttribute = function (a) {
        return this.node.__shady_native_getAttribute(a)
    };
    n.removeAttribute = function (a) {
        this.node.__shady_removeAttribute(a)
    };
    n.attachShadow = function (a) {
        return this.node.__shady_attachShadow(a)
    };
    n.focus = function () {
        this.node.__shady_native_focus()
    };
    n.blur = function () {
        this.node.__shady_blur()
    };
    n.importNode = function (a, b) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b)
    };
    n.getElementById = function (a) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a)
    };
    n.querySelector = function (a) {
        return this.node.__shady_querySelector(a)
    };
    n.querySelectorAll = function (a, b) {
        return this.node.__shady_querySelectorAll(a, b)
    };
    n.assignedNodes = function (a) {
        if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a)
    };
    p.Object.defineProperties(L.prototype, {
        activeElement: {
            configurable: !0, enumerable: !0, get: function () {
                if (w(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement
            }
        }, _activeElement: {
            configurable: !0, enumerable: !0, get: function () {
                return this.activeElement
            }
        }, host: {
            configurable: !0, enumerable: !0, get: function () {
                if (w(this.node)) return this.node.host
            }
        }, parentNode: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_parentNode
            }
        }, firstChild: {
            configurable: !0, enumerable: !0,
            get: function () {
                return this.node.__shady_firstChild
            }
        }, lastChild: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_lastChild
            }
        }, nextSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_nextSibling
            }
        }, previousSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_previousSibling
            }
        }, childNodes: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_childNodes
            }
        }, parentElement: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_parentElement
            }
        },
        firstElementChild: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_firstElementChild
            }
        }, lastElementChild: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_lastElementChild
            }
        }, nextElementSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_nextElementSibling
            }
        }, previousElementSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_previousElementSibling
            }
        }, children: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_children
            }
        },
        childElementCount: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_childElementCount
            }
        }, shadowRoot: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_shadowRoot
            }
        }, assignedSlot: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_assignedSlot
            }
        }, isConnected: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_isConnected
            }
        }, innerHTML: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_innerHTML
            }, set: function (a) {
                this.node.__shady_innerHTML =
                    a
            }
        }, textContent: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_textContent
            }, set: function (a) {
                this.node.__shady_textContent = a
            }
        }, slot: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_slot
            }, set: function (a) {
                this.node.__shady_slot = a
            }
        }
    });
    Cb.forEach(function (a) {
        Object.defineProperty(L.prototype, a, {
            get: function () {
                return this.node["__shady_" + a]
            }, set: function (b) {
                this.node["__shady_" + a] = b
            }, configurable: !0
        })
    });
    var xc = new WeakMap;

    function yc(a) {
        if (w(a) || a instanceof L) return a;
        var b = xc.get(a);
        b || (b = new L(a), xc.set(a, b));
        return b
    };var zc = z({
        dispatchEvent: function (a) {
            za();
            return this.__shady_native_dispatchEvent(a)
        }, addEventListener: tb, removeEventListener: vb
    });
    var Ac = z({
        get assignedSlot() {
            var a = this.__shady_parentNode;
            (a = a && a.__shady_shadowRoot) && nc(a);
            return (a = r(this)) && a.assignedSlot || null
        }
    });
    var Bc = window.document;

    function Cc(a, b) {
        if ("slot" === b) a = a.__shady_parentNode, ma(a) && H(r(a).root); else if ("slot" === a.localName && "name" === b && (b = G(a))) {
            if (b.a) {
                oc(b);
                var c = a.ja, d = sc(a);
                if (d !== c) {
                    c = b.b[c];
                    var e = c.indexOf(a);
                    0 <= e && c.splice(e, 1);
                    c = b.b[d] || (b.b[d] = []);
                    c.push(a);
                    1 < c.length && (b.b[d] = tc(c))
                }
            }
            H(b)
        }
    }

    var Dc = z({
        get previousElementSibling() {
            var a = r(this);
            if (a && void 0 !== a.previousSibling) {
                for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
                return a
            }
            return this.__shady_native_previousElementSibling
        }, get nextElementSibling() {
            var a = r(this);
            if (a && void 0 !== a.nextSibling) {
                for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
                return a
            }
            return this.__shady_native_nextElementSibling
        }, get slot() {
            return this.getAttribute("slot")
        },
        set slot(a) {
            this.__shady_setAttribute("slot", a)
        }, get shadowRoot() {
            var a = r(this);
            return a && a.ea || null
        }, get className() {
            return this.getAttribute("class") || ""
        }, set className(a) {
            this.__shady_setAttribute("class", a)
        }, setAttribute: function (a, b) {
            if (this.ownerDocument !== Bc) this.__shady_native_setAttribute(a, b); else {
                var c;
                (c = F()) && "class" === a ? (c.setElementClass(this, b), c = !0) : c = !1;
                c || (this.__shady_native_setAttribute(a, b), Cc(this, a))
            }
        }, removeAttribute: function (a) {
            this.__shady_native_removeAttribute(a);
            Cc(this,
                a)
        }, attachShadow: function (a) {
            if (!this) throw Error("Must provide a host.");
            if (!a) throw Error("Not enough arguments.");
            return new mc(jc, this, a)
        }
    });
    var Ec = z({
        blur: function () {
            var a = r(this);
            (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur()
        }
    });
    Cb.forEach(function (a) {
        Ec[a] = {
            set: function (b) {
                var c = q(this), d = a.substring(2);
                c.I[a] && this.removeEventListener(d, c.I[a]);
                this.__shady_addEventListener(d, b);
                c.I[a] = b
            }, get: function () {
                var b = r(this);
                return b && b.I[a]
            }, configurable: !0
        }
    });
    var Fc = z({
        assignedNodes: function (a) {
            if ("slot" === this.localName) {
                var b = this.__shady_getRootNode();
                b && w(b) && nc(b);
                return (b = r(this)) ? (a && a.flatten ? b.v : b.assignedNodes) || [] : []
            }
        }
    });
    var Gc = window.document, Hc = z({
        importNode: function (a, b) {
            if (a.ownerDocument !== Gc || "template" === a.localName) return this.__shady_native_importNode(a, b);
            var c = this.__shady_native_importNode(a, !1);
            if (b) {
                a = a.__shady_childNodes;
                b = 0;
                for (var d; b < a.length; b++) d = this.__shady_importNode(a[b], !0), c.__shady_appendChild(d)
            }
            return c
        }
    });
    var Ic = z({addEventListener: tb.bind(window), removeEventListener: vb.bind(window)});
    var M = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (M.parentElement = Zb.parentElement);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (M.contains = Zb.contains);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (M.children = I.children);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (M.innerHTML = gc.innerHTML);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (M.className = Dc.className);
    var Jc = {
        EventTarget: [zc],
        Node: [Zb, window.EventTarget ? null : zc],
        Text: [Ac],
        Element: [Dc, I, Ac, !u.i || "innerHTML" in Element.prototype ? gc : null, window.HTMLSlotElement ? null : Fc],
        HTMLElement: [Ec, M],
        HTMLSlotElement: [Fc],
        DocumentFragment: [cc, dc],
        Document: [Hc, cc, dc, ec],
        Window: [Ic]
    }, Kc = u.i ? null : ["innerHTML", "textContent"];

    function Lc(a) {
        var b = a ? null : Kc, c = {}, d;
        for (d in Jc) c.O = window[d] && window[d].prototype, Jc[d].forEach(function (c) {
            return function (d) {
                return c.O && d && y(c.O, d, a, b)
            }
        }(c)), c = {O: c.O}
    };
    if (u.W) {
        var ShadyDOM = {
            inUse: u.W,
            patch: function (a) {
                eb(a);
                db(a);
                return a
            },
            isShadyRoot: w,
            enqueue: ya,
            flush: za,
            flushInitial: function (a) {
                !a.U && a.u && nc(a)
            },
            settings: u,
            filterMutations: Ea,
            observeChildren: Ca,
            unobserveChildren: Da,
            deferConnectionCallbacks: u.deferConnectionCallbacks,
            preferPerformance: u.preferPerformance,
            handlesDynamicScoping: !0,
            wrap: u.C ? yc : function (a) {
                return a
            },
            Wrapper: L,
            composedPath: lb,
            noPatch: u.C,
            nativeMethods: Na,
            nativeTree: Ra
        };
        window.ShadyDOM = ShadyDOM;
        Ya();
        Lc("__shady_");
        Object.defineProperty(document,
            "_activeElement", ec.activeElement);
        y(Window.prototype, Ic, "__shady_");
        u.C || (Lc(), Bb());
        wb();
        window.Event = yb;
        window.CustomEvent = zb;
        window.MouseEvent = Ab;
        window.ShadowRoot = mc
    }
    ;/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    function Mc() {
        this.end = this.start = 0;
        this.rules = this.parent = this.previous = null;
        this.cssText = this.parsedCssText = "";
        this.atRule = !1;
        this.type = 0;
        this.parsedSelector = this.selector = this.keyframesName = ""
    }

    function Nc(a) {
        a = a.replace(Oc, "").replace(Pc, "");
        var b = Qc, c = a, d = new Mc;
        d.start = 0;
        d.end = c.length;
        for (var e = d, f = 0, g = c.length; f < g; f++) if ("{" === c[f]) {
            e.rules || (e.rules = []);
            var h = e, k = h.rules[h.rules.length - 1] || null;
            e = new Mc;
            e.start = f + 1;
            e.parent = h;
            e.previous = k;
            h.rules.push(e)
        } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
        return b(d, a)
    }

    function Qc(a, b) {
        var c = b.substring(a.start, a.end - 1);
        a.parsedCssText = a.cssText = c.trim();
        a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Rc(c), c = c.replace(Sc, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = Tc : c.match(Uc) && (a.type = Vc, a.keyframesName = a.selector.split(Sc).pop()) : a.type = 0 === c.indexOf("--") ? Wc : Xc);
        if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) Qc(f,
            b);
        return a
    }

    function Rc(a) {
        return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
            a = c;
            for (c = 6 - a.length; c--;) a = "0" + a;
            return "\\" + a
        })
    }

    function Yc(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = "";
        if (a.cssText || a.rules) {
            var e = a.rules, f;
            if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
            if (f) {
                f = 0;
                for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = Yc(h, b, d)
            } else b ? b = a.cssText : (b = a.cssText, b = b.replace(Zc, "").replace($c, ""), b = b.replace(ad, "").replace(bd, "")), (d = b.trim()) && (d = "  " + d + "\n")
        }
        d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
        return c
    }

    var Xc = 1, Vc = 7, Tc = 4, Wc = 1E3, Oc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, Pc = /@import[^;]*;/gim,
        Zc = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        $c = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        ad = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, bd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        Uc = /^@[^\s]*keyframes/, Sc = /\s+/g;
    var N = !(window.ShadyDOM && window.ShadyDOM.inUse), cd;

    function dd(a) {
        cd = a && a.shimcssproperties ? !1 : N || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
    }

    var ed;
    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (ed = window.ShadyCSS.cssBuild);
    var O = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? cd = window.ShadyCSS.nativeCss : window.ShadyCSS ? (dd(window.ShadyCSS), window.ShadyCSS = void 0) : dd(window.WebComponents && window.WebComponents.flags);
    var P = cd, fd = ed;
    var gd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        hd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, id = /(--[\w-]+)\s*([:,;)]|$)/gi,
        jd = /(animation\s*:)|(animation-name\s*:)/, kd = /@media\s(.*)/, ld = /\{[^}]*\}/g;
    var md = new Set;

    function Q(a, b) {
        if (!a) return "";
        "string" === typeof a && (a = Nc(a));
        b && S(a, b);
        return Yc(a, P)
    }

    function nd(a) {
        !a.__cssRules && a.textContent && (a.__cssRules = Nc(a.textContent));
        return a.__cssRules || null
    }

    function od(a) {
        return !!a.parent && a.parent.type === Vc
    }

    function S(a, b, c, d) {
        if (a) {
            var e = !1, f = a.type;
            if (d && f === Tc) {
                var g = a.selector.match(kd);
                g && (window.matchMedia(g[1]).matches || (e = !0))
            }
            f === Xc ? b(a) : c && f === Vc ? c(a) : f === Wc && (e = !0);
            if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) S(g, b, c, d)
        }
    }

    function pd(a, b, c, d) {
        var e = document.createElement("style");
        b && e.setAttribute("scope", b);
        e.textContent = a;
        qd(e, c, d);
        return e
    }

    var T = null;

    function rd(a) {
        a = document.createComment(" Shady DOM styles for " + a + " ");
        var b = document.head;
        b.insertBefore(a, (T ? T.nextSibling : null) || b.firstChild);
        return T = a
    }

    function qd(a, b, c) {
        b = b || document.head;
        b.insertBefore(a, c && c.nextSibling || b.firstChild);
        T ? a.compareDocumentPosition(T) === Node.DOCUMENT_POSITION_PRECEDING && (T = a) : T = a
    }

    function sd(a, b) {
        for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++; else if (")" === a[b] && 0 === --c) return b;
        return -1
    }

    function td(a, b) {
        var c = a.indexOf("var(");
        if (-1 === c) return b(a, "", "", "");
        var d = sd(a, c + 3), e = a.substring(c + 4, d);
        c = a.substring(0, c);
        a = td(a.substring(d + 1), b);
        d = e.indexOf(",");
        return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a)
    }

    function ud(a, b) {
        N ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)
    }

    var vd = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
        return a
    };

    function U(a) {
        var b = a.localName, c = "";
        b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
        return {is: b, G: c}
    }

    function wd(a) {
        for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
            var e = sd(a, d);
            c += a.slice(d, e + 1);
            d = e
        } else "," === a[d] ? (b.push(c), c = "") : c += a[d];
        c && b.push(c);
        return b
    }

    function xd(a) {
        if (void 0 !== fd) return fd;
        if (void 0 === a.__cssBuild) {
            var b = a.getAttribute("css-build");
            if (b) a.__cssBuild = b; else {
                a:{
                    b = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
                        b = b[1];
                        break a
                    }
                    b = ""
                }
                if ("" !== b) {
                    var c = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    c.parentNode.removeChild(c)
                }
                a.__cssBuild = b
            }
        }
        return a.__cssBuild || ""
    }

    function yd(a) {
        a = void 0 === a ? "" : a;
        return "" !== a && P ? N ? "shadow" === a : "shady" === a : !1
    };

    function zd() {
    }

    function Ad(a, b) {
        Bd(V, a, function (a) {
            W(a, b || "")
        })
    }

    function Bd(a, b, c) {
        b.nodeType === Node.ELEMENT_NODE && c(b);
        var d;
        "template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;
        if (d) for (b = 0; b < d.length; b++) Bd(a, d[b], c)
    }

    function W(a, b, c) {
        if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
            var d = a.getAttribute("class");
            c ? d && (b = d.replace("style-scope", "").replace(b, ""), ud(a, b)) : ud(a, (d ? d + " " : "") + "style-scope " + b)
        }
    }

    function Cd(a, b, c) {
        Bd(V, a, function (a) {
            W(a, b, !0);
            W(a, c)
        })
    }

    function Dd(a, b) {
        Bd(V, a, function (a) {
            W(a, b || "", !0)
        })
    }

    function Ed(a, b, c, d, e) {
        var f = V;
        e = void 0 === e ? "" : e;
        "" === e && (N || "shady" === (void 0 === d ? "" : d) ? e = Q(b, c) : (a = U(a), e = Fd(f, b, a.is, a.G, c) + "\n\n"));
        return e.trim()
    }

    function Fd(a, b, c, d, e) {
        var f = Jd(c, d);
        c = c ? "." + c : "";
        return Q(b, function (b) {
            b.c || (b.selector = b.h = Kd(a, b, a.b, c, f), b.c = !0);
            e && e(b, c, f)
        })
    }

    function Jd(a, b) {
        return b ? "[is=" + a + "]" : a
    }

    function Kd(a, b, c, d, e) {
        var f = wd(b.selector);
        if (!od(b)) {
            b = 0;
            for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e)
        }
        return f.filter(function (a) {
            return !!a
        }).join(",")
    }

    function Ld(a) {
        return a.replace(Md, function (a, c, d) {
            -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
            return ":" + c + "(" + d + ")"
        })
    }

    function Nd(a) {
        for (var b = [], c; c = a.match(Od);) {
            var d = c.index, e = sd(a, d);
            if (-1 === e) throw Error(c.input + " selector missing ')'");
            c = a.slice(d, e + 1);
            a = a.replace(c, "\ue000");
            b.push(c)
        }
        return {Y: a, matches: b}
    }

    function Pd(a, b) {
        var c = a.split("\ue000");
        return b.reduce(function (a, b, f) {
            return a + b + c[f + 1]
        }, c[0])
    }

    zd.prototype.b = function (a, b, c) {
        var d = !1;
        a = a.trim();
        var e = Md.test(a);
        e && (a = a.replace(Md, function (a, b, c) {
            return ":" + b + "(" + c.replace(/\s/g, "") + ")"
        }), a = Ld(a));
        var f = Od.test(a);
        if (f) {
            var g = Nd(a);
            a = g.Y;
            g = g.matches
        }
        a = a.replace(Qd, ":host $1");
        a = a.replace(Rd, function (a, e, f) {
            d || (a = Sd(f, e, b, c), d = d || a.stop, e = a.ra, f = a.value);
            return e + f
        });
        f && (a = Pd(a, g));
        e && (a = Ld(a));
        return a
    };

    function Sd(a, b, c, d) {
        var e = a.indexOf("::slotted");
        0 <= a.indexOf(":host") ? a = Td(a, d) : 0 !== e && (a = c ? Ud(a, c) : a);
        c = !1;
        0 <= e && (b = "", c = !0);
        if (c) {
            var f = !0;
            c && (a = a.replace(Vd, function (a, b) {
                return " > " + b
            }))
        }
        a = a.replace(Wd, function (a, b, c) {
            return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]'
        });
        return {value: a, ra: b, stop: f}
    }

    function Ud(a, b) {
        a = a.split(/(\[.+?\])/);
        for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]); else {
            var e = a[d];
            if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"))
        }
        return c.join("")
    }

    function Td(a, b) {
        var c = a.match(Xd);
        return (c = c && c[2].trim() || "") ? c[0].match(Yd) ? a.replace(Xd, function (a, c, f) {
            return b + f
        }) : c.split(Yd)[0] === b ? c : "should_not_match" : a.replace(":host", b)
    }

    function Zd(a) {
        ":root" === a.selector && (a.selector = "html")
    }

    zd.prototype.c = function (a) {
        return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : Ud(a.trim(), ":not(.style-scope)")
    };
    p.Object.defineProperties(zd.prototype, {
        a: {
            configurable: !0, enumerable: !0, get: function () {
                return "style-scope"
            }
        }
    });
    var Md = /:(nth[-\w]+)\(([^)]+)\)/, Rd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Yd = /[[.:#*]/,
        Qd = /^(::slotted)/, Xd = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Vd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Wd = /(.*):dir\((?:(ltr|rtl))\)/,
        Od = /:(?:matches|any|-(?:webkit|moz)-any)/, V = new zd;

    function $d(a, b, c, d, e) {
        this.s = a || null;
        this.b = b || null;
        this.X = c || [];
        this.j = null;
        this.cssBuild = e || "";
        this.G = d || "";
        this.a = this.l = this.o = null
    }

    function X(a) {
        return a ? a.__styleInfo : null
    }

    function ae(a, b) {
        return a.__styleInfo = b
    }

    $d.prototype.c = function () {
        return this.s
    };
    $d.prototype._getStyleRules = $d.prototype.c;

    function be(a) {
        var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
        return b && b.call(this, a)
    }

    var ce = navigator.userAgent.match("Trident");

    function de() {
    }

    function ee(a) {
        var b = {}, c = [], d = 0;
        S(a, function (a) {
            fe(a);
            a.index = d++;
            a = a.g.cssText;
            for (var c; c = id.exec(a);) {
                var e = c[1];
                ":" !== c[2] && (b[e] = !0)
            }
        }, function (a) {
            c.push(a)
        });
        a.b = c;
        a = [];
        for (var e in b) a.push(e);
        return a
    }

    function fe(a) {
        if (!a.g) {
            var b = {}, c = {};
            ge(a, c) && (b.m = c, a.rules = null);
            b.cssText = a.parsedCssText.replace(ld, "").replace(gd, "");
            a.g = b
        }
    }

    function ge(a, b) {
        var c = a.g;
        if (c) {
            if (c.m) return Object.assign(b, c.m), !0
        } else {
            c = a.parsedCssText;
            for (var d; a = gd.exec(c);) {
                d = (a[2] || a[3]).trim();
                if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
                d = !0
            }
            return d
        }
    }

    function he(a, b, c) {
        b && (b = 0 <= b.indexOf(";") ? ie(a, b, c) : td(b, function (b, e, f, g) {
            if (!e) return b + g;
            (e = he(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = he(a, c[f] || f, c) || f;
            return b + (e || "") + g
        }));
        return b && b.trim() || ""
    }

    function ie(a, b, c) {
        b = b.split(";");
        for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
            hd.lastIndex = 0;
            if (f = hd.exec(e)) e = he(a, c[f[1]], c); else if (f = e.indexOf(":"), -1 !== f) {
                var g = e.substring(f);
                g = g.trim();
                g = he(a, g, c) || g;
                e = e.substring(0, f) + g
            }
            b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || ""
        }
        return b.join(";")
    }

    function je(a, b) {
        var c = {}, d = [];
        S(a, function (a) {
            a.g || fe(a);
            var e = a.h || a.parsedSelector;
            b && a.g.m && e && be.call(b, e) && (ge(a, c), a = a.index, e = parseInt(a / 32, 10), d[e] = (d[e] || 0) | 1 << a % 32)
        }, null, !0);
        return {m: c, key: d}
    }

    function ke(a, b, c, d) {
        b.g || fe(b);
        if (b.g.m) {
            var e = U(a);
            a = e.is;
            e = e.G;
            e = a ? Jd(a, e) : "html";
            var f = b.parsedSelector, g = ":host > *" === f || "html" === f, h = 0 === f.indexOf(":host") && !g;
            "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
            if (g || h) c = e, h && (b.h || (b.h = Kd(V, b, V.b, a ? "." + a : "", e)), c = b.h || e), d({
                Y: c,
                ya: h,
                La: g
            })
        }
    }

    function le(a, b, c) {
        var d = {}, e = {};
        S(b, function (b) {
            ke(a, b, c, function (c) {
                be.call(a._element || a, c.Y) && (c.ya ? ge(b, d) : ge(b, e))
            })
        }, null, !0);
        return {Ea: e, wa: d}
    }

    function me(a, b, c, d) {
        var e = U(b), f = Jd(e.is, e.G),
            g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
            h = X(b);
        e = h.s;
        h = h.cssBuild;
        var k = ne(e, d);
        return Ed(b, e, function (b) {
            var e = "";
            b.g || fe(b);
            b.g.cssText && (e = ie(a, b.g.cssText, c));
            b.cssText = e;
            if (!N && !od(b) && b.cssText) {
                var h = e = b.cssText;
                null == b.ca && (b.ca = jd.test(e));
                if (b.ca) if (null == b.N) {
                    b.N = [];
                    for (var l in k) h = k[l], h = h(e), e !== h && (e = h, b.N.push(l))
                } else {
                    for (l = 0; l < b.N.length; ++l) h = k[b.N[l]], e = h(e);
                    h = e
                }
                b.cssText = h;
                b.h = b.h || b.selector;
                e = "." + d;
                l = wd(b.h);
                h = 0;
                for (var J = l.length, R = void 0; h < J && (R = l[h]); h++) l[h] = R.match(g) ? R.replace(f, e) : e + " " + R;
                b.selector = l.join(",")
            }
        }, h)
    }

    function ne(a, b) {
        a = a.b;
        var c = {};
        if (!N && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
            var f = e, g = b;
            f.f = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
            f.a = f.keyframesName + "-" + g;
            f.h = f.h || f.selector;
            f.selector = f.h.replace(f.keyframesName, f.a);
            c[e.keyframesName] = oe(e)
        }
        return c
    }

    function oe(a) {
        return function (b) {
            return b.replace(a.f, a.a)
        }
    }

    function pe(a, b) {
        var c = qe, d = nd(a);
        a.textContent = Q(d, function (a) {
            var d = a.cssText = a.parsedCssText;
            a.g && a.g.cssText && (d = d.replace(Zc, "").replace($c, ""), a.cssText = ie(c, d, b))
        })
    }

    p.Object.defineProperties(de.prototype, {
        a: {
            configurable: !0, enumerable: !0, get: function () {
                return "x-scope"
            }
        }
    });
    var qe = new de;
    var re = {}, se = window.customElements;
    if (se && !N && !O) {
        var te = se.define;
        se.define = function (a, b, c) {
            re[a] || (re[a] = rd(a));
            te.call(se, a, b, c)
        }
    }
    ;

    function ue() {
        this.cache = {}
    }

    ue.prototype.store = function (a, b, c, d) {
        var e = this.cache[a] || [];
        e.push({m: b, styleElement: c, l: d});
        100 < e.length && e.shift();
        this.cache[a] = e
    };

    function ve() {
    }

    var we = new RegExp(V.a + "\\s*([^\\s]*)");

    function xe(a) {
        return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(we)) ? a[1] : ""
    }

    function ye(a) {
        var b = vd(a).getRootNode();
        return b === a || b === a.ownerDocument ? "" : (a = b.host) ? U(a).is : ""
    }

    function ze(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
                var e = c.addedNodes[d];
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var f = e.getRootNode(), g = xe(e);
                    if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === xd(e))) Dd(e, g); else if (f instanceof ShadowRoot) for (f = ye(e), f !== g && Cd(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.a + ")"), g = 0; g < e.length; g++) {
                        f = e[g];
                        var h = ye(f);
                        h && W(f, h)
                    }
                }
            }
        }
    }

    if (!(N || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
        var Ae = new MutationObserver(ze), Be = function (a) {
            Ae.observe(a, {childList: !0, subtree: !0})
        };
        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Be(document); else {
            var Ce = function () {
                Be(document.body)
            };
            window.HTMLImports ? window.HTMLImports.whenReady(Ce) : requestAnimationFrame(function () {
                if ("loading" === document.readyState) {
                    var a = function () {
                        Ce();
                        document.removeEventListener("readystatechange", a)
                    };
                    document.addEventListener("readystatechange",
                        a)
                } else Ce()
            })
        }
        ve = function () {
            ze(Ae.takeRecords())
        }
    }
    var De = ve;
    var Ee = {};
    var Fe = Promise.resolve();

    function Ge(a) {
        if (a = Ee[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
    }

    function He(a) {
        return a._applyShimCurrentVersion === a._applyShimNextVersion
    }

    function Ie(a) {
        a._applyShimValidatingVersion = a._applyShimNextVersion;
        a._validating || (a._validating = !0, Fe.then(function () {
            a._applyShimCurrentVersion = a._applyShimNextVersion;
            a._validating = !1
        }))
    };var Je = {}, Ke = new ue;

    function Y() {
        this.B = {};
        this.c = document.documentElement;
        var a = new Mc;
        a.rules = [];
        this.f = ae(this.c, new $d(a));
        this.w = !1;
        this.b = this.a = null
    }

    n = Y.prototype;
    n.flush = function () {
        De()
    };
    n.ua = function (a) {
        return nd(a)
    };
    n.Ia = function (a) {
        return Q(a)
    };
    n.prepareTemplate = function (a, b, c) {
        this.prepareTemplateDom(a, b);
        this.prepareTemplateStyles(a, b, c)
    };
    n.prepareTemplateStyles = function (a, b, c) {
        if (!a._prepared && !O) {
            N || re[b] || (re[b] = rd(b));
            a._prepared = !0;
            a.name = b;
            a.extends = c;
            Ee[b] = a;
            var d = xd(a), e = yd(d);
            c = {is: b, extends: c};
            for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
                var k = g[h];
                if (k.hasAttribute("shady-unscoped")) {
                    if (!N) {
                        var l = k.textContent;
                        md.has(l) || (md.add(l), l = k.cloneNode(!0), document.head.appendChild(l));
                        k.parentNode.removeChild(k)
                    }
                } else f.push(k.textContent), k.parentNode.removeChild(k)
            }
            f = f.join("").trim() + (Je[b] || "");
            Le(this);
            if (!e) {
                if (g = !d) g = hd.test(f) || gd.test(f), hd.lastIndex = 0, gd.lastIndex = 0;
                h = Nc(f);
                g && P && this.a && this.a.transformRules(h, b);
                a._styleAst = h
            }
            g = [];
            P || (g = ee(a._styleAst));
            if (!g.length || P) h = N ? a.content : null, b = re[b] || null, d = Ed(c, a._styleAst, null, d, e ? f : ""), d = d.length ? pd(d, c.is, h, b) : null, a._style = d;
            a.a = g
        }
    };
    n.Da = function (a, b) {
        Je[b] = a.join(" ")
    };
    n.prepareTemplateDom = function (a, b) {
        if (!O) {
            var c = xd(a);
            N || "shady" === c || a._domPrepared || (a._domPrepared = !0, Ad(a.content, b))
        }
    };

    function Me(a) {
        var b = U(a), c = b.is;
        b = b.G;
        var d = re[c] || null, e = Ee[c];
        if (e) {
            c = e._styleAst;
            var f = e.a;
            e = xd(e);
            b = new $d(c, d, f, b, e);
            ae(a, b);
            return b
        }
    }

    function Ne(a) {
        !a.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.b = window.ShadyCSS.CustomStyleInterface, a.b.transformCallback = function (b) {
            a.ga(b)
        }, a.b.validateCallback = function () {
            requestAnimationFrame(function () {
                (a.b.enqueued || a.w) && a.flushCustomStyles()
            })
        })
    }

    function Le(a) {
        !a.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.a = window.ShadyCSS.ApplyShim, a.a.invalidCallback = Ge);
        Ne(a)
    }

    n.flushCustomStyles = function () {
        if (!O && (Le(this), this.b)) {
            var a = this.b.processStyles();
            if (this.b.enqueued && !yd(this.f.cssBuild)) {
                if (P) {
                    if (!this.f.cssBuild) for (var b = 0; b < a.length; b++) {
                        var c = this.b.getStyleForCustomStyle(a[b]);
                        if (c && P && this.a) {
                            var d = nd(c);
                            Le(this);
                            this.a.transformRules(d);
                            c.textContent = Q(d)
                        }
                    }
                } else {
                    Oe(this, this.c, this.f);
                    for (b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && pe(c, this.f.o);
                    this.w && this.styleDocument()
                }
                this.b.enqueued = !1
            }
        }
    };
    n.styleElement = function (a, b) {
        if (O) {
            if (b) {
                X(a) || ae(a, new $d(null));
                var c = X(a);
                c.j = c.j || {};
                Object.assign(c.j, b);
                Pe(this, a, c)
            }
        } else if (c = X(a) || Me(a)) if (a !== this.c && (this.w = !0), b && (c.j = c.j || {}, Object.assign(c.j, b)), P) Pe(this, a, c); else if (this.flush(), Oe(this, a, c), c.X && c.X.length) {
            b = U(a).is;
            var d;
            a:{
                if (d = Ke.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
                    var f = d[e];
                    b:{
                        var g = c.X;
                        for (var h = 0; h < g.length; h++) {
                            var k = g[h];
                            if (f.m[k] !== c.o[k]) {
                                g = !1;
                                break b
                            }
                        }
                        g = !0
                    }
                    if (g) {
                        d = f;
                        break a
                    }
                }
                d = void 0
            }
            g = d ? d.styleElement : null;
            e = c.l;
            (f = d && d.l) || (f = this.B[b] = (this.B[b] || 0) + 1, f = b + "-" + f);
            c.l = f;
            f = c.l;
            h = qe;
            h = g ? g.textContent || "" : me(h, a, c.o, f);
            k = X(a);
            var l = k.a;
            l && !N && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
            N ? k.a ? (k.a.textContent = h, g = k.a) : h && (g = pd(h, f, a.shadowRoot, k.b)) : g ? g.parentNode || (ce && -1 < h.indexOf("@media") && (g.textContent = h), qd(g, null, k.b)) : h && (g = pd(h, f, null, k.b));
            g && (g._useCount = g._useCount || 0, k.a != g && g._useCount++, k.a = g);
            f = g;
            N || (g = c.l, k = h = a.getAttribute("class") || "", e && (k = h.replace(new RegExp("\\s*x-scope\\s*" +
                e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && ud(a, k));
            d || Ke.store(b, c.o, f, c.l)
        }
    };

    function Pe(a, b, c) {
        var d = U(b).is;
        if (c.j) {
            var e = c.j, f;
            for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f])
        }
        e = Ee[d];
        if (!(!e && b !== a.c || e && "" !== xd(e)) && e && e._style && !He(e)) {
            if (He(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Le(a), a.a && a.a.transformRules(e._styleAst, d), e._style.textContent = Ed(b, c.s), Ie(e);
            N && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Ed(b, c.s));
            c.s = e._styleAst
        }
    }

    function Qe(a, b) {
        return (b = vd(b).getRootNode().host) ? X(b) || Me(b) ? b : Qe(a, b) : a.c
    }

    function Oe(a, b, c) {
        var d = Qe(a, b), e = X(d), f = e.o;
        d === a.c || f || (Oe(a, d, e), f = e.o);
        a = Object.create(f || null);
        d = le(b, c.s, c.cssBuild);
        b = je(e.s, b).m;
        Object.assign(a, d.wa, b, d.Ea);
        b = c.j;
        for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;
        g = qe;
        b = Object.getOwnPropertyNames(a);
        for (e = 0; e < b.length; e++) d = b[e], a[d] = he(g, a[d], a);
        c.o = a
    }

    n.styleDocument = function (a) {
        this.styleSubtree(this.c, a)
    };
    n.styleSubtree = function (a, b) {
        var c = vd(a), d = c.shadowRoot;
        (d || a === this.c) && this.styleElement(a, b);
        if (a = d && (d.children || d.childNodes)) for (c = 0; c < a.length; c++) this.styleSubtree(a[c]); else if (c = c.children || c.childNodes) for (a = 0; a < c.length; a++) this.styleSubtree(c[a])
    };
    n.ga = function (a) {
        var b = this, c = xd(a);
        c !== this.f.cssBuild && (this.f.cssBuild = c);
        if (!yd(c)) {
            var d = nd(a);
            S(d, function (a) {
                if (N) Zd(a); else {
                    var d = V;
                    a.selector = a.parsedSelector;
                    Zd(a);
                    a.selector = a.h = Kd(d, a, d.c, void 0, void 0)
                }
                P && "" === c && (Le(b), b.a && b.a.transformRule(a))
            });
            P ? a.textContent = Q(d) : this.f.s.rules.push(d)
        }
    };
    n.getComputedStyleValue = function (a, b) {
        var c;
        P || (c = (X(a) || X(Qe(this, a))).o[b]);
        return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
    };
    n.Ha = function (a, b) {
        var c = vd(a).getRootNode();
        b = b ? b.split(/\s/) : [];
        c = c.host && c.host.localName;
        if (!c) {
            var d = a.getAttribute("class");
            if (d) {
                d = d.split(/\s/);
                for (var e = 0; e < d.length; e++) if (d[e] === V.a) {
                    c = d[e + 1];
                    break
                }
            }
        }
        c && b.push(V.a, c);
        P || (c = X(a)) && c.l && b.push(qe.a, c.l);
        ud(a, b.join(" "))
    };
    n.pa = function (a) {
        return X(a)
    };
    n.Ga = function (a, b) {
        W(a, b)
    };
    n.Ja = function (a, b) {
        W(a, b, !0)
    };
    n.Fa = function (a) {
        return ye(a)
    };
    n.sa = function (a) {
        return xe(a)
    };
    Y.prototype.flush = Y.prototype.flush;
    Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
    Y.prototype.styleElement = Y.prototype.styleElement;
    Y.prototype.styleDocument = Y.prototype.styleDocument;
    Y.prototype.styleSubtree = Y.prototype.styleSubtree;
    Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
    Y.prototype.setElementClass = Y.prototype.Ha;
    Y.prototype._styleInfoForNode = Y.prototype.pa;
    Y.prototype.transformCustomStyleForDocument = Y.prototype.ga;
    Y.prototype.getStyleAst = Y.prototype.ua;
    Y.prototype.styleAstToString = Y.prototype.Ia;
    Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
    Y.prototype.scopeNode = Y.prototype.Ga;
    Y.prototype.unscopeNode = Y.prototype.Ja;
    Y.prototype.scopeForNode = Y.prototype.Fa;
    Y.prototype.currentScopeForNode = Y.prototype.sa;
    Y.prototype.prepareAdoptedCssText = Y.prototype.Da;
    Object.defineProperties(Y.prototype, {
        nativeShadow: {
            get: function () {
                return N
            }
        }, nativeCss: {
            get: function () {
                return P
            }
        }
    });
    var Z = new Y, Re, Se;
    window.ShadyCSS && (Re = window.ShadyCSS.ApplyShim, Se = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
        ScopingShim: Z, prepareTemplate: function (a, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplate(a, b, c)
        }, prepareTemplateDom: function (a, b) {
            Z.prepareTemplateDom(a, b)
        }, prepareTemplateStyles: function (a, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplateStyles(a, b, c)
        }, styleSubtree: function (a, b) {
            Z.flushCustomStyles();
            Z.styleSubtree(a, b)
        }, styleElement: function (a) {
            Z.flushCustomStyles();
            Z.styleElement(a)
        }, styleDocument: function (a) {
            Z.flushCustomStyles();
            Z.styleDocument(a)
        }, flushCustomStyles: function () {
            Z.flushCustomStyles()
        },
        getComputedStyleValue: function (a, b) {
            return Z.getComputedStyleValue(a, b)
        }, nativeCss: P, nativeShadow: N, cssBuild: fd, disableRuntime: O
    };
    Re && (window.ShadyCSS.ApplyShim = Re);
    Se && (window.ShadyCSS.CustomStyleInterface = Se);/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    var Te = window.customElements, Ue = window.HTMLImports, Ve = window.HTMLTemplateElement;
    window.WebComponents = window.WebComponents || {};
    if (Te && Te.polyfillWrapFlushCallback) {
        var We, Xe = function () {
            if (We) {
                Ve.qa && Ve.qa(window.document);
                var a = We;
                We = null;
                a();
                return !0
            }
        }, Ye = Ue.whenReady;
        Te.polyfillWrapFlushCallback(function (a) {
            We = a;
            Ye(Xe)
        });
        Ue.whenReady = function (a) {
            Ye(function () {
                Xe() ? Ue.whenReady(a) : a()
            })
        }
    }
    Ue.whenReady(function () {
        requestAnimationFrame(function () {
            window.WebComponents.ready = !0;
            document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
        })
    });
    var Ze = document.createElement("style");
    Ze.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var $e = document.querySelector("head");
    $e.insertBefore(Ze, $e.firstChild);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
}).call(this);

//# sourceMappingURL=webcomponents-hi-sd.js.map
