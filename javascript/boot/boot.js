!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){t.exports=PropTypes},function(t,e){t.exports=Injector},function(t,e){t.exports=React},function(t,e){t.exports=ReactDom},function(t,e){t.exports=jQuery},function(t,e){t.exports=schemaFieldValues},function(t,e){t.exports=classnames},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(1),u=n.n(i),c=(n(6),n(0)),a=n.n(c);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var e,n,r,i=p(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).state={},console.log(t),e}return e=u,(n=[{key:"render",value:function(){return o.a.createElement("div",null,"test")}}])&&s(e.prototype,n),r&&s(e,r),u}(r.Component);h.defaultProps={extraClass:"",value:""},h.propTypes={extraClass:a.a.string,id:a.a.string,name:a.a.string.isRequired,children:a.a.array.isRequired,onAutofill:a.a.func,readOnly:a.a.bool};var b=h,m=function(){u.a.component.register("FAPickerField",b)},v=n(4),g=n.n(v),O=n(3),j=n.n(O),x=n(5);function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}g.a.entwine("ss",(function(t){t(".fa-holder input.fapicker.text").entwine({Component:null,getContainer:function(){var e=this.siblings(".fa-holder")[0];if(!e){var n=t('<div class=".fa-holder"></div>');this.before(n),e=n[0]}return e},onunmatch:function(){this._super(),j.a.unmountComponentAtNode(this.siblings(".fa-holder")[0])},onmatch:function(){var t=this.closest(".cms-content").attr("id"),e=t?{context:t}:{},n=Object(i.loadComponent)("FAPickerField",e);this.setComponent(n),this._super(),this.hide(),this.refresh()},onclick:function(t){t.preventDefault()},refresh:function(){var e=this.getAttributes(),n=t(this).closest("form"),r=this.getComponent();j.a.render(o.a.createElement(r,P({},e,{onChange:function(){setTimeout((function(){n.trigger("change")}),0)},noHolder:!0})),this.getContainer())},getAttributes:function(){var e=t(this).data("state"),n=t(this).data("schema");return Object(x.schemaMerge)(n,e)}})})),document.addEventListener("DOMContentLoaded",(function(){m()}))}]);
//# sourceMappingURL=boot.js.map