!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(e,t,n){var o,r,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(S,t),d?b(e):a}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function S(){var e=y();if(w(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?b(e):(o=r=void 0,a)}function O(){var e=y(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return h(l);if(s)return f=setTimeout(S,t),b(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},O.flush=function(){return void 0===f?a:T(y())},O}function g(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=a.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),w=document.querySelector("#email"),S=document.querySelector("#message"),T=document.querySelector("#submitBut");console.log(h),console.log(w),console.log(S),console.log(T);var O=n((function(){var e=S.value;localStorage.setItem("message",e)}),500);S.addEventListener("input",O);var x=n((function(){var e=w.value;localStorage.setItem("email",e)}),500);w.addEventListener("input",x),h.addEventListener("submit",(function(e){e.preventDefault(),w.value&&S.value?(w.value="",S.value=""):alert("Заповніть усі поля")}))}();
//# sourceMappingURL=03-feedback.c8a71ed3.js.map