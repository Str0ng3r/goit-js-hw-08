!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return v.Date.now()};function p(e,t,n){var o,i,a,u,l,f,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,l=setTimeout(h,t),s?p(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=a}function h(){var e=y();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return v?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,d&&o?p(e):(o=i=void 0,u)}function N(){var e=y(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return O(f);if(v)return l=setTimeout(h,t),p(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),N.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},N.flush=function(){return void 0===l?u:w(y())},N}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),j=document.querySelector("#email"),h=document.querySelector("#message"),w=document.querySelector("#submitBut");if(console.log(O),console.log(j),console.log(h),console.log(w),JSON.parse(localStorage.getItem("formData"))){var N=JSON.parse(localStorage.getItem("formData"));console.log(N),j.value=N.email,h.value=N.message}var T=n((function(){var e={email:j.value,message:h.value};localStorage.setItem("formData",JSON.stringify(e))}),500);h.addEventListener("input",T);var D=n((function(){var e={email:j.value,message:h.value};localStorage.setItem("formData",JSON.stringify(e))}),500);j.addEventListener("input",D),O.addEventListener("submit",(function(e){if(e.preventDefault(),j.value&&h.value){var t={email:j.value,message:h.value};localStorage.setItem("formData",JSON.stringify(t)),j.value="",h.value=""}else alert("Заповніть усі поля")}))}();
//# sourceMappingURL=03-feedback.fa929efc.js.map