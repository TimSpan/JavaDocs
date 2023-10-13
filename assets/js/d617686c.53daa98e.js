"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8315],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(g,i(i({ref:r},s),{},{components:t})):n.createElement(g,i({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9923:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={},i="SpringFramework",p={unversionedId:"SpringFramework",id:"SpringFramework",title:"SpringFramework",description:"SpringFramework\u7cfb\u7edf\u67b6\u6784",source:"@site/docs/SpringFramework.md",sourceDirName:".",slug:"/SpringFramework",permalink:"/docs/SpringFramework",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SpringFramework.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SpringCloud",permalink:"/docs/SpringCloud"},next:{title:"Tomcat&Servlet",permalink:"/docs/Tomcat&Servlet"}},l={},c=[{value:"SpringFramework\u7cfb\u7edf\u67b6\u6784",id:"springframework\u7cfb\u7edf\u67b6\u6784",level:2},{value:"IoC \u548c DI",id:"ioc-\u548c-di",level:2},{value:"IoC\u5165\u95e8",id:"ioc\u5165\u95e8",level:2}],s={toc:c},u="wrapper";function m(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,n.Z)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"springframework"},"SpringFramework"),(0,a.kt)("h2",{id:"springframework\u7cfb\u7edf\u67b6\u6784"},"SpringFramework\u7cfb\u7edf\u67b6\u6784"),(0,a.kt)("p",null,"Spring Framework\u662fSpring\u751f\u6001\u5708\u4e2d\u6700\u57fa\u7840\u7684\u9879\u76ee\uff0c\u662f\u5176\u4ed6\u9879\u76ee\u7684\u6839\u57fa"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(554).Z,width:"2348",height:"1152"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6985).Z,width:"2536",height:"1282"})),(0,a.kt)("h2",{id:"ioc-\u548c-di"},"IoC \u548c DI"),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\uff1a \u4f7f\u7528\u5bf9\u8c61\u65f6\uff0c\u5728\u7a0b\u5e8f\u4e2d\u4e0d\u8981\u4e3b\u52a8\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u4ea7\u751f\u5bf9\u8c61\uff0c\u8f6c\u6362\u4e3a\u7531\u5916\u90e8\u63d0\u4f9b\u5bf9\u8c61"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IoC( Inversion of Contro1)\u63a7\u5236\u53cd\u8f6c "),"\uff1a\u5bf9\u8c61\u7684\u521b\u5efa\u63a7\u5236\u6743\u7531\u7a0b\u5e8f\u8f6c\u79fb\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"\u5916\u90e8"),"\uff0c\u8fd9\u79cd\u601d\u60f3\u79f0\u4e3a\u63a7\u5236\u53cd\u8f6c"),(0,a.kt)("p",null,"Spring\u6280\u672f\u5bf9IoC\u601d\u60f3\u8fdb\u884c\u4e86\u5b9e\u73b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spring\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5bb9\u5668\uff0c\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"IoC\u5bb9\u5668"),"\uff0c\u7528\u6765\u5145\u5f53IoC\u601d\u60f3\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5916\u90e8")),(0,a.kt)("li",{parentName:"ul"},"IoC\u5bb9\u5668\u8d1f\u8d23\u5bf9\u8c61\u7684\u521b\u5efa\u3001\u521d\u59cb\u5316\u7b49\u4e00\u7cfb\u5217\u5de5\u4f5c\uff0c\u88ab\u521b\u5efa\u6216\u88ab\u7ba1\u7406\u7684\u5bf9\u8c61\u5728IoC\u5bb9\u5668\u4e2d\u7edf\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Bean"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DI( Dependency Injection )\u4f9d\u8d56\u6ce8\u5165")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5bb9\u5668\u4e2d\u5efa\u7acb ",(0,a.kt)("inlineCode",{parentName:"li"},"bean")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"bean")," \u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u7684\u6574\u4e2a\u8fc7\u7a0b\uff0c\u79f0\u4e3a\u4f9d\u8d56\u6ce8\u5165")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8774).Z,width:"1068",height:"246"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5145\u5206\u89e3\u8026")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528IoC\u5bb9\u5668\u7ba1\u7406bean (IoC)"),(0,a.kt)("li",{parentName:"ul"},"\u5728IoC\u5bb9\u5668\u5185\u5c06\u6709\u4f9d\u8d56\u5173\u7cfb\u7684bean\u8fdb\u884c\u5173\u7cfb\u7ed1\u5b9a(DI)\u6700\u7ec8\u6548\u679c"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bf9\u8c61\u65f6\u4e0d\u4ec5\u53ef\u4ee5\u76f4\u63a5\u4eceIoC\u5bb9\u5668\u4e2d\u83b7\u53d6\uff0c\u5e76\u4e14\u83b7\u53d6\u5230\u7684bean\u5df2\u7ecf\u7ed1\u5b9a\u4e86\u6240\u6709\u7684\u4f9d\u8d56\u5173\u7cfb")),(0,a.kt)("h2",{id:"ioc\u5165\u95e8"},"IoC\u5165\u95e8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-context</artifactId>\n      <version>5.2.10.RELEASE</version>\n    </dependency>\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4472).Z,width:"1648",height:"980"})))}m.isMDXComponent=!0},554:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spring_1-911a09b208bf8fdd2833a222e10d8264.png"},6985:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spring_2-5f510072e6a8e539f74a6897087592a4.png"},8774:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spring_3-28143501dc6297070cd9ee3ddd167669.png"},4472:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spring_8-0860b95fae8fd8c1a1dafb6f9134b922.png"}}]);