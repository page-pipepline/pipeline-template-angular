# pipeline-template-angular

## 环境
* Angular7
* webpack4

## 没有使用 Angular Cli
因为 Angular CLI7 不支持 eject, 所以无法导出其 webpack 配置并针对 pipeline 做修改.
所以参考文章: [How to configure Webpack 4 with Angular 7: a complete guide](https://medium.freecodecamp.org/how-to-configure-webpack-4-with-angular-7-a-complete-guide-9a23c879f471) 进行配置.

所以如果使用该工程有不合理的地方, 请适当调整.

## 本地调试
```
$ npm run start
```

打开: http://localhost:8050

## 新增组件

* 在 app module 中注册新增组件
pipeline-template-angular/src/app/app.module.ts

* 在 app component 中使用组件
pipeline-template-angular/src/app/app.component.ts

## TODO
style scoped 目前无效

## EOF
