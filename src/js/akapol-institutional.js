!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){(t=>{if(!t||!t.length||!Array.isArray(t))return!1;const e=(t,{content:e=[]},n)=>{return`\n    ${t}\n    <div class="collapse" id="collapse-${n}">\n      <div class="accordion" id="accordion-${n}">\n          ${e.reduce((a=n,(t,{question:e,response:n},o)=>`\n    ${t}\n    <div class="card">\n        <div class="card-header" id="heading-${a}-${o}">\n            <h2 class="mb-0">\n                <button\n                  class="btn btn-block text-left inst__text--subtitle"\n                  type="button"\n                  data-toggle="collapse"\n                  data-target="#collapse-accordion-${a}-${o}"\n                  aria-expanded="false"\n                  aria-controls="collapse-accordion-${a}-${o}"\n                >\n                  ${e}\n                  <i class="ico-menos primary"></i>\n                  <i class="ico-mas primary"></i>\n                </button>\n            </h2>\n        </div>\n        <div\n          id="collapse-accordion-${a}-${o}"\n          class="collapse"\n          aria-labelledby="heading-${a}-${o}"\n          data-parent="#accordion-${a}">\n            <p class="card-body inst__text">${n}</p>\n        </div>\n    </div>\n  `),"")}\n      </div>\n    </div>\n  `;var a},n=(t,{title:e},n)=>`\n    ${t}\n    <button\n      class="btn btn-light faq-title__item inst__text--subtitle"\n      type="button"\n      data-toggle="collapse"\n      data-target="#collapse-${n}"\n      aria-expanded="false"\n      aria-controls="collapse-${n}"\n    >\n      ${e}\n    </button>\n  `,a=t=>{$(".faq-title__item").not(t.target).get().forEach(t=>{const e=$(t).data("target");$(t).removeClass("collapsed").attr("aria-expanded",!1),$(e).removeClass("show")})};$(document).ready(()=>{(()=>{const a=document.createElement("div"),o=document.createElement("div");a.classList.add("faq-title"),o.classList.add("faq-body"),a.innerHTML=t.reduce(n,""),o.innerHTML=t.reduce(e,""),$(".faq__content").append(a).append(o)})(),$(".faq-title__item").on("click",a),$(".faq-title").slick({nextArrow:'<button type="button" class="slick-arrow slick-next"><i class="ico-drop-4"></i></button>',prevArrow:'<button type="button" class="slick-arrow slick-prev"><i class="ico-drop-3"></i></button>',dots:!1,speed:300,variableWidth:!0})})})(window.akapolQuestions)}]);