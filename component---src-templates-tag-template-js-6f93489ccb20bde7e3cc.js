/*! For license information please see component---src-templates-tag-template-js-6f93489ccb20bde7e3cc.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[81],{3190:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(this&&this[l]||l);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},8710:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294),i=n(5444),r=function(e){var t=e.edges;return a.createElement("div",null," ",t.map((function(e){return a.createElement("div",{className:"Feed-module--feed__item--YZyhu",key:e.node.fields.slug},a.createElement("div",null," ",a.createElement("time",{className:"Feed-module--feed__item-meta-time--p2A34",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),a.createElement("span",{className:"Feed-module--feed__item-meta-divider--0OCcS"}),e.node.fields.categorySlug&&e.node.frontmatter.category&&a.createElement("span",null,a.createElement(i.Link,{to:e.node.fields.categorySlug,className:"Feed-module--feed__item-meta-category-link--DS2c1"},e.node.frontmatter.category))),a.createElement("h2",{className:"Feed-module--feed__item-title--OSDWe"},a.createElement(i.Link,{className:"Feed-module--feed__item-title-link--N3WJR",to:e.node.fields.slug},e.node.frontmatter.title)),a.createElement("p",{className:"Feed-module--feed__item-description--voIdC"},e.node.frontmatter.description),a.createElement(i.Link,{className:"Feed-module--feed__item-readmore--Ombid",to:e.node.fields.slug},"Read"))})))}},1240:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),i=function(e){var t=e.title,n=e.children,i=(0,a.useRef)();return(0,a.useEffect)((function(){i.current.scrollIntoView()})),a.createElement("div",{ref:i,className:"Page-module--page--JOA3M"},a.createElement("div",{className:"Page-module--page__inner--ipYUe"},t&&a.createElement("h1",{className:"Page-module--page__title--XSaPQ"},t),a.createElement("div",{className:"Page-module--page__body--KrL4y"},n)))}},9185:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a={};n.r(a),n.d(a,{pagination:function(){return s},pagination__next:function(){return g},pagination__nextLink:function(){return _},pagination__nextLinkDisable:function(){return p},pagination__prev:function(){return m},pagination__prevLink:function(){return u},pagination__prevLinkDisable:function(){return d}});var i=n(7294),r=n(3190),l=n.n(r),o=n(5444),c=n(4993),s="Pagination-module--pagination--1hy6+",m="Pagination-module--pagination__prev--wxsOC",u="Pagination-module--pagination__prev-link--lJsWV",d="Pagination-module--pagination__prev-link--disable--NR8A4",g="Pagination-module--pagination__next--Iu03w",_="Pagination-module--pagination__next-link--H3cj3",p="Pagination-module--pagination__next-link--disable--+nscH",f=l().bind(a),v=function(e){var t=e.prevPagePath,n=e.nextPagePath,a=e.hasNextPage,r=e.hasPrevPage,l=f({pagination__prevLink:!0,pagination__prevLinkDisable:!r}),u=f({pagination__nextLink:!0,pagination__nextLinkDisable:!a});return i.createElement("div",{className:s},i.createElement("div",{className:m},i.createElement(o.Link,{rel:"prev",to:r?t:"/",className:l},c.X.PREV_PAGE)),i.createElement("div",{className:g},i.createElement(o.Link,{rel:"next",to:a?n:"/",className:u},c.X.NEXT_PAGE)))}},4096:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(7294),i=n(5444),r="Author-module--author__title--wnc24",l="Author-module--author__title-link--63vTL",o=function(e){var t=e.author,n=e.isIndex;return a.createElement("div",null," ",a.createElement(i.Link,{to:"/"},a.createElement("img",{src:(0,i.withPrefix)(t.photo),className:"Author-module--author__photo--+QEbf",width:"75",height:"75",alt:t.name})),!0===n?a.createElement("h1",{className:r},a.createElement(i.Link,{className:l,to:"/"},t.name)):a.createElement("h2",{className:r},a.createElement(i.Link,{className:l,to:"/"},t.name)),a.createElement("p",{className:"Author-module--author__subtitle--aaOSY"},t.bio))},c=n(4245),s=function(e){var t=e.name,n=e.icon;return a.createElement("svg",{className:"Icon-module--icon--HX2j3",viewBox:n.viewBox},a.createElement("title",null,t),a.createElement("path",{d:n.path}))},m=function(e){var t=e.contacts;return a.createElement("div",{className:"Contacts-module--contacts--CReI-"},a.createElement("ul",{className:"Contacts-module--contacts__list--JRuo1"},Object.keys(t).map((function(e){return t[e]?a.createElement("li",{className:"Contacts-module--contacts__list-item--WG1nM",key:e},a.createElement("a",{className:"Contacts-module--contacts__list-item-link--XKEMJ",href:(0,c.K)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},a.createElement(s,{name:e,icon:(0,c.q)(e)}))):null}))))},u=function(e){var t=e.copyright;return a.createElement("div",{className:"Copyright-module--copyright--LGAkk"},t)},d=function(e){var t=e.menu;return a.createElement("nav",{className:"Menu-module--menu--ETqdK"},a.createElement("ul",{className:"Menu-module--menu__list--JrJMv"},t.map((function(e){return a.createElement("li",{className:"Menu-module--menu__list-item--QeXvO",key:e.path},a.createElement(i.Link,{to:e.path,className:"Menu-module--menu__list-item-link--e0Ol-",activeClassName:"Menu-module--menu__list-item-link--active---HlEp"},e.label))}))))},g=n(300),_=function(e){var t=e.isIndex,n=(0,g.$W)(),i=n.author,r=n.copyright,l=n.menu;return a.createElement("div",{className:"Sidebar-module--sidebar--G-oUa"},a.createElement("div",{className:"Sidebar-module--sidebar__inner--6O-7t"},a.createElement(o,{author:i,isIndex:t}),a.createElement(d,{menu:l}),a.createElement(m,{contacts:i.contacts}),a.createElement(u,{copyright:r})))}},7632:function(e,t,n){"use strict";n.r(t);var a=n(7294),i=n(5274),r=n(4096),l=n(8710),o=n(1240),c=n(9185),s=n(300);t.default=function(e){var t=e.data,n=e.pageContext,m=(0,s.$W)(),u=m.title,d=m.subtitle,g=n.tag,_=n.currentPage,p=n.prevPagePath,f=n.nextPagePath,v=n.hasPrevPage,h=n.hasNextPage,E=t.allMdx.edges,N=_>0?'All Posts tagged as "'+g+'" - Page '+_+" - "+u:'All Posts tagged as "'+g+'" - '+u;return a.createElement(i.Z,{title:N,description:d},a.createElement(r.Z,null),a.createElement(o.Z,{title:g},a.createElement(l.Z,{edges:E}),a.createElement(c.Z,{prevPagePath:p,nextPagePath:f,hasPrevPage:v,hasNextPage:h})))}}}]);