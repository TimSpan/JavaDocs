"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=l,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},i="Maven",p={unversionedId:"maven",id:"maven",title:"Maven",description:"Maven \u6982\u8ff0",source:"@site/docs/maven.md",sourceDirName:".",slug:"/maven",permalink:"/docs/maven",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maven.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MySql",permalink:"/docs/mysql"},next:{title:"Filter",permalink:"/docs/Filter"}},o={},m=[{value:"Maven \u6982\u8ff0",id:"maven-\u6982\u8ff0",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Maven \u547d\u4ee4\uff1a",id:"maven-\u547d\u4ee4",level:2},{value:"IDEA \u521b\u5efa Maven",id:"idea-\u521b\u5efa-maven",level:2},{value:"IDEA \u914d\u7f6e Maven \u73af\u5883",id:"idea-\u914d\u7f6e-maven-\u73af\u5883",level:3},{value:"IDEA \u521b\u5efa Maven \u9879\u76ee",id:"idea-\u521b\u5efa-maven-\u9879\u76ee",level:3},{value:"Maven \u5750\u6807\u8be6\u89e3",id:"maven-\u5750\u6807\u8be6\u89e3",level:3},{value:"\u4f9d\u8d56\u7ba1\u7406",id:"\u4f9d\u8d56\u7ba1\u7406",level:3},{value:"\u4f9d\u8d56\u8303\u56f4",id:"\u4f9d\u8d56\u8303\u56f4",level:3}],s={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"maven"},"Maven"),(0,l.kt)("h2",{id:"maven-\u6982\u8ff0"},"Maven \u6982\u8ff0"),(0,l.kt)("p",null,"Maven \u662f\u4e13\u95e8\u7528\u4e8e\u7ba1\u7406\u548c\u6784\u5efa Java \u9879\u76ee\u7684\u5de5\u5177\uff0c\u5b83\u7684\u4e3b\u8981\u529f\u80fd\u6709:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u4e00\u5957\u6807\u51c6\u5316\u7684\u9879\u76ee\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u4e00\u5957\u6807\u51c6\u5316\u7684\u6784\u5efa\u6d41\u7a0b (\u7f16\u8bd1\uff0c\u6d4b\u8bd5\uff0c\u6253\u5305\uff0c\u53d1\u5e03......)"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u4e00\u5957\u4f9d\u8d56\u7ba1\u7406\u673a\u5236")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0d\u540c IDE(",(0,l.kt)("inlineCode",{parentName:"p"},"eclipse"),",",(0,l.kt)("inlineCode",{parentName:"p"},"myeclipse"),",",(0,l.kt)("inlineCode",{parentName:"p"},"IDEA"),")\u4e4b\u95f4\uff0c\u9879\u76ee\u7ed3\u6784\u4e0d\u4e00\u6837\uff0c\u662f\u4e0d\u901a\u7528\u7684")),(0,l.kt)("admonition",{title:"tip",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Maven \u63d0\u4f9b\u4e86\u4e00\u5957\u6807\u51c6\u5316\u7684\u9879\u76ee\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 IDE \u4f7f\u7528 Maven \u6784\u5efa\u7684\u9879\u76ee\u7ed3\u6784\u5b8c\u5168\u4e00\u6837"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 IDE \u521b\u5efa\u7684 Maven \u9879\u76ee\u53ef\u4ee5\u901a\u7528"))),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"macOS \u81ea\u5e26 maven\uff0c\u4e0d\u9700\u8981\u5b89\u88c5"),(0,l.kt)("p",null,"\u4f46\u503c\u5f97\u4e00\u63d0\u7684\u662f\u9700\u8981\u6b63\u786e\u5b9a\u4e49 JAVA_HOME \u73af\u5883\u53d8\u91cf\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u627e Java \u5b89\u88c5\u76ee\u5f55"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"/usr/libexec/java_home\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8bbe\u7f6e JAVA_HOME \u73af\u5883\u53d8\u91cf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export JAVA_HOME=/path/to/java/installation\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u5c06"/path/to/java/installation"\u66ff\u6362\u4e3a\u4f60\u590d\u5236\u7684 Java \u5b89\u88c5\u76ee\u5f55\u8def\u5f84\u3002')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u518d\u6b21\u5c1d\u8bd5\u8fd0\u884c `Mvn --version \u547d\u4ee4\uff0c\u770b\u770b\u95ee\u9898\u662f\u5426\u89e3\u51b3\u4e86"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"brew install maven\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mvn -v\n")),(0,l.kt)("p",null,"\u6211\u7684 maven \u5b89\u88c5\u8def\u5f84\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/homebrew/Cellar/maven/3.9.4/libexec\n")),(0,l.kt)("p",null,"\u8bbf\u8fbe\u8fdb\u5165\u6b64\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/homebrew/Cellar/maven/3.9.4/libexec/conf\n")),(0,l.kt)("p",null,"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"setting.xml"),"\u6587\u4ef6\uff1a\u914d\u7f6e\u955c\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<mirrors>\n  <mirror>\n    <id>aliyun</id>\n    <name>Aliyun Maven Mirror</name>\n    <url>https://maven.aliyun.com/repository/public</url>\n    <mirrorOf>central</mirrorOf>\n  </mirror>\n</mirrors>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<mirrors>\n  <mirror>\n    <id>aliyun</id>\n    <name>Aliyun Maven Mirror</name>\n    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>\n    <mirrorOf>central</mirrorOf>\n  </mirror>\n</mirrors>\n")),(0,l.kt)("h2",{id:"maven-\u547d\u4ee4"},"Maven \u547d\u4ee4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"mvn clean\uff1a\u6e05\u7406\u9879\u76ee\uff0c\u5220\u9664\u751f\u6210\u7684\u76ee\u5f55\u548c\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn compile\uff1a\u7f16\u8bd1\u9879\u76ee\u6e90\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn test\uff1a\u8fd0\u884c\u9879\u76ee\u7684\u5355\u5143\u6d4b\u8bd5\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn package\uff1a\u5c06\u9879\u76ee\u6253\u5305\u4e3a\u53ef\u5206\u53d1\u7684\u683c\u5f0f\uff0c\u5982 JAR\u3001WAR \u6216 EAR\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn install\uff1a\u5c06\u9879\u76ee\u6784\u5efa\u7ed3\u679c\u5b89\u88c5\u5230\u672c\u5730 Maven \u4ed3\u5e93\uff0c\u4ee5\u4f9b\u5176\u4ed6\u9879\u76ee\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn deploy\uff1a\u5c06\u9879\u76ee\u6784\u5efa\u7ed3\u679c\u90e8\u7f72\u5230\u8fdc\u7a0b Maven \u4ed3\u5e93\uff0c\u4ee5\u4f9b\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn clean install\uff1a\u6e05\u7406\u9879\u76ee\u5e76\u5c06\u6784\u5efa\u7ed3\u679c\u5b89\u88c5\u5230\u672c\u5730 Maven \u4ed3\u5e93\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn clean package\uff1a\u6e05\u7406\u9879\u76ee\u5e76\u5c06\u9879\u76ee\u6253\u5305\u4e3a\u53ef\u5206\u53d1\u7684\u683c\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn clean test\uff1a\u6e05\u7406\u9879\u76ee\u5e76\u8fd0\u884c\u9879\u76ee\u7684\u5355\u5143\u6d4b\u8bd5\u3002"),(0,l.kt)("li",{parentName:"ol"},"mvn clean compile\uff1a\u6e05\u7406\u9879\u76ee\u5e76\u7f16\u8bd1\u9879\u76ee\u6e90\u4ee3\u7801\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd0\u884c mvn --help \u547d\u4ee4\u6765\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684 Maven \u547d\u4ee4\u548c\u9009\u9879\u3002")),(0,l.kt)("h2",{id:"idea-\u521b\u5efa-maven"},"IDEA \u521b\u5efa Maven"),(0,l.kt)("h3",{id:"idea-\u914d\u7f6e-maven-\u73af\u5883"},"IDEA \u914d\u7f6e Maven \u73af\u5883"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9 IDEA\u4e2d File --\x3e Settings"),(0,l.kt)("li",{parentName:"ol"},"\u641c\u7d22 maven"),(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e IDEA \u4f7f\u7528\u672c\u5730\u5b89\u88c5\u7684 Maven\uff0c\u5e76\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u8def\u5f84")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/homebrew/Cellar/maven/3.9.4/libexec\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/homebrew/Cellar/maven/3.9.4/libexec/conf/settings.xml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/homebrew/Cellar/maven/3.9.4/libexec/repository\n")),(0,l.kt)("h3",{id:"idea-\u521b\u5efa-maven-\u9879\u76ee"},"IDEA \u521b\u5efa Maven \u9879\u76ee"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6a21\u5757\uff0c\u9009\u62e9Maven\uff0c\u70b9\u51fbNext"),(0,l.kt)("li",{parentName:"ol"},"\u586b\u5199\u6a21\u5757\u540d\u79f0\uff0c\u5750\u6807\u4fe1\u606f\uff0c\u70b9\u51fbfinish\uff0c\u521b\u5efa\u5b8c\u6210"),(0,l.kt)("li",{parentName:"ol"},"\u7f16\u5199 HelloWorld\uff0c\u5e76\u8fd0\u884c")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9662).Z,width:"1964",height:"1424"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4924).Z,width:"794",height:"684"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4615).Z,width:"1208",height:"940"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3405).Z,width:"1600",height:"1544"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u9009\u62e9 zulu11 SDK")),(0,l.kt)("h3",{id:"maven-\u5750\u6807\u8be6\u89e3"},"Maven \u5750\u6807\u8be6\u89e3"),(0,l.kt)("p",null,"\u4ec0\u4e48\u662f\u5750\u6807?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Maven \u4e2d\u7684\u5750\u6807\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"\u8d44\u6e90\u7684\u552f\u4e00\u6807\u8bc6")),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5750\u6807\u6765\u5b9a\u4e49\u9879\u76ee\u6216\u5f15\u5165\u9879\u76ee\u4e2d\u9700\u8981\u7684\u4f9d\u8d56")),(0,l.kt)("p",null,"Maven \u5750\u6807\u4e3b\u8981\u7ec4\u6210"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"groupld: \u5b9a\u4e49\u5f53\u524dMaven\u9879\u76ee\u96b6\u5c5e\u7ec4\u7ec7\u540d\u79f0(\u901a\u5e38\u662f\u57df\u540d\u53cd\u5199\uff0c\u4f8b\u5982: com.timspan"),(0,l.kt)("li",{parentName:"ul"},"artifactld: \u5b9a\u4e49\u5f53\u524dMaven\u9879\u76ee\u540d\u79f0(\u901a\u5e38\u662f\u6a21\u5757\u540d\u79f0\uff0c\u4f8b\u5982 order-service\u3001goods-service)"),(0,l.kt)("li",{parentName:"ul"},"version:\u5b9a\u4e49\u5f53\u524d\u9879\u76ee\u7248\u672c\u53f7")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.timspan</groupId>\n    <artifactId>maven-demo</artifactId>\n    <version>1.0-SNAPSHOT</version>\n</project>\n')),(0,l.kt)("h3",{id:"\u4f9d\u8d56\u7ba1\u7406"},"\u4f9d\u8d56\u7ba1\u7406"),(0,l.kt)("p",null,"\u4f9d\u8d56\u76f8\u5173\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6386).Z,width:"1744",height:"730"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5654).Z,width:"1432",height:"634"})),(0,l.kt)("p",null,"\u4f7f\u7528\u5750\u6807\u5bfc\u5165 jar \u5305"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 pom.xml \u4e2d\u7f16\u5199 ",(0,l.kt)("inlineCode",{parentName:"li"},"<dependencies>")," \u6807\u7b7e"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"<dependencies>")," \u6807\u7b7e\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"<dependency>"),"\u5f15\u5165\u5750\u6807"),(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5750\u6807\u7684 groupld\uff0cartifactld\uff0cversion"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5237\u65b0\u6309\u94ae\uff0c\u4f7f\u5750\u6807\u751f\u6548")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4545).Z,width:"536",height:"278"})),(0,l.kt)("p",null,"\u5982\u4f55\u81ea\u52a8\u4fdd\u5b58\uff1f"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8573).Z,width:"1202",height:"640"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3207).Z,width:"1128",height:"618"})),(0,l.kt)("h3",{id:"\u4f9d\u8d56\u8303\u56f4"},"\u4f9d\u8d56\u8303\u56f4"),(0,l.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e\u5750\u6807\u7684\u4f9d\u8d56\u8303\u56f4(scope)\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5bf9\u5e94jar\u5305\u7684\u4f5c\u7528\u8303\u56f4: ",(0,l.kt)("inlineCode",{parentName:"p"},"\u7f16\u8bd1\u73af\u5883"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5\u73af\u5883"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.mybatis</groupId>\n            <artifactId>mybatis</artifactId>\n            <version>3.5.6</version>\n            // highlight-next-line\n            <scope>test</scope>\n        </dependency>\n")))}u.isMDXComponent=!0},8573:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_10-686bf7a91b19a90b653ee5ae261426a2.png"},3207:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_11-fa4ea67916b940741585380157f234be.png"},9662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_3-b97a97daadb3bc2909fc2101e97000ff.png"},4924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_4-9a0ee056010558830935387c76d77906.png"},4615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_5-50b3d17f928efd54be4efef06d4fabb0.png"},3405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_6-3eb26d76adbff9a6a46aaf9dc4694da8.png"},4545:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_7-2ae23d04ac8fc164337409f59a0bac96.png"},6386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_8-3cceaa5c69fa27bac65db329a76a09b6.png"},5654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven_9-fbef390725adf00489aa830cb6cf141f.png"}}]);