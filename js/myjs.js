!function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){t(1),e.exports=t(2)},function(e,o){[Element.prototype,CharacterData.prototype,DocumentType.prototype].filter(Boolean).forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode&&this.parentNode.removeChild(this)}})}))},function(e,o){var t=document.querySelector(".wrapper"),r=function(e){return document.createElement(e)},n=function(e,o){return e.appendChild(o)},a=function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=new Date;r.setDate(r.getDate()+t),document.cookie="".concat(e,"=").concat(o,"; expires=").concat(r)},i=function(e){var o=document.cookie.match("(^|;) ?".concat(e,"=([^;]*)(;|$)"));return o?o[2]:null};a("foo","bar",2);var u=i("foo");console.log("foo cookie value is =",u),a("foo","",-1);var c=i("foo");console.log("foo cookie value after removing it is =",c);var l=function(e){return JSON.parse(localStorage.getItem(e))||[]};!function(e,o){localStorage.setItem(e,JSON.stringify(o))}("users",[{name:"John Doe",age:18},{name:"Jane Doe",age:19}]);var s=l("users");console.log("users from Local Storage",s),function(e){localStorage.removeItem(e)}("users");var f=l("users");console.log("users value after removing it from LS is =",f);var d=function(e){return JSON.parse(sessionStorage.getItem(e))||[]};!function(e,o){sessionStorage.setItem(e,JSON.stringify(o))}("food",[{name:"Nuts",calories:132},{name:"Apples",calories:16},{name:"Broccoli",calories:27}]);var m=d("food");console.log("food from Session Storage",m),function(e){sessionStorage.removeItem(e)}("food");var p=d("food");console.log("food value after removing it from SS is =",p);var v=r("div");v.setAttribute("class","slide slide1"),n(t,v),v.parentNode.removeChild(v);var g=r("div");g.setAttribute("class","slide slide2"),n(t,g);var S=document.querySelectorAll(".wrapper")[1];console.log(S),n(S,g);var y=r("section");g.parentNode.insertBefore(y,g),n(y,g);(function e(o){return null===document.querySelector(o)?new Promise((function(e){return requestAnimationFrame(e)})).then((function(){return e(o)})):Promise.resolve(!0)})(".slide3").then((function(){return console.log(".slide1 has just appeared")})).catch((function(e){return console.log(e)}));var b=r("div");b.setAttribute("class","slide slide3"),n(t,b)}]);