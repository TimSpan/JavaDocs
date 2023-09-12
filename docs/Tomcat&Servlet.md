# Tomcat&Servlet

## Tomcat安装使用

https://tomcat.apache.org/

```shell
brew install tomcat
```

启动Tomcat：

```shell
brew services start tomcat
```

```http
http://localhost:8080
```

目录

```
/opt/homebrew/etc/tomcat
```

停止Tomcat：

```
brew services stop tomcat
```

重启Tomcat：

```
brew services restart tomcat
```

查看Tomcat状态：

```
brew services list
```



## 创建Maven Web项目

```
project-name
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── mywebapp
│   │   │               ├── controller
│   │   │               ├── model
│   │   │               ├── service
│   │   │               └── util
│   │   ├── resources
│   │   │   └── application.properties
│   │   └── webapp
│   │       ├── WEB-INF
│   │       │   ├── lib
│   │       │   ├── classes
│   │       │   └── web.xml
│   │       └── index.jsp
│   └── test
│       ├── java
│       │   └── com
│       │       └── example
│       │           └── mywebapp
│       │               └── controller
│       └── resources
├── target
├── pom.xml
└── README.md

```

- `src/main/java`：存放主要的Java源代码。
- `src/main/resources`：存放主要的资源文件，如配置文件。
- `src/main/webapp`：存放Web应用程序的静态资源和Web配置文件。
- `src/test/java`：存放测试用例的Java源代码。
- `src/test/resources`：存放测试用例的资源文件。
- `target`：存放构建生成的输出文件和目录。
- `pom.xml`：Maven项目的配置文件，包含项目的依赖和构建配置。
- `README.md`：项目的说明文档。

### 使用骨架创建

![](./images/tomcat_1.png)

![](./images/tomcat_2.png)

> 等待下载完之后项目就创建好了





## IDEA使用Tomcat

### 方式一：集成本地Tomcat

安装路径

```
/opt/homebrew/Cellar/tomcat/10.1.13/libexec
```



![](./images/tomcat_3.png)

![](./images/tomcat_4.png)

![](./images/tomcat_5.png)

![](./images/tomcat_6.png)

![](./images/tomcat_7.png)

:::Tip

`注意这里的地址`

此时要访问 webapp 下的 a.html 

`http://localhost:8080/test/a.html`

:::



![](./images/tomcat_8.png)

![](./images/tomcat_9.png)







### 方式二：使用Tomcat Maven插件

```xml
    <plugins>
      <plugin>
        <groupId>org.apache.tomcat.maven</groupId>
        <artifactId>tomcat7-maven-plugin</artifactId>
        <version>2.2</version>
      </plugin>
    </plugins>
```



![](./images/tomcat_12.png)

![](./images/tomcat_11.png)



## Servlet快速入门

1. 创建 web项目，导入 Servlet依赖坐标

   - ```xml
         <dependency>
           <groupId>javax.servlet</groupId>
           <artifactId>javax.servlet-api</artifactId>
           <version>3.1.0</version>
           <scope>provided</scope>
         </dependency>
     ```

     

2. 创建: 定义一个类，实现 Servlet接口，并重写接口中所有方法，并在 service方法中输入一句话

   - ```js
     package com.TimSpan;
     
     import javax.servlet.*;
     import java.io.IOException;
     // highlight-next-line
     @WebServlet("/demo1")
     public class ServletDemo1 implements Servlet {
         public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
             System.out.println("hello Servlet");
         }
     
         public void init(ServletConfig servletConfig) throws ServletException {
     
         }
     
         public ServletConfig getServletConfig() {
             return null;
         }
     
     
         public String getServletInfo() {
             return null;
         }
     
         public void destroy() {
     
         }
     }
     
     ```

3. 配置:在类上使用@WebServlet 注解，配置该 Servlet的访问路径

   - ```js
     @WebServlet("/demo1")
     ```

4. 访问:启动 Tomcat，浏览器输入URL 访问该Servlet



## Servlet执行流程

1. Servlet 由谁创建? Servlet方法由谁调用?
   - Servlet由web服务器创建，Servlet方法由web服务器调用
2. 服务器怎么知道servlet中一定有service方法?
   - 因为我们自定义的servlet，必须实现Servlet接口并复写其方法，而Servlet接口中有service方法



## Servlet生命周期

Servlet运行在Servlet容器(web服务器)中，其生命周期由容器来管理，分为4个阶段：

1. `加载和实例化`：默认情况下，当Servlet第一欠被访问时，由容器创建Servlet对象
2.  `初始化`：在servlet实例化之后，容器将调用servlet的`init()`方法初始化这个对象，完成一些如加载配置文件、创建连接等初始化的工作。该方法`只调用一次`
3. `请求处理`：每次请求Servlet时，Servlet容器会调用Servlet的`service()`方法对请求进行处理
4. `服务终止`：当需要释放内存或者容器关闭时，容器就会调用Servlet实例的destroy()方法完成资源的释放。在destroy0)方法调用之后，容器会释放这个Servlet实例，该实例随后会被Java的垃圾收集器所回收

```js
@WebServlet(urlPatterns = "/demo",loadOnStartup = 1)
```

1. 负整数：第一次被访问时创建Servlet对象
2. 0 或正整数: 服务器启动时创建Servlet对象，数字越小优先级越高





## Servlet方法介绍

初始化方法，在Servlet被创建时执行，只执行一次

```js
void init(ServletConfig config)
```

提供服务方法，每次Servlet被访问，都会调用该方法

```js
void service(ServletRequest req, ServletResponse res)
```

销毁方法，当Servlet被销毁时，调用该方法。在内存释放或服务器关闭时销毁Servlet

```js
void destroy()
```

获取ServletConfig对象

```js
ServletConfig getServletConfig()
```

获取Servlet信息

```js
String getServletInfo()
```

## Servlet体系结构



## urlPattern配置











