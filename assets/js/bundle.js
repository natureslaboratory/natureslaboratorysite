(()=>{var e={332:()=>{for(var e=document.getElementsByClassName("post-tags"),t=function(t){var n=e[t];if(n.children.length>5){for(var r=5;r<n.children.length;r++)n.children[r].classList.add("hide");var o=document.createElement("BUTTON");o.innerHTML="+ ".concat(n.children.length-5),o.addEventListener("click",(function(e){for(var t=0;t<n.children.length;t++)n.children[t].classList.remove("hide"),o.classList.add("hide")}));var i=document.createElement("LI");i.appendChild(o),n.appendChild(i)}},n=0;n<e.length;n++)t(n)},126:()=>{for(var e=document.getElementsByClassName("c-threes-table__website"),t=0;t<e.length;t++){var n=e[t],r="https://",o="http://",i=n.innerHTML.trim(),a=void 0;i.includes(r)?a=i.split(r)[1]:i.includes(o)&&(a=i.split(o)[1]),"/"==a[a.length-1]&&(a=a.slice(0,-1)),n.innerHTML=a}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";var e=function(){var e=document.getElementById("image-overlay"),t=document.getElementById("delete-button");e.classList.contains("hide")&&e.classList.remove("hide"),t.classList.contains("hide")&&t.classList.remove("hide")},t=function(){var e=document.getElementById("image-overlay"),t=document.getElementById("delete-button");e.classList.contains("hide")||e.classList.add("hide"),t.classList.contains("hide")||t.classList.add("hide")},r=function(e){for(var t=e.classList,n=0;n<t.length;n++)if(t[n].includes("cw-"))return parseInt(t[n].split("-")[1]);return 500},o=function(e){return function(e){return e.filter((function(e){return""!=e}))}(function(e){return e.split(" ")}(e))};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(332),n(126);var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"node",void 0),a(this,"links",[]),a(this,"labelMappings",{}),this.node=t,this.hideAll=this.hideAll.bind(this),this.showAll=this.showAll.bind(this)}var t,n;return t=e,(n=[{key:"hideAll",value:function(){this.links.forEach((function(e){return e.hide()}))}},{key:"showAll",value:function(){this.links.forEach((function(e){return e.show()}))}}])&&i(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="node")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.node=r,this.node=t,this.show=this.show.bind(this),this.hide=this.hide.bind(this)}var t,n;return t=e,(n=[{key:"show",value:function(){this.node.classList.contains("hide")&&this.node.classList.remove("hide")}},{key:"hide",value:function(){this.node.classList.contains("hide")||this.node.classList.add("hide")}},{key:"spin",value:function(){this.node.classList.add("spin")}},{key:"unspin",value:function(){this.node.classList.remove("spin")}}])&&s(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){function e(t){v(this,e),k(this,"node",void 0),k(this,"link",void 0),k(this,"icon",void 0),k(this,"childLinksNode",void 0),k(this,"childLinks",[]),this.node=t}return w(e,[{key:"hasChildren",get:function(){return!!this.childLinksNode}},{key:"isHidden",get:function(){return!!this.node.classList.contains("hide")}},{key:"hide",value:function(){this.isHidden||this.node.classList.add("hide")}},{key:"show",value:function(){this.isHidden&&this.node.classList.remove("hide")}}]),e}(),L=function(e){d(n,e);var t=p(n);function n(e){var r;v(this,n),r=t.call(this,e);for(var o=0;o<r.node.children.length;o++){var i=r.node.children[o];if(i.classList.contains("c-navbar__link")||i.classList.contains("c-navbar__button")){r.link=i;var a=i.getElementsByClassName("c-icon");if(!a)throw new Error("No Icon For Dropdown");r.icon=new u(a[0])}else i.classList.contains("c-navbar__sub-menu")&&(r.childLinksNode=i)}if(r.hasChildren)for(var c=0;c<r.childLinksNode.children.length;c++){var s=r.childLinksNode.children[c];r.childLinks=[].concat(f(r.childLinks),[s])}return r}return w(n,[{key:"width",get:function(){var e=this.node.getBoundingClientRect();return e.right-e.left}},{key:"isMenuOpen",get:function(){return!!this.childLinksNode.classList.contains("show")}},{key:"toggle",value:function(){this.isMenuOpen?this.close():this.open()}},{key:"open",value:function(){this.childLinksNode&&(this.childLinksNode.classList.add("show"),this.icon.spin())}},{key:"close",value:function(){this.childLinksNode&&(this.childLinksNode.classList.remove("show"),this.icon.unspin())}}]),n}(E),O=function(e){d(n,e);var t=p(n);function n(e){var r;v(this,n),r=t.call(this,e);for(var o=0;o<r.node.children.length;o++){var i=r.node.children[o];if(i.classList.contains("c-hamburger__link")||i.classList.contains("c-hamburger__element-button")){r.link=i;var a=i.getElementsByClassName("c-icon");a&&(r.icon=new u(a[0]))}else i.classList.contains("c-hamburger__sub-menu")&&(r.childLinksNode=i)}if(r.hasChildren)for(var c=0;c<r.childLinksNode.children.length;c++){var s=r.childLinksNode.children[c],l=s.getElementsByClassName("c-hamburger__sub-link");l&&(l[0].tabIndex="-1"),r.childLinks=[].concat(f(r.childLinks),[s])}return r}return w(n,[{key:"isMenuOpen",get:function(){return!!this.childLinksNode.style.maxHeight}},{key:"toggle",value:function(){this.isMenuOpen?this.close():this.open()}},{key:"close",value:function(){this.childLinksNode&&(this.childLinksNode.style.maxHeight=null,this.childLinks.forEach((function(e){var t=e.getElementsByClassName("c-hamburger__sub-link");t&&(t[0].tabIndex="-1")})),this.icon&&this.icon.unspin())}},{key:"open",value:function(){this.childLinksNode&&(this.childLinksNode.style.maxHeight=this.childLinksNode.scrollHeight+"px",this.childLinks.forEach((function(e){var t=e.getElementsByClassName("c-hamburger__sub-link");t&&(t[0].tabIndex="0")})),this.icon&&this.icon.spin())}},{key:"makeTabbable",value:function(){this.link&&(this.link.tabIndex="0")}},{key:"makeUntabbable",value:function(){this.link&&(this.link.tabIndex="-1")}}]),n}(E);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e){var t,n,r,o,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="type")in(n=N(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n.type=o,t.subMenuType=t.node.dataset.expand,t.subMenuType||console.warn("No Expand Type Specified");for(var s=0;s<t.node.children.length;s++){var u=t.node.children[s];if(u.classList.contains("c-hamburger__element")){var l=new O(u,t.subMenuType?t.subMenuType:"accordian");l.makeUntabbable(),t.links=[].concat(function(e){if(Array.isArray(e))return j(e)}(c=t.links)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[l])}}try{t.type=t.node.dataset.type}catch(e){console.error("No Hamburger Type Specified")}if(t.type&&"slideover"==t.type){var f=document.createElement("li");f.classList.add("c-hamburger__close-wrapper"),f.innerHTML='<svg width="12.32781mm" height="12.327812mm" viewBox="0 0 12.32781 12.327812" version="1.1" class="c-hamburger__close-button">\n                    <defs id="defs2" />\n                    <g inkscape:label="Layer 1" id="layer1" transform="translate(-8.837041,-271.65379)" class="c-cross__g">\n                        <rect class="c-cross__rect" width="16.394718" height="1.0394346" x="-194.03687" y="206.53433" transform="rotate(-45)" />\n                        <rect transform="rotate(-135)" y="-186.35922" x="-215.2514" height="1.0394346" width="16.394718" class="c-cross__rect" />\n                    </g>\n                </svg>',t.node.prepend(f)}return t.addEventListeners(),t}return t=a,(n=[{key:"isHidden",get:function(){return!this.node.classList.contains("show")}},{key:"isHamburgerFull",get:function(){return this.links.forEach((function(e){if(e.isHidden)return!1})),!0}},{key:"show",value:function(){switch(this.links.forEach((function(e){e.makeTabbable()})),this.type){case"dropdown":this.node.classList.add("show");break;case"slideover":this.node.classList.add("show"),document.getElementsByTagName("body")[0].classList.add("no-scroll");break;case"slidewith":break;case"fullpage":this.node.classList.add("show");break;default:throw new Error("Invalid Hamburger Type")}}},{key:"hide",value:function(){var e=this;switch(this.links.forEach((function(e){e.makeUntabbable()})),this.type){case"dropdown":this.node.classList.remove("show");break;case"slideover":this.node.classList.remove("show"),document.getElementsByTagName("body")[0].classList.remove("no-scroll");break;case"slidewith":break;case"fullpage":this.node.classList.remove("show");break;default:throw new Error("Invalid Hamburger Type")}setTimeout((function(){e.closeAllMenus()}),150)}},{key:"showOne",value:function(){for(var e=this.links.length-1;e>=0;e--){var t=this.links[e];if(t.isHidden){t.show();break}}}},{key:"handleLinks",value:function(e){e.isMenuOpen?e.close():(this.closeAllMenus(),e.open())}},{key:"closeAllMenus",value:function(){this.links.forEach((function(e){e.close()}))}},{key:"addEventListeners",value:function(){var e=this;this.links.forEach((function(t){t.hasChildren&&t.node.addEventListener("click",(function(){e.handleLinks(t)}))})),"slideover"==this.type&&document.getElementsByClassName("c-hamburger__close-button")[0].addEventListener("click",(function(){e.hide()}))}}])&&B(t.prototype,n),a}(c);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};x(this,a),t=i.call(this,e,n);for(var r=0;r<t.node.children.length;r++){var o=t.node.children[r],c=new L(o,t.labelMappings,t.closeAllMenus);t.links=[].concat(R(t.links),[c])}return t.hideOne=t.hideOne.bind(U(t)),t.closeAllMenus=t.closeAllMenus.bind(U(t)),t.addEventListeners(),t}return t=a,(n=[{key:"totalWidth",get:function(){var e=0;return this.links.forEach((function(t){e+=t.width})),e}},{key:"hideOne",value:function(){for(var e=this.links.length-1;e>=0;e--){var t=this.links[e];if(!t.isHidden){t.hide();break}}}},{key:"handleLinks",value:function(e){e.childLinksNode.classList.contains("show")?e.close():(this.closeAllMenus(),e.open())}},{key:"addEventListeners",value:function(){var e=this;this.links.forEach((function(t){t.hasChildren&&t.node.addEventListener("click",(function(){e.handleLinks(t)}))}))}},{key:"closeAllMenus",value:function(){this.links.forEach((function(e){e.close()}))}}])&&M(t.prototype,n),a}(c);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),X(this,"node",void 0),X(this,"navBar",void 0),X(this,"hamburger",void 0),X(this,"hamburgerButton",void 0),X(this,"hamburgerWrapper",void 0),this.node=t,this.getNavItems(),this.addEventListeners()}var t,n;return t=e,(n=[{key:"getNavItems",value:function(){var e=this.node.getElementsByClassName("c-navbar");if(!e)throw new Error("No c-navbar present.");this.navBar=new $(e[0]);var t=this.node.getElementsByClassName("c-hamburger");if(0==t.length)throw new Error("No c-hamburger present.");this.hamburgerWrapper=t[0];var n=this.hamburgerWrapper.getElementsByClassName("c-hamburger__menu");if(0==n.length)throw new Error("No c-hamburger__menu present.");this.hamburger=new T(n[0]);var r=this.node.getElementsByClassName("c-hamburger__button");if(!r)throw new Error("No c-hamburger__button present.");this.hamburgerButton=r[0]}},{key:"moveAllToHamburger",value:function(){this.hamburgerWrapper.classList.remove("hide"),this.hamburger.showAll(),this.navBar.hideAll()}},{key:"moveAllToNav",value:function(){this.hamburgerWrapper.classList.add("hide"),this.hamburger.hideAll(),this.navBar.showAll()}},{key:"moveOneToHamburger",value:function(){this.hamburgerWrapper.classList.remove("hide"),this.navBar.hideOne(),this.hamburger.showOne()}},{key:"handleHamburgerButton",value:function(){this.hamburger.isHidden?this.hamburger.show():this.hamburger.hide()}},{key:"getParents",value:function(e){return"HTML"==e.tagName?[e]:[e.parentElement].concat(function(e){if(Array.isArray(e))return D(e)}(t=this.getParents(e.parentElement))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var t}},{key:"hasParent",value:function(e,t){for(var n=this.getParents(e),r=0;r<n.length;r++)if(n[r]==t)return!0;return!1}},{key:"handlePageClick",value:function(e){this.hasParent(e.target,this.hamburgerWrapper)||this.hamburger.hide(),this.hasParent(e.target,this.navBar.node)||this.navBar.closeAllMenus()}},{key:"show",value:function(){this.node.classList.add("show")}},{key:"addEventListeners",value:function(){var e=this;this.hamburgerButton.addEventListener("click",(function(){e.handleHamburgerButton()})),window.addEventListener("click",(function(t){e.handlePageClick(t)}))}}])&&F(t.prototype,n),e}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?V(e):t}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Q(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="breakpoint")in(n=V(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o;try{t.breakpoint=parseInt(t.node.dataset.breakpoint)}catch(e){console.error("Invalid Breakpoint")}return t}return t=a,(n=[{key:"handleResize",value:function(){if(this.breakpoint&&document.documentElement.clientWidth<=this.breakpoint)this.moveAllToHamburger();else{this.moveAllToNav();for(var e=0;this.isNavWrapped()&&e<1e3;)this.moveOneToHamburger(),e++;if(e>900)throw new Error("Infinite Loop")}}},{key:"isNavWrapped",value:function(){var e=this.navBar.node.getBoundingClientRect(),t=e.right-e.left;return this.navBar.totalWidth>t-50}}])&&J(t.prototype,n),a}(q);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=re(t);if(n){var o=re(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return ne(this,e)});function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,e)}return o}(q);function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?ue(e):t}function ue(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var fe,he=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=le(r);if(o){var n=le(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return se(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="breakpoint")in(n=ue(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o;try{t.breakpoint=t.node.dataset.breakpoint}catch(e){console.error("Invalid Breakpoint")}return t}return t=a,(n=[{key:"handleResize",value:function(){document.documentElement.clientWidth<=this.breakpoint?this.moveAllToHamburger():this.moveAllToNav()}}])&&ae(t.prototype,n),a}(q);function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}for(var ye=function(e){switch(e.dataset.type){case"dynamic":return new Z(e);case"static":return new oe(e);case"fixed":return new he(e);default:throw new Error("No Navigation Type Specified")}},pe=document.getElementsByClassName("c-navigation"),be=[],me=0;me<pe.length;me++){var ve=ye(pe[me]);be=[].concat(function(e){if(Array.isArray(e))return de(e)}(fe=be)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(fe)||function(e,t){if(e){if("string"==typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?de(e,t):void 0}}(fe)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[ve])}be&&(window.onload=function(){be.forEach((function(e){e.handleResize()})),setTimeout((function(){be.forEach((function(e){e.show()}))}),20)},window.addEventListener("resize",(function(){be.forEach((function(e){e.handleResize()}))}))),function(){var n=document.getElementsByClassName("image-upload")[0];document.getElementById("image-to-upload")&&n.addEventListener("change",(function(e){return function(e,t){var n=new FileReader;n.onload=function(){t.src=n.result},e.target.files[0]?(document.getElementById("image-button").classList.add("hide"),document.getElementById("preview-div").classList.remove("hide"),n.readAsDataURL(e.target.files[0])):(document.getElementById("image-button").classList.remove("hide"),document.getElementById("preview-div").classList.add("hide"))}(e,document.getElementById("image-to-upload"))}));var r=document.getElementById("image-button");r&&r.addEventListener("click",(function(e){e.preventDefault(),document.getElementsByClassName("image-upload")[0].click()}));var o=document.getElementById("delete-button");o&&o.addEventListener("click",(function(e){e.preventDefault(),document.getElementsByClassName("image-upload")[0].value=null,document.getElementById("image-button").classList.remove("hide"),document.getElementById("preview-div").classList.add("hide")}));var i=document.getElementById("preview-div");i&&(i.addEventListener("mouseover",(function(t){e()})),i.addEventListener("mouseleave",(function(e){t()})),document.getElementById("preview-div").addEventListener("touchstart",(function(t){e()}),{passive:!0}),document.addEventListener("touchstart",(function(e){hasParent(e.target,document.getElementById("preview-div"))||t()})))}(),function(){for(var e=document.getElementsByClassName("countWords"),t=function(t){var n=e[t];if("TEXTAREA"!=n.tagName)return"continue";var i=function(e){var t=document.createElement("p");return t.innerHTML='Word Count: <span class="count">0</span>/<span>'.concat(e,"</span>"),t}(r(n));!function(e,t){e.parentNode.insertBefore(t,e.nextSibling)}(n,i),n.addEventListener("input",(function(e){return function(e,t){var n=0,i=r(e.target);!function(e,t){return o(e).length<=t}(e.target.value,i)?(e.target.value=function(e,t){return o(strArray).slice(0,t).join(" ")}(e.target.value,i),n=i):n=o(e.target.value).length,(function(e){for(var t=e.children,n=0;n<t.length;n++){var r=t[n];if(r.classList.contains("count"))return r}}(t)).innerHTML=n}(e,i)}))},n=0;n<e.length;n++)t(n)}()})()})();