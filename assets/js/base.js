(()=>{var e={140:()=>{for(var e=document.getElementsByClassName("c-post-tags"),t=function(t){var n=e[t];if(n.children.length>5){for(var r=5;r<n.children.length;r++)n.children[r].classList.add("hide");var o=document.createElement("BUTTON");o.classList.add("c-post-tags__button"),o.innerHTML="+ ".concat(n.children.length-5),o.addEventListener("click",(function(e){for(var t=0;t<n.children.length;t++)n.children[t].classList.remove("hide"),o.classList.add("hide")}));var i=document.createElement("LI");i.appendChild(o),n.appendChild(i)}},n=0;n<e.length;n++)t(n)},100:()=>{!function(){var e=document.getElementsByClassName("c-hero__title")[0];if(console.log(e),e){var t=e.innerHTML.trim().split("");console.log(t),t.length>20&&e.classList.add("c-hero__title--small")}}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=void 0,(n="node")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.node=r,this.node=e}var n,r;return n=t,(r=[{key:"top",get:function(){return this.node.getBoundingClientRect().top}},{key:"show",value:function(){this.node.classList.add("show")}},{key:"hide",value:function(){this.node.classList.remove("show")}}])&&e(n.prototype,r),t}();function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,s=function(){function e(n){var o,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"node",void 0),i(this,"cards",[]),this.node=n;for(var s=this.node.getElementsByClassName("c-card"),c=0;c<s.length;c++){var u=s[c];this.cards=[].concat(function(e){if(Array.isArray(e))return r(e)}(o=this.cards)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[new t(u)])}window.addEventListener("scroll",(function(){if(a.desktopCheck())for(var e=function(e){var t=a.cards[e];setTimeout((function(){t.show()}),400*e)},t=0;t<a.cards.length;t++)e(t);else for(var n=0;n<a.cards.length;n++){var r=a.cards[n];a.mobileCheck(r)&&document.documentElement.clientWidth<768&&r.show()}}))}var n,a;return n=e,(a=[{key:"top",get:function(){return this.node.getBoundingClientRect().top}},{key:"desktopCheck",value:function(){return window.scrollY+document.documentElement.clientHeight-200>this.top+document.documentElement.scrollTop&&document.documentElement.clientWidth>768}},{key:"mobileCheck",value:function(e){return window.scrollY+document.documentElement.clientHeight-200>e.top+document.documentElement.scrollTop}}])&&o(n.prototype,a),e}();function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}for(var u=document.getElementsByClassName("c-cards"),l=[],f=0;f<u.length;f++){var h=u[f];l=[].concat(function(e){if(Array.isArray(e))return c(e)}(a=l)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[new s(h)])}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="node")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.node=r,this.node=t}var t,n;return t=e,(n=[{key:"isNext",get:function(){return this.node.classList.contains("next")}},{key:"isCurrent",get:function(){return this.node.classList.contains("current")}},{key:"hasLeft",get:function(){return this.node.classList.contains("leave")}},{key:"removeStateClasses",value:function(){this.node.classList.remove("next"),this.node.classList.remove("current"),this.node.classList.remove("leave")}},{key:"move",value:function(){this.isNext?this.setCurrent():this.isCurrent?this.setLeave():this.hasLeft&&this.node.classList.remove("leave")}},{key:"moveBack",value:function(){this.isNext?this.node.classList.remove("next"):this.isCurrent?this.setNext():this.hasLeft&&this.setCurrent()}},{key:"setNext",value:function(){this.removeStateClasses(),this.node.classList.add("next")}},{key:"setCurrent",value:function(){this.removeStateClasses(),this.node.classList.add("current")}},{key:"setLeave",value:function(){this.removeStateClasses(),this.node.classList.add("leave")}}])&&d(t.prototype,n),e}();function p(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}for(var g=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"node",void 0),m(this,"horses",[]),m(this,"interval",void 0),m(this,"timeout",void 0),m(this,"forwardButton",void 0),m(this,"backwardButton",void 0),m(this,"littleDots",[]),m(this,"nextDisabled",!1),m(this,"nextTimeout",void 0),m(this,"prevDisabled",!1),m(this,"prevTimeout",void 0),this.node=t;for(var r=this.node.getElementsByClassName("c-carousel__horse"),o=0;o<r.length;o++){var i=r[o];this.horses=[].concat(p(this.horses),[new y(i)])}if(this.forwardButton=this.node.getElementsByClassName("c-carousel__button--forward")[0],this.backwardButton=this.node.getElementsByClassName("c-carousel__button--backward")[0],!this.horses)throw new Error("No horses!");if(this.horses.length<3)throw new Error("Too few horses!");this.horses[this.horses.length-1].setLeave(),this.horses[0].setCurrent(),this.horses[1].setNext(),this.forwardButton.addEventListener("click",(function(){n.manualForward()})),this.backwardButton.addEventListener("click",(function(){n.manualBackward()}));var a=document.createElement("div");a.classList.add("c-carousel__dots"),this.horses.forEach((function(e){var t=document.createElement("div");t.classList.add("c-carousel__dot"),a.appendChild(t),n.littleDots=[].concat(p(n.littleDots),[t])})),this.node.appendChild(a),this.littleDots[0].classList.add("active"),this.setInterval()}var t,n;return t=e,(n=[{key:"removeLittleDotActive",value:function(){this.littleDots.forEach((function(e){e.classList.remove("active")}))}},{key:"moveForward",value:function(){var e,t=this;this.horses.forEach((function(n,r){n.isNext&&!e&&(e=r==t.horses.length-1?0:r+1,t.removeLittleDotActive(),r<t.littleDots.length?t.littleDots[r].classList.add("active"):t.littleDots[0].classList.add("active")),n.move()})),this.horses[e].setNext(),this.nextDisabled=!0,this.nextTimeout=setTimeout((function(){t.nextDisabled=!1}),600)}},{key:"moveBackward",value:function(){var e,t=this;this.horses.forEach((function(n,r){n.hasLeft&&!e&&(e=0==r?t.horses.length-1:r-1,t.removeLittleDotActive(),r>=0?t.littleDots[r].classList.add("active"):t.littleDots[t.littleDots.length-1].classList.add("active")),n.moveBack()})),this.horses[e].setLeave(),this.prevDisabled=!0,this.prevTimeout=setTimeout((function(){t.prevDisabled=!1}),600)}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;this.interval=setInterval((function(){e.moveForward()}),4e3)}))},{key:"setTimeout",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.setInterval()}),5e3)}))},{key:"manualForward",value:function(){this.nextDisabled||(clearInterval(this.interval),this.moveForward(),this.setTimeout())}},{key:"manualBackward",value:function(){this.prevDisabled||(clearInterval(this.interval),this.moveBackward(),this.setTimeout())}}])&&b(t.prototype,n),e}(),w=document.getElementsByClassName("c-carousel"),k=0;k<w.length;k++)new g(w[k]);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"node",void 0),O(this,"links",[]),O(this,"labelMappings",{}),this.node=t,this.hideAll=this.hideAll.bind(this),this.showAll=this.showAll.bind(this)}var t,n;return t=e,(n=[{key:"hideAll",value:function(){this.links.forEach((function(e){return e.hide()}))}},{key:"showAll",value:function(){this.links.forEach((function(e){return e.show()}))}}])&&L(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="node")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.node=r,this.node=t,this.show=this.show.bind(this),this.hide=this.hide.bind(this)}var t,n;return t=e,(n=[{key:"show",value:function(){this.node.classList.contains("hide")&&this.node.classList.remove("hide")}},{key:"hide",value:function(){this.node.classList.contains("hide")||this.node.classList.add("hide")}},{key:"spin",value:function(){this.node.classList.add("spin")}},{key:"unspin",value:function(){this.node.classList.remove("spin")}}])&&_(t.prototype,n),e}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&R(e.prototype,t),n&&R(e,n),e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(){function e(t){I(this,e),H(this,"node",void 0),H(this,"link",void 0),H(this,"icon",void 0),H(this,"childLinksNode",void 0),H(this,"childLinks",[]),this.node=t}return M(e,[{key:"hasChildren",get:function(){return!!this.childLinksNode}},{key:"isHidden",get:function(){return!!this.node.classList.contains("hide")}},{key:"hide",value:function(){this.isHidden||this.node.classList.add("hide")}},{key:"show",value:function(){this.isHidden&&this.node.classList.remove("hide")}}]),e}(),W=function(e){C(n,e);var t=N(n);function n(e){var r;I(this,n),r=t.call(this,e);for(var o=0;o<r.node.children.length;o++){var i=r.node.children[o];if(i.classList.contains("c-navbar__link")||i.classList.contains("c-navbar__button")){r.link=i;var a=i.getElementsByClassName("c-icon");if(!a)throw new Error("No Icon For Dropdown");r.icon=new j(a[0])}else i.classList.contains("c-navbar__sub-menu")&&(r.childLinksNode=i)}if(r.hasChildren)for(var s=0;s<r.childLinksNode.children.length;s++){var c=r.childLinksNode.children[s];r.childLinks=[].concat(A(r.childLinks),[c])}return r}return M(n,[{key:"width",get:function(){var e=this.node.getBoundingClientRect();return e.right-e.left}},{key:"isMenuOpen",get:function(){return!!this.childLinksNode.classList.contains("show")}},{key:"toggle",value:function(){this.isMenuOpen?this.close():this.open()}},{key:"open",value:function(){this.childLinksNode&&(this.childLinksNode.classList.add("show"),this.icon.spin())}},{key:"close",value:function(){this.childLinksNode&&(this.childLinksNode.classList.remove("show"),this.icon.unspin())}}]),n}(D),U=function(e){C(n,e);var t=N(n);function n(e){var r;I(this,n),r=t.call(this,e);for(var o=0;o<r.node.children.length;o++){var i=r.node.children[o];if(i.classList.contains("c-hamburger__link")||i.classList.contains("c-hamburger__element-button")){r.link=i;var a=i.getElementsByClassName("c-icon");a&&(r.icon=new j(a[0]))}else i.classList.contains("c-hamburger__sub-menu")&&(r.childLinksNode=i)}if(r.hasChildren)for(var s=0;s<r.childLinksNode.children.length;s++){var c=r.childLinksNode.children[s],u=c.getElementsByClassName("c-hamburger__sub-link");u&&(u[0].tabIndex="-1"),r.childLinks=[].concat(A(r.childLinks),[c])}return r}return M(n,[{key:"isMenuOpen",get:function(){return!!this.childLinksNode.style.maxHeight}},{key:"toggle",value:function(){this.isMenuOpen?this.close():this.open()}},{key:"close",value:function(){this.childLinksNode&&(this.childLinksNode.style.maxHeight=null,this.childLinks.forEach((function(e){var t=e.getElementsByClassName("c-hamburger__sub-link");t&&(t[0].tabIndex="-1")})),this.icon&&this.icon.unspin())}},{key:"open",value:function(){this.childLinksNode&&(this.childLinksNode.style.maxHeight=this.childLinksNode.scrollHeight+"px",this.childLinks.forEach((function(e){var t=e.getElementsByClassName("c-hamburger__sub-link");t&&(t[0].tabIndex="0")})),this.icon&&this.icon.spin())}},{key:"makeTabbable",value:function(){this.link&&(this.link.tabIndex="0")}},{key:"makeUntabbable",value:function(){this.link&&(this.link.tabIndex="-1")}}]),n}(D);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?J(e):t}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="type")in(n=J(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n.type=o,console.log(t.node),t.subMenuType=t.node.dataset.expand,t.subMenuType||console.warn("No Expand Type Specified");for(var s=0;s<t.node.children.length;s++){var c=t.node.children[s];if(c.classList.contains("c-hamburger__element")){var u=new U(c,t.subMenuType?t.subMenuType:"accordian");u.makeUntabbable(),t.links=[].concat(F(t.links),[u])}}try{t.type=t.node.dataset.type}catch(e){console.error("No Hamburger Type Specified")}if(t.type&&"slideover"==t.type){var l=document.createElement("li");l.classList.add("c-hamburger__close-wrapper"),l.innerHTML='<svg width="12.32781mm" height="12.327812mm" viewBox="0 0 12.32781 12.327812" version="1.1" class="c-hamburger__close-button">\n                    <defs id="defs2" />\n                    <g inkscape:label="Layer 1" id="layer1" transform="translate(-8.837041,-271.65379)" class="c-cross__g">\n                        <rect class="c-cross__rect" width="16.394718" height="1.0394346" x="-194.03687" y="206.53433" transform="rotate(-45)" />\n                        <rect transform="rotate(-135)" y="-186.35922" x="-215.2514" height="1.0394346" width="16.394718" class="c-cross__rect" />\n                    </g>\n                </svg>',t.node.prepend(l)}return t.addEventListeners(),t}return t=a,(n=[{key:"isHidden",get:function(){return!this.node.classList.contains("show")}},{key:"isHamburgerFull",get:function(){return this.links.forEach((function(e){if(e.isHidden)return!1})),!0}},{key:"show",value:function(){switch(this.links.forEach((function(e){e.makeTabbable()})),this.type){case"dropdown":this.node.classList.add("show");break;case"slideover":this.node.classList.add("show"),document.getElementsByTagName("body")[0].classList.add("no-scroll");break;case"slidewith":break;case"fullpage":this.node.classList.add("show");break;default:throw new Error("Invalid Hamburger Type")}}},{key:"hide",value:function(){var e=this;switch(this.links.forEach((function(e){e.makeUntabbable()})),this.type){case"dropdown":this.node.classList.remove("show");break;case"slideover":this.node.classList.remove("show"),document.getElementsByTagName("body")[0].classList.remove("no-scroll");break;case"slidewith":break;case"fullpage":this.node.classList.remove("show");break;default:throw new Error("Invalid Hamburger Type")}setTimeout((function(){e.closeAllMenus()}),150)}},{key:"showOne",value:function(){for(var e=this.links.length-1;e>=0;e--){var t=this.links[e];if(t.isHidden){t.show();break}}}},{key:"handleLinks",value:function(e){e.isMenuOpen?e.close():(this.closeAllMenus(),e.open())}},{key:"closeAllMenus",value:function(){this.links.forEach((function(e){e.close()}))}},{key:"addEventListeners",value:function(){var e=this;this.links.forEach((function(t){t.hasChildren&&t.node.addEventListener("click",(function(){e.handleLinks(t)}))})),"slideover"==this.type&&document.getElementsByClassName("c-hamburger__close-button")[0].addEventListener("click",(function(){e.hide()}))}}])&&Y(t.prototype,n),a}(E);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?oe(e):t}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ie(r);if(o){var n=ie(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return re(this,e)});function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ee(this,a),t=i.call(this,e,n);for(var r=0;r<t.node.children.length;r++){var o=t.node.children[r],s=new W(o,t.labelMappings,t.closeAllMenus);t.links=[].concat(X(t.links),[s])}return t.hideOne=t.hideOne.bind(oe(t)),t.closeAllMenus=t.closeAllMenus.bind(oe(t)),t.addEventListeners(),t}return t=a,(n=[{key:"totalWidth",get:function(){var e=0;return this.links.forEach((function(t){e+=t.width})),e}},{key:"hideOne",value:function(){for(var e=this.links.length-1;e>=0;e--){var t=this.links[e];if(!t.isHidden){t.hide();break}}}},{key:"handleLinks",value:function(e){e.childLinksNode.classList.contains("show")?e.close():(this.closeAllMenus(),e.open())}},{key:"addEventListeners",value:function(){var e=this;this.links.forEach((function(t){t.hasChildren&&t.node.addEventListener("click",(function(){e.handleLinks(t)}))}))}},{key:"closeAllMenus",value:function(){this.links.forEach((function(e){e.close()}))}}])&&te(t.prototype,n),a}(E);function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ue(this,"node",void 0),ue(this,"navBar",void 0),ue(this,"hamburger",void 0),ue(this,"hamburgerButton",void 0),ue(this,"hamburgerWrapper",void 0),this.node=t,this.getNavItems(),this.addEventListeners()}var t,n;return t=e,(n=[{key:"getNavItems",value:function(){var e=this.node.getElementsByClassName("c-navbar");if(!e)throw new Error("No c-navbar present.");this.navBar=new ae(e[0]),console.log(this.navBar);var t=this.node.getElementsByClassName("c-hamburger");if(0==t.length)throw new Error("No c-hamburger present.");this.hamburgerWrapper=t[0],console.log(this.hamburgerWrapper);var n=this.hamburgerWrapper.getElementsByClassName("c-hamburger__menu");if(0==n.length)throw new Error("No c-hamburger__menu present.");this.hamburger=new Q(n[0]),console.log(this.hamburger);var r=this.node.getElementsByClassName("c-hamburger__button");if(!r)throw new Error("No c-hamburger__button present.");this.hamburgerButton=r[0],console.log(this.hamburgerButton)}},{key:"moveAllToHamburger",value:function(){this.hamburgerWrapper.classList.remove("hide"),this.hamburger.showAll(),this.navBar.hideAll()}},{key:"moveAllToNav",value:function(){this.hamburgerWrapper.classList.add("hide"),this.hamburger.hideAll(),this.navBar.showAll()}},{key:"moveOneToHamburger",value:function(){this.hamburgerWrapper.classList.remove("hide"),this.navBar.hideOne(),this.hamburger.showOne()}},{key:"handleHamburgerButton",value:function(){this.hamburger.isHidden?this.hamburger.show():this.hamburger.hide()}},{key:"getParents",value:function(e){return"HTML"==e.tagName?[e]:[e.parentElement].concat(function(e){return function(e){if(Array.isArray(e))return se(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this.getParents(e.parentElement)))}},{key:"hasParent",value:function(e,t){for(var n=this.getParents(e),r=0;r<n.length;r++)if(n[r]==t)return!0;return!1}},{key:"handlePageClick",value:function(e){this.hasParent(e.target,this.hamburgerWrapper)||this.hamburger.hide(),this.hasParent(e.target,this.navBar.node)||this.navBar.closeAllMenus()}},{key:"show",value:function(){this.node.classList.add("show")}},{key:"addEventListeners",value:function(){var e=this;this.hamburgerButton.addEventListener("click",(function(){e.handleHamburgerButton()})),window.addEventListener("click",(function(t){e.handlePageClick(t)}))}}])&&ce(t.prototype,n),e}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?pe(e):t}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ve(r);if(o){var n=ve(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ye(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="breakpoint")in(n=pe(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o;try{t.breakpoint=parseInt(t.node.dataset.breakpoint)}catch(e){console.error("Invalid Breakpoint")}return t}return t=a,(n=[{key:"handleResize",value:function(){if(this.breakpoint&&document.documentElement.clientWidth<=this.breakpoint)this.moveAllToHamburger();else{this.moveAllToNav();for(var e=0;this.isNavWrapped()&&e<1e3;)this.moveOneToHamburger(),e++;if(e>900)throw new Error("Infinite Loop")}}},{key:"isNavWrapped",value:function(){var e=this.navBar.node.getBoundingClientRect(),t=e.right-e.left;return this.navBar.totalWidth>t-50}}])&&he(t.prototype,n),a}(le);function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=ke(t);if(n){var o=ke(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return we(this,e)});function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,e)}return o}(le);function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _e(e,t){return(_e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function je(e,t){return!t||"object"!==Oe(t)&&"function"!=typeof t?Se(e):t}function Se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Ae(r);if(o){var n=Ae(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return je(this,e)});function a(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,(r="breakpoint")in(n=Se(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o;try{t.breakpoint=t.node.dataset.breakpoint}catch(e){console.error("Invalid Breakpoint")}return t}return t=a,(n=[{key:"handleResize",value:function(){document.documentElement.clientWidth<=this.breakpoint?this.moveAllToHamburger():this.moveAllToNav()}}])&&Ee(t.prototype,n),a}(le);function Ce(e){return function(e){if(Array.isArray(e))return Be(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Be(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}for(var Ne=function(e){switch(e.dataset.type){case"dynamic":return new be(e);case"static":return new Le(e);case"fixed":return new Te(e);default:throw new Error("No Navigation Type Specified")}},Pe=document.getElementsByClassName("c-navigation"),xe=[],Ie=0;Ie<Pe.length;Ie++){var Re=Ne(Pe[Ie]);xe=[].concat(Ce(xe),[Re])}xe&&(window.onload=function(){xe.forEach((function(e){e.handleResize()})),setTimeout((function(){xe.forEach((function(e){e.show()}))}),20)},window.addEventListener("resize",(function(){xe.forEach((function(e){e.handleResize()}))}))),n(140),n(100)})()})();