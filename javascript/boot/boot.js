!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=React},function(e,t){e.exports=PropTypes},function(e,t){e.exports=Injector},function(e,t){e.exports=classnames},function(e,t){e.exports=ReactDom},function(e,t){e.exports=jQuery},function(e,t){e.exports=schemaFieldValues},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(2),a=n.n(i),c=n(3),l=n.n(c),u=n(1),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,i=y(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={value:e.value},t.handleClick=t.handleClick.bind(v(t)),t}return t=a,(n=[{key:"handleClick",value:function(e){"function"==typeof this.props.onChange&&this.props.onChange({value:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.iconValue,r=t.className,i=t.tooltip;return o.a.createElement("li",null,o.a.createElement("div",{className:l()(r,"fapicker-icons__holder__icon"),title:i,onClick:function(){return e.handleClick(n.fullName)}},o.a.createElement("i",{class:n.fullName})),o.a.createElement("div",null,n.shortName))}}])&&p(t.prototype,n),r&&p(t,r),a}(r.Component);m.defaultProps={imageUrl:"",width:0,height:0,tooltip:"",onChange:null};var g=m;function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,i=T(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={value:e.value?e.value:"",iconList:e.data.iconList?e.data.iconList:null,filteredList:e.data.iconList?e.data.iconList:null,iconVersion:e.data.iconVersion?e.data.iconVersion:null,iconTotal:e.data.iconTotal?e.data.iconTotal:null,activeFilterType:"all",searchValue:null},t.handleChange=t.handleChange.bind(w(t)),t.handleFilterTypeClick=t.handleFilterTypeClick.bind(w(t)),t.searchIcons=t.searchIcons.bind(w(t)),t}return t=a,(n=[{key:"componentDidMount",value:function(){console.log("hello world")}},{key:"handleChange",value:function(e){var t=e.value,n=this.props,r=n.onAutofill,o=n.name;this.setState({value:t});var i=t;"function"==typeof r&&r("".concat(o),i)}},{key:"handleFilterTypeClick",value:function(e){this.setState({filteredList:this.filterByType(e),activeFilterType:e,searchValue:""})}},{key:"filterByType",value:function(e){return"all"==e?this.state.iconList:this.state.iconList.filter((function(t){return t.fullName.includes(e)}))}},{key:"searchIcons",value:function(e){var t="";t=""===e?this.filterByType(this.state.activeFilterType):this.state.filteredList.filter((function(t){return t.shortName.includes(e)})),this.setState({filteredList:t,searchValue:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.value,r=t.filteredList,i=t.iconVersion,a=t.iconTotal,c=t.searchValue,u=this.props.FieldGroup,s=k(k({},this.props),{},{className:l()("fapicker-field")}),f=r.map((function(t){return o.a.createElement(g,{className:e.state.value==t.fullName?"active":null,iconValue:t,onChange:e.handleChange})}));return o.a.createElement(u,s,o.a.createElement("div",{class:"fapicker-icons"},o.a.createElement("div",{class:"fapicker-icons__search-holder"},o.a.createElement("span",{class:"fapicker-icons__holder__icon"},o.a.createElement("i",{class:n})),o.a.createElement("input",{type:"text",value:c,class:"text",placeholder:"Filter...",onChange:function(t){return e.searchIcons(t.target.value)}})),o.a.createElement("ul",{class:"fapicker-icons__type-selector"},o.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("all")},class:"all"==this.state.activeFilterType?"active":null},"All"),o.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fas")},class:"fas"==this.state.activeFilterType?"active":null},"Solid"),o.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("far")},class:"far"==this.state.activeFilterType?"active":null},"Regular"),o.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fal")},class:"fal"==this.state.activeFilterType?"active":null},"Light"),o.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fad")},class:"fad"==this.state.activeFilterType?"active":null},"Duotone"),o.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fab")},class:"fab"==this.state.activeFilterType?"active":null},"Brands")),o.a.createElement("ul",{class:"fapicker-icons__holder"},f),o.a.createElement("div",{class:"fapicker-icons__bottom"},o.a.createElement("span",{class:"small version"},"Version ",o.a.createElement("strong",null,i)),o.a.createElement("span",{class:"small icons"},o.a.createElement("strong",null,a)," Icons"))))}}])&&_(t.prototype,n),r&&_(t,r),a}(r.Component);S.defaultProps={extraClass:"",value:""},S.propTypes={extraClass:s.a.string,id:s.a.string,name:s.a.string.isRequired,children:s.a.array.isRequired,onAutofill:s.a.func,onChange:s.a.func,value:s.a.string,readOnly:s.a.bool};var x=Object(i.inject)(["FieldGroup"])(S),R=function(){a.a.component.register("FAPickerField",x)},L=n(5),D=n.n(L),V=n(4),N=n.n(V),A=n(6);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}D.a.entwine("ss",(function(e){e(".fa-holder input.fapicker.text").entwine({Component:null,getContainer:function(){var t=this.siblings(".fa-holder")[0];if(!t){var n=e('<div class="fa-holder"></div>');this.before(n),t=n[0]}return t},onunmatch:function(){this._super(),N.a.unmountComponentAtNode(this.siblings(".fa-holder")[0])},onmatch:function(){var e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},n=Object(i.loadComponent)("FAPickerField",t);this.setComponent(n),this._super(),this.hide(),this.refresh()},onclick:function(e){e.preventDefault()},refresh:function(){var t=this.getAttributes(),n=(e(this).closest("form"),this.getComponent());N.a.render(o.a.createElement(n,M({},t,{onAutofill:function(t,n){var r=e('input[name="'+t+'"]');r&&r.val(n)},noHolder:!0})),this.getContainer())},getAttributes:function(){var t=e(this).data("state"),n=e(this).data("schema");return Object(A.schemaMerge)(n,t)}})})),document.addEventListener("DOMContentLoaded",(function(){R()}))}]);
//# sourceMappingURL=boot.js.map