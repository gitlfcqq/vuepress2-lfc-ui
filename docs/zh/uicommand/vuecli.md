# Vue CLI

## 系统组件

### CLI

### CLI 服务

### CLI 插件

## 安装

Vue CLI 的包名称由 vue-cli 改成了 \@vue/cli。
如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm
uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。
```js
  npm install -g \@vue/cli
```

  \# OR
```js
  yarn global add \@vue/cli
```

## 查看版本号
```js
  vue \--version
```

## 升级

  npm update -g \@vue/cli

  \# 或者
```js
  yarn global upgrade \--latest \@vue/cli
```

## 项目依赖

上面列出来的命令是用于升级全局的 Vue CLI。如需升级项目中的 Vue CLI
相关模块（以 \@vue/cli-plugin- 或 vue-cli-plugin- 开头），请在项目目录下运行 vue
upgrade：

 用法： upgrade \[options\] \[plugin-name\]

  （试用）升级 Vue CLI 服务及插件  
```js
  选项：
    -t, \--to \<version\>    升级 \<plugin-name\> 到指定的版本
    -f, \--from \<version\>  跳过本地版本检测，默认插件是从此处指定的版本升级上来
    -r, \--registry \<url\>  使用指定的 registry 地址安装依赖
    \--all                 升级所有的插件
    \--next                检查插件新版本时，包括 alpha/beta/rc 版本在内
    -h, \--help            输出帮助内容
```

## vue serve

你可以使用 vue serve 和 vue
build 命令对单个 \*.vue 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：
```js
  npm install -g \@vue/cli-service-global
```

 Usage: serve \[options\] \[entry\]

 在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器

```js
  Options:
    -o, \--open  打开浏览器
    -c, \--copy  将本地 URL 复制到剪切板
    -h, \--help  输出用法信息
```

## vue build

  Usage: build \[options\] \[entry\]

  在生产环境模式下零配置构建一个 .js 或 .vue 文件
```js
  Options:
    -t, \--target \<target\>  构建目标 (app \| lib \| wc \| wc-async, 默认值：app)
    -n, \--name \<name\>      库的名字或 Web Components 组件的名字 (默认值：入口文件名)
    -d, \--dest \<dir\>       输出目录 (默认值：dist)
    -h, \--help             输出用法信息
```

## 创建项目

### vue create
```js
  vue create hello-world
```

### 使用图形化界面

过程比较慢，但操作比较简单
```js
  vue ui
```

## 环境变量

可以在你的项目根目录中放置下列文件来指定环境变量：
```js
  .env                \# 在所有的环境中被载入
  .env.local          \# 在所有的环境中被载入，但会被 git 忽略
  .env.\[mode\]         \# 只在指定的模式中被载入
  .env.\[mode\].local   \# 只在指定的模式中被载入，但会被 git 忽略
```

一个环境文件只包含环境变量的"键=值"对：

  FOO=bar

  VUE_APP_NOT_SECRET_CODE=some_value

**警告**

不要在你的应用程序中存储任何机密信息（例如私有 API 密钥）！

环境变量会随着构建打包嵌入到输出代码，意味着任何人都有机会能够看到它。

请注意，只有 NODE_ENV，BASE_URL 和以 VUE_APP\_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到*客户端侧*的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。

想要了解解析环境文件规则的细节，请参考 [dotenv](https://github.com/motdotla/dotenv#rules)。我们也使用 [dotenv-expand](https://github.com/motdotla/dotenv-expand) 来实现变量扩展
(Vue CLI 3.5+ 支持)。例如：

## 在客户端侧代码中使用环境变量

只有以 VUE_APP\_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：

 

```js
console.log(process.env.VUE_APP_SECRET)
```


