!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return v.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),s?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function h(){var e=y();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&r?p(e):(r=o=void 0,u)}function N(){var e=y(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(v)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),N.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},N.flush=function(){return void 0===f?u:w(y())},N}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),j=document.querySelector("#email"),h=document.querySelector("#message");document.querySelector("#submitBut");if(JSON.parse(localStorage.getItem("formData"))){var w=JSON.parse(localStorage.getItem("formData"));j.value=w.email,h.value=w.message}var N=n((function(){var e={email:j.value,message:h.value};localStorage.setItem("formData",JSON.stringify(e))}),500);h.addEventListener("input",N);var T=n((function(){var e={email:j.value,message:h.value};localStorage.setItem("formData",JSON.stringify(e))}),500);j.addEventListener("input",T),O.addEventListener("submit",(function(e){if(e.preventDefault(),j.value&&h.value){var t={email:j.value,message:h.value};console.log(t),localStorage.setItem("formData",JSON.stringify(t)),j.value="",h.value=""}else alert("Заповніть усі поля")}))}();
//# sourceMappingURL=03-feedback.3f4fcb09.js.map