(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[545],{2916:(e,t,r)=>{"use strict";var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Block=void 0;var a=n(r(5707)),o=n(r(6651)),l=n(r(453)),u=r(905),d=r(4496),i=["name","keyname","visible","tagName"];(t.Block=(0,u.memo)((function(e){var t=(0,d.useStore)(),r=t.blocks,n=void 0===r?{}:r,f=t.dispatch,s=e.name,c=e.keyname,p=e.visible,v=void 0===p||p,b=e.tagName,y=void 0===b?"div":b,x=(0,l.default)(e,i);return(0,u.useEffect)((function(){if(s||c){var e=c||s,t=v?(0,u.createElement)(y,(0,o.default)({},x),x.children):null;delete n[e],f({blocks:(0,o.default)((0,o.default)({},n),{},(0,a.default)({},e,t))})}}),[e]),null}))).displayName="Login.Block"},877:(e,t,r)=>{"use strict";var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var a=n(r(5707)),o=n(r(6651)),l=n(r(453)),u=r(905),d=r(4496),i=r(8557),f=["keyname","visible"];(t.Button=(0,u.memo)((function(e){var t=(0,d.useStore)(),r=t.buttons,n=void 0===r?{}:r,s=t.dispatch;return(0,u.useEffect)((function(){var t=e.keyname,r=e.visible,u=void 0===r||r,d=(0,l.default)(e,f);if(t||d.name){var c=t||d.name;delete n[c],s({buttons:(0,o.default)((0,o.default)({},n),{},(0,a.default)({},c,u?(0,i.jsx)("button",(0,o.default)({type:"submit"},d)):null))})}}),[e]),null}))).displayName="Login.Button"},7058:(e,t,r)=>{"use strict";var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Container=void 0;var a=n(r(6651)),o=n(r(453)),l=n(r(905)),u=r(8557),d=["className","children"];(t.Container=l.default.forwardRef((function(e,t){var r=e.className,n=void 0===r?"":r,l=e.children,i=(0,o.default)(e,d),f="login-page ".concat(n);return(0,u.jsx)("div",(0,a.default)((0,a.default)({ref:t,className:f},i),{},{children:l}))}))).displayName="Login.Container"},6633:(e,t,r)=>{"use strict";var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var o=n(r(5707)),l=n(r(6651)),u=n(r(453)),d=a(r(905)),i=r(4496),f=r(8557),s=["rename","keyname","visible","children"];(t.Input=(0,d.memo)((function(e){var t=(0,i.useStore)(),r=t.fields,n=void 0===r?{}:r,a=t.extra,c=void 0===a?{}:a,p=t.$$index,v=void 0===p?{}:p,b=t.dispatch,y=e.rename,x=e.keyname,m=e.visible,O=void 0===m||m,j=e.children,_=(0,u.default)(e,s);return(0,d.useEffect)((function(){if(x||_.name){var e=x||_.name;delete v[e],delete n[e],delete c[e],b({$$index:(0,l.default)((0,l.default)({},v),{},(0,o.default)({},e,_.index||0)),extra:(0,l.default)((0,l.default)({},c),{},(0,o.default)({},e,j||null)),fields:(0,l.default)((0,l.default)({},n),{},(0,o.default)({},e,O?(0,f.jsx)("input",(0,l.default)((0,l.default)({},_),{},{name:y||_.name})):null))})}}),[e]),null}))).displayName="Login.Input"},3497:(e,t,r)=>{"use strict";var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Render=void 0;var a=n(r(6651)),o=r(905),l=r(4496),u=r(8557);(t.Render=function(e){var t=e.children,r=(0,l.useStore)(),n=r.fields,d=void 0===n?{}:n,i=r.buttons,f=void 0===i?{}:i,s=r.extra,c=void 0===s?{}:s,p=r.$$index,v=void 0===p?{}:p,b=r.blocks,y=void 0===b?{}:b,x=r.data,m="function"===typeof t?[]:o.Children.toArray(t);return(0,u.jsxs)(o.Fragment,{children:["function"===typeof t&&!(0,o.isValidElement)(t)&&t({fields:d,buttons:f,blocks:y,extra:c,$$index:v},(0,a.default)({},x)),"function"!==typeof t&&m.map((function(e,t){return(0,o.isValidElement)(e)?(0,o.cloneElement)(e,(0,a.default)((0,a.default)({},e.props),{},{key:t})):null}))]})}).displayName="Login.Render"},8885:(e,t,r)=>{"use strict";var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Select=void 0;var o=n(r(5707)),l=n(r(6651)),u=n(r(453)),d=a(r(905)),i=r(4496),f=r(8557),s=["rename","keyname","visible"];(t.Select=(0,d.memo)((function(e){var t=(0,i.useStore)(),r=t.fields,n=void 0===r?{}:r,a=t.dispatch,c=e.rename,p=e.keyname,v=e.visible,b=void 0===v||v,y=(0,u.default)(e,s);return(0,d.useEffect)((function(){if(p||e.name){var t=p||e.name;delete n[t],a({fields:(0,l.default)((0,l.default)({},n),{},(0,o.default)({},t,b?(0,f.jsx)("select",(0,l.default)((0,l.default)({},y),{},{name:c||e.name})):null))})}}),[e]),null}))).displayName="Login.Select"},3943:(e,t,r)=>{"use strict";var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=void 0;var o=n(r(5707)),l=n(r(6651)),u=n(r(453)),d=a(r(905)),i=r(4496),f=r(8557),s=["rename","keyname","visible","children"];(t.Textarea=(0,d.memo)((function(e){var t=(0,i.useStore)(),r=t.fields,n=void 0===r?{}:r,a=t.extra,c=void 0===a?{}:a,p=t.$$index,v=void 0===p?{}:p,b=t.dispatch;return(0,d.useEffect)((function(){var t=e.rename,r=e.keyname,a=e.visible,d=void 0===a||a,i=e.children,p=(0,u.default)(e,s);if(r||p.name){var y=r||p.name;delete n[y],delete c[y],delete v[y],b({$$index:(0,l.default)((0,l.default)({},v),{},(0,o.default)({},y,p.index||0)),extra:(0,l.default)((0,l.default)({},c),{},(0,o.default)({},y,i||null)),fields:(0,l.default)((0,l.default)({},n),{},(0,o.default)({},y,d?(0,f.jsx)("textarea",(0,l.default)((0,l.default)({},p),{},{name:t||p.name})):null))})}}),[e]),null}))).displayName="Login.Textarea"},9545:(e,t,r)=>{"use strict";var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0});var a={};t.default=void 0;var o=n(r(6651)),l=n(r(905)),u=r(4496);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var d=r(7058);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}));var i=r(2916);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var f=r(3943);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===f[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}}))}));var s=r(8885);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var c=r(6633);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var p=r(877);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var v=r(8557),b=r(3497);Object.keys(b).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===b[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return b[e]}}))}));var y=l.default.forwardRef((function(e,t){return(0,v.jsx)(u.Provider,{children:(0,v.jsx)(d.Container,(0,o.default)((0,o.default)({},e),{},{ref:t}))})}));y.Block=i.Block,y.Button=p.Button,y.Input=c.Input,y.Textarea=f.Textarea,y.Select=s.Select,y.displayName="Login";t.default=y},4496:(e,t,r)=>{"use strict";var n=r(147).default,a=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.Provider=t.Context=void 0,t.reducer=s,t.useStore=void 0;var o=a(r(8821)),l=a(r(6651)),u=n(r(905)),d=r(8557),i=t.initialState={index:{},fields:{},buttons:{},blocks:{},extra:{},data:{fields:[],buttons:[],blocks:[]}},f=t.Context=(0,u.createContext)(i);function s(e,t){var r=(0,l.default)((0,l.default)((0,l.default)({},e),t),{},{$$index:(0,l.default)((0,l.default)({},e.$$index),t.$$index),fields:(0,l.default)((0,l.default)({},e.fields),t.fields),buttons:(0,l.default)((0,l.default)({},e.buttons),t.buttons),blocks:(0,l.default)((0,l.default)({},e.blocks),t.blocks),extra:(0,l.default)((0,l.default)({},e.extra),t.extra)}),n=Object.keys(r.fields).map((function(e){var t;return{name:e,index:(null===(t=r.fields[e])||void 0===t||null===(t=t.props)||void 0===t?void 0:t.index)||(r.$$index||{})[e]||0,children:r.fields[e]}})),a=Object.keys(r.buttons).map((function(e){var t;return{name:e,index:(null===(t=r.buttons[e])||void 0===t||null===(t=t.props)||void 0===t?void 0:t.index)||(r.$$index||{})[e]||0,children:r.buttons[e]}})),o=Object.keys(r.blocks).map((function(e){var t;return{name:e,index:(null===(t=r.blocks[e])||void 0===t||null===(t=t.props)||void 0===t?void 0:t.index)||(r.$$index||{})[e]||0,children:r.blocks[e]}}));return(0,l.default)((0,l.default)({},r),{},{data:(0,l.default)((0,l.default)({},r.data),{},{fields:n,buttons:a,blocks:o})})}f.displayName="Login.Context";t.useStore=function(){return(0,u.useContext)(f)};(t.Provider=function(e){var t=e.children,r=(e.render,(0,u.useReducer)(s,i)),n=(0,o.default)(r,2),a=n[0],c=n[1];return(0,d.jsx)(f.Provider,{value:(0,l.default)((0,l.default)({},a),{},{dispatch:c}),children:t})}).displayName="Login.Provider"},8113:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2950:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},6784:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},147:(e,t,r)=>{var n=r(564).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var d=l?Object.getOwnPropertyDescriptor(e,u):null;d&&(d.get||d.set)?Object.defineProperty(o,u,d):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o},e.exports.__esModule=!0,e.exports.default=e.exports},5474:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,u=[],d=!0,i=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;d=!1}else for(;!(d=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);d=!0);}catch(e){i=!0,a=e}finally{try{if(!d&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(i)throw a}}return u}},e.exports.__esModule=!0,e.exports.default=e.exports},1018:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},6651:(e,t,r)=>{var n=r(5707);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},453:(e,t,r)=>{var n=r(739);e.exports=function(e,t){if(null==e)return{};var r,a,o=n(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},739:e=>{e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},8821:(e,t,r)=>{var n=r(2950),a=r(5474),o=r(7744),l=r(1018);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},7744:(e,t,r)=>{var n=r(8113);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=545.1210cb22.chunk.js.map