webpackJsonp([1],{103:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var o=t(137),r=u(o);n["default"]=function(e,n,t){return n in e?(0,r["default"])(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},104:[749,77,15],142:[752,62,15],143:[753,42],144:[754,15],154:[758,104,15,62,18],216:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:l,payload:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments[1],t=s[n.type];return t?t(e,n):e}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.doubleAsync=n.COUNTER_INCREMENT=void 0;var c=t(103),i=u(c),a=t(336),f=u(a);n.increment=o,n["default"]=r;var l=n.COUNTER_INCREMENT="COUNTER_INCREMENT",d=n.doubleAsync=function(){return function(e,n){return new f["default"](function(t){setTimeout(function(){e(o(n().counter)),t()},200)})}},s=(n.actions={increment:o,doubleAsync:d},(0,i["default"])({},l,function(e,n){return e+n.payload})),_=0},234:[757,78,358,225,140,28,77],316:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var o=t(59),r=u(o),c=t(8),i=(u(c),t(568)),a=u(i),f=n.Counter=function(e){return(0,r["default"])("div",{},void 0,(0,r["default"])("h2",{className:a["default"].counterContainer},void 0,"Counter:"," ",(0,r["default"])("span",{className:a["default"]["counter--green"]},void 0,e.counter)),(0,r["default"])("button",{className:"btn btn-default",onClick:e.increment},void 0,"Increment")," ",(0,r["default"])("button",{className:"btn btn-default",onClick:e.doubleAsync},void 0,"Double (Async)"))};n["default"]=f},317:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(316),r=u(o);n["default"]=r["default"]},325:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(124),r=t(216),c=t(317),i=u(c),a={increment:function(){return(0,r.increment)(1)},doubleAsync:r.doubleAsync},f=function(e){return{counter:e.counter}};n["default"]=(0,o.connect)(f,a)(i["default"])},336:function(e,n,t){e.exports={"default":t(348),__esModule:!0}},348:function(e,n,t){t(235),t(155),t(237),t(382),e.exports=t(18).Promise},353:64,357:[751,78,143,142,42,150,154],358:114,364:[755,28,234,77],369:function(e,n,t){var u=t(61);e.exports=function(e,n,t){for(var o in n)t&&e[o]?e[o]=n[o]:u(e,o,n[o]);return e}},371:function(e,n,t){"use strict";var u=t(28),o=t(18),r=t(44),c=t(51),i=t(15)("species");e.exports=function(e){var n="function"==typeof o[e]?o[e]:u[e];c&&n&&!n[i]&&r.f(n,i,{configurable:!0,get:function(){return this}})}},372:[756,42,138,15],382:[760,105,28,78,104,43,80,138,353,357,372,234,364,15,369,107,371,18,144],568:function(e,n){e.exports={counter:"Counter__counter___8Lvk1","counter--green":"Counter__counter--green___30k-8 Counter__counter___8Lvk1",counterContainer:"Counter__counterContainer___1Ev3K"}}});