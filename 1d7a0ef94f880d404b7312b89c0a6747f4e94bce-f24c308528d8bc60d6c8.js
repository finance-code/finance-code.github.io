(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[307],{1240:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),u=function(e){var t=e.title,n=e.children,u=(0,r.useRef)();return(0,r.useEffect)((function(){u.current.scrollIntoView()})),r.createElement("div",{ref:u,className:"Page-module--page--JOA3M"},r.createElement("div",{className:"Page-module--page__inner--ipYUe"},t&&r.createElement("h1",{className:"Page-module--page__title--XSaPQ"},t),r.createElement("div",{className:"Page-module--page__body--KrL4y"},n)))}},4096:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(7294),u=n(5444),a="Author-module--author__title--wnc24",o="Author-module--author__title-link--63vTL",c=function(e){var t=e.author,n=e.isIndex;return r.createElement("div",null," ",r.createElement(u.Link,{to:"/"},r.createElement("img",{src:(0,u.withPrefix)(t.photo),className:"Author-module--author__photo--+QEbf",width:"75",height:"75",alt:t.name})),!0===n?r.createElement("h1",{className:a},r.createElement(u.Link,{className:o,to:"/"},t.name)):r.createElement("h2",{className:a},r.createElement(u.Link,{className:o,to:"/"},t.name)),r.createElement("p",{className:"Author-module--author__subtitle--aaOSY"},t.bio))},i=n(4245),l=function(e){var t=e.name,n=e.icon;return r.createElement("svg",{className:"Icon-module--icon--HX2j3",viewBox:n.viewBox},r.createElement("title",null,t),r.createElement("path",{d:n.path}))},f=function(e){var t=e.contacts;return r.createElement("div",{className:"Contacts-module--contacts--CReI-"},r.createElement("ul",{className:"Contacts-module--contacts__list--JRuo1"},Object.keys(t).map((function(e){return t[e]?r.createElement("li",{className:"Contacts-module--contacts__list-item--WG1nM",key:e},r.createElement("a",{className:"Contacts-module--contacts__list-item-link--XKEMJ",href:(0,i.K)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.createElement(l,{name:e,icon:(0,i.q)(e)}))):null}))))},s=function(e){var t=e.copyright;return r.createElement("div",{className:"Copyright-module--copyright--LGAkk"},t)},m=function(e){var t=e.menu;return r.createElement("nav",{className:"Menu-module--menu--ETqdK"},r.createElement("ul",{className:"Menu-module--menu__list--JrJMv"},t.map((function(e){return r.createElement("li",{className:"Menu-module--menu__list-item--QeXvO",key:e.path},r.createElement(u.Link,{to:e.path,className:"Menu-module--menu__list-item-link--e0Ol-",activeClassName:"Menu-module--menu__list-item-link--active---HlEp"},e.label))}))))},d=n(300),x=function(e){var t=e.isIndex,n=(0,d.$W)(),u=n.author,a=n.copyright,o=n.menu;return r.createElement("div",{className:"Sidebar-module--sidebar--G-oUa"},r.createElement("div",{className:"Sidebar-module--sidebar__inner--6O-7t"},r.createElement(c,{author:u,isIndex:t}),r.createElement(m,{menu:o}),r.createElement(f,{contacts:u.contacts}),r.createElement(s,{copyright:a})))}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,u=Array(r);++n<r;)u[n]=t(e[n],n,e);return u}},2663:function(e){e.exports=function(e,t,n,r){var u=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++u]);++u<a;)n=t(n,e[u],u,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),u=n(9607),a=n(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?u(e):a(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),u=n(9932),a=n(1469),o=n(3448),c=r?r.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return u(t,e)+"";if(o(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),u=n(3816),a=n(8748),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(a(u(t).replace(o,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),u=Object.prototype,a=u.hasOwnProperty,o=u.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(i){}var u=o.call(e);return r&&(t?e[c]=n:delete e[c]),u}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),u="object"==typeof self&&self&&self.Object===Object&&self,a=r||u||Function("return this")();e.exports=a},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+u+"]",o="\\d+",c="[\\u2700-\\u27bf]",i="["+n+"]",l="[^\\ud800-\\udfff"+u+o+t+n+r+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+r+"]",d="(?:"+i+"|"+l+")",x="(?:"+m+"|"+l+")",p="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",E="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",h=g+E+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,s].join("|")+")"+g+E+")*"),b="(?:"+[c,f,s].join("|")+")"+h,_=RegExp([m+"?"+i+"+"+p+"(?="+[a,m,"$"].join("|")+")",x+"+"+v+"(?="+[a,m+d,"$"].join("|")+")",m+"?"+d+"+"+p,m+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,b].join("|"),"g");e.exports=function(e){return e.match(_)||[]}},3816:function(e,t,n){var r=n(9389),u=n(9833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(a,r).replace(o,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),u=n(7005);e.exports=function(e){return"symbol"==typeof e||u(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),u=n(3157),a=n(9833),o=n(2757);e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?u(e)?o(e):r(e):e.match(t)||[]}}}]);