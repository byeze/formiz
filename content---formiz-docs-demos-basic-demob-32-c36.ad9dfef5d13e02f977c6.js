(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{52:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(54),o=t(6),u=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(t,!0).forEach(function(n){c(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m={isValid:!0,isSubmitted:!1,initialStepName:null,navigatedStepName:null,steps:[],fields:[]},v=a.a.createContext(),b=function(){return Object(r.useContext)(v)},y=function(e){var n=e.children,t=e.onStateChange,i=Object(r.useRef)(m),o=Object(r.useRef)(!1),u=Object(r.useRef)(null),c=d(Object(r.useState)(i.current),2),l=c[0],s=c[1];Object(r.useEffect)(function(){return o.current=!0,function(){o.current=!1}},[]);var f=Object(r.useCallback)(function(e){i.current=e(i.current),clearTimeout(u.current),u.current=setTimeout(function(){o.current&&s(i.current)})},[i,u,s]);return Object(r.useEffect)(function(){t(i.current)},[i.current]),a.a.createElement(v.Provider,{value:{state:l,dispatch:f}},n)};y.propTypes={children:u.a.node.isRequired,onStateChange:u.a.func},y.defaultProps={onStateChange:function(){}};var g=function(e,n){return(n||[]).filter(function(n){return n.step===e})},O=function(e){return(e||[]).filter(function(e){return e.isActive}).reduce(function(e,n){return f({},e,c({},n.name,n.value))},{})},h=function(e,n){return(n||[]).find(function(n){return n.name===e})||{}},S=function(e){return e.navigatedStepName||e.initialStepName},E=function(e,n){return(n||[]).findIndex(function(n){return n.name===e})||0},j=function(e){return(e||[]).sort(function(e,n){return e.order-n.order}).sort(function(e,n){return e.index-n.index})},w=function(){return function(e){var n=(e.fields||[]).map(function(n){return f({},n,{errors:(t=n.name,r=e.fields,a=function(e,n){return(r||[]).find(function(n){return n.name===e})}(t),a&&a.validations?a.validations.map(function(e){return e.rule&&!e.rule(a.value,O(r))?e.message:"___FIELD_IS_VALID___"}).filter(function(e){return"___FIELD_IS_VALID___"!==e}):[])});var t,r,a}),t=n.every(function(e){return!e.errors.length}),r=S(e),a=h(r,e.steps),i=(e.steps||[]).map(function(e){return f({},e,{isValid:g(e.name,n).every(function(e){return!e.errors.length})})}),o=(i.find(function(e){return e.name===a.name})||{}).isValid;return f({},e,{fields:n,steps:i,isValid:t,isStepValid:void 0===o||o})}},x=function(e){return function(n){var t=(n.steps||[]).find(function(n){return n.name===e});if(!t||!t.name)return n;var r=f({},n,{navigatedStepName:t.name});return w()(r)}},P=function(e){return function(n){var t=(n.steps||[])[e]||{};return x(t.name)(n)}},V={children:u.a.node,autoForm:u.a.bool,onSubmit:u.a.func,onValidSubmit:u.a.func,onInvalidSubmit:u.a.func,onValid:u.a.func,onInvalid:u.a.func,onChange:u.a.func,connect:u.a.func},N={children:"",autoForm:!1,onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){},onValid:function(){},onInvalid:function(){},onChange:function(){},connect:function(){}},T=function(e){var n=e.children,t=e.autoForm,i=e.onSubmit,o=e.onValidSubmit,u=e.onInvalidSubmit,c=e.onValid,l=e.onInvalid,s=e.onChange,d=e.connect,p=b(),m=p.state,v=p.dispatch,y=m.fields,g=m.isValid,j=m.isSubmitted,w=m.isStepValid,V=m.steps,N=Object(r.useMemo)(function(){return O(y)},[y]),T=(V||[]).length,I=S(m),C=h(I,V),k=E(I,V),A=function(e){return{name:e.name,label:e.label,isValid:e.isValid,isVisited:e.isVisited,index:e.index}};s(N),g?c():l();var D=Object(r.useCallback)(function(e){e&&e.preventDefault(),i(N),g?o(N):u(N),v(function(e){return f({},e,{isSubmitted:!0})})},[N,JSON.stringify(i)]);return Object(r.useEffect)(function(){d({submit:D,isValid:g,isSubmitted:j,values:N,currentStep:A(C),steps:(V||[]).map(A),isStepValid:w,isFirstStep:0===k,isLastStep:k===T-1,nextStep:function(){v(function(e){var n=e.steps,t=(n||[]).length,r=S(e),a=E(r,n),i=t>0?a+1:0;return P(i=i>t-1?a:i)(e)})},prevStep:function(){v(function(e){var n=e.steps,t=S(e),r=E(t,n)-1;return P(r=r<0?0:r)(e)})},goToStep:function(e){v(x(e))}})},[v,D,g,j,JSON.stringify(C),JSON.stringify(V),w,k,T]),t?a.a.createElement("form",{onSubmit:D},n):n};T.propTypes=V,T.defaultProps=N;var I=new Error("A <FormizStep> always needs a `name` attribute."),C={children:u.a.oneOfType([u.a.node,u.a.func]),name:u.a.string.isRequired,label:u.a.node,order:u.a.number},k={children:"",label:"",order:0},A=function(e){var n=e.children,t=e.name,i=e.label,o=e.order;if(!t)throw I;var u,c=b(),l=c.state,s=c.dispatch,d=S(l),m=h(d,l.steps),v=d===t;return m.name&&!m.isVisited&&v&&s((u=d,function(e){var n=e.steps.find(function(e){return e.name===u})||{},t=e.steps.filter(function(e){return e.name!==u}),r=j([].concat(p(t),[f({},n,{isVisited:!0})]));return f({},e,{steps:r})})),Object(r.useEffect)(function(){return s(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(r){var a=r.steps.find(function(n){return n.name===e})||{},i=r.steps.filter(function(n){return n.name!==e}),o=j([].concat(p(i),[f({},a,{name:e,label:t,order:n,isValid:!0,isVisited:!1})])).map(function(e,n){return f({},e,{index:n})}),u=f({},r,{steps:o,initialStepName:o.length?o[0].name:null});return w()(u)}}(t,o,i)),function(){s(function(e){return function(n){var t=n.steps.filter(function(n){return n.name!==e}),r=f({},n,{steps:j(t)});return w()(r)}}(t))}},[t,o]),"function"==typeof n?n({isActive:v}):a.a.createElement("div",{style:{display:v?null:"none",pointerEvents:v?null:"none"}},n)};A.propTypes=C,A.defaultProps=k;var D=a.a.createContext(),F=function(e){var n=e.children,t=e.name;return a.a.createElement(D.Provider,{value:t},n)};F.propTypes={children:u.a.node.isRequired,name:u.a.string},F.defaultProps={name:null};var _=new Error("A Formiz field always needs to be in a `<Formiz>` component."),L=new Error("A Formiz field always needs a `name` attribute."),M=function(e){return e||""===e?{rule:function(e){return!!e},message:!0!==e?e:""}:{}},R=function(e){return a.a.createElement(y,null,a.a.createElement(T,e))};R.propTypes=V,R.defaultProps=N;var q=function(e){var n=e.name,t=e.order,r=function(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["name","order"]);return a.a.createElement(F,{name:n},a.a.createElement(A,l({},r,{name:n,order:t})))};function J(){return(J=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function z(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}q.propTypes=C,q.defaultProps=k;var W=function(e){var n=e.as,t=e.isValid,r=z(e,["as","isValid"]);return a.a.createElement(n,J({className:"".concat(t?"border-gray-300":"border-red-600"," text-base bg-white focus:outline-none focus:shadow-outline border rounded py-1 px-2 block w-full appearance-none leading-normal")},r))};W.propTypes={as:u.a.string,isValid:u.a.bool},W.defaultProps={as:"input",isValid:!0};var X=function(e){var n=function(e){var n=e.name,t=e.defaultValue,a=e.validations,i=void 0===a?[]:a,o=e.isRequired,u=e.keepValue;if(!n)throw L;var c=b(),l=Object(r.useContext)(D);if(!c)throw _;var s=c.state,d=c.dispatch;Object(r.useEffect)(function(){return d(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.value,r=void 0===t?null:t,a=n.step,i=void 0===a?null:a,o=n.validations,u=void 0===o?[]:o;return function(n){var t=n.fields.find(function(n){return n.name===e})||{},a=n.fields.filter(function(n){return n.name!==e}),o=[].concat(p(a),[f({},t,{name:e,value:t.value||r,isActive:!0,isPristine:!0,step:i,validations:u,errors:[]})]),c=f({},n,{fields:o});return w()(c)}}(n,{value:t,step:l,validations:i})),function(){d(function(e,n){return function(t){var r=t.fields.find(function(n){return n.name===e});if(!r)return t;var a=t.fields.filter(function(n){return n.name!==e}),i=n?[].concat(p(a),[f({},r,{isActive:!1})]):a,o=f({},t,{fields:i});return w()(o)}}(n,u))}},[n,l]),Object(r.useEffect)(function(){var e=[M(o)];d(function(e,n){return function(t){var r=t.fields.find(function(n){return n.name===e});if(!r)return t;var a=t.fields.filter(function(n){return n.name!==e}),i=[].concat(p(a),[f({},r,{validations:n})]),o=f({},t,{fields:i});return w()(o)}}(n,[].concat(e,p(i))))},[n,JSON.stringify(i),JSON.stringify(o)]);var m=s.fields.find(function(e){return e.name===n}),v=m?(m.errors||[]).filter(function(e){return!!e}):[];return{value:m?m.value:null,errorMessages:v,errorMessage:v[0],isValid:!m||!m.errors.length,isPristine:!m||m.isPristine,setValue:function(e){d(function(e,n){return function(t){var r=t.fields.find(function(n){return n.name===e});if(!r)return t;var a=t.fields.filter(function(n){return n.name!==e}),i=[].concat(p(a),[f({},r,{value:n,isPristine:!1})]),o=f({},t,{fields:i});return w()(o)}}(n,e))}}}(e),t=n.value,i=n.setValue,o=n.errorMessage,u=n.isValid,c=e.label;return a.a.createElement("div",{className:"mb-4"},a.a.createElement("label",{className:"block font-bold text-sm text-gray-600 mb-1"},c),a.a.createElement(W,{type:"text",defaultValue:t,onChange:function(e){return i(e.target.value)}}),!u&&a.a.createElement("div",{className:"block text-sm text-red-600 mt-1"},o))};function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function H(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var G=function(e){var n=e.as,t=e.className,r=e.isDisabled,i=e.color,o=H(e,["as","className","isDisabled","color"]),u="primary"===i?"bg-blue-500 text-white border-none":"",c=r?"opacity-25":"hover:shadow-outline";return a.a.createElement(n,B({className:"\n        ".concat(t,"\n        ").concat("block w-full text-sm font-bold py-3 px-4 bg-transparent rounded appearance-none border-solid border-gray-300 focus:outline-none focus:shadow-outline","\n        ").concat(u,"\n        ").concat(c,"\n      "),disabled:r},o))};function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}G.propTypes={as:u.a.string,className:u.a.string,color:u.a.string,isDisabled:u.a.bool},G.defaultProps={as:"button",className:"",color:"",isDisabled:!1};var Q=function(){var e,n,t,i,o,u,c=K((t=d(Object(r.useState)({submit:function(){},isValid:!0,isSubmitted:!1,values:{},currentStep:{},steps:[],isStepValid:!0,isFirstStep:!0,isLastStep:!0,nextStep:function(){},prevStep:function(){},goToStep:function(){}}),2),i=t[0],o=t[1],e=i,n=Object(r.useRef)(),Object(r.useEffect)(function(){n.current=e},[e]),u=n.current,[i,function(e){e!==u&&o(e)}]),2),l=c[0],s=c[1];return a.a.createElement("div",null,a.a.createElement(R,{onValidSubmit:function(e){console.log(e)},connect:s},a.a.createElement("form",{onSubmit:l.submit,className:"flex flex-col border border-gray-200 rounded-lg shadow-lg overflow-hidden",style:{minHeight:"16rem"}},a.a.createElement("div",{className:"p-4 mb-4"},a.a.createElement(q,{name:"step1"},a.a.createElement(X,{name:"firstName",label:"First Name",isRequired:"First Name is required"})),a.a.createElement(q,{name:"step2"},a.a.createElement(X,{name:"lastName",label:"Last Name",isRequired:"Last Name is required"}))),a.a.createElement("div",{className:"flex items-center p-4 bg-gray-100 mt-auto"},a.a.createElement("div",{className:"mr-auto",style:{minWidth:"6rem"}},!l.isFirstStep&&a.a.createElement(G,{type:"button",onClick:l.prevStep},"Previous")),a.a.createElement("div",{className:"text-sm text-gray-500"},console.log(l.steps),"Step ",l.currentStep&&l.currentStep.index+1," of ",l.steps.length),a.a.createElement("div",{className:"ml-auto",style:{minWidth:"6rem"}},l.isLastStep?a.a.createElement(G,{color:"primary",type:"submit",isDisabled:!l.isValid},"Submit"):a.a.createElement(G,{color:"primary",type:"button",onClick:l.nextStep,isDisabled:!l.isStepValid},"Next"))))))},U=t(55);function Y(){return(Y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"frontMatter",function(){return $}),t.d(n,"rightToc",function(){return ee}),t.d(n,"default",function(){return re});var $={id:"basic-demo",title:"Basic Demo"},ee=[],ne={rightToc:ee},te="wrapper";function re(e){var n=e.components,t=Z(e,["components"]);return Object(i.b)(te,Y({},ne,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(U.c,{mdxType:"WIP"}),Object(i.b)(Q,{mdxType:"MyForm"}))}re.isMDXComponent=!0},54:function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return f});var r=t(0),a=t.n(r),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},u=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},s=function(e){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),c=o(n);return a.a.createElement(c[i+"."+t]||c[t]||l[t]||r,n?Object.assign({},u,{components:n}):u)};function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[c]="string"==typeof e?e:r,o[1]=u;for(var f=2;f<i;f++)o[f]=t[f];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(6),o=t.n(i),u=function(e){var n=e.of;return a.a.createElement("div",{className:"callout is-warning"},"Work in Progress."," ",a.a.createElement("strong",null,n)," ","is not implemented yet.")};u.propTypes={of:o.a.string},u.defaultProps={of:"This"};var c=function(e){var n=e.of;return a.a.createElement("div",{className:"callout is-warning"},"Work in Progress."," ",a.a.createElement("strong",null,"@formiz/",n)," ","is not published on NPM yet.")};c.propTypes={of:o.a.string},c.defaultProps={of:"core"};var l=function(){return a.a.createElement("div",{className:"callout is-warning"},"This section is a work in progress.")};t.d(n,"a",function(){return u}),t.d(n,"b",function(){return c}),t.d(n,"c",function(){return l})}}]);