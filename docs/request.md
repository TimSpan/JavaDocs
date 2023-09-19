

# Request和Response对象

## Request 继承体系

```js
ServletRequest         -------------->    Java提供的请求对象根接口    
HttpServletRequest     -------------->    Java提供的对Http协议封装的请求对象接
RequestFacade          -------------->    Tomcat 定义的实现类
```

## Request 获取请求行数据

`GET /request-demo/req1?username=zhangsan HTTP/1.1`

- String `getMethod` ():获取请求方式: GET
- String `getContextPath` (): 获取虚拟目录(项目访问路径): /request-demo
- StringBuffer `getRequestURL` (): 获取URL(统一资源定位符): http://localhost:8080/request-demo/req1
- String `getRequestURI` ():获取URI(统一资源标识符): /request-demo/req1
- String `getQueryString` (): 获取请求参数(GE方式): username=zhangsan&password=123

```js
package com.TimSpan;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/req1")
public class requestDemo extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取请求方式
        String method = req.getMethod();
        System.out.println(method);
        //获取虚拟目录
        String contextPath = req.getContextPath();
        System.out.println(contextPath);

        //获取 URL
        StringBuffer requestURL = req.getRequestURL();
        System.out.println(requestURL);
        //获取 URI
        String requestURI = req.getRequestURI();
        System.out.println(requestURI);
        //获取请求参数
        String queryString = req.getQueryString();
        System.out.println(queryString);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doPost(req, resp);
    }
}

```

访问------>http://localhost:8080/tomcat-demo/req1?username=zhangsan&password=123

控制台输出：

```
GET
/tomcat-demo
http://localhost:8080/tomcat-demo/req1
/tomcat-demo/req1
username=zhangsan&password=123
```

### 请求头/请求体

请求头:User-Agent: Mozilla/5.0 Chrome/91.0.4472.106
String `getHeader`(String name): 根据请求头名称，获取值

请求体username=superbaby&password=123
`ServletInputStream getInputStream()`: 获取字节输入流

`BufferedReader getReader()`: 获取字符输入流

```html
<form action="/tomcat-demo/req1" method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit">
</form>
```



```js
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doPost(req, resp);
        BufferedReader reader = req.getReader();
        String line = reader.readLine();
        System.out.println(line); //输出 username=ceshi&password=123456

    }
```



![](./images/req_1.png)

## Request通用方式获取请求参数





## 解决中文乱码问题POST

POST:

```js
req.setCharacterEncoding("UTF_8");
```



## 解决中文乱码问题GET

## 请求转发

请求转发(forward): 一种在服务器内部的资源跳转方式

![](./images/req_2.png)

```js
req.getRequestDispatcher("资源B路径").forward(req,resp);
```



## Response













