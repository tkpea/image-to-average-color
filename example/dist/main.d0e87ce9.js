parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S3PC":[function(require,module,exports) {
"use strict";function e(e){var t=new Image;t.src=e;var r=document.createElement("canvas"),n=r.getContext("2d");return new Promise(function(e,a){t.onload=function(){r.height=t.height,r.width=t.width,n.drawImage(t,0,0);var a=n.getImageData(0,0,t.width,t.height),i=[0,0,0,0];a.data.forEach(function(e,t){i[t%4]=i[t%4]+e});var o=i[0]/(t.width*t.height),h=i[1]/(t.width*t.height),d=i[2]/(t.width*t.height);e([o,h,d])},t.onerror=function(e){return a(e)}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageToAverageColor=e;
},{}],"3k5Z":[function(require,module,exports) {
"use strict";function t(t){var e,r,o=t[0]/255,n=t[1]/255,a=t[2]/255,c=Math.max(o,n,a),i=Math.min(o,n,a),s=(c+i)/2;if(c==i)e=r=0;else{var u=c-i;switch(r=s>.5?u/(2-c-i):u/(c+i),c){case o:e=(n-a)/u+(n<a?6:0);break;case n:e=(a-o)/u+2;break;case a:e=(o-n)/u+4}e/=6}return[e,r,s]}function e(t){var e,r,o,n=t[0],a=t[1],c=t[2];if(0==a)e=r=o=c;else{var i=function(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t},s=c<.5?c*(1+a):c+a-c*a,u=2*c-s;e=i(u,s,n+1/3),r=i(u,s,n),o=i(u,s,n-1/3)}return[255*e,255*r,255*o]}function r(t){return"#".concat(Math.ceil(t[0]).toString(16)).concat(Math.ceil(t[1]).toString(16)).concat(Math.ceil(t[2]).toString(16))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.rgbToHsl=t,exports.hslToRgb=e,exports.rgbToColorCode=r;
},{}],"HJD/":[function(require,module,exports) {
"use strict";var e=require("../.."),o=require("./js/ColorUtils"),t=document.querySelector(".file-input");t.addEventListener("change",function(t){var r=t.target.files[0],a=new FileReader;if(r.type.indexOf("image")<0)return!1;a.onload=function(t){(0,e.ImageToAverageColor)(t.target.result).then(function(e){var r,a="rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],",1.0)"),n=(0,o.rgbToHsl)(e);r=n[2]>=.5?(0,o.hslToRgb)([n[0],n[1],.2]):(0,o.hslToRgb)([n[0],n[1],.8]);var c="rgba(".concat(r[0],", ").concat(r[1],", ").concat(r[2],",1.0)"),i=document.createElement("figure"),l=document.createElement("img");l.src=t.target.result,i.append(l);var u=document.createElement("article");u.innerHTML="<h1>Lorem ipsum dolor sit amet</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";var s=document.createElement("div");s.classList.add("info"),s.innerHTML="bg.".concat((0,o.rgbToColorCode)(e).toUpperCase(),"  /  tx.").concat((0,o.rgbToColorCode)(r).toUpperCase()),s.style.backgroundColor=c,s.style.color=a,u.append(s);var d=document.createElement("section");d.classList.add("item"),d.appendChild(i),d.appendChild(u),d.style.backgroundColor=a,d.style.color=c,document.querySelector(".results").prepend(d)})},a.readAsDataURL(r)}),window.onload=function(){document.querySelectorAll(".item").forEach(function(e){var t=e.querySelector(".thumbnail img");GetAverageColorFromImage(t.src).then(function(t){var r=(0,o.rgbToHsl)(t);if(r[2]>=.5){var a=(0,o.hslToRgb)([r[0],r[1],.2]);e.style.color="rgba(".concat(a[0],", ").concat(a[1],", ").concat(a[2],",1.0)")}else{var n=(0,o.hslToRgb)([r[0],r[1],.8]);e.style.color="rgba(".concat(n[0],", ").concat(n[1],", ").concat(n[2],",1.0)")}e.style.backgroundColor="rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],",1.0)")}).catch(function(e){console.error(e)})})};
},{"../..":"S3PC","./js/ColorUtils":"3k5Z"}]},{},["HJD/"], null)
//# sourceMappingURL=main.d0e87ce9.js.map