!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){(function(e,r){
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.8+1e68dce6
     */var n;n=function(){"use strict";function t(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,s=void 0,a=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(s?s(y):_())},u="undefined"!=typeof window?window:void 0,c=u||{},f=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var t=setTimeout;return function(){return t(y,1)}}var p=new Array(1e3);function y(){for(var t=0;t<o;t+=2)(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0;o=0}var v,b,m,w,_=void 0;function g(t,e){var r=this,n=new this.constructor(E);void 0===n[A]&&F(n);var o=r._state;if(o){var i=arguments[o-1];a((function(){return R(o,n,i,r._result)}))}else B(r,n,t,e);return n}function T(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(E);return j(e,t),e}l?_=function(){return e.nextTick(y)}:f?(b=0,m=new f(y),w=document.createTextNode(""),m.observe(w,{characterData:!0}),_=function(){w.data=b=++b%2}):h?((v=new MessageChannel).port1.onmessage=y,_=function(){return v.port2.postMessage(0)}):_=void 0===u?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(y)}:d()}catch(t){return d()}}():d();var A=Math.random().toString(36).substring(2);function E(){}function x(e,r,n){r.constructor===e.constructor&&n===g&&r.constructor.resolve===T?function(t,e){1===e._state?P(t,e._result):2===e._state?S(t,e._result):B(e,void 0,(function(e){return j(t,e)}),(function(e){return S(t,e)}))}(e,r):void 0===n?P(e,r):t(n)?function(t,e,r){a((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?j(t,r):P(t,r))}),(function(e){n||(n=!0,S(t,e))}),t._label);!n&&o&&(n=!0,S(t,o))}),t)}(e,r,n):P(e,r)}function j(t,e){if(t===e)S(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=e),null===n||"object"!==o&&"function"!==o)P(t,e);else{var r=void 0;try{r=e.then}catch(e){return void S(t,e)}x(t,e,r)}var n,o}function O(t){t._onerror&&t._onerror(t._result),U(t)}function P(t,e){void 0===t._state&&(t._result=e,t._state=1,0!==t._subscribers.length&&a(U,t))}function S(t,e){void 0===t._state&&(t._state=2,t._result=e,a(O,t))}function B(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=r,o[i+2]=n,0===i&&t._state&&a(U,t)}function U(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?R(r,n,o,i):o(i);t._subscribers.length=0}}function R(e,r,n,o){var i=t(n),s=void 0,a=void 0,u=!0;if(i){try{s=n(o)}catch(t){u=!1,a=t}if(r===s)return void S(r,new TypeError("A promises callback cannot return that same promise."))}else s=o;void 0!==r._state||(i&&u?j(r,s):!1===u?S(r,a):1===e?P(r,s):2===e&&S(r,s))}var D=0;function F(t){t[A]=D++,t._state=void 0,t._result=void 0,t._subscribers=[]}var L=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(E),this.promise[A]||F(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?P(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&P(this.promise,this._result))):S(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;void 0===this._state&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===T){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===g&&void 0!==t._state)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===C){var a=new r(E);s?S(a,i):x(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;void 0===n._state&&(this._remaining--,2===t?S(n,r):this._result[e]=r),0===this._remaining&&P(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;B(t,void 0,(function(t){return r._settledAt(1,e,t)}),(function(t){return r._settledAt(2,e,t)}))},t}(),C=function(){function e(t){this[A]=D++,this._result=this._state=void 0,this._subscribers=[],E!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){j(t,e)}),(function(e){S(t,e)}))}catch(e){S(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):this.then(e,e)},e}();return C.prototype.then=g,C.all=function(t){return new L(this,t).promise},C.race=function(t){var e=this;return n(t)?new e((function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))},C.resolve=T,C.reject=function(t){var e=new this(E);return S(e,t),e},C._setScheduler=function(t){s=t},C._setAsap=function(t){a=t},C._asap=a,C.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=C},C.Promise=C,C},t.exports=n()}).call(this,r(4),r(5))},function(t,e,r){"use strict";r.r(e);r(2);var n=r(0);Object(n.promisePolyfill)();var o=document.querySelector(".content-table"),i=document.querySelector(".news"),s=fetch("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=658cf0e4f41d48a29fd424f03ea549e8"),a=function(t){return document.createElement(t)},u=function(t,e){return t.appendChild(e)},c=function(t,e){var r=a("li"),n=a("a");return n.innerText="".concat(t.title),n.href="#".concat("article-").concat(e),u(r,n),r},f=function(t,e){var r=a("article"),n=a("h3"),o=a("a"),i=a("span"),s=a("span"),c=a("p");return o.innerText="".concat(t.title),o.href="".concat(t.url),i.innerText="Published: ".concat(new Date(t.published_date).toLocaleDateString()),s.innerText="".concat(t.byline),c.innerText="".concat(t.abstract),r.id="".concat("article-").concat(e),u(n,o),u(r,n),u(r,i),u(r,s),u(r,c),r};s.then((function(t){return t.json()})).then((function(t){var e=a("ul"),r=t.results.map(c),n=t.results.map(f);r.map((function(t){return u(e,t)})),n.map((function(t){return u(i,t)})),u(o,e)})).catch((function(t){return console.error("Error requesting articles",t)}))},function(t,e,r){r(3),t.exports=self.fetch.bind(self)},function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return d})),r.d(e,"Request",(function(){return _})),r.d(e,"Response",(function(){return T})),r.d(e,"DOMException",(function(){return E})),r.d(e,"fetch",(function(){return x}));var n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,i="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function v(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&i&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var t,e,r,n=p(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=f(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[f(t)]},d.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},d.prototype.set=function(t,e){this.map[f(t)]=l(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),h(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),h(t)},o&&(d.prototype[Symbol.iterator]=d.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){var r,n,o=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function T(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},m.call(_.prototype),m.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},T.error=function(){var t=new T(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];T.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new T(null,{status:e,headers:{location:t}})};var E=self.DOMException;try{new E}catch(t){(E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function x(t,e){return new Promise((function(r,n){var o=new _(t,e);if(o.signal&&o.signal.aborted)return n(new E("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new T(o,n))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.onabort=function(){n(new E("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),o.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",a)}),s.send(void 0===o._bodyInit?null:o._bodyInit)}))}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=d,self.Request=_,self.Response=T)},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],f=!1,l=-1;function h(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=a(h);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||f||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}]);