parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.concurrent_mode"):60111,a=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,s=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function v(e,r,t,n,o,u,l,i){if(!e){if(e=void 0,void 0===r)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[t,n,o,u,l,i],c=0;(e=Error(r.replace(/%s/g,function(){return f[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}function m(e){for(var r=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<r;n++)t+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}function S(){}function $(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=_.prototype;var g=$.prototype=new S;g.constructor=$,e(g,_.prototype),g.isPureReactComponent=!0;var k={current:null,currentDispatcher:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,n){var o=void 0,u={},l=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(l=""+r.key),r)w.call(r,o)&&!x.hasOwnProperty(o)&&(u[o]=r[o]);var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){for(var c=Array(f),a=0;a<f;a++)c[a]=arguments[a+2];u.children=c}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===u[o]&&(u[o]=f[o]);return{$$typeof:t,type:e,key:l,ref:i,props:u,_owner:k.current}}function j(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function E(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var R=/\/+/g,O=[];function A(e,r,t,n){if(O.length){var o=O.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function U(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function q(e,r,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return o(u,e,""===r?"."+I(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var f=0;f<e.length;f++){var c=r+I(l=e[f],f);i+=q(l,c,o,u)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=d&&e[d]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),f=0;!(l=e.next()).done;)i+=q(l=l.value,c=r+I(l,f++),o,u);else"object"===l&&m("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return i}function F(e,r,t){return null==e?0:q(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?E(e.key):r.toString(36)}function M(e,r){e.func.call(e.context,r,e.count++)}function T(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?V(e,n,t,function(e){return e}):null!=e&&(C(e)&&(e=j(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function V(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(R,"$&/")+"/"),F(e,T,r=A(r,u,n,o)),U(r)}var D={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return V(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;F(e,M,r=A(null,null,r,t)),U(r)},count:function(e){return F(e,function(){return null},null)},toArray:function(e){var r=[];return V(e,r,null,function(e){return e}),r},only:function(e){return C(e)||m("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:$,createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:a,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},Fragment:o,StrictMode:u,Suspense:p,createElement:P,cloneElement:function(r,n,o){null==r&&m("267",r);var u=void 0,l=e({},r.props),i=r.key,f=r.ref,c=r._owner;if(null!=n){void 0!==n.ref&&(f=n.ref,c=k.current),void 0!==n.key&&(i=""+n.key);var a=void 0;for(u in r.type&&r.type.defaultProps&&(a=r.type.defaultProps),n)w.call(n,u)&&!x.hasOwnProperty(u)&&(l[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}if(1===(u=arguments.length-2))l.children=o;else if(1<u){a=Array(u);for(var p=0;p<u;p++)a[p]=arguments[p+2];l.children=a}return{$$typeof:t,type:r.type,key:i,ref:f,props:l,_owner:c}},createFactory:function(e){var r=P.bind(null,e);return r.type=e,r},isValidElement:C,version:"16.7.0",unstable_ConcurrentMode:c,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:e}},L={default:D},N=L&&D||L;module.exports=N.default||N;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"SfNX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=wp.element,d=c.Component,g=c.Fragment,f=wp.htmlEntities.decodeEntities,y=wp.keycodes,h=y.UP,v=y.DOWN,m=y.ENTER,b=wp.components,S=b.Spinner,w=b.Popover,x=b.IconButton,P=wp.compose.withInstanceId,k=wp.data.withSelect,T=wp,E=T.apiFetch,_=wp.url.addQueryArgs,D=function(e){return e.stopPropagation()},N={border:"3px solid lightgrey",padding:"5px",borderRadius:"7px",marginRight:"10px",fontSize:"80%"};function C(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){for(var s=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];clearTimeout(t),t=setTimeout(function(){e.apply(s,i)},n)}}var O=function(t){function n(){var e;return s(this,n),(e=a(this,r(n).apply(this,arguments))).onChange=e.onChange.bind(l(e)),e.onKeyDown=e.onKeyDown.bind(l(e)),e.bindListNode=e.bindListNode.bind(l(e)),e.updateSuggestions=C(e.updateSuggestions.bind(l(e)),200),e.limit=!!e.props.limit&&parseInt(e.props.limit),e.suggestionNodes=[],e.postTypes=null,e.state={posts:[],showSuggestions:!1,selectedSuggestion:null,input:""},e}return u(n,d),i(n,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){delete this.suggestionsRequest}},{key:"bindListNode",value:function(e){this.listNode=e}},{key:"bindSuggestionNode",value:function(e){var t=this;return function(n){t.suggestionNodes[e]=n}}},{key:"updateSuggestions",value:function(e){var t=this;if(e.length<2||/^https?:/.test(e))this.setState({showSuggestions:!1,selectedSuggestion:null,loading:!1});else{this.setState({showSuggestions:!0,selectedSuggestion:null,loading:!0});var n=E({path:_("/wp/v2/search",{search:e,per_page:20,type:"post",subtype:this.props.postType?this.props.postType:void 0})});n.then(function(e){t.suggestionsRequest===n&&t.setState({posts:e,loading:!1})}).catch(function(){t.suggestionsRequest===n&&t.setState({loading:!1})}),this.suggestionsRequest=n}}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({input:t}),this.updateSuggestions(t)}},{key:"onKeyDown",value:function(e){var t=this.state,n=t.showSuggestions,s=t.selectedSuggestion,o=t.posts,i=t.loading;if(n&&o.length&&!i)switch(e.keyCode){case h:e.stopPropagation(),e.preventDefault();var a=s?s-1:o.length-1;this.setState({selectedSuggestion:a});break;case v:e.stopPropagation(),e.preventDefault();var r=null===s||s===o.length-1?0:s+1;this.setState({selectedSuggestion:r});break;case m:if(null!==this.state.selectedSuggestion){e.stopPropagation();var l=this.state.posts[this.state.selectedSuggestion];this.selectLink(l)}}}},{key:"selectLink",value:function(e){var t=this;if(this.props.data){var n=!1,s={},o=!0,i=!1,a=void 0;try{for(var r,l=this.props.data[Symbol.iterator]();!(o=(r=l.next()).done);o=!0){var u=r.value;if(!e.hasOwnProperty(u))return void(n=!0);s[u]=e[u]}}catch(c){i=!0,a=c}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}if(!n)return this.props.onPostSelect(s),void this.setState({input:"",selectedSuggestion:null,showSuggestions:!1})}var p=this.getPostTypeData(e.subtype).restBase;E({path:"/wp/v2/".concat(p,"/").concat(e.id)}).then(function(e){var n={title:f(e.title.rendered),id:e.id,excerpt:f(e.excerpt.rendered),url:e.link,date:e.date,type:e.type,status:e.status};t.props.onPostSelect(n)}),this.setState({input:"",selectedSuggestion:null,showSuggestions:!1})}},{key:"renderSelectedPosts",value:function(){var t=this;return e.default.createElement("ul",null,this.props.posts.map(function(n,s){return e.default.createElement("li",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap"},key:n.id},t.hasPostTypeData()&&e.default.createElement("span",{style:N},t.getPostTypeData(n.type).displayName),e.default.createElement("span",{style:{flex:1}},n.title),e.default.createElement("span",null,0!==s?e.default.createElement(x,{style:{display:"inline-flex",padding:"8px 2px",textAlign:"center"},icon:"arrow-up-alt2",onClick:function(){t.props.posts.splice(s-1,0,t.props.posts.splice(s,1)[0]),t.props.onChange(t.props.posts),t.setState({state:t.state})}}):null,s!==t.props.posts.length-1?e.default.createElement(x,{style:{display:"inline-flex",padding:"8px 2px",textAlign:"center"},icon:"arrow-down-alt2",onClick:function(){t.props.posts.splice(s+1,0,t.props.posts.splice(s,1)[0]),t.props.onChange(t.props.posts),t.setState({state:t.state})}}):null,e.default.createElement(x,{style:{display:"inline-flex",textAlign:"center"},icon:"no",onClick:function(){t.props.posts.splice(s,1),t.props.onChange(t.props.posts),t.setState({state:t.state})}})))}))}},{key:"resolvePostTypes",value:function(e){if(null===this.postTypes&&e){var t=e.map(function(e){return[e.slug,{slug:e.slug,displayName:e.labels.singular_name,restBase:e.rest_base}]});this.postTypes=new Map(t)}}},{key:"getPostTypeData",value:function(e){return this.hasPostTypeData()?this.postTypes.get(e):{}}},{key:"hasPostTypeData",value:function(){return null!==this.postTypes}},{key:"render",value:function(){var t=this,n=this.props,s=n.autoFocus,o=void 0===s||s,i=n.instanceId,a=n.limit,r=n.sourcePostTypes,l=this.state,u=l.showSuggestions,p=l.posts,c=l.selectedSuggestion,d=l.loading,y=l.input,h=!!a&&this.props.posts.length>=a;return this.resolvePostTypes(r),e.default.createElement(g,null,this.renderSelectedPosts(),e.default.createElement("div",{className:"editor-url-input"},e.default.createElement("input",{autoFocus:o,type:"text","aria-label":"URL",required:!0,value:y,onChange:this.onChange,onInput:D,placeholder:h?"Limted to ".concat(a," posts"):"Type page or post name",onKeyDown:this.onKeyDown,role:"combobox","aria-expanded":u,"aria-autocomplete":"list","aria-owns":"editor-url-input-suggestions-".concat(i),"aria-activedescendant":null!==c?"editor-url-input-suggestion-".concat(i,"-").concat(c):void 0,style:{width:"100%"},disabled:h}),d&&e.default.createElement(S,null)),u&&!!p.length&&e.default.createElement(w,{position:"bottom",noArrow:!0,focusOnMount:!1},e.default.createElement("div",{className:"editor-url-input__suggestions",id:"editor-url-input-suggestions-".concat(i),ref:this.bindListNode,role:"listbox"},p.map(function(n,s){return e.default.createElement("button",{key:n.id,role:"option",tabIndex:"-1",id:"editor-url-input-suggestion-".concat(i,"-").concat(s),ref:t.bindSuggestionNode(s),className:"editor-url-input__suggestion ".concat(s===c?"is-selected":""),onClick:function(){return t.selectLink(n)},"aria-selected":s===c},e.default.createElement("div",{style:{display:"flex",alignItems:"center"}},t.hasPostTypeData()&&e.default.createElement("div",{style:N},t.getPostTypeData(n.subtype).displayName),e.default.createElement("div",null,f(n.title)||"(no title)")))}))))}}]),n}(),j=k(function(e){return{sourcePostTypes:(0,e("core").getPostTypes)()}})(P(O));exports.default=j;
},{"react":"1n8/"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./PostSelector"));function t(e){return e&&e.__esModule?e:{default:e}}var r=e.default;exports.default=r;
},{"./PostSelector":"SfNX"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map