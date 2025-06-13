var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { r as reactExports, a as reactDomExports, g as getDefaultExportFromCjs, R as React, L as Link, u as useLocation, b as useNavigate, m as motion, c as useScroll, d as useTransform, A as AnimatePresence, e as Routes, f as Route, B as BrowserRouter } from "./vendor-7e66482b.js";
import { e as emailjs } from "./emailjs-760bce4d.js";
var require_index_001 = __commonJS({
  "assets/index-8f32c509.js"(exports) {
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f$1 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
    function q$1(c2, a2, g2) {
      var b2, d2 = {}, e = null, h2 = null;
      void 0 !== g2 && (e = "" + g2);
      void 0 !== a2.key && (e = "" + a2.key);
      void 0 !== a2.ref && (h2 = a2.ref);
      for (b2 in a2)
        m$2.call(a2, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
      if (c2 && c2.defaultProps)
        for (b2 in a2 = c2.defaultProps, a2)
          void 0 === d2[b2] && (d2[b2] = a2[b2]);
      return { $$typeof: k$1, type: c2, key: e, ref: h2, props: d2, _owner: n$1.current };
    }
    reactJsxRuntime_production_min.Fragment = l$1;
    reactJsxRuntime_production_min.jsx = q$1;
    reactJsxRuntime_production_min.jsxs = q$1;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    var client = {};
    var m$1 = reactDomExports;
    {
      client.createRoot = m$1.createRoot;
      client.hydrateRoot = m$1.hydrateRoot;
    }
    var propTypes = { exports: {} };
    var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
    var ReactPropTypesSecret = ReactPropTypesSecret_1;
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    {
      propTypes.exports = factoryWithThrowingShims();
    }
    var propTypesExports = propTypes.exports;
    const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor)
          return false;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a2[i2], b2[i2]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0]))
              return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!equal(i2.value[1], b2.get(i2.value[0])))
              return false;
          return true;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i2 = it.next()).done)
            if (!b2.has(i2.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (a2[i2] !== b2[i2])
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf && typeof a2.valueOf === "function" && typeof b2.valueOf === "function")
          return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString && typeof a2.toString === "function" && typeof b2.toString === "function")
          return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
            return false;
        if (hasElementType && a2 instanceof Element)
          return false;
        for (i2 = length; i2-- !== 0; ) {
          if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a2.$$typeof) {
            continue;
          }
          if (!equal(a2[keys[i2]], b2[keys[i2]]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    }
    var reactFastCompare = function isEqual(a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
    const n = /* @__PURE__ */ getDefaultExportFromCjs(reactFastCompare);
    var invariant = function(condition, format, a2, b2, c2, d2, e, f2) {
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a2, b2, c2, d2, e, f2];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    var browser = invariant;
    const i = /* @__PURE__ */ getDefaultExportFromCjs(browser);
    var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
    const o = /* @__PURE__ */ getDefaultExportFromCjs(shallowequal);
    function a() {
      return a = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n2 in r)
            Object.prototype.hasOwnProperty.call(r, n2) && (t[n2] = r[n2]);
        }
        return t;
      }, a.apply(this, arguments);
    }
    function s(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, c(t, e);
    }
    function c(t, e) {
      return c = Object.setPrototypeOf || function(t2, e2) {
        return t2.__proto__ = e2, t2;
      }, c(t, e);
    }
    function u(t, e) {
      if (null == t)
        return {};
      var r, n2, i2 = {}, o2 = Object.keys(t);
      for (n2 = 0; n2 < o2.length; n2++)
        e.indexOf(r = o2[n2]) >= 0 || (i2[r] = t[r]);
      return i2;
    }
    var l = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, p = { rel: ["amphtml", "canonical", "alternate"] }, f = { type: ["application/ld+json"] }, d = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] }, h = Object.keys(l).map(function(t) {
      return l[t];
    }), m = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, y = Object.keys(m).reduce(function(t, e) {
      return t[m[e]] = e, t;
    }, {}), T = function(t, e) {
      for (var r = t.length - 1; r >= 0; r -= 1) {
        var n2 = t[r];
        if (Object.prototype.hasOwnProperty.call(n2, e))
          return n2[e];
      }
      return null;
    }, g = function(t) {
      var e = T(t, l.TITLE), r = T(t, "titleTemplate");
      if (Array.isArray(e) && (e = e.join("")), r && e)
        return r.replace(/%s/g, function() {
          return e;
        });
      var n2 = T(t, "defaultTitle");
      return e || n2 || void 0;
    }, b = function(t) {
      return T(t, "onChangeClientState") || function() {
      };
    }, v = function(t, e) {
      return e.filter(function(e2) {
        return void 0 !== e2[t];
      }).map(function(e2) {
        return e2[t];
      }).reduce(function(t2, e2) {
        return a({}, t2, e2);
      }, {});
    }, A = function(t, e) {
      return e.filter(function(t2) {
        return void 0 !== t2[l.BASE];
      }).map(function(t2) {
        return t2[l.BASE];
      }).reverse().reduce(function(e2, r) {
        if (!e2.length)
          for (var n2 = Object.keys(r), i2 = 0; i2 < n2.length; i2 += 1) {
            var o2 = n2[i2].toLowerCase();
            if (-1 !== t.indexOf(o2) && r[o2])
              return e2.concat(r);
          }
        return e2;
      }, []);
    }, C = function(t, e, r) {
      var n2 = {};
      return r.filter(function(e2) {
        return !!Array.isArray(e2[t]) || (void 0 !== e2[t] && console && "function" == typeof console.warn && console.warn("Helmet: " + t + ' should be of type "Array". Instead found type "' + typeof e2[t] + '"'), false);
      }).map(function(e2) {
        return e2[t];
      }).reverse().reduce(function(t2, r2) {
        var i2 = {};
        r2.filter(function(t3) {
          for (var r3, o3 = Object.keys(t3), a2 = 0; a2 < o3.length; a2 += 1) {
            var s3 = o3[a2], c3 = s3.toLowerCase();
            -1 === e.indexOf(c3) || "rel" === r3 && "canonical" === t3[r3].toLowerCase() || "rel" === c3 && "stylesheet" === t3[c3].toLowerCase() || (r3 = c3), -1 === e.indexOf(s3) || "innerHTML" !== s3 && "cssText" !== s3 && "itemprop" !== s3 || (r3 = s3);
          }
          if (!r3 || !t3[r3])
            return false;
          var u3 = t3[r3].toLowerCase();
          return n2[r3] || (n2[r3] = {}), i2[r3] || (i2[r3] = {}), !n2[r3][u3] && (i2[r3][u3] = true, true);
        }).reverse().forEach(function(e2) {
          return t2.push(e2);
        });
        for (var o2 = Object.keys(i2), s2 = 0; s2 < o2.length; s2 += 1) {
          var c2 = o2[s2], u2 = a({}, n2[c2], i2[c2]);
          n2[c2] = u2;
        }
        return t2;
      }, []).reverse();
    }, O = function(t, e) {
      if (Array.isArray(t) && t.length) {
        for (var r = 0; r < t.length; r += 1)
          if (t[r][e])
            return true;
      }
      return false;
    }, S = function(t) {
      return Array.isArray(t) ? t.join("") : t;
    }, E = function(t, e) {
      return Array.isArray(t) ? t.reduce(function(t2, r) {
        return function(t3, e2) {
          for (var r2 = Object.keys(t3), n2 = 0; n2 < r2.length; n2 += 1)
            if (e2[r2[n2]] && e2[r2[n2]].includes(t3[r2[n2]]))
              return true;
          return false;
        }(r, e) ? t2.priority.push(r) : t2.default.push(r), t2;
      }, { priority: [], default: [] }) : { default: t };
    }, I = function(t, e) {
      var r;
      return a({}, t, ((r = {})[e] = void 0, r));
    }, P = [l.NOSCRIPT, l.SCRIPT, l.STYLE], w = function(t, e) {
      return void 0 === e && (e = true), false === e ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }, x = function(t) {
      return Object.keys(t).reduce(function(e, r) {
        var n2 = void 0 !== t[r] ? r + '="' + t[r] + '"' : "" + r;
        return e ? e + " " + n2 : n2;
      }, "");
    }, L = function(t, e) {
      return void 0 === e && (e = {}), Object.keys(t).reduce(function(e2, r) {
        return e2[m[r] || r] = t[r], e2;
      }, e);
    }, j = function(e, r) {
      return r.map(function(r2, n2) {
        var i2, o2 = ((i2 = { key: n2 })["data-rh"] = true, i2);
        return Object.keys(r2).forEach(function(t) {
          var e2 = m[t] || t;
          "innerHTML" === e2 || "cssText" === e2 ? o2.dangerouslySetInnerHTML = { __html: r2.innerHTML || r2.cssText } : o2[e2] = r2[t];
        }), React.createElement(e, o2);
      });
    }, M = function(e, r, n2) {
      switch (e) {
        case l.TITLE:
          return { toComponent: function() {
            return n3 = r.titleAttributes, (i2 = { key: e2 = r.title })["data-rh"] = true, o2 = L(n3, i2), [React.createElement(l.TITLE, o2, e2)];
            var e2, n3, i2, o2;
          }, toString: function() {
            return function(t, e2, r2, n3) {
              var i2 = x(r2), o2 = S(e2);
              return i2 ? "<" + t + ' data-rh="true" ' + i2 + ">" + w(o2, n3) + "</" + t + ">" : "<" + t + ' data-rh="true">' + w(o2, n3) + "</" + t + ">";
            }(e, r.title, r.titleAttributes, n2);
          } };
        case "bodyAttributes":
        case "htmlAttributes":
          return { toComponent: function() {
            return L(r);
          }, toString: function() {
            return x(r);
          } };
        default:
          return { toComponent: function() {
            return j(e, r);
          }, toString: function() {
            return function(t, e2, r2) {
              return e2.reduce(function(e3, n3) {
                var i2 = Object.keys(n3).filter(function(t2) {
                  return !("innerHTML" === t2 || "cssText" === t2);
                }).reduce(function(t2, e4) {
                  var i3 = void 0 === n3[e4] ? e4 : e4 + '="' + w(n3[e4], r2) + '"';
                  return t2 ? t2 + " " + i3 : i3;
                }, ""), o2 = n3.innerHTML || n3.cssText || "", a2 = -1 === P.indexOf(t);
                return e3 + "<" + t + ' data-rh="true" ' + i2 + (a2 ? "/>" : ">" + o2 + "</" + t + ">");
              }, "");
            }(e, r, n2);
          } };
      }
    }, k = function(t) {
      var e = t.baseTag, r = t.bodyAttributes, n2 = t.encode, i2 = t.htmlAttributes, o2 = t.noscriptTags, a2 = t.styleTags, s2 = t.title, c2 = void 0 === s2 ? "" : s2, u2 = t.titleAttributes, h2 = t.linkTags, m2 = t.metaTags, y2 = t.scriptTags, T2 = { toComponent: function() {
      }, toString: function() {
        return "";
      } };
      if (t.prioritizeSeoTags) {
        var g2 = function(t2) {
          var e2 = t2.linkTags, r2 = t2.scriptTags, n3 = t2.encode, i3 = E(t2.metaTags, d), o3 = E(e2, p), a3 = E(r2, f);
          return { priorityMethods: { toComponent: function() {
            return [].concat(j(l.META, i3.priority), j(l.LINK, o3.priority), j(l.SCRIPT, a3.priority));
          }, toString: function() {
            return M(l.META, i3.priority, n3) + " " + M(l.LINK, o3.priority, n3) + " " + M(l.SCRIPT, a3.priority, n3);
          } }, metaTags: i3.default, linkTags: o3.default, scriptTags: a3.default };
        }(t);
        T2 = g2.priorityMethods, h2 = g2.linkTags, m2 = g2.metaTags, y2 = g2.scriptTags;
      }
      return { priority: T2, base: M(l.BASE, e, n2), bodyAttributes: M("bodyAttributes", r, n2), htmlAttributes: M("htmlAttributes", i2, n2), link: M(l.LINK, h2, n2), meta: M(l.META, m2, n2), noscript: M(l.NOSCRIPT, o2, n2), script: M(l.SCRIPT, y2, n2), style: M(l.STYLE, a2, n2), title: M(l.TITLE, { title: c2, titleAttributes: u2 }, n2) };
    }, H = [], N = function(t, e) {
      var r = this;
      void 0 === e && (e = "undefined" != typeof document), this.instances = [], this.value = { setHelmet: function(t2) {
        r.context.helmet = t2;
      }, helmetInstances: { get: function() {
        return r.canUseDOM ? H : r.instances;
      }, add: function(t2) {
        (r.canUseDOM ? H : r.instances).push(t2);
      }, remove: function(t2) {
        var e2 = (r.canUseDOM ? H : r.instances).indexOf(t2);
        (r.canUseDOM ? H : r.instances).splice(e2, 1);
      } } }, this.context = t, this.canUseDOM = e, e || (t.helmet = k({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: true, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
    }, R = React.createContext({}), D = PropTypes.shape({ setHelmet: PropTypes.func, helmetInstances: PropTypes.shape({ get: PropTypes.func, add: PropTypes.func, remove: PropTypes.func }) }), U = "undefined" != typeof document, q = /* @__PURE__ */ function(e) {
      function r(t) {
        var n2;
        return (n2 = e.call(this, t) || this).helmetData = new N(n2.props.context, r.canUseDOM), n2;
      }
      return s(r, e), r.prototype.render = function() {
        return React.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
      }, r;
    }(reactExports.Component);
    q.canUseDOM = U, q.propTypes = { context: PropTypes.shape({ helmet: PropTypes.shape() }), children: PropTypes.node.isRequired }, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
    var Y = function(t, e) {
      var r, n2 = document.head || document.querySelector(l.HEAD), i2 = n2.querySelectorAll(t + "[data-rh]"), o2 = [].slice.call(i2), a2 = [];
      return e && e.length && e.forEach(function(e2) {
        var n3 = document.createElement(t);
        for (var i3 in e2)
          Object.prototype.hasOwnProperty.call(e2, i3) && ("innerHTML" === i3 ? n3.innerHTML = e2.innerHTML : "cssText" === i3 ? n3.styleSheet ? n3.styleSheet.cssText = e2.cssText : n3.appendChild(document.createTextNode(e2.cssText)) : n3.setAttribute(i3, void 0 === e2[i3] ? "" : e2[i3]));
        n3.setAttribute("data-rh", "true"), o2.some(function(t2, e3) {
          return r = e3, n3.isEqualNode(t2);
        }) ? o2.splice(r, 1) : a2.push(n3);
      }), o2.forEach(function(t2) {
        return t2.parentNode.removeChild(t2);
      }), a2.forEach(function(t2) {
        return n2.appendChild(t2);
      }), { oldTags: o2, newTags: a2 };
    }, B = function(t, e) {
      var r = document.getElementsByTagName(t)[0];
      if (r) {
        for (var n2 = r.getAttribute("data-rh"), i2 = n2 ? n2.split(",") : [], o2 = [].concat(i2), a2 = Object.keys(e), s2 = 0; s2 < a2.length; s2 += 1) {
          var c2 = a2[s2], u2 = e[c2] || "";
          r.getAttribute(c2) !== u2 && r.setAttribute(c2, u2), -1 === i2.indexOf(c2) && i2.push(c2);
          var l2 = o2.indexOf(c2);
          -1 !== l2 && o2.splice(l2, 1);
        }
        for (var p2 = o2.length - 1; p2 >= 0; p2 -= 1)
          r.removeAttribute(o2[p2]);
        i2.length === o2.length ? r.removeAttribute("data-rh") : r.getAttribute("data-rh") !== a2.join(",") && r.setAttribute("data-rh", a2.join(","));
      }
    }, K = function(t, e) {
      var r = t.baseTag, n2 = t.htmlAttributes, i2 = t.linkTags, o2 = t.metaTags, a2 = t.noscriptTags, s2 = t.onChangeClientState, c2 = t.scriptTags, u2 = t.styleTags, p2 = t.title, f2 = t.titleAttributes;
      B(l.BODY, t.bodyAttributes), B(l.HTML, n2), function(t2, e2) {
        void 0 !== t2 && document.title !== t2 && (document.title = S(t2)), B(l.TITLE, e2);
      }(p2, f2);
      var d2 = { baseTag: Y(l.BASE, r), linkTags: Y(l.LINK, i2), metaTags: Y(l.META, o2), noscriptTags: Y(l.NOSCRIPT, a2), scriptTags: Y(l.SCRIPT, c2), styleTags: Y(l.STYLE, u2) }, h2 = {}, m2 = {};
      Object.keys(d2).forEach(function(t2) {
        var e2 = d2[t2], r2 = e2.newTags, n3 = e2.oldTags;
        r2.length && (h2[t2] = r2), n3.length && (m2[t2] = d2[t2].oldTags);
      }), e && e(), s2(t, h2, m2);
    }, _ = null, z = /* @__PURE__ */ function(t) {
      function e() {
        for (var e2, r2 = arguments.length, n2 = new Array(r2), i2 = 0; i2 < r2; i2++)
          n2[i2] = arguments[i2];
        return (e2 = t.call.apply(t, [this].concat(n2)) || this).rendered = false, e2;
      }
      s(e, t);
      var r = e.prototype;
      return r.shouldComponentUpdate = function(t2) {
        return !o(t2, this.props);
      }, r.componentDidUpdate = function() {
        this.emitChange();
      }, r.componentWillUnmount = function() {
        this.props.context.helmetInstances.remove(this), this.emitChange();
      }, r.emitChange = function() {
        var t2, e2, r2 = this.props.context, n2 = r2.setHelmet, i2 = null, o2 = (t2 = r2.helmetInstances.get().map(function(t3) {
          var e3 = a({}, t3.props);
          return delete e3.context, e3;
        }), { baseTag: A(["href"], t2), bodyAttributes: v("bodyAttributes", t2), defer: T(t2, "defer"), encode: T(t2, "encodeSpecialCharacters"), htmlAttributes: v("htmlAttributes", t2), linkTags: C(l.LINK, ["rel", "href"], t2), metaTags: C(l.META, ["name", "charset", "http-equiv", "property", "itemprop"], t2), noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t2), onChangeClientState: b(t2), scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t2), styleTags: C(l.STYLE, ["cssText"], t2), title: g(t2), titleAttributes: v("titleAttributes", t2), prioritizeSeoTags: O(t2, "prioritizeSeoTags") });
        q.canUseDOM ? (e2 = o2, _ && cancelAnimationFrame(_), e2.defer ? _ = requestAnimationFrame(function() {
          K(e2, function() {
            _ = null;
          });
        }) : (K(e2), _ = null)) : k && (i2 = k(o2)), n2(i2);
      }, r.init = function() {
        this.rendered || (this.rendered = true, this.props.context.helmetInstances.add(this), this.emitChange());
      }, r.render = function() {
        return this.init(), null;
      }, e;
    }(reactExports.Component);
    z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
    var F = ["children"], G = ["children"], W = /* @__PURE__ */ function(e) {
      function r() {
        return e.apply(this, arguments) || this;
      }
      s(r, e);
      var o2 = r.prototype;
      return o2.shouldComponentUpdate = function(t) {
        return !n(I(this.props, "helmetData"), I(t, "helmetData"));
      }, o2.mapNestedChildrenToProps = function(t, e2) {
        if (!e2)
          return null;
        switch (t.type) {
          case l.SCRIPT:
          case l.NOSCRIPT:
            return { innerHTML: e2 };
          case l.STYLE:
            return { cssText: e2 };
          default:
            throw new Error("<" + t.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        }
      }, o2.flattenArrayTypeChildren = function(t) {
        var e2, r2 = t.child, n2 = t.arrayTypeChildren;
        return a({}, n2, ((e2 = {})[r2.type] = [].concat(n2[r2.type] || [], [a({}, t.newChildProps, this.mapNestedChildrenToProps(r2, t.nestedChildren))]), e2));
      }, o2.mapObjectTypeChildren = function(t) {
        var e2, r2, n2 = t.child, i2 = t.newProps, o3 = t.newChildProps, s2 = t.nestedChildren;
        switch (n2.type) {
          case l.TITLE:
            return a({}, i2, ((e2 = {})[n2.type] = s2, e2.titleAttributes = a({}, o3), e2));
          case l.BODY:
            return a({}, i2, { bodyAttributes: a({}, o3) });
          case l.HTML:
            return a({}, i2, { htmlAttributes: a({}, o3) });
          default:
            return a({}, i2, ((r2 = {})[n2.type] = a({}, o3), r2));
        }
      }, o2.mapArrayTypeChildrenToProps = function(t, e2) {
        var r2 = a({}, e2);
        return Object.keys(t).forEach(function(e3) {
          var n2;
          r2 = a({}, r2, ((n2 = {})[e3] = t[e3], n2));
        }), r2;
      }, o2.warnOnInvalidChildren = function(t, e2) {
        return i(h.some(function(e3) {
          return t.type === e3;
        }), "function" == typeof t.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t.type + "> elements. Refer to our API for more information."), i(!e2 || "string" == typeof e2 || Array.isArray(e2) && !e2.some(function(t2) {
          return "string" != typeof t2;
        }), "Helmet expects a string as a child of <" + t.type + ">. Did you forget to wrap your children in braces? ( <" + t.type + ">{``}</" + t.type + "> ) Refer to our API for more information."), true;
      }, o2.mapChildrenToProps = function(e2, r2) {
        var n2 = this, i2 = {};
        return React.Children.forEach(e2, function(t) {
          if (t && t.props) {
            var e3 = t.props, o3 = e3.children, a2 = u(e3, F), s2 = Object.keys(a2).reduce(function(t2, e4) {
              return t2[y[e4] || e4] = a2[e4], t2;
            }, {}), c2 = t.type;
            switch ("symbol" == typeof c2 ? c2 = c2.toString() : n2.warnOnInvalidChildren(t, o3), c2) {
              case l.FRAGMENT:
                r2 = n2.mapChildrenToProps(o3, r2);
                break;
              case l.LINK:
              case l.META:
              case l.NOSCRIPT:
              case l.SCRIPT:
              case l.STYLE:
                i2 = n2.flattenArrayTypeChildren({ child: t, arrayTypeChildren: i2, newChildProps: s2, nestedChildren: o3 });
                break;
              default:
                r2 = n2.mapObjectTypeChildren({ child: t, newProps: r2, newChildProps: s2, nestedChildren: o3 });
            }
          }
        }), this.mapArrayTypeChildrenToProps(i2, r2);
      }, o2.render = function() {
        var e2 = this.props, r2 = e2.children, n2 = u(e2, G), i2 = a({}, n2), o3 = n2.helmetData;
        return r2 && (i2 = this.mapChildrenToProps(r2, i2)), !o3 || o3 instanceof N || (o3 = new N(o3.context, o3.instances)), o3 ? /* @__PURE__ */ React.createElement(z, a({}, i2, { context: o3.value, helmetData: void 0 })) : /* @__PURE__ */ React.createElement(R.Consumer, null, function(e3) {
          return React.createElement(z, a({}, i2, { context: e3 }));
        });
      }, r;
    }(reactExports.Component);
    W.propTypes = { base: PropTypes.object, bodyAttributes: PropTypes.object, children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]), defaultTitle: PropTypes.string, defer: PropTypes.bool, encodeSpecialCharacters: PropTypes.bool, htmlAttributes: PropTypes.object, link: PropTypes.arrayOf(PropTypes.object), meta: PropTypes.arrayOf(PropTypes.object), noscript: PropTypes.arrayOf(PropTypes.object), onChangeClientState: PropTypes.func, script: PropTypes.arrayOf(PropTypes.object), style: PropTypes.arrayOf(PropTypes.object), title: PropTypes.string, titleAttributes: PropTypes.object, titleTemplate: PropTypes.string, prioritizeSeoTags: PropTypes.bool, helmetData: PropTypes.object }, W.defaultProps = { defer: true, encodeSpecialCharacters: true, prioritizeSeoTags: false }, W.displayName = "Helmet";
    var DefaultContext = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
    };
    var IconContext = React.createContext && React.createContext(DefaultContext);
    var __assign = globalThis && globalThis.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t[p2] = s2[p2];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __rest = globalThis && globalThis.__rest || function(s2, e) {
      var t = {};
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
          t[p2] = s2[p2];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
          if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
            t[p2[i2]] = s2[p2[i2]];
        }
      return t;
    };
    function Tree2Element(tree) {
      return tree && tree.map(function(node, i2) {
        return React.createElement(node.tag, __assign({
          key: i2
        }, node.attr), Tree2Element(node.child));
      });
    }
    function GenIcon(data) {
      return function(props) {
        return React.createElement(IconBase, __assign({
          attr: __assign({}, data.attr)
        }, props), Tree2Element(data.child));
      };
    }
    function IconBase(props) {
      var elem = function(conf) {
        var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className)
          className = conf.className;
        if (props.className)
          className = (className ? className + " " : "") + props.className;
        return React.createElement("svg", __assign({
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
          className,
          style: __assign(__assign({
            color: props.color || conf.color
          }, conf.style), props.style),
          height: computedSize,
          width: computedSize,
          xmlns: "http://www.w3.org/2000/svg"
        }), title && React.createElement("title", null, title), props.children);
      };
      return IconContext !== void 0 ? React.createElement(IconContext.Consumer, null, function(conf) {
        return elem(conf);
      }) : elem(DefaultContext);
    }
    function FiBarChart2(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "18", "y1": "20", "x2": "18", "y2": "10" } }, { "tag": "line", "attr": { "x1": "12", "y1": "20", "x2": "12", "y2": "4" } }, { "tag": "line", "attr": { "x1": "6", "y1": "20", "x2": "6", "y2": "14" } }] })(props);
    }
    function FiLinkedin(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" } }, { "tag": "rect", "attr": { "x": "2", "y": "9", "width": "4", "height": "12" } }, { "tag": "circle", "attr": { "cx": "4", "cy": "4", "r": "2" } }] })(props);
    }
    function FiMail(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" } }, { "tag": "polyline", "attr": { "points": "22,6 12,13 2,6" } }] })(props);
    }
    function FiMenu(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "3", "y1": "12", "x2": "21", "y2": "12" } }, { "tag": "line", "attr": { "x1": "3", "y1": "6", "x2": "21", "y2": "6" } }, { "tag": "line", "attr": { "x1": "3", "y1": "18", "x2": "21", "y2": "18" } }] })(props);
    }
    function FiMessageSquare(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" } }] })(props);
    }
    function FiPhone(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" } }] })(props);
    }
    function FiRefreshCw(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "23 4 23 10 17 10" } }, { "tag": "polyline", "attr": { "points": "1 20 1 14 7 14" } }, { "tag": "path", "attr": { "d": "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" } }] })(props);
    }
    function FiStar(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polygon", "attr": { "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" } }] })(props);
    }
    function FiTarget(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "10" } }, { "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "6" } }, { "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "2" } }] })(props);
    }
    function FiTwitter(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" } }] })(props);
    }
    function FiUsers(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" } }, { "tag": "circle", "attr": { "cx": "9", "cy": "7", "r": "4" } }, { "tag": "path", "attr": { "d": "M23 21v-2a4 4 0 0 0-3-3.87" } }, { "tag": "path", "attr": { "d": "M16 3.13a4 4 0 0 1 0 7.75" } }] })(props);
    }
    function FiX(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "18", "y1": "6", "x2": "6", "y2": "18" } }, { "tag": "line", "attr": { "x1": "6", "y1": "6", "x2": "18", "y2": "18" } }] })(props);
    }
    const Logo = ({ variant = "dark" }) => {
      const mainColor = variant === "light" ? "#FFFFFF" : "#0A2342";
      const accentColor = "#00B2A9";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              color: accentColor,
              fontSize: "2.5rem",
              // Enlarged dot (67% larger)
              marginRight: "0.125rem",
              // Reduced from 0.25rem to 0.125rem (50% closer)
              lineHeight: 0,
              position: "relative",
              top: "-0.05em"
            },
            children: "•"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-sans font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: mainColor }, children: "nor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: accentColor, fontStyle: "italic" }, children: "i" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: mainColor }, children: "vane" })
        ] })
      ] });
    };
    const Header = () => {
      const [isOpen, setIsOpen] = reactExports.useState(false);
      const [isScrolled, setIsScrolled] = reactExports.useState(false);
      const location = useLocation();
      const navigate = useNavigate();
      const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Process", href: "/process" },
        { name: "Contact", href: "/contact" }
      ];
      reactExports.useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      reactExports.useEffect(() => {
        setIsOpen(false);
      }, [location]);
      const handleBookConsultation = () => {
        navigate("/booking");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-elegant py-3" : "bg-primary-500/90 backdrop-blur-sm py-4"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: isScrolled ? "dark" : "light" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center space-x-8", children: [
            navigation.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: item.href,
                className: `text-sm font-medium transition-colors duration-200 ${location.pathname === item.href ? isScrolled ? "text-accent-500 font-semibold" : "text-accent-400 font-semibold" : isScrolled ? "text-secondary-700 hover:text-accent-500" : "text-white hover:text-accent-100 font-medium"}`,
                children: item.name
              },
              item.name
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleBookConsultation,
                className: `${isScrolled ? "btn-accent" : "bg-white text-primary-600 hover:bg-white/90"} px-4 py-2 rounded-lg font-medium transition-all duration-300`,
                children: "Book a Consultation"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `md:hidden focus:outline-none ${isScrolled ? "text-secondary-800" : "text-white"}`,
              onClick: () => setIsOpen(!isOpen),
              children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(FiX, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FiMenu, { size: 24 })
            }
          )
        ] }) }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.3 },
            className: "md:hidden bg-white shadow-lg absolute top-full left-0 w-full",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col space-y-4", children: [
              navigation.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: item.href,
                  className: `text-base font-medium px-3 py-2 rounded-md transition-colors duration-200 ${location.pathname === item.href ? "bg-accent-50 text-accent-500 font-semibold" : "text-secondary-700 hover:bg-secondary-50 hover:text-accent-500"}`,
                  children: item.name
                },
                item.name
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleBookConsultation,
                  className: "btn-accent w-full text-center mt-4",
                  children: "Book a Consultation"
                }
              )
            ] }) })
          }
        )
      ] });
    };
    const Footer = () => {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const navigate = useNavigate();
      const navigation = {
        main: [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Process", href: "/process" },
          { name: "Contact", href: "/contact" }
        ],
        services: [
          { name: "Exit Strategy Planning", href: "/services#exit-strategy" },
          { name: "Business Valuation", href: "/services#valuation" },
          { name: "Buyer Identification", href: "/services#buyers" },
          { name: "Negotiation Support", href: "/services#negotiation" },
          { name: "Post-Sale Transition", href: "/services#transition" }
        ],
        legal: [
          { name: "Privacy Policy", href: "https://docs.google.com/document/d/1U1zEPY6jwMfgGnjRMaBt2KGxjNY7mAraPHgAyQVgjlY/edit?usp=sharing" },
          { name: "Terms of Service", href: "/terms" },
          { name: "Cookie Policy", href: "/cookies" }
        ],
        social: [
          { name: "LinkedIn", icon: FiLinkedin, href: "#" },
          { name: "Twitter", icon: FiTwitter, href: "#" },
          { name: "Email", icon: FiMail, href: "mailto:us@norivane.com" },
          { name: "Phone", icon: FiPhone, href: "tel:+447356224125" }
        ]
      };
      const handleBookConsultation = () => {
        navigate("/booking");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-secondary-900 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom pt-16 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "light" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-300 text-sm max-w-xs", children: "Expert coaching for CEOs looking to sell their businesses valued between £1M-£20M. Strategic guidance for maximum value realization." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-4", children: navigation.social.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: item.href,
                className: "text-secondary-300 hover:text-white transition-colors duration-200",
                "aria-label": item.name,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 20 })
              },
              item.name
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4 text-white", children: "Navigation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: navigation.main.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.href, className: "text-secondary-300 hover:text-white transition-colors duration-200", children: item.name }) }, item.name)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4 text-white", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: navigation.services.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.href, className: "text-secondary-300 hover:text-white transition-colors duration-200", children: item.name }) }, item.name)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4 text-white", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-secondary-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contact@norivane.com", className: "hover:text-white transition-colors duration-200", children: "us@norivane.com" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+447356224125", className: "hover:text-white transition-colors duration-200", children: "+44 (0) 7356 224 125" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleBookConsultation,
                className: "btn-accent mt-6",
                children: "Book a Consultation"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 mt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-secondary-400 text-sm", children: [
            "© ",
            currentYear,
            " Norivane Ltd. All rights reserved."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 md:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex space-x-6 text-sm text-secondary-400", children: navigation.legal.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.href, className: "hover:text-white transition-colors duration-200", children: item.name }) }, item.name)) }) })
        ] })
      ] }) });
    };
    const Hero = () => {
      const navigate = useNavigate();
      const heroRef = reactExports.useRef(null);
      const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
      const { scrollY } = useScroll();
      const y1 = useTransform(scrollY, [0, 500], [0, 150]);
      useTransform(scrollY, [0, 500], [0, -150]);
      const opacity = useTransform(scrollY, [0, 300], [1, 0]);
      reactExports.useEffect(() => {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          setMousePosition({
            x: clientX / innerWidth - 0.5,
            y: clientY / innerHeight - 0.5
          });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: heroRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-[#001233] pt-32 pb-40 md:pt-40 md:pb-48 lg:pt-48 lg:pb-64 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001845] to-[#023e8a] opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920",
                alt: "",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0077b6]/20 blur-[100px]",
                animate: {
                  x: mousePosition.x * -30,
                  y: mousePosition.y * -30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00b4d8]/10 blur-[80px]",
                animate: {
                  x: mousePosition.x * 30,
                  y: mousePosition.y * 30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,100 Q400,150 800,100 T1600,100",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.1)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,200 Q400,250 800,200 T1600,200",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.07)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2.5, ease: "easeInOut", delay: 0.2 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,300 Q400,350 800,300 T1600,300",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.05)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 3, ease: "easeInOut", delay: 0.4 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#00b4d8]/30 rounded-lg",
                animate: {
                  rotate: 360,
                  y: [0, -20, 0]
                },
                transition: {
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-[#00b4d8]/20 rounded-full",
                animate: {
                  rotate: -360,
                  x: [0, 20, 0]
                },
                transition: {
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-2/3 right-1/3 w-20 h-20 border border-[#90e0ef]/10",
                style: { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
                animate: {
                  rotate: 360,
                  scale: [1, 1.1, 1]
                },
                transition: {
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    className: "inline-flex items-center px-4 py-2 rounded-full bg-[#00b4d8]/20 border border-[#00b4d8]/30 mb-8",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#90e0ef] text-sm font-medium", children: "For Business Owners with £1m-£20m Turnover" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.1 },
                    className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Strategic Exit" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Planning for" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                        "Visionary MDs and CEOs",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.span,
                          {
                            className: "absolute -bottom-3 left-0 h-1 bg-[#00b4d8]",
                            initial: { width: 0 },
                            animate: { width: "100%" },
                            transition: { duration: 1, delay: 1 }
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className: "text-lg md:text-xl text-[#caf0f8] mb-8 max-w-lg",
                    children: "Transform your business legacy with our expert coaching. We guide MDs and CEOs through strategic exits that maximise value and secure your future."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.3 },
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => navigate("/booking"),
                          className: "group relative px-8 py-4 bg-[#00b4d8] hover:bg-[#0096c7] text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#00b4d8]/30 overflow-hidden",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Book a Consultation" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.span,
                              {
                                className: "absolute inset-0 bg-[#0077b6] z-0",
                                initial: { x: "-100%" },
                                whileHover: { x: 0 },
                                transition: { duration: 0.3, ease: "easeInOut" }
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => navigate("/services"),
                          className: "group relative px-8 py-4 bg-transparent border border-[#0077b6] text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Explore Services" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.span,
                              {
                                className: "absolute inset-0 bg-[#0077b6]/20 z-0",
                                initial: { y: "100%" },
                                whileHover: { y: 0 },
                                transition: { duration: 0.3, ease: "easeInOut" }
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.8, delay: 0.6 },
                    className: "grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#0077b6]/30",
                    children: [
                      { value: "£250M+", label: "Exit Value" },
                      { value: "92%", label: "Success Rate" },
                      { value: "30+ Years", label: "Experience" }
                    ].map((stat, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.4, delay: 0.8 + index2 * 0.1 },
                        className: "text-center",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#00b4d8] text-2xl md:text-3xl font-bold mb-1", children: stat.value }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#caf0f8]/80 text-sm", children: stat.label })
                        ]
                      },
                      index2
                    ))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8 },
                  style: { y: y1 },
                  className: "hidden md:block",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-[#00b4d8]/10 rounded-full blur-xl" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                          alt: "CEO Strategy Session",
                          className: "w-full h-auto rounded-xl shadow-lg"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          className: "absolute -right-8 -bottom-8 bg-[#001845] text-white px-4 py-3 rounded-lg shadow-lg border border-[#0077b6]/30 backdrop-blur-sm",
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 1, duration: 0.5 },
                          style: {
                            x: mousePosition.x * -15,
                            y: mousePosition.y * -15
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Expert-Led Strategy" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#90e0ef]", children: "Personalised Exit Plans" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          className: "absolute -left-8 -top-8 bg-[#00b4d8] text-white px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm",
                          initial: { opacity: 0, y: -20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 1.2, duration: 0.5 },
                          style: {
                            x: mousePosition.x * 15,
                            y: mousePosition.y * 15
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Maximise Value" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/80", children: "Proven Methodology" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-[#00b4d8]/30",
                        animate: {
                          scale: [1, 1.1, 1],
                          rotate: 360
                        },
                        transition: {
                          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "absolute bottom-10 right-4 w-20 h-1 bg-[#00b4d8]/50 rounded-full",
                        animate: { width: [20, 60, 20] },
                        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }
                    )
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1, duration: 1 },
                style: { opacity },
                className: "absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer",
                onClick: () => {
                  const aboutSection = document.getElementById("about-section");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#caf0f8] text-sm mb-2", children: "Discover Our Expertise" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 border-2 border-[#caf0f8]/30 rounded-full flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { y: [0, 6, 0] },
                      transition: { duration: 1.5, repeat: Infinity },
                      className: "w-2 h-2 bg-[#caf0f8] rounded-full mt-2"
                    }
                  ) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 md:h-24 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z" },
                  animate: { d: "M0,320L1440,320L1440,250C1320,290,1200,310,1080,290C960,270,840,210,720,192C600,170,480,190,360,210C240,230,120,250,60,260L0,270Z" },
                  transition: { duration: 1.5, ease: "easeOut" },
                  fill: "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,280C1320,300,1200,310,1080,300C960,290,840,270,720,260C600,250,480,250,360,260C240,270,120,290,60,300L0,310Z",
                    opacity: 0.1
                  },
                  transition: { duration: 1.8, ease: "easeOut" },
                  fill: "#00b4d8"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,290C1320,300,1200,300,1080,290C960,280,840,260,720,250C600,240,480,240,360,250C240,260,120,280,60,290L0,300Z",
                    opacity: 0.05
                  },
                  transition: { duration: 2, ease: "easeOut" },
                  fill: "#0077b6"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: [...Array(8)].map((_2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute w-2 h-2 rounded-full bg-[#00b4d8]/30",
              initial: {
                x: Math.random() * 100 + "%",
                y: "100%",
                opacity: 0.3 + Math.random() * 0.7,
                scale: 0.5 + Math.random() * 1
              },
              animate: {
                y: "0%",
                opacity: 0
              },
              transition: {
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 5
              }
            },
            i2
          )) })
        ] })
      ] });
    };
    const SectionHeading = ({ title, subtitle, align = "center", theme = "dark", className = "" }) => {
      const alignmentClasses = {
        center: "text-center",
        left: "text-left",
        right: "text-right"
      };
      const themeClasses = {
        dark: {
          title: "text-primary-900",
          subtitle: "text-secondary-600"
        },
        light: {
          title: "text-white",
          subtitle: "text-primary-100"
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${alignmentClasses[align]} ${className}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: `text-3xl md:text-4xl font-serif font-semibold mb-4 ${themeClasses[theme].title}`,
            children: title
          }
        ),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.1 },
            className: `text-lg md:text-xl max-w-3xl mx-auto ${themeClasses[theme].subtitle}`,
            children: subtitle
          }
        )
      ] });
    };
    const About = () => {
      const navigate = useNavigate();
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "Business coaching session",
                className: "rounded-lg shadow-elegant-lg w-full h-auto object-cover"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Expert Guidance for Your Business Exit",
              subtitle: "With 30 years experience as a Deloitte trained Chartered Accountant, I've sold, bought and invested in businesses just like yours",
              align: "left"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.2 },
              className: "space-y-6 text-secondary-900",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At Norivane, we specialise in guiding CEO's and MD's and business owners through the complex process of selling their companies with turnover between £1m and £20m. The approach is born out of years of experience in transactions just like this; now reducing the need for expensive lawyers and accountants until they are needed to complete the deal." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We take a holistic approach that considers your personal goals, legacy concerns, and post-exit plans. Our coaching methodology prepares both you and your business for a successful transition. We are not a business broker." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We understand that selling your business is likely the most significant financial event of your life. Our simple formula is a proven process that has helped me and dozens of business owners achieve premium valuations over initial estimates and smooth (almost) stress free transactions." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    onClick: () => navigate("/process"),
                    className: "btn-accent cursor-pointer",
                    children: "Learn More About Our Approach"
                  }
                ) })
              ]
            }
          )
        ] })
      ] }) }) });
    };
    const ServiceCard = ({ service, index: index2 }) => {
      const { title, description, icon: Icon, link } = service;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index2 * 0.1 },
          className: "bg-white rounded-lg shadow-elegant p-6 flex flex-col h-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-50 w-12 h-12 rounded-md flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary-500 w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-secondary-900 mb-3", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-700 mb-5 flex-grow", children: description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: link,
                className: "text-accent-500 font-medium inline-flex items-center hover:text-accent-600 transition-colors",
                children: [
                  "Learn More",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })
                ]
              }
            )
          ]
        }
      );
    };
    const Services = () => {
      const services = [
        {
          id: "exit-strategy",
          title: "Exit Strategy Planning",
          description: `Develop a comprehensive exit strategy tailored to your business goals, timeline, and desired outcomes. We analyse your business structure, market position, and growth potential to create a roadmap for maximum value.`,
          icon: FiTarget,
          link: "/services#exit-strategy"
        },
        {
          id: "valuation",
          title: "Business Valuation",
          description: `Receive an accurate, market-based professional and independent valuation of your business using multiple methodologies. We identify value drivers and areas for improvement to increase your company's worth before sale.`,
          icon: FiBarChart2,
          link: "/services#valuation"
        },
        {
          id: "buyers",
          title: "Buyer Identification",
          description: `Leverage our extensive network to identify and qualify potential buyers who align with your vision and can offer premium valuations. We create a strategic approach to buyer engagement.`,
          icon: FiUsers,
          link: "/services#buyers"
        },
        {
          id: "negotiation",
          title: "Negotiation Support",
          description: `Benefit from expert guidance throughout the negotiation process. We help structure deals that maximise upfront value while protecting your interests in earnouts and contingent payments.`,
          icon: FiMessageSquare,
          link: "/services#negotiation"
        },
        {
          id: "transition",
          title: "Post-Sale Transition",
          description: `Plan for a smooth transition with strategies for leadership handover, team retention, and your personal next steps. We ensure the business continues to thrive while you move forward.`,
          icon: FiRefreshCw,
          link: "/services#transition"
        }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "section bg-secondary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            title: "Specialised Services for Business Exits",
            subtitle: "Comprehensive support throughout your entire business sale journey, from initial planning to post-sale transition.",
            align: "center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12", children: services.map((service, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service, index: index2 }, service.id)) })
      ] }) });
    };
    const ProcessStep = ({ step, index: index2, totalSteps }) => {
      const { number, title, description } = step;
      const isLast = index2 === totalSteps - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: index2 * 0.1 },
              className: "flex-shrink-0 w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-medium text-lg z-10",
              children: number
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: index2 * 0.1 + 0.1 },
              className: "ml-6 pb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-secondary-900 mb-2", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-700", children: description })
              ]
            }
          )
        ] }),
        !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-12 transform -translate-x-1/2 h-full w-0.5 bg-accent-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0 },
            whileInView: { height: "100%" },
            viewport: { once: true },
            transition: { duration: 0.6, delay: index2 * 0.1 + 0.2 },
            className: "w-full bg-accent-500 h-0"
          }
        ) })
      ] });
    };
    const Process = () => {
      const steps = [
        {
          number: 1,
          title: "Initial Assessment",
          description: "We begin with a comprehensive evaluation of your business, including financial performance, market position, growth potential, and operational strengths and weaknesses."
        },
        {
          number: 2,
          title: "Value Optimisation",
          description: "Based on our assessment, we identify specific opportunities to increase your business value before going to market, focusing on quick wins and strategic improvements."
        },
        {
          number: 3,
          title: "Exit Strategy Development",
          description: "We create a customised exit plan aligned with your timeline and goals, including valuation targets, potential buyer profiles, and deal structure preferences."
        },
        {
          number: 4,
          title: "Buyer Identification",
          description: "Leveraging our extensive network, we identify and approach qualified buyers who are strategically aligned with your business and capable of meeting your valuation expectations."
        },
        {
          number: 5,
          title: "Negotiation & Deal Structuring",
          description: "We guide you through the negotiation process, helping structure a deal that maximises upfront value while protecting your interests in earnouts and contingent payments."
        },
        {
          number: 6,
          title: "Transition Support",
          description: "We provide guidance on leadership transition, team retention, and your personal next steps to ensure a smooth handover and successful post-exit life."
        }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "section bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            title: "Our Proven Exit Process",
            subtitle: "A structured approach to maximise your business value and ensure a successful transition",
            align: "center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 max-w-4xl mx-auto", children: steps.map((step, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProcessStep,
          {
            step,
            index: index2,
            totalSteps: steps.length
          },
          step.number
        )) })
      ] }) });
    };
    const StatCard = ({ stat, index: index2 }) => {
      const { value, label, description } = stat;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index2 * 0.1 },
          className: "bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-medium text-secondary-900 mb-2", children: label }),
            description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 text-sm", children: description })
          ]
        }
      );
    };
    const Stats = () => {
      const stats = [
        {
          value: "30%",
          label: "Average Value Increase",
          description: "Typical improvement in final sale price compared to initial valuation"
        },
        {
          value: "£15M+",
          label: "Largest Deal",
          description: "Our highest value transaction successfully completed"
        },
        {
          value: "25+",
          label: "Businesses Sold",
          description: "Successfully guided exits across multiple industries"
        },
        {
          value: "92%",
          label: "Success Rate",
          description: "Percentage of clients who successfully complete their exit"
        }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            title: "Proven Results",
            subtitle: "Our track record of successful exits speaks for itself",
            align: "center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12", children: stats.map((stat, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { stat, index: index2 }, index2)) })
      ] }) });
    };
    const TestimonialCard = ({ testimonial }) => {
      const { quote, author, position, company, rating, image } = testimonial;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-white rounded-lg shadow-elegant p-6 md:p-8 flex flex-col h-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-1 mb-4", children: [...Array(rating)].map((_2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(FiStar, { className: "text-accent-500 fill-accent-500" }, i2)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-secondary-700 italic mb-6 flex-grow", children: [
              '"',
              quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-auto", children: [
              image && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: image,
                  alt: author,
                  className: "w-12 h-12 rounded-full object-cover mr-4"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-secondary-900", children: author }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-secondary-500", children: [
                  position,
                  ", ",
                  company
                ] })
              ] })
            ] })
          ]
        }
      );
    };
    const Testimonials = () => {
      const testimonials = [
        {
          quote: "Working with Norivane was the best decision I made when selling my manufacturing business. Their strategic guidance helped us increase our valuation by 35% and find the perfect buyer who shared our vision.",
          author: "James Wilson",
          position: "Former CEO",
          company: "P.. M.. Ltd",
          rating: 5,
          image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          quote: "The expertise and network that Norivane brought to the table was invaluable. They guided me through every step of the process, from initial valuation to final negotiations, resulting in a deal that exceeded my expectations.",
          author: "Sarah Thompson",
          position: "Founder",
          company: "T... Digital S...",
          rating: 5,
          image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          quote: "Selling a family business after 25 years was emotionally challenging. Norivane not only helped us achieve a premium valuation but also ensured our legacy and team were protected in the transition.",
          author: "Robert Chen",
          position: "Former Owner",
          company: "C... L...",
          rating: 5,
          image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          quote: "The strategic improvements Norivane recommended before going to market added significant value to our business. Their approach to finding the right buyer, not just the highest bidder, made all the difference.",
          author: "Emma Davies",
          position: "Co-founder",
          company: "I... H...",
          rating: 5,
          image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ];
      reactExports.useState(0);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            title: "Success Stories",
            subtitle: "Hear from business owners who successfully navigated their exit with our guidance",
            align: "center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12", children: testimonials.map((testimonial, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { testimonial }, index2)) })
      ] }) });
    };
    const FAQ = () => {
      const faqs = [
        {
          question: "How long does the typical business sale process take?",
          answer: "The timeline varies based on business complexity, industry, and market conditions. Typically, from initial engagement to completed sale takes 6-12 months. Our simple, step by step formulas aim to optimise both speed and value, focusing on thorough preparation to streamline the later stages of the process."
        },
        {
          question: "What makes your approach different from business brokers?",
          answer: "Unlike traditional brokers who focus primarily on the transaction, we provide comprehensive coaching throughout the entire journey. We work directly with MDs and CEOs to optimise business value before going to market, develop leadership teams, improve operational efficiency, and prepare both the business and the owner for a successful transition."
        },
        {
          question: "How do you determine the value of my business?",
          answer: "We use external and specialised accountants with multiple valuation methodologies including EBITDA multiples, discounted cash flow analysis, comparable sales, and asset-based approaches. Our valuation process considers industry-specific factors, growth potential, customer concentration, team strength, and proprietary elements that create strategic value for potential acquirers. This way, our valuations are truly professional and importantly, independent"
        },
        {
          question: "Will potential buyers know my business is for sale?",
          answer: "We maintain strict confidentiality throughout the process. Information is only shared with pre-qualified buyers who sign non-disclosure agreements. We can implement a blind approach where your company identity is protected until advanced stages of discussion, and we work with you to manage communications with employees, customers, and suppliers."
        },
        {
          question: "What types of businesses do you typically work with?",
          answer: "We specialise in businesses with turnover between £1M and £20M across various sectors including technology, manufacturing, professional services, healthcare, and distribution. The ideal client has established market position, demonstrated profitability, and some level of operational independence from the owner."
        },
        {
          question: "How are your fees structured?",
          answer: "Our engagement typically includes a a fixed fee for a specific amount of time with you to get your business exit ready. After this, we will know more about your business and can determine whether a formulaic (thus lower cost) approach will work, or a more tailored approach is likely to maximise your valuation. This aligns our interests with maximizing your outcome. We provide transparent fee structures upfront, with no hidden costs or surprises."
        }
      ];
      const [openIndex, setOpenIndex] = reactExports.useState(0);
      const toggleFaq = (index2) => {
        setOpenIndex(openIndex === index2 ? null : index2);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            title: "Frequently Asked Questions",
            subtitle: "Common questions about our business exit coaching process",
            align: "center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto mt-12", children: faqs.map((faq, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: index2 * 0.1 },
            className: "mb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => toggleFaq(index2),
                  className: `flex justify-between items-center w-full text-left p-5 rounded-lg transition-all duration-200 ${openIndex === index2 ? "bg-primary-700 text-white" : "bg-white hover:bg-primary-50 text-secondary-900"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: faq.question }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `h-5 w-5 transition-transform duration-200 ${openIndex === index2 ? "transform rotate-180" : ""}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
                      }
                    )
                  ]
                }
              ),
              openIndex === index2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-5 rounded-b-lg shadow-sm border-t border-primary-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-700", children: faq.answer }) })
            ]
          },
          index2
        )) })
      ] }) });
    };
    const CTASection = ({ title, subtitle, buttonText = "Book a Consultation", buttonLink = "/booking" }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-serif font-semibold mb-4", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-primary-50 mb-8", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: buttonLink, className: "btn-white", children: buttonText })
      ] }) }) });
    };
    const MetaTags = ({
      title = "Norivane | Expert Business Exit Strategy Consultants",
      description = "Specialised coaching for business owners with companies with turnover between £1M-£20M looking to maximise their exit value.",
      canonicalUrl,
      ogImage = "/images/og-image.jpg",
      ogType = "website",
      structuredData
    }) => {
      const siteUrl = "https://norivane.com";
      const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
      const fullOgImageUrl = `${siteUrl}${ogImage}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(W, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: fullCanonicalUrl }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: ogType }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: fullCanonicalUrl }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: fullOgImageUrl }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:url", content: fullCanonicalUrl }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:title", content: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:description", content: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image", content: fullOgImageUrl }),
        structuredData && /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })
      ] });
    };
    MetaTags.propTypes = {
      title: PropTypes.string,
      description: PropTypes.string,
      canonicalUrl: PropTypes.string,
      ogImage: PropTypes.string,
      ogType: PropTypes.string,
      structuredData: PropTypes.object
    };
    const seoData = {
      home: {
        title: "Norivane | Expert Business Exit Strategy Consultants",
        description: "Specialised coaching for business owners with companies with turnover between £1M-£20M looking to maximise their exit value.",
        canonicalUrl: "/",
        ogImage: "/images/og-image.jpg",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Norivane",
          url: "https://norivane.com",
          logo: "https://norivane.com/images/logo.png",
          description: "Expert business exit strategy consultants for companies with £1M-£20M turnover.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "UK"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+447356224125",
            contactType: "customer service",
            email: "us@norivane.com"
          },
          sameAs: [
            "https://www.linkedin.com/company/norivane",
            "https://twitter.com/norivane"
          ]
        }
      },
      about: {
        title: "About Norivane | Our Expertise in Business Exit Strategies",
        description: "Learn about Norivane's team of expert consultants specialising in maximising business exit value for companies with £1M-£20M turnover.",
        canonicalUrl: "/about",
        ogImage: "/images/about-og.jpg",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Organization",
            name: "Norivane",
            description: "Expert business exit strategy consultants for companies with £1M-£20M turnover."
          }
        }
      },
      services: {
        title: "Our Services | Business Exit Strategy & Valuation | Norivane",
        description: "Comprehensive exit strategy services including business valuation, buyer identification, negotiation support, and post-sale transition planning.",
        canonicalUrl: "/services",
        ogImage: "/images/services-og.jpg",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          provider: {
            "@type": "Organization",
            name: "Norivane"
          },
          serviceType: "Business Exit Strategy Consulting",
          description: "Comprehensive exit strategy services including business valuation, buyer identification, negotiation support, and post-sale transition planning."
        }
      },
      process: {
        title: "Our Process | How We Maximise Your Business Exit Value | Norivane",
        description: "Discover Norivane's proven 5-step process for maximising business exit value, from initial assessment to successful transition.",
        canonicalUrl: "/process",
        ogImage: "/images/process-og.jpg",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Norivane Business Exit Process",
          description: "Our proven 5-step process for maximising business exit value",
          step: [
            {
              "@type": "HowToStep",
              name: "Initial Assessment",
              text: "Comprehensive evaluation of your business"
            },
            {
              "@type": "HowToStep",
              name: "Strategy Development",
              text: "Creating a tailored exit strategy"
            },
            {
              "@type": "HowToStep",
              name: "Value Enhancement",
              text: "Implementing improvements to increase business value"
            },
            {
              "@type": "HowToStep",
              name: "Buyer Matching",
              text: "Identifying and approaching potential buyers"
            },
            {
              "@type": "HowToStep",
              name: "Transaction & Transition",
              text: "Managing the sale and ensuring smooth transition"
            }
          ]
        }
      },
      contact: {
        title: "Contact Norivane | Business Exit Strategy Consultants",
        description: "Get in touch with our team of expert business exit consultants. Schedule a consultation to discuss maximising your business exit value.",
        canonicalUrl: "/contact",
        ogImage: "/images/contact-og.jpg",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "Organization",
            name: "Norivane",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+447356224125",
              contactType: "customer service",
              email: "us@norivane.com"
            }
          }
        }
      },
      booking: {
        title: "Book a Consultation | Norivane Business Exit Consultants",
        description: "Schedule a consultation with our expert business exit consultants. Take the first step towards maximising your business exit value.",
        canonicalUrl: "/booking",
        ogImage: "/images/booking-og.jpg",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          provider: {
            "@type": "Organization",
            name: "Norivane"
          },
          serviceType: "Business Exit Strategy Consultation",
          description: "Expert consultation on business exit strategies for companies with £1M-£20M turnover."
        }
      }
    };
    const HomePage = () => {
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, __spreadValues({}, seoData.home)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "about-section", className: "relative bg-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-gradient-to-b from-white to-primary-50 py-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-primary-900 text-white py-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-white py-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-gradient-to-b from-white to-primary-50 py-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-white py-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}) })
      ] });
    };
    const AboutPage = () => {
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About Us | Norivane";
      }, []);
      const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
      const { scrollY } = useScroll();
      useTransform(scrollY, [0, 500], [0, 150]);
      useTransform(scrollY, [0, 500], [0, -150]);
      const opacity = useTransform(scrollY, [0, 300], [1, 0]);
      reactExports.useEffect(() => {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          setMousePosition({
            x: clientX / innerWidth - 0.5,
            y: clientY / innerHeight - 0.5
          });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);
      const values = [
        {
          title: "Strategic Focus",
          description: "We approach every client engagement with a strategic mindset, focusing on long-term value creation rather than quick transactions.",
          icon: "📊"
        },
        {
          title: "Integrity",
          description: "We maintain the highest ethical standards in all our dealings, providing honest assessments and transparent guidance throughout the process.",
          icon: "🤝"
        },
        {
          title: "Client-Centred",
          description: "Your goals and vision drive our approach. We tailor our strategies to your specific situation and desired outcomes.",
          icon: "👥"
        },
        {
          title: "Excellence",
          description: "We are committed to delivering exceptional results through meticulous attention to detail and continuous improvement.",
          icon: "🏆"
        }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-40 md:pt-40 md:pb-48 bg-[#001233] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001845] to-[#023e8a] opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0077b6]/20 blur-[100px]",
                animate: {
                  x: mousePosition.x * -30,
                  y: mousePosition.y * -30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00b4d8]/10 blur-[80px]",
                animate: {
                  x: mousePosition.x * 30,
                  y: mousePosition.y * 30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,100 Q400,150 800,100 T1600,100",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.1)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,200 Q400,250 800,200 T1600,200",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.07)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2.5, ease: "easeInOut", delay: 0.2 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,300 Q400,350 800,300 T1600,300",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.05)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 3, ease: "easeInOut", delay: 0.4 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#00b4d8]/30 rounded-lg",
                animate: {
                  rotate: 360,
                  y: [0, -20, 0]
                },
                transition: {
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-[#00b4d8]/20 rounded-full",
                animate: {
                  rotate: -360,
                  x: [0, 20, 0]
                },
                transition: {
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-2/3 right-1/3 w-20 h-20 border border-[#90e0ef]/10",
                style: { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
                animate: {
                  rotate: 360,
                  scale: [1, 1.1, 1]
                },
                transition: {
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "text-4xl md:text-5xl font-serif font-semibold text-white mb-6",
                children: "About Norivane"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-xl text-[#caf0f8] mb-8",
                children: "Dedicated to helping business owners achieve exceptional exits"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1, duration: 1 },
              style: { opacity },
              className: "absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer",
              onClick: () => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: "smooth"
                });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#caf0f8] text-sm mb-2", children: "Discover Our Story" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 border-2 border-[#caf0f8]/30 rounded-full flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { y: [0, 6, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    className: "w-2 h-2 bg-[#caf0f8] rounded-full mt-2"
                  }
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 md:h-24 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z" },
                  animate: { d: "M0,320L1440,320L1440,250C1320,290,1200,310,1080,290C960,270,840,210,720,192C600,170,480,190,360,210C240,230,120,250,60,260L0,270Z" },
                  transition: { duration: 1.5, ease: "easeOut" },
                  fill: "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,280C1320,300,1200,310,1080,300C960,290,840,270,720,260C600,250,480,250,360,260C240,270,120,290,60,300L0,310Z",
                    opacity: 0.1
                  },
                  transition: { duration: 1.8, ease: "easeOut" },
                  fill: "#00b4d8"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,290C1320,300,1200,300,1080,290C960,280,840,260,720,250C600,240,480,240,360,250C240,260,120,280,60,290L0,300Z",
                    opacity: 0.05
                  },
                  transition: { duration: 2, ease: "easeOut" },
                  fill: "#0077b6"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: [...Array(8)].map((_2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute w-2 h-2 rounded-full bg-[#00b4d8]/30",
              initial: {
                x: Math.random() * 100 + "%",
                y: "100%",
                opacity: 0.3 + Math.random() * 0.7,
                scale: 0.5 + Math.random() * 1
              },
              animate: {
                y: "0%",
                opacity: 0
              },
              transition: {
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 5
              }
            },
            i2
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-8 pb-16 md:pt-12 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  alt: "Norivane founder",
                  className: "rounded-lg shadow-elegant-lg w-full h-auto object-cover"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                title: "Our Story",
                subtitle: "Founded on a vision to transform how business owners approach their exit",
                align: "left"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 },
                className: "space-y-6 text-secondary-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Norivane was founded in 2014 after witnessing too many business owners leave millions on the table during their exit. Our founder, having sold his own technology company, recognized that most CEOs approach their exit without adequate preparation or strategic guidance." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "What began as informal advisory sessions with fellow entrepreneurs quickly evolved into a structured coaching methodology. Today, Norivane has guided over 45 successful exits across multiple industries, with a consistent track record of achieving valuations 25-40% above initial market estimates." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our approach combines deep financial expertise with practical operational experience. We understand both the technical aspects of business valuation and the emotional journey of letting go of a company you've built. This holistic perspective allows us to provide guidance that addresses both the business transaction and the personal transition." })
                ]
              }
            )
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Core Values",
              subtitle: "The principles that guide our approach to every client relationship",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12", children: values.map((value, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index2 * 0.1 },
              className: "bg-white rounded-lg shadow-elegant p-6 md:p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: value.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-serif font-medium mb-3", children: value.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: value.description })
              ]
            },
            index2
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Meet Matthew Broadbent",
              subtitle: "Director and Coach",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "order-2 lg:order-1",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-secondary-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg italic font-serif text-primary-700", children: `"There's a common theme running between start-up, scale up and business exit. That theme is valuation. And having the skill to enhance that valuation is a gift that will keep on giving. Investors will flock to invest in your start-up. Applications for funding will pass through funding committees without question. Buyers will fight to buy your business because a business that is attractive to investors and other funders is also a business that's ready for buyers to acquire and add to their portfolios."` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-semibold text-primary-900", children: "Matthew Broadbent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-700 font-medium", children: "DIRECTOR AND COACH" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Deloitte trained Chartered Accountant with 3 decades of transactions under his belt, he has started up, bought, scaled, sold and invested in small and medium sized businesses over a career span as managing director, finance director and fund manager (when investing other people's money). Protecting you from the scares." })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "order-1 lg:order-2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "https://i.ibb.co/S43tc1Qn/IMG-7216.jpg",
                    alt: "Matthew Broadbent - Director and Coach",
                    className: "rounded-lg shadow-elegant-lg w-full h-auto object-cover"
                  }
                ) })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-primary-900 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Approach",
              subtitle: "A methodology refined through dozens of successful exits",
              align: "center",
              theme: "light",
              className: "text-white"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "bg-primary-800 rounded-lg p-6 md:p-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "🔍" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-3", children: "Holistic Assessment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "We begin by understanding your business from every angle—financial performance, operational efficiency, market position, team strength, and growth potential." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.1 },
                className: "bg-primary-800 rounded-lg p-6 md:p-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "📈" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-3", children: "Value Optimisation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "We identify and implement strategic improvements that can significantly increase your business value before going to market." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 },
                className: "bg-primary-800 rounded-lg p-6 md:p-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "🤝" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-3", children: "Strategic Matching" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "Rather than a broad auction approach, we identify and approach specific buyers who are strategically aligned with your business and capable of paying a premium." })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTASection,
          {
            title: "Ready to discuss your exit strategy?",
            subtitle: "Book a confidential consultation to explore how we can help maximise your business sale value."
          }
        )
      ] });
    };
    const ServicesPage = () => {
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Services | Norivane";
      }, []);
      const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
      const { scrollY } = useScroll();
      useTransform(scrollY, [0, 500], [0, 150]);
      useTransform(scrollY, [0, 500], [0, -150]);
      const opacity = useTransform(scrollY, [0, 300], [1, 0]);
      reactExports.useEffect(() => {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          setMousePosition({
            x: clientX / innerWidth - 0.5,
            y: clientY / innerHeight - 0.5
          });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);
      const services = [
        {
          id: "exit-strategy",
          title: "Exit Strategy Planning",
          description: "A comprehensive exit strategy tailored to your specific business goals, timeline, and desired outcomes.",
          icon: FiTarget,
          details: [
            "Personalised exit roadmap development",
            "Timeline planning and milestone setting",
            "Exit options analysis (full sale, partial sale, management buyout)",
            "Tax optimisation strategies",
            "Personal financial planning integration"
          ],
          // Updated image URL to a more reliable one
          image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: "valuation",
          title: "Business Valuation",
          description: "Accurate, market-based valuation using multiple methodologies to establish realistic price expectations.",
          icon: FiBarChart2,
          details: [
            "Comprehensive financial analysis",
            "Industry-specific valuation metrics",
            "Comparable transaction analysis",
            "Value driver identification",
            "Pre-sale value enhancement strategies"
          ],
          image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: "buyers",
          title: "Buyer Identification",
          description: "Strategic approach to identifying and qualifying potential buyers who align with your vision and can offer premium valuations.",
          icon: FiUsers,
          details: [
            "Strategic buyer profiling",
            "Confidential outreach campaigns",
            "Buyer qualification and screening",
            "Synergy opportunity identification",
            "Competitive tension management"
          ],
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: "negotiation",
          title: "Negotiation Support",
          description: "Expert guidance throughout the negotiation process to maximise deal value and structure.",
          icon: FiMessageSquare,
          details: [
            "Term sheet and LOI review",
            "Deal structure optimisation",
            "Earnout and contingent payment structuring",
            "Due diligence preparation and management",
            "Closing process coordination"
          ],
          image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: "transition",
          title: "Post-Sale Transition",
          description: "Strategies for a smooth transition, including leadership handover, team retention, and your personal next steps.",
          icon: FiRefreshCw,
          details: [
            "Transition plan development",
            "Key employee retention strategies",
            "Knowledge transfer frameworks",
            "Integration support",
            "Personal transition coaching"
          ],
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-40 md:pt-40 md:pb-48 bg-[#001233] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001845] to-[#023e8a] opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920",
                alt: "",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0077b6]/20 blur-[100px]",
                animate: {
                  x: mousePosition.x * -30,
                  y: mousePosition.y * -30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00b4d8]/10 blur-[80px]",
                animate: {
                  x: mousePosition.x * 30,
                  y: mousePosition.y * 30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,100 Q400,150 800,100 T1600,100",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.1)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,200 Q400,250 800,200 T1600,200",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.07)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2.5, ease: "easeInOut", delay: 0.2 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,300 Q400,350 800,300 T1600,300",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.05)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 3, ease: "easeInOut", delay: 0.4 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#00b4d8]/30 rounded-lg",
                animate: {
                  rotate: 360,
                  y: [0, -20, 0]
                },
                transition: {
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-[#00b4d8]/20 rounded-full",
                animate: {
                  rotate: -360,
                  x: [0, 20, 0]
                },
                transition: {
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-2/3 right-1/3 w-20 h-20 border border-[#90e0ef]/10",
                style: { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
                animate: {
                  rotate: 360,
                  scale: [1, 1.1, 1]
                },
                transition: {
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "text-4xl md:text-5xl font-serif font-semibold text-white mb-6",
                children: "Our Services"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-xl text-[#caf0f8] mb-8",
                children: "Comprehensive support throughout your entire business sale journey"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1, duration: 1 },
              style: { opacity },
              className: "absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer",
              onClick: () => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: "smooth"
                });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#caf0f8] text-sm mb-2", children: "Explore Our Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 border-2 border-[#caf0f8]/30 rounded-full flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { y: [0, 6, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    className: "w-2 h-2 bg-[#caf0f8] rounded-full mt-2"
                  }
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 md:h-24 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z" },
                  animate: { d: "M0,320L1440,320L1440,250C1320,290,1200,310,1080,290C960,270,840,210,720,192C600,170,480,190,360,210C240,230,120,250,60,260L0,270Z" },
                  transition: { duration: 1.5, ease: "easeOut" },
                  fill: "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,280C1320,300,1200,310,1080,300C960,290,840,270,720,260C600,250,480,250,360,260C240,270,120,290,60,300L0,310Z",
                    opacity: 0.1
                  },
                  transition: { duration: 1.8, ease: "easeOut" },
                  fill: "#00b4d8"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,290C1320,300,1200,300,1080,290C960,280,840,260,720,250C600,240,480,240,360,250C240,260,120,280,60,290L0,300Z",
                    opacity: 0.05
                  },
                  transition: { duration: 2, ease: "easeOut" },
                  fill: "#0077b6"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: [...Array(8)].map((_2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute w-2 h-2 rounded-full bg-[#00b4d8]/30",
              initial: {
                x: Math.random() * 100 + "%",
                y: "100%",
                opacity: 0.3 + Math.random() * 0.7,
                scale: 0.5 + Math.random() * 1
              },
              animate: {
                y: "0%",
                opacity: 0
              },
              transition: {
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 5
              }
            },
            i2
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-8 pb-16 md:pt-12 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "How We Help Business Owners",
              subtitle: "Our comprehensive suite of services guides you through every stage of the exit process",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-24", children: services.map((service, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: service.id,
              className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index2 % 2 === 1 ? "lg:grid-flow-dense" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: index2 % 2 === 0 ? -20 : 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5 },
                    className: index2 % 2 === 1 ? "lg:col-start-2" : "",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: service.image,
                        alt: service.title,
                        className: "rounded-lg shadow-elegant-lg w-full h-auto object-cover",
                        onError: (e) => {
                          console.error(`Failed to load image for ${service.title}`, e);
                          e.target.src = "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-50 p-4 rounded-lg inline-flex mb-6 text-primary-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { size: 24 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.h2,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5 },
                      className: "text-3xl md:text-4xl font-serif font-semibold mb-4",
                      children: service.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: 0.1 },
                      className: "text-lg text-secondary-600 mb-6",
                      children: service.description
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.ul,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: 0.2 },
                      className: "space-y-3 mb-8",
                      children: service.details.map((detail, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 text-primary-700 mr-3 mt-0.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary-700", children: detail })
                      ] }, i2))
                    }
                  )
                ] })
              ]
            },
            service.id
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Methodology",
              subtitle: "A proven approach refined through dozens of successful exits",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 bg-white rounded-lg shadow-elegant-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "p-8 border-b md:border-b-0 md:border-r border-secondary-100",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-serif font-bold text-primary-700 mb-4", children: "01" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-3", children: "Assess" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "We begin with a comprehensive evaluation of your business, identifying strengths, weaknesses, and opportunities for value enhancement." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.1 },
                className: "p-8 border-b md:border-b-0 md:border-r border-secondary-100",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-serif font-bold text-primary-700 mb-4", children: "02" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-3", children: "Optimise" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "We implement strategic improvements to increase your business value before approaching potential buyers." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 },
                className: "p-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-serif font-bold text-primary-700 mb-4", children: "03" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-3", children: "Execute" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "We guide you through the entire transaction process, from buyer identification to negotiation and closing." })
                ]
              }
            )
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Engagement Approach",
              subtitle: "We focus on value creation rather than transaction costs",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 bg-white rounded-lg shadow-elegant-lg p-8 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    alt: "Business partnership",
                    className: "rounded-lg shadow-elegant w-full h-auto object-cover"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.h3,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  className: "text-2xl font-serif font-semibold mb-4",
                  children: "Finding the Right Match"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.1 },
                  className: "space-y-4 text-secondary-700",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At Norivane, we believe the most important aspect of our relationship is not the cost, but whether we're the right match for your business exit journey. Our engagement is based on the value we can create together." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We offer flexible engagement options that can be tailored to your specific needs. Whether you join one of our structured programmes or prefer a direct one-on-one approach, we customise our services to maximise the value of your business exit." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our commitment is to deliver value that significantly exceeds the investment in our services. We only work with business owners where we're confident we can add substantial value beyond our fees." })
                  ]
                }
              )
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTASection,
          {
            title: "Ready to maximise your business sale value?",
            subtitle: "Book a confidential consultation to discuss your exit strategy."
          }
        )
      ] });
    };
    const ProcessPage = () => {
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Our Process | Norivane";
      }, []);
      const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
      const { scrollY } = useScroll();
      useTransform(scrollY, [0, 500], [0, 150]);
      useTransform(scrollY, [0, 500], [0, -150]);
      const opacity = useTransform(scrollY, [0, 300], [1, 0]);
      reactExports.useEffect(() => {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          setMousePosition({
            x: clientX / innerWidth - 0.5,
            y: clientY / innerHeight - 0.5
          });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);
      const processSteps = [
        {
          number: "01",
          title: "Initial Consultation",
          description: "We begin with a confidential discussion to understand your goals, timeline, and expectations for the business sale. This helps us tailor our approach to your specific situation.",
          details: [
            "Discuss your personal and business objectives",
            "Establish preliminary timeline expectations",
            "Identify potential challenges and opportunities",
            "Outline next steps in the engagement process"
          ],
          image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          number: "02",
          title: "Comprehensive Business Assessment",
          description: "We conduct a thorough evaluation of your business across multiple dimensions to establish a baseline and identify areas for improvement before going to market.",
          details: [
            "Financial performance analysis and normalisation",
            "Operational efficiency review",
            "Market position and competitive landscape assessment",
            "Team structure and dependency evaluation",
            "Growth potential and risk factor identification"
          ],
          image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          number: "03",
          title: "Value Enhancement Implementation",
          description: "Based on our assessment, we implement strategic improvements to increase your business value before approaching potential buyers.",
          details: [
            "Financial performance optimisation",
            "Operational efficiency improvements",
            "Customer concentration reduction strategies",
            "Recurring revenue enhancement",
            "Documentation of processes and intellectual property"
          ],
          image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          number: "04",
          title: "Exit Strategy Development",
          description: "We create a customised exit plan aligned with your timeline and goals, including valuation targets, potential buyer profiles, and deal structure preferences.",
          details: [
            "Valuation range establishment",
            "Exit option analysis (full sale, partial sale, management buyout)",
            "Tax optimisation planning",
            "Timeline development with key milestones",
            "Deal structure preferences documentation"
          ],
          image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          number: "05",
          title: "Buyer Identification & Approach",
          description: "We identify and confidentially approach qualified buyers who are strategically aligned with your business and capable of meeting your valuation expectations.",
          details: [
            "Strategic buyer profile development",
            "Confidential marketing materials creation",
            "Targeted outreach to qualified prospects",
            "Initial interest qualification",
            "Non-disclosure agreement management"
          ],
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          number: "06",
          title: "Negotiation & Deal Structuring",
          description: "We guide you through the negotiation process, helping structure a deal that maximises upfront value while protecting your interests in earnouts and contingent payments.",
          details: [
            "Initial offer evaluation and response strategy",
            "Term sheet and LOI negotiation",
            "Due diligence preparation and management",
            "Purchase agreement review and negotiation",
            "Closing process coordination"
          ],
          image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          number: "07",
          title: "Transition Support",
          description: "After the sale, we provide guidance on leadership transition, team retention, and your personal next steps to ensure a smooth handover and successful post-exit life.",
          details: [
            "Transition plan development",
            "Key employee retention strategies",
            "Knowledge transfer framework",
            "Integration support",
            "Personal transition coaching"
          ],
          image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-40 md:pt-40 md:pb-48 bg-[#001233] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001845] to-[#023e8a] opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0077b6]/20 blur-[100px]",
                animate: {
                  x: mousePosition.x * -30,
                  y: mousePosition.y * -30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00b4d8]/10 blur-[80px]",
                animate: {
                  x: mousePosition.x * 30,
                  y: mousePosition.y * 30
                },
                transition: { type: "spring", damping: 15 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,100 Q400,150 800,100 T1600,100",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.1)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,200 Q400,250 800,200 T1600,200",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.07)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 2.5, ease: "easeInOut", delay: 0.2 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  d: "M0,300 Q400,350 800,300 T1600,300",
                  fill: "none",
                  stroke: "rgba(0, 180, 216, 0.05)",
                  strokeWidth: "2",
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: { duration: 3, ease: "easeInOut", delay: 0.4 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#00b4d8]/30 rounded-lg",
                animate: {
                  rotate: 360,
                  y: [0, -20, 0]
                },
                transition: {
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-[#00b4d8]/20 rounded-full",
                animate: {
                  rotate: -360,
                  x: [0, 20, 0]
                },
                transition: {
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute top-2/3 right-1/3 w-20 h-20 border border-[#90e0ef]/10",
                style: { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
                animate: {
                  rotate: 360,
                  scale: [1, 1.1, 1]
                },
                transition: {
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "text-4xl md:text-5xl font-serif font-semibold text-white mb-6",
                children: "Our Process"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-xl text-[#caf0f8] mb-8",
                children: "A proven methodology refined through dozens of successful business exits"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1, duration: 1 },
              style: { opacity },
              className: "absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer",
              onClick: () => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: "smooth"
                });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#caf0f8] text-sm mb-2", children: "Explore Our Process" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 border-2 border-[#caf0f8]/30 rounded-full flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { y: [0, 6, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    className: "w-2 h-2 bg-[#caf0f8] rounded-full mt-2"
                  }
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 md:h-24 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z" },
                  animate: { d: "M0,320L1440,320L1440,250C1320,290,1200,310,1080,290C960,270,840,210,720,192C600,170,480,190,360,210C240,230,120,250,60,260L0,270Z" },
                  transition: { duration: 1.5, ease: "easeOut" },
                  fill: "#ffffff"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,280C1320,300,1200,310,1080,300C960,290,840,270,720,260C600,250,480,250,360,260C240,270,120,290,60,300L0,310Z",
                    opacity: 0.1
                  },
                  transition: { duration: 1.8, ease: "easeOut" },
                  fill: "#00b4d8"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "absolute bottom-full left-0 w-full",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 320",
              preserveAspectRatio: "none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.path,
                {
                  initial: { d: "M0,320L1440,320L1440,320L0,320Z", opacity: 0 },
                  animate: {
                    d: "M0,320L1440,320L1440,290C1320,300,1200,300,1080,290C960,280,840,260,720,250C600,240,480,240,360,250C240,260,120,280,60,290L0,300Z",
                    opacity: 0.05
                  },
                  transition: { duration: 2, ease: "easeOut" },
                  fill: "#0077b6"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: [...Array(8)].map((_2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute w-2 h-2 rounded-full bg-[#00b4d8]/30",
              initial: {
                x: Math.random() * 100 + "%",
                y: "100%",
                opacity: 0.3 + Math.random() * 0.7,
                scale: 0.5 + Math.random() * 1
              },
              animate: {
                y: "0%",
                opacity: 0
              },
              transition: {
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 5
              }
            },
            i2
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-8 pb-16 md:pt-12 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Proven Exit Process",
              subtitle: "A structured approach to maximise your business value and ensure a successful transition",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-24", children: processSteps.map((step, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index2 % 2 === 1 ? "lg:grid-flow-dense" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: index2 % 2 === 0 ? -20 : 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5 },
                    className: index2 % 2 === 1 ? "lg:col-start-2" : "",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: step.image,
                        alt: step.title,
                        className: "rounded-lg shadow-elegant-lg w-full h-auto object-cover"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-6", children: step.number }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.h2,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5 },
                      className: "text-3xl md:text-4xl font-serif font-semibold mb-4",
                      children: step.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: 0.1 },
                      className: "text-lg text-secondary-600 mb-6",
                      children: step.description
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: 0.2 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-secondary-900 mb-3", children: "Key Activities:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: step.details.map((detail, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 text-primary-700 mr-3 mt-0.5",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary-700", children: detail })
                        ] }, i2)) })
                      ]
                    }
                  )
                ] })
              ]
            },
            index2
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Typical Exit Timeline",
              subtitle: "While every business sale is unique, here's a general timeline of what to expect",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:translate-x-px" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  className: "relative flex flex-col md:flex-row items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0", children: "1-2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 md:pr-12 md:text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-2", children: "Months 1-2: Assessment & Planning" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "Initial consultation, business assessment, and preliminary exit strategy development." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 md:pl-12 mt-4 md:mt-0" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  className: "relative flex flex-col md:flex-row items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0", children: "3-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 md:pr-12 md:text-right" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 md:pl-12 mt-4 md:mt-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-2", children: "Months 3-4: Value Enhancement" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "Implementation of strategic improvements to increase business value before going to market." })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  className: "relative flex flex-col md:flex-row items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0", children: "5-6" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 md:pr-12 md:text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-2", children: "Months 5-6: Buyer Identification" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "Development of marketing materials, identification of potential buyers, and initial outreach." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 md:pl-12 mt-4 md:mt-0" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  className: "relative flex flex-col md:flex-row items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0", children: "7-9" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 md:pr-12 md:text-right" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 md:pl-12 mt-4 md:mt-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-2", children: "Months 7-9: Negotiation & Due Diligence" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "Evaluation of offers, negotiation of terms, and management of the due diligence process." })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                  className: "relative flex flex-col md:flex-row items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 md:mb-0", children: "10-12" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 md:pr-12 md:text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-2", children: "Months 10-12: Closing & Transition" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "Finalisation of the purchase agreement, closing of the transaction, and implementation of the transition plan." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 md:pl-12 mt-4 md:mt-0" })
                  ]
                }
              )
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Our Results",
              subtitle: "The impact of our structured approach on business exit outcomes",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2", children: "30%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-medium text-secondary-900 mb-2", children: "Average Value Increase" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 text-sm", children: "Typical improvement in final sale price compared to initial valuation" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.1 },
                className: "bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2", children: "92%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-medium text-secondary-900 mb-2", children: "Success Rate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 text-sm", children: "Percentage of clients who successfully complete their exit" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 },
                className: "bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2", children: "25+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-medium text-secondary-900 mb-2", children: "Businesses Sold" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 text-sm", children: "Successfully guided exits across multiple industries" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.3 },
                className: "bg-white rounded-lg shadow-elegant p-6 md:p-8 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-serif font-bold text-primary-700 mb-2", children: "9/10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-medium text-secondary-900 mb-2", children: "Client Satisfaction" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 text-sm", children: "Average client satisfaction rating on a 10-point scale" })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTASection,
          {
            title: "Ready to begin your exit journey?",
            subtitle: "Book a confidential consultation to discuss how our process can work for your business."
          }
        )
      ] });
    };
    const PRODUCTION_CONFIG = {
      USER_ID: "",
      // Your EmailJS User ID
      SERVICE_ID: "",
      // Your EmailJS Service ID
      TEMPLATE_ID: ""
      // Your EmailJS Template ID
    };
    emailjs.init(PRODUCTION_CONFIG.USER_ID);
    const getEmailJSConfig = () => {
      const envUserId = "";
      const envServiceId = "";
      const envTemplateId = "";
      const isProduction = true;
      return {
        userId: envUserId || (isProduction ? PRODUCTION_CONFIG.USER_ID : ""),
        serviceId: envServiceId || (isProduction ? PRODUCTION_CONFIG.SERVICE_ID : ""),
        templateId: envTemplateId || (isProduction ? PRODUCTION_CONFIG.TEMPLATE_ID : "")
      };
    };
    const ContactForm = ({ onSubmit }) => {
      const [formData, setFormData] = reactExports.useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        revenue: "",
        message: ""
      });
      const [formStatus, setFormStatus] = reactExports.useState({
        submitted: false,
        success: false,
        message: ""
      });
      const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => __spreadProps(__spreadValues({}, prev), { [name]: value }));
      };
      const handleSubmit = (e) => __async(exports, null, function* () {
        e.preventDefault();
        setIsSubmitting(true);
        if (onSubmit) {
          onSubmit(formData);
          setIsSubmitting(false);
          return;
        }
        try {
          const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone || "Not provided",
            company: formData.company,
            revenue: formData.revenue || "Not specified",
            message: formData.message
          };
          const { serviceId, templateId } = getEmailJSConfig();
          console.log("EmailJS Config:", {
            serviceId: serviceId ? "Set" : "Not set",
            templateId: templateId ? "Set" : "Not set"
          });
          if (!serviceId || !templateId) {
            console.error("EmailJS configuration is missing. Please check your environment variables or fallback configuration.");
            setFormStatus({
              submitted: true,
              success: false,
              message: "There was an error sending your message. Please contact us directly at us@norivane.com."
            });
            setIsSubmitting(false);
            return;
          }
          const response = yield emailjs.send(
            serviceId,
            templateId,
            templateParams
          );
          console.log("EmailJS SUCCESS:", response);
          setFormStatus({
            submitted: true,
            success: true,
            message: "Thank you for your message. We will be in touch shortly."
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            revenue: "",
            message: ""
          });
        } catch (error) {
          console.error("EmailJS ERROR:", error);
          setFormStatus({
            submitted: true,
            success: false,
            message: `There was an error sending your message. Please try again later or contact us directly at us@norivane.com.`
          });
        } finally {
          setIsSubmitting(false);
        }
      });
      const revenueOptions = [
        { value: "", label: "Select annual revenue (optional)" },
        { value: "1-5M", label: "£1M - £5M" },
        { value: "5-10M", label: "£5M - £10M" },
        { value: "10-20M", label: "£10M - £20M" },
        { value: "20M+", label: "Over £20M" }
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-white rounded-lg shadow-elegant-lg p-6 md:p-8 lg:p-10",
          children: formStatus.submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 rounded-full ${formStatus.success ? "bg-primary-100 text-primary-700" : "bg-red-100 text-red-700"} mb-6`, children: formStatus.success ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-serif font-medium mb-3", children: formStatus.success ? "Message Sent!" : "Something went wrong" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 max-w-md mx-auto", children: formStatus.message }),
            !formStatus.success && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setFormStatus({ submitted: false, success: false, message: "" }),
                className: "mt-6 btn-primary py-2 px-6",
                children: "Try Again"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-secondary-700 mb-1", children: "Full Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "name",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500",
                    placeholder: "John Smith"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-secondary-700 mb-1", children: "Email Address *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500",
                    placeholder: "john@example.com"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-secondary-700 mb-1", children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    value: formData.phone,
                    onChange: handleChange,
                    className: "w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500",
                    placeholder: "+44 123 456 7890"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-secondary-700 mb-1", children: "Company Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "company",
                    name: "company",
                    value: formData.company,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500",
                    placeholder: "Your Company Ltd"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "revenue", className: "block text-sm font-medium text-secondary-700 mb-1", children: "Annual Revenue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  id: "revenue",
                  name: "revenue",
                  value: formData.revenue,
                  onChange: handleChange,
                  className: "w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500",
                  children: revenueOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-secondary-700 mb-1", children: "Your Message *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  value: formData.message,
                  onChange: handleChange,
                  required: true,
                  rows: 5,
                  className: "w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-primary-500 focus:border-primary-500",
                  placeholder: "Tell us about your business and exit goals..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-secondary-600", children: "Fields marked with * are required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: `w-full btn-primary py-4 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`,
                children: isSubmitting ? "Sending..." : onSubmit ? "Continue to Booking" : "Send Message"
              }
            ) })
          ] })
        }
      );
    };
    const BookingButton = ({
      text = "Book a Consultation",
      className = "btn-primary",
      fullWidth = false
    }) => {
      const navigate = useNavigate();
      const handleClick = () => {
        navigate("/book");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          onClick: handleClick,
          className: `${className} ${fullWidth ? "w-full" : ""}`,
          children: text
        }
      );
    };
    const ContactPage = () => {
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Contact Us | Norivane";
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "text-4xl md:text-5xl font-serif font-semibold text-white mb-6",
              children: "Contact Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "text-xl text-primary-100",
              children: "Get in touch with our team to discuss your business exit strategy"
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-serif font-semibold mb-6", children: "Get in Touch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 mb-8", children: "We're here to help you navigate the complex process of exiting your business. Fill out the form, and we'll get back to you within 24 hours." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-4", children: "Contact Information" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-primary-700", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-medium text-secondary-800", children: "Phone" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "+44 (0) 7356 224 125" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-primary-700", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-medium text-secondary-800", children: "Email" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600", children: "us@norivane.com" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-serif font-medium mb-4", children: "Book a Consultation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 mb-4", children: "Ready to discuss your business exit strategy? Schedule a 30-minute consultation with one of our experts." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookingButton, { text: "Book a Consultation", className: "btn-primary" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "bg-white rounded-lg shadow-elegant-lg p-6 md:p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-serif font-medium mb-6", children: "Send Us a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {})
              ]
            }
          )
        ] }) }) })
      ] });
    };
    const EmbeddedCalendar = () => {
      const iframeRef = reactExports.useRef(null);
      const navigate = useNavigate();
      reactExports.useEffect(() => {
        const handleMessage = (event) => {
          if (event.origin.includes("calendar.google.com")) {
            try {
              const iframe = iframeRef.current;
              if (iframe && iframe.contentWindow) {
                setTimeout(() => {
                  try {
                    const iframeUrl = iframe.contentWindow.location.href;
                    if (iframeUrl.includes("appointment-confirmed") || iframeUrl.includes("confirmation") || iframeUrl.includes("success")) {
                      navigate("/booking-confirmation");
                    }
                  } catch (error) {
                    console.log("Could not check iframe URL due to CORS policy");
                  }
                }, 1500);
              }
            } catch (error) {
              console.error("Error processing message from Google Calendar:", error);
            }
          }
        };
        window.addEventListener("message", handleMessage);
        const observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "src") {
              const newSrc = iframeRef.current.getAttribute("src");
              if (newSrc.includes("appointment-confirmed") || newSrc.includes("confirmation") || newSrc.includes("success")) {
                navigate("/booking-confirmation");
              }
            }
          }
        });
        if (iframeRef.current) {
          observer.observe(iframeRef.current, { attributes: true });
        }
        return () => {
          window.removeEventListener("message", handleMessage);
          observer.disconnect();
        };
      }, [navigate]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "embedded-calendar-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          ref: iframeRef,
          src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dDhVTC6nmAqTpQ744WdiVX5HYpBpJuieMFd2Bsk7-iFlARlw8EuBzT7ulHmXKp3ja2DPIdPsS?gv=true",
          style: { border: 0 },
          width: "100%",
          height: "600",
          frameBorder: "0",
          title: "Google Calendar Appointment Scheduling",
          className: "rounded-lg shadow-elegant-lg"
        }
      ) });
    };
    const PageHeader = ({ title, subtitle, bgImage }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative bg-secondary-900 py-20 md:py-32",
          style: bgImage ? {
            backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.8)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          } : {},
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute w-64 h-64 rounded-full bg-primary-500/10 top-10 left-[10%]",
                  initial: { y: 20, opacity: 0 },
                  animate: {
                    y: [0, -15, 0],
                    opacity: 0.5
                  },
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut"
                    },
                    opacity: { duration: 1 }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute w-32 h-32 rounded-full bg-primary-500/10 bottom-10 right-[15%]",
                  initial: { y: 20, opacity: 0 },
                  animate: {
                    y: [0, -20, 0],
                    opacity: 0.3
                  },
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 7,
                      ease: "easeInOut",
                      delay: 1
                    },
                    opacity: { duration: 1 }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute w-48 h-48 rounded-full bg-primary-500/10 top-40 right-[25%]",
                  initial: { y: 20, opacity: 0 },
                  animate: {
                    y: [0, -10, 0],
                    opacity: 0.4
                  },
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                      delay: 0.5
                    },
                    opacity: { duration: 1 }
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "text-center max-w-3xl mx-auto",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-sans font-bold text-white mb-4", children: title }),
                  subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/80 max-w-2xl mx-auto", children: subtitle })
                ]
              }
            ) })
          ]
        }
      );
    };
    PageHeader.propTypes = {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      bgImage: PropTypes.string
    };
    const BookingPage = () => {
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Book a Consultation | Norivane";
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PageHeader,
          {
            title: "Book a Consultation",
            subtitle: "Schedule a time to discuss your business exit strategy",
            bgImage: "/images/headers/booking-header.jpg"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-elegant p-6 md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-sans font-semibold text-secondary-900 mb-6", children: "Select a Time for Your Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-700 mb-8", children: "Choose a convenient time from our calendar below. We look forward to discussing how we can help you maximize your business value and prepare for a successful exit." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EmbeddedCalendar, {})
        ] }) }) })
      ] });
    };
    const BookingConfirmationPage = () => {
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Booking Confirmation | Norivane";
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "text-4xl md:text-5xl font-serif font-semibold text-white mb-6",
                children: "Booking Confirmed"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-xl text-primary-100",
                children: "Thank you for scheduling a consultation with us"
              }
            )
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-secondary-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "bg-white rounded-lg shadow-elegant-lg p-8 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-serif font-semibold mb-4", children: "Your Consultation is Booked" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-600 mb-6", children: "We've sent a confirmation email with all the details. You'll also receive a calendar invitation for the scheduled time." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-b border-secondary-200 py-6 my-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium mb-4", children: "What to Expect" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-left max-w-md mx-auto space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-primary-600 mr-2 mt-0.5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "A 30-minute video consultation with one of our exit strategy experts" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-primary-600 mr-2 mt-0.5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discussion of your business goals and potential exit strategies" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-primary-600 mr-2 mt-0.5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recommendations for next steps based on your specific situation" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/",
                      className: "btn-secondary",
                      children: "Return to Home"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/resources",
                      className: "btn-primary",
                      children: "Explore Resources"
                    }
                  )
                ] })
              ]
            }
          ) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h2,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "text-2xl md:text-3xl font-serif font-semibold mb-6",
                children: "Need to Make Changes?"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.1 },
                className: "text-secondary-600 mb-8",
                children: "If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 },
                className: "flex flex-col sm:flex-row justify-center gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "mailto:support@norivane.com",
                      className: "btn-outline-primary",
                      children: "Email Us"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "tel:+18005551234",
                      className: "btn-outline-primary",
                      children: "Call (800) 555-1234"
                    }
                  )
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ] });
    };
    const PrivacyPolicyPage = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PageHeader,
          {
            title: "Privacy Policy",
            subtitle: "How we handle your data"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "prose prose-lg max-w-4xl mx-auto",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Introduction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At Norivane, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "The Data We Collect About You" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Identity Data" }),
                  " includes first name, last name, username or similar identifier."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Contact Data" }),
                  " includes email address, telephone numbers, and address."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Technical Data" }),
                  " includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Usage Data" }),
                  " includes information about how you use our website and services."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Marketing and Communications Data" }),
                  " includes your preferences in receiving marketing from us and our third parties and your communication preferences."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "How We Use Your Personal Data" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Where we need to perform the contract we are about to enter into or have entered into with you." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Where we need to comply with a legal obligation." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Data Security" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Data Retention" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Your Legal Rights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Request access to your personal data." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Request correction of your personal data." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Request erasure of your personal data." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Object to processing of your personal data." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Request restriction of processing your personal data." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Request transfer of your personal data." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Right to withdraw consent." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Contact Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have any questions about this privacy policy or our privacy practices, please contact us at:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Email: us@norivane.com",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Or visit our Contact page to send us a message."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Changes to the Privacy Policy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We keep our privacy policy under regular review. This version was last updated on 1 June 2023." })
            ]
          }
        ) }) })
      ] });
    };
    const TermsPage = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PageHeader,
          {
            title: "Terms & Conditions",
            subtitle: "Our service agreement"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "prose prose-lg max-w-4xl mx-auto",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "1. Introduction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These terms and conditions govern your use of the Norivane website and services. By using our website or engaging our services, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of them, you must not use our website or services." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "2. Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Norivane provides business consulting services as described on our website. The specific details, deliverables, and timelines for services will be agreed upon in a separate service agreement or statement of work between Norivane and the client." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "3. Booking and Appointments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "When booking a consultation or service through our website:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "All appointments are subject to availability and confirmation." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "We reserve the right to refuse service to anyone for any reason at any time." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cancellations must be made at least 24 hours in advance of the scheduled appointment." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Late cancellations or no-shows may be subject to a cancellation fee." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "4. Intellectual Property" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "All intellectual property rights in the website and the material published on it are owned by Norivane or our licensors. These works are protected by copyright laws and treaties around the world. All such rights are reserved." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You may print one copy, and may download extracts, of any page(s) from our website for your personal use and you may draw the attention of others to content posted on our website." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "5. Limitation of Liability" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nothing in these terms and conditions will limit or exclude our liability for death or personal injury resulting from our negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded or limited by law." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "To the extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to our website or any content on it, whether express or implied." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with use of, or inability to use, our website or use of or reliance on any content displayed on our website." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "6. Indemnity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You agree to indemnify, defend, and hold harmless Norivane, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these terms and conditions or any activity related to your account by you or any other person accessing the website using your account." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "7. Variation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We may revise these terms and conditions at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "8. Governing Law and Jurisdiction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of the United Kingdom." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "9. Contact Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have any questions about these terms and conditions, please contact us at:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Email: us@norivane.com",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Or visit our Contact page to send us a message."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-8", children: "Last updated: 1 June 2023" })
            ]
          }
        ) }) })
      ] });
    };
    const NotFoundPage = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-20 md:pt-48 md:pb-28 flex items-center min-h-[70vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "text-6xl md:text-8xl font-serif font-bold text-primary-700 mb-6",
              children: "404"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h2,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              className: "text-3xl md:text-4xl font-serif font-semibold mb-4",
              children: "Page Not Found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "text-lg text-secondary-600 mb-8",
              children: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.3 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-primary", children: "Return to Homepage" })
            }
          )
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ] });
    };
    const ScrollToTop = () => {
      const { pathname } = useLocation();
      reactExports.useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      return null;
    };
    function App() {
      reactExports.useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#")
              return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          });
        });
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/services", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/process", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/book", element: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/booking", element: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/booking-confirmation", element: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingConfirmationPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/privacy-policy", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyPolicyPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsxRuntimeExports.jsx(TermsPage, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {}) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {})
      ] });
    }
    const index = "";
    client.createRoot(document.getElementById("root")).render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(q, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) })
    );
  }
});
export default require_index_001();
