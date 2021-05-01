# 部分前端认识

## Pnpm

<https://pnpm.io/zh/>

快速的，节省磁盘空间的包管理工具

## Vite（内核为rollup,关注开发体验）

<https://vitejs.dev/>

## Bable

<https://www.babeljs.cn/>

是一个 JavaScript 编译器

## ESlint

<https://cn.eslint.org/>

可组装的JavaScript和JSX检查工具提供一个插件化的javascript代码检测工具

## Stylelint

<https://stylelint.io/>

StyleLint 是『一个强大的、现代化的 CSS 检测工具』, 与 ESLint 类似,
是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误.

## PostCSS?

<https://www.postcss.com.cn/>

是一个用 JavaScript 工具和插件转换 CSS 代码的工具

## Material Design

英文版官方文档：<https://material.io/guidelines/>

中文翻译网站：<https://www.mdui.org/design>

中文版 Github
仓库：<https://github.com/zdhxiong/Material-Design-Chinese>

设计理念？

开发一个能在不同平台、不同设备上提供一致的体验的底层系统。遵循基本的移动设计定则，并同时支持触摸、语音、鼠标、键盘等输入方式。

## JS模块化规范

### AMD

异步模块定义规范（AMD）制定了定义模块的规则，这样模块和模块的依赖可以被异步加载。这和浏览器的异步加载模块的环境刚好适应（浏览器同步加载模块会导致性能、可用性、调试和跨域访问等问题）。

RequireJs是js模块化的工具框架，是AMD规范的具体实现。

### CommonJS（同步）

\*Node.js : 服务器端

\*Browserify : 浏览器端，也称为js的打包工具

### ES6

### CMD和SeaJs

CMD规范，同样是受到Commonjs的启发，国内（阿里）诞生了一个CMD（Common
Module
Definition）规范。该规范借鉴了Commonjs的规范与AMD规范，SeaJs是CMD规范的实现。

## UI库认识

### Vuetify

网站：<https://vuetifyjs.com/zh-Hans/>\
github： <https://github.com/vuetifyjs/vuetify>

### Element UI 

<https://element.eleme.io/#/zh-CN/resource>

### Quasar Framework 

网站： <http://www.quasarchs.com/>

github： <https://github.com/buefy/buefy>

### Bootstrap Vue

网站： <https://bootstrap-vue.js.org/>

github：<https://github.com/bootstrap-vue/bootstrap-vue>

### iView 

网站： <https://www.iviewui.com/>

github： <https://github.com/iview/iview>

### Element3

<https://element3-ui.com/#/component/installation>

### uni-app官网

<https://uniapp.dcloud.io/>

### Ant Design of Vue3

<https://2x.antdv.com/docs/vue/introduce-cn/>

### Ant Design of Vue2

<https://www.antdv.com/docs/vue/introduce-cn/>

## 规范化

### clean-code-javascript

<https://github.com/ryanmcdermott/clean-code-javascript>

### JavaScript 风格指南

<https://github.com/alivebao/clean-code-js>

### JavaScript 风格指南

<https://github.com/lin-123/javascript>

规范化其实是工程化中很重要的一个部分
目录结构的制定
编码规范
前后端接口规范
文档规范
组件管理
Git分支管理
Commit描述规范
定期CodeReview
视觉图标规范
自动化
图标合并
持续集成
自动化构建
自动化部署
自动化测试
自动tree shaking

## TypeScript

<https://www.tslang.cn/>

<https://www.runoob.com/typescript/ts-tutorial.html>

<https://github.com/microsoft/TypeScript>

<https://github.com/zhongsp/TypeScript>

git clone <https://github.com/zhongsp/TypeScript.git>

## Electron

<https://www.electronjs.org/docs>

> Electron 可以让你使用纯 JavaScript 调用丰富的原生 APIs
> 来创造桌面应用。你可以把它看作是专注于桌面应用而不是 web
> 服务器的，io.js 的一个变体。
>
> 这不意味着 Electron 是绑定了 GUI 库的 JavaScript。相反，Electron 使用
> web 页面作为它的 GUI，所以你能把它看作成一个被 JavaScript
> 控制的，精简版的 Chromium 浏览器。

## ES6ToES12

参考\<\<ES6ToES12学习.docx\>\>

## Jsonserver

<https://github.com/typicode/json-server>

<https://www.npmjs.com/package/json-server>

参考\<\< JSON-Server学习.docx\>\>

## Axios

易用、简洁且高效的http库

<http://www.axios-js.com/>

## Vuepress

<https://vuepress.vuejs.org/zh/>

VuePress
由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由
Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件
API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)，它的诞生初衷是为了支持
Vue 及其子项目的文档需求。^\[1\]^

除此之外，如果你是 Markdown 狂热粉，由于 VuePress
允许你在 Markdown 中书写 Vue
，从而大大提升了 Markdown 语法的拓展性；如果你喜欢"快"，你会发现，[自动生成的
Service
Worker](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html) 和
prefetch 让每一个 VuePress
站点的访问速度都出奇地快；如果你喜欢"开箱即用"，VuePress
的响应式布局、可选的主页、[实用的标题搜索](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2)、可配置的 [导航栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F) 和 [侧边栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F) 等，都是你无需开发就能获得的体验。

想了解更多，请移步 VuePress
官网：[https://vuepress.vuejs.org](https://vuepress.vuejs.org/)。

## Markdown

是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。

<http://markdown.p2hp.com/getting-started/>

<https://www.runoob.com/markdown/md-tutorial.html>

## ui-app

<https://uniapp.dcloud.io/>

## JS算法

<https://github.com/trekhleb/javascript-algorithms>

## JS系列

## CSS系列

<https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU1OTgxNDQ1Nw==&action=getalbum&album_id=1802113034039918593&scene=173&from_msgid=2247486618&from_itemidx=1&count=3&nolastread=1#wechat_redirect>

## GitHub

<https://github.com/github>

<https://github.com/login>

<https://docs.github.com/cn>

<https://www.githubs.cn/>
