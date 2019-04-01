# pipeline-template-angular
> 页面可视化搭建框架的页面模板 - 基于 [angular](https://github.com/angular/angular)

## 环境
* Angular7
* webpack4

## 没有使用 Angular Cli
因为 Angular CLI7 不支持 eject, 所以无法导出其 webpack 配置并针对 pipeline 做修改.
参考文章: [How to configure Webpack 4 with Angular 7: a complete guide](https://medium.freecodecamp.org/how-to-configure-webpack-4-with-angular-7-a-complete-guide-9a23c879f471) 进行配置.

所以如果使用该工程有不合理的地方, 请适当调整.

## 用法

### 本地调试
```
$ npm run start
```

打开: http://localhost:8050

### Release

```bash
$ npm run build
```

### 生成模板
* 生成服务端渲染所需代码
```
$ npm run server
```
打包结果在`server`目录中。

* 验证服务端渲染可用

服务端渲染对代码写法是有一些要求的, 比如不允许使用 window/document 这种浏览器特有对象.
所以可以本地执行服务端渲染来验证服务端渲染是否正常.

```
$ npm run render
```

* 生成模板压缩包
```
$ npm run server
$ npm run template
```

打包结果为`pipeline-template.zip`, 提交模板时, 提交该 zip 文件.

## 新增组件

* 在 app module 中注册新增组件
pipeline-template-angular/src/app/app.module.ts

* 在 app component 中使用组件
pipeline-template-angular/src/app/app.component.ts

## TODO
* style scoped 目前无效
* style 没有抽离出来为独立文件
* angular environment 没了解和区分

## Angular 学习
* https://angular.io/guide/quickstart
* [webpack+angular](https://medium.freecodecamp.org/how-to-configure-webpack-4-with-angular-7-a-complete-guide-9a23c879f471)
* [dynamic component](https://netbasal.com/things-worth-knowing-about-dynamic-components-in-angular-166ce136b3eb)

## EOF
