(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),u=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||u()}},425:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return u}});var r=n(7294),o=n(9008),a=(0,r.createContext)({setTheme:function(e){},themes:[]}),u=function(){return(0,r.useContext)(a)},i=["light","dark"],c="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,o=void 0!==n&&n,u=e.enableSystem,s=void 0===u||u,m=e.enableColorScheme,v=void 0===m||m,h=e.storageKey,y=void 0===h?"theme":h,b=e.themes,g=void 0===b?["light","dark"]:b,w=e.defaultTheme,O=void 0===w?s?"system":"light":w,M=e.attribute,x=void 0===M?"data-theme":M,C=e.value,_=e.children,k=(0,r.useState)((function(){return l(y,O)})),S=k[0],E=k[1],j=(0,r.useState)((function(){return l(y)})),P=j[0],T=j[1],I=C?Object.values(C):g,L=(0,r.useCallback)((function(e){var n=p(e);T(n),"system"!==S||t||H(n,!1)}),[S,t]),A=(0,r.useRef)(L);A.current=L;var H=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==C?void 0:C[e])||e,a=o&&n?d():null;if(t)try{localStorage.setItem(y,e)}catch(e){}if("system"===e&&s){var u=p();r=(null==C?void 0:C[u])||u}if(n){var i,c=document.documentElement;"class"===x?((i=c.classList).remove.apply(i,I),c.classList.add(r)):c.setAttribute(x,r),null==a||a()}}),[]);(0,r.useEffect)((function(){var e=function(){return A.current.apply(A,[].slice.call(arguments))},t=window.matchMedia(c);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var R=(0,r.useCallback)((function(e){t?H(e,!0,!1):H(e),E(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===y&&R(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[R]),(0,r.useEffect)((function(){if(v){var e=t&&i.includes(t)?t:S&&i.includes(S)?S:"system"===S&&P||null;document.documentElement.style.setProperty("color-scheme",e)}}),[v,S,P,t]),r.createElement(a.Provider,{value:{theme:S,setTheme:R,forcedTheme:t,resolvedTheme:"system"===S?P:S,themes:s?[].concat(g,["system"]):g,systemTheme:s?P:void 0}},r.createElement(f,{forcedTheme:t,storageKey:y,attribute:x,value:C,enableSystem:s,defaultTheme:O,attrs:I}),_)},f=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,a=e.attribute,u=e.enableSystem,i=e.defaultTheme,s=e.value,f="class"===a?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",l=function(e,t){e=(null==s?void 0:s[e])||e;var n=t?e:"'"+e+"'";return"class"===a?"d.add("+n+")":"d.setAttribute('"+a+"', "+n+")"},d="system"===i;return r.createElement(o.default,null,r.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+f+l(t)+"}()"}}:u?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+f+"var e=localStorage.getItem('"+n+"');"+(d?"":l(i)+";")+'if("system"===e||(!e&&'+d+')){var t="'+c+'",m=window.matchMedia(t);m.media!==t||m.matches?'+l("dark")+":"+l("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+l(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+f+'var e=localStorage.getItem("'+n+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+l(s?"x[e]":"e",!0)+"}else{"+l(i)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),l=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},d=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},p=function(e){return e||(e=window.matchMedia(c)),e.matches?"dark":"light"}},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),u=n(1689),i=n(2441),c=n(5749),s={};function f(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=l.href,p=l.as,m=e.children,v=e.replace,h=e.shallow,y=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=a.Children.only(m),w=g&&"object"===typeof g&&g.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),M=r(O,2),x=M[0],C=M[1],_=a.default.useCallback((function(e){x(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,x]);(0,a.useEffect)((function(){var e=C&&t&&(0,u.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,C,b,t,n]);var k={ref:_,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,n,d,p,v,h,y,b)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var S="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&(0,u.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);k.href=E||(0,u.addBasePath)((0,u.addLocale)(p,S,n&&n.defaultLocale))}return a.default.cloneElement(g,k)};t.default=l},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!u&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n(7294),a=n(8391),u="undefined"!==typeof IntersectionObserver;var i=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),s=n(4287),f=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=m.length;c<s;c++){var f=m[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&u||!d.has(l)?(d.add(l),r[f]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,u.default.cloneElement(e,i)}return u.default.cloneElement(e,{key:a})}))}function h(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(s.HeadManagerContext);return u.default.createElement(i.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}h.rewind=function(){};var y=h;t.default=y},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),u=(n(1506),n(2205)),i=n(8585),c=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){u(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)}}]);