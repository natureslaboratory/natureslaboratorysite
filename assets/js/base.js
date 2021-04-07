(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=void 0,(n="node")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.node=r,this.node=e}var n,r;return n=t,(r=[{key:"top",get:function(){return this.node.getBoundingClientRect().top}},{key:"show",value:function(){this.node.classList.add("show")}},{key:"hide",value:function(){this.node.classList.remove("show")}}])&&e(n.prototype,r),t}();function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,a=function(){function e(r){var i,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"node",void 0),o(this,"cards",[]),this.node=r;for(var s=this.node.getElementsByClassName("c-card"),c=0;c<s.length;c++){var u=s[c];this.cards=[].concat(function(e){if(Array.isArray(e))return n(e)}(i=this.cards)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[new t(u)])}window.addEventListener("scroll",(function(){if(a.desktopCheck())for(var e=function(e){var t=a.cards[e];setTimeout((function(){t.show()}),400*e)},t=0;t<a.cards.length;t++)e(t);else for(var n=0;n<a.cards.length;n++){var r=a.cards[n];a.mobileCheck(r)&&document.documentElement.clientWidth<768&&r.show()}}))}var i,a;return i=e,(a=[{key:"top",get:function(){return this.node.getBoundingClientRect().top}},{key:"desktopCheck",value:function(){return window.scrollY+document.documentElement.clientHeight-200>this.top+document.documentElement.scrollTop&&document.documentElement.clientWidth>768}},{key:"mobileCheck",value:function(e){return window.scrollY+document.documentElement.clientHeight-200>e.top+document.documentElement.scrollTop}}])&&r(i.prototype,a),e}();function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}for(var c=document.getElementsByClassName("c-cards"),u=[],l=0;l<c.length;l++){var f=c[l];u=[].concat(function(e){if(Array.isArray(e))return s(e)}(i=u)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[new a(f)])}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="node")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.node=r,this.node=t}var t,n;return t=e,(n=[{key:"isNext",get:function(){return this.node.classList.contains("next")}},{key:"isCurrent",get:function(){return this.node.classList.contains("current")}},{key:"hasLeft",get:function(){return this.node.classList.contains("leave")}},{key:"removeStateClasses",value:function(){this.node.classList.remove("next"),this.node.classList.remove("current"),this.node.classList.remove("leave")}},{key:"move",value:function(){this.isNext?this.setCurrent():this.isCurrent?this.setLeave():this.hasLeft&&this.node.classList.remove("leave")}},{key:"moveBack",value:function(){this.isNext?this.node.classList.remove("next"):this.isCurrent?this.setNext():this.hasLeft&&this.setCurrent()}},{key:"setNext",value:function(){this.removeStateClasses(),this.node.classList.add("next")}},{key:"setCurrent",value:function(){this.removeStateClasses(),this.node.classList.add("current")}},{key:"setLeave",value:function(){this.removeStateClasses(),this.node.classList.add("leave")}}])&&h(t.prototype,n),e}();function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}for(var m=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"node",void 0),v(this,"horses",[]),v(this,"interval",void 0),v(this,"timeout",void 0),v(this,"forwardButton",void 0),v(this,"backwardButton",void 0),v(this,"littleDots",[]),v(this,"nextDisabled",!1),v(this,"nextTimeout",void 0),v(this,"prevDisabled",!1),v(this,"prevTimeout",void 0),this.node=t;for(var r=this.node.getElementsByClassName("c-carousel__horse"),o=0;o<r.length;o++){var i=r[o];this.horses=[].concat(y(this.horses),[new d(i)])}if(this.forwardButton=this.node.getElementsByClassName("c-carousel__button--forward")[0],this.backwardButton=this.node.getElementsByClassName("c-carousel__button--backward")[0],!this.horses)throw new Error("No horses!");if(this.horses.length<3)throw new Error("Too few horses!");this.horses[this.horses.length-1].setLeave(),this.horses[0].setCurrent(),this.horses[1].setNext(),this.forwardButton.addEventListener("click",(function(){n.manualForward()})),this.backwardButton.addEventListener("click",(function(){n.manualBackward()}));var a=document.createElement("div");a.classList.add("c-carousel__dots"),this.horses.forEach((function(e){var t=document.createElement("div");t.classList.add("c-carousel__dot"),a.appendChild(t),n.littleDots=[].concat(y(n.littleDots),[t])})),this.node.appendChild(a),this.littleDots[0].classList.add("active"),this.setInterval()}var t,n;return t=e,(n=[{key:"removeLittleDotActive",value:function(){this.littleDots.forEach((function(e){e.classList.remove("active")}))}},{key:"moveForward",value:function(){var e,t=this;this.horses.forEach((function(n,r){n.isNext&&!e&&(e=r==t.horses.length-1?0:r+1,t.removeLittleDotActive(),r<t.littleDots.length?t.littleDots[r].classList.add("active"):t.littleDots[0].classList.add("active")),n.move()})),this.horses[e].setNext(),this.nextDisabled=!0,this.nextTimeout=setTimeout((function(){t.nextDisabled=!1}),600)}},{key:"moveBackward",value:function(){var e,t=this;this.horses.forEach((function(n,r){n.hasLeft&&!e&&(e=0==r?t.horses.length-1:r-1,t.removeLittleDotActive(),r>=0?t.littleDots[r].classList.add("active"):t.littleDots[t.littleDots.length-1].classList.add("active")),n.moveBack()})),this.horses[e].setLeave(),this.prevDisabled=!0,this.prevTimeout=setTimeout((function(){t.prevDisabled=!1}),600)}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;this.interval=setInterval((function(){e.moveForward()}),4e3)}))},{key:"setTimeout",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.setInterval()}),5e3)}))},{key:"manualForward",value:function(){this.nextDisabled||(clearInterval(this.interval),this.moveForward(),this.setTimeout())}},{key:"manualBackward",value:function(){this.prevDisabled||(clearInterval(this.interval),this.moveBackward(),this.setTimeout())}}])&&p(t.prototype,n),e}(),g=document.getElementsByClassName("c-carousel"),w=0;w<g.length;w++)new m(g[w]);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"node",void 0),O(this,"links",[]),O(this,"labelMappings",{}),this.node=t,this.hideAll=this.hideAll.bind(this),this.showAll=this.showAll.bind(this)}var t,n;return t=e,(n=[{key:"hideAll",value:function(){this.links.forEach((function(e){return e.hide()}))}},{key:"showAll",value:function(){this.links.forEach((function(e){return e.show()}))}}])&&k(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="node")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.node=r,this.node=t,this.show=this.show.bind(this),this.hide=this.hide.bind(this)}var t,n;return t=e,(n=[{key:"show",value:function(){this.node.classList.contains("hide")&&this.node.classList.remove("hide")}},{key:"hide",value:function(){this.node.classList.contains("hide")||this.node.classList.add("hide")}},{key:"spin",value:function(){this.node.classList.add("spin")}},{key:"unspin",value:function(){this.node.classList.remove("spin")}}])&&E(t.prototype,n),e}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return t&&I(e.prototype,t),n&&I(e,n),e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(){function e(t){x(this,e),M(this,"node",void 0),M(this,"link",void 0),M(this,"icon",void 0),M(this,"childLinksNode",void 0),M(this,"childLinks",[]),this.node=t}return R(e,[{key:"hasChildren",get:function(){return!!this.childLinksNode}},{key:"isHidden",get:function(){return!!this.node.classList.contains("hide")}},{key:"hide",value:function(){this.isHidden||this.node.classList.add("hide")}},{key:"show",value:function(){this.isHidden&&this.node.classList.remove("hide")}}]),e}(),D=function(e){T(n,e);var t=C(n);function n(e){var r;x(this,n),r=t.call(this,e);for(var o=0;o<r.node.children.length;o++){var i=r.node.children[o];if(i.classList.contains("c-navbar__link")||i.classList.contains("c-navbar__button")){r.link=i;var a=i.getElementsByClassName("c-icon");if(!a)throw new Error("No Icon For Dropdown");r.icon=new _(a[0])}else i.classList.contains("c-navbar__sub-menu")&&(r.childLinksNode=i)}if(r.hasChildren)for(var s=0;s<r.childLinksNode.children.length;s++){var c=r.childLinksNode.children[s];r.childLinks=[].concat(S(r.childLinks),[c])}return r}return R(n,[{key:"width",get:function(){var e=this.node.getBoundingClientRect();return e.right-e.left}},{key:"isMenuOpen",get:function(){return!!this.childLinksNode.classList.contains("show")}},{key:"toggle",value:function(){this.isMenuOpen?this.close():this.open()}},{key:"open",value:function(){this.childLinksNode&&(this.childLinksNode.classList.add("show"),this.icon.spin())}},{key:"close",value:function(){this.childLinksNode&&(this.childLinksNode.classList.remove("show"),this.icon.unspin())}}]),n}(H),W=function(e){T(n,e);var t=C(n);function n(e){var r;x(this,n),r=t.call(this,e);for(var o=0;o<r.node.children.length;o++){var i=r.node.children[o];if(i.classList.contains("c-hamburger__link")||i.classList.contains("c-hamburger__element-button")){r.link=i;var a=i.getElementsByClassName("c-icon");a&&(r.icon=new _(a[0]))}else i.classList.contains("c-hamburger__sub-menu")&&(r.childLinksNode=i)}if(r.hasChildren)for(var s=0;s<r.childLinksNode.children.length;s++){var c=r.childLinksNode.children[s],u=c.getElementsByClassName("c-hamburger__sub-link");u&&(u[0].tabIndex="-1"),r.childLinks=[].concat(S(r.childLinks),[c])}return r}return R(n,[{key:"isMenuOpen",get:function(){return!!this.childLinksNode.style.maxHeight}},{key:"toggle",value:function(){this.isMenuOpen?this.close():this.open()}},{key:"close",value:function(){this.childLinksNode&&(this.childLinksNode.style.maxHeight=null,this.childLinks.forEach((function(e){var t=e.getElementsByClassName("c-hamburger__sub-link");t&&(t[0].tabIndex="-1")})),this.icon&&this.icon.unspin())}},{key:"open",value:function(){this.childLinksNode&&(this.childLinksNode.style.maxHeight=this.childLinksNode.scrollHeight+"px",this.childLinks.forEach((function(e){var t=e.getElementsByClassName("c-hamburger__sub-link");t&&(t[0].tabIndex="0")})),this.icon&&this.icon.spin())}},{key:"makeTabbable",value:function(){this.link&&(this.link.tabIndex="0")}},{key:"makeUntabbable",value:function(){this.link&&(this.link.tabIndex="-1")}}]),n}(H);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="type")in(n=G(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n.type=o,console.log(t.node),t.subMenuType=t.node.dataset.expand,t.subMenuType||console.warn("No Expand Type Specified");for(var s=0;s<t.node.children.length;s++){var c=t.node.children[s];if(c.classList.contains("c-hamburger__element")){var u=new W(c,t.subMenuType?t.subMenuType:"accordian");u.makeUntabbable(),t.links=[].concat($(t.links),[u])}}try{t.type=t.node.dataset.type}catch(e){console.error("No Hamburger Type Specified")}if(t.type&&"slideover"==t.type){var l=document.createElement("li");l.classList.add("c-hamburger__close-wrapper"),l.innerHTML='<svg width="12.32781mm" height="12.327812mm" viewBox="0 0 12.32781 12.327812" version="1.1" class="c-hamburger__close-button">\n                    <defs id="defs2" />\n                    <g inkscape:label="Layer 1" id="layer1" transform="translate(-8.837041,-271.65379)" class="c-cross__g">\n                        <rect class="c-cross__rect" width="16.394718" height="1.0394346" x="-194.03687" y="206.53433" transform="rotate(-45)" />\n                        <rect transform="rotate(-135)" y="-186.35922" x="-215.2514" height="1.0394346" width="16.394718" class="c-cross__rect" />\n                    </g>\n                </svg>',t.node.prepend(l)}return t.addEventListeners(),t}return t=a,(n=[{key:"isHidden",get:function(){return!this.node.classList.contains("show")}},{key:"isHamburgerFull",get:function(){return this.links.forEach((function(e){if(e.isHidden)return!1})),!0}},{key:"show",value:function(){switch(this.links.forEach((function(e){e.makeTabbable()})),this.type){case"dropdown":this.node.classList.add("show");break;case"slideover":this.node.classList.add("show"),document.getElementsByTagName("body")[0].classList.add("no-scroll");break;case"slidewith":break;case"fullpage":this.node.classList.add("show");break;default:throw new Error("Invalid Hamburger Type")}}},{key:"hide",value:function(){var e=this;switch(this.links.forEach((function(e){e.makeUntabbable()})),this.type){case"dropdown":this.node.classList.remove("show");break;case"slideover":this.node.classList.remove("show"),document.getElementsByTagName("body")[0].classList.remove("no-scroll");break;case"slidewith":break;case"fullpage":this.node.classList.remove("show");break;default:throw new Error("Invalid Hamburger Type")}setTimeout((function(){e.closeAllMenus()}),150)}},{key:"showOne",value:function(){for(var e=this.links.length-1;e>=0;e--){var t=this.links[e];if(t.isHidden){t.show();break}}}},{key:"handleLinks",value:function(e){e.isMenuOpen?e.close():(this.closeAllMenus(),e.open())}},{key:"closeAllMenus",value:function(){this.links.forEach((function(e){e.close()}))}},{key:"addEventListeners",value:function(){var e=this;this.links.forEach((function(t){t.hasChildren&&t.node.addEventListener("click",(function(){e.handleLinks(t)}))})),"slideover"==this.type&&document.getElementsByClassName("c-hamburger__close-button")[0].addEventListener("click",(function(){e.hide()}))}}])&&z(t.prototype,n),a}(L);function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?re(e):t}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=oe(r);if(o){var n=oe(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ne(this,e)});function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Z(this,a),t=i.call(this,e,n);for(var r=0;r<t.node.children.length;r++){var o=t.node.children[r],s=new D(o,t.labelMappings,t.closeAllMenus);t.links=[].concat(V(t.links),[s])}return t.hideOne=t.hideOne.bind(re(t)),t.closeAllMenus=t.closeAllMenus.bind(re(t)),t.addEventListeners(),t}return t=a,(n=[{key:"totalWidth",get:function(){var e=0;return this.links.forEach((function(t){e+=t.width})),e}},{key:"hideOne",value:function(){for(var e=this.links.length-1;e>=0;e--){var t=this.links[e];if(!t.isHidden){t.hide();break}}}},{key:"handleLinks",value:function(e){e.childLinksNode.classList.contains("show")?e.close():(this.closeAllMenus(),e.open())}},{key:"addEventListeners",value:function(){var e=this;this.links.forEach((function(t){t.hasChildren&&t.node.addEventListener("click",(function(){e.handleLinks(t)}))}))}},{key:"closeAllMenus",value:function(){this.links.forEach((function(e){e.close()}))}}])&&ee(t.prototype,n),a}(L);function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ce(this,"node",void 0),ce(this,"navBar",void 0),ce(this,"hamburger",void 0),ce(this,"hamburgerButton",void 0),ce(this,"hamburgerWrapper",void 0),this.node=t,this.getNavItems(),this.addEventListeners()}var t,n;return t=e,(n=[{key:"getNavItems",value:function(){var e=this.node.getElementsByClassName("c-navbar");if(!e)throw new Error("No c-navbar present.");this.navBar=new ie(e[0]),console.log(this.navBar);var t=this.node.getElementsByClassName("c-hamburger");if(0==t.length)throw new Error("No c-hamburger present.");this.hamburgerWrapper=t[0],console.log(this.hamburgerWrapper);var n=this.hamburgerWrapper.getElementsByClassName("c-hamburger__menu");if(0==n.length)throw new Error("No c-hamburger__menu present.");this.hamburger=new K(n[0]),console.log(this.hamburger);var r=this.node.getElementsByClassName("c-hamburger__button");if(!r)throw new Error("No c-hamburger__button present.");this.hamburgerButton=r[0],console.log(this.hamburgerButton)}},{key:"moveAllToHamburger",value:function(){this.hamburgerWrapper.classList.remove("hide"),this.hamburger.showAll(),this.navBar.hideAll()}},{key:"moveAllToNav",value:function(){this.hamburgerWrapper.classList.add("hide"),this.hamburger.hideAll(),this.navBar.showAll()}},{key:"moveOneToHamburger",value:function(){this.hamburgerWrapper.classList.remove("hide"),this.navBar.hideOne(),this.hamburger.showOne()}},{key:"handleHamburgerButton",value:function(){this.hamburger.isHidden?this.hamburger.show():this.hamburger.hide()}},{key:"getParents",value:function(e){return"HTML"==e.tagName?[e]:[e.parentElement].concat(function(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this.getParents(e.parentElement)))}},{key:"hasParent",value:function(e,t){for(var n=this.getParents(e),r=0;r<n.length;r++)if(n[r]==t)return!0;return!1}},{key:"handlePageClick",value:function(e){this.hasParent(e.target,this.hamburgerWrapper)||this.hamburger.hide(),this.hasParent(e.target,this.navBar.node)||this.navBar.closeAllMenus()}},{key:"show",value:function(){this.node.classList.add("show")}},{key:"addEventListeners",value:function(){var e=this;this.hamburgerButton.addEventListener("click",(function(){e.handleHamburgerButton()})),window.addEventListener("click",(function(t){e.handlePageClick(t)}))}}])&&se(t.prototype,n),e}();function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e,t){return!t||"object"!==le(t)&&"function"!=typeof t?ye(e):t}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=be(r);if(o){var n=be(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return de(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="breakpoint")in(n=ye(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o;try{t.breakpoint=parseInt(t.node.dataset.breakpoint)}catch(e){console.error("Invalid Breakpoint")}return t}return t=a,(n=[{key:"handleResize",value:function(){if(this.breakpoint&&document.documentElement.clientWidth<=this.breakpoint)this.moveAllToHamburger();else{this.moveAllToNav();for(var e=0;this.isNavWrapped()&&e<1e3;)this.moveOneToHamburger(),e++;if(e>900)throw new Error("Infinite Loop")}}},{key:"isNavWrapped",value:function(){var e=this.navBar.node.getBoundingClientRect(),t=e.right-e.left;return this.navBar.totalWidth>t-50}}])&&fe(t.prototype,n),a}(ue);function ve(e){return(ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ge(e,t){return!t||"object"!==ve(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function we(e){return(we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ke=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=we(t);if(n){var o=we(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return ge(this,e)});function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,e)}return o}(ue);function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e,t){return!t||"object"!==Oe(t)&&"function"!=typeof t?je(e):t}function je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Se(r);if(o){var n=Se(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _e(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="breakpoint")in(n=je(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o;try{t.breakpoint=t.node.dataset.breakpoint}catch(e){console.error("Invalid Breakpoint")}return t}return t=a,(n=[{key:"handleResize",value:function(){document.documentElement.clientWidth<=this.breakpoint?this.moveAllToHamburger():this.moveAllToNav()}}])&&Le(t.prototype,n),a}(ue);function Te(e){return function(e){if(Array.isArray(e))return Be(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Be(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}for(var Ce=function(e){switch(e.dataset.type){case"dynamic":return new pe(e);case"static":return new ke(e);case"fixed":return new Ae(e);default:throw new Error("No Navigation Type Specified")}},Ne=document.getElementsByClassName("c-navigation"),Pe=[],xe=0;xe<Ne.length;xe++){var Ie=Ce(Ne[xe]);Pe=[].concat(Te(Pe),[Ie])}Pe&&(window.onload=function(){Pe.forEach((function(e){e.handleResize()})),setTimeout((function(){Pe.forEach((function(e){e.show()}))}),20)},window.addEventListener("resize",(function(){Pe.forEach((function(e){e.handleResize()}))})))})();