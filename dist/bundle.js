!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){if(e||t){var n=document.querySelector(e);if(n)if(t.length){var o=t.filter(function(e){if(e.match(/(#([0-9a-f]{3}){1,2}|(rgba|hsla)\(\d{1,3}%?(,\s?\d{1,3}%?){2},\s?(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?\)){2})/i))return e;console.log("%c Provided color '".concat(e,"' is not a valid color."),"color: #ff6060")});if(o.length>0&&(4==t.length||6==t.length)&&o.length===t.length){""!==n.style.position&&"unset"!==n.style.position||(n.style.position="relative"),n.style.background="rgba(0,0,0,0.1)";var r=document.createElement("DIV");r.style.position="absolute",r.style.left="0",r.style.top="0",r.style.width="100%",r.style.height="100%",r.style.zIndex="-1",r.style.pointerEvents="none",r.style.overflow="hidden",n.appendChild(r);var l=(n=r).getBoundingClientRect().width,i=4===o.length,s=i?l/2:l/3;c(n,null,null,!1,!0,o),o.forEach(function(e,t){var o=function(e,t,n){switch(e){case 0:return{left:0,top:0};case 1:return{left:n?"50%":"66.6%",top:0};case 2:return{left:0,top:"50%"};case 3:return{left:n?"50%":"66.6%",top:"50%"};case 4:return{left:t+"px",top:0};case 5:return{left:t+"px",top:"50%"}}}(t,s,i);c(n,e,o,s,null,null,t)})}else console.log("%c Please provide color array of 4 colors for QuadGradient or 6 Colors for HexaGradient of less","color: #ff6060")}else console.log("%c Please provide correct parameters.","color: #ff6060");else console.log("%c Make sure you provided element exist in dom.","color: #ff6060")}else console.log("%c No paramters supplied.","color: #ff6060");function c(e,t,n,o,r,l,i){var s=document.createElement("DIV");if(s.style.backgroundColor=r?"#000000":t,r){var c=l[0]+", "+l[l.length-1],u="linear-gradient(to bottom right, ".concat(c,")");s.style.backgroundImage=u}s.style.position="absolute",s.style.left=r?0:n.left,s.style.top=r?0:n.top,s.style.zIndex=r?"-4":i>0&&i<3?"-1":"-2",s.style.width=r?"100%":o+"px",s.style.filter=r?"brightness(0.7)":"blur("+function(e){return e.getBoundingClientRect().height>e.getBoundingClientRect().width?e.getBoundingClientRect().height/8:e.getBoundingClientRect().width/8}(e)+"px)",s.style.pointerEvents="none",s.style.transform=r?"none":"scale(1.3)",s.style.height=r?"100%":e.getBoundingClientRect().height/2+"px",s.style.borderRadius=r?e.style.borderRadius:"100%",e.appendChild(s)}}n.r(t),n.d(t,"default",function(){return o})}]);