# NodeJS

## 查看版本号

### 出现相应npm版本即可

```js
   npm -v
```

### 出现相应node版本即可

```js
    node -v
```

## Npm

## 查看版本号

出现相应npm版本即可

```js
 npm -v
```

## 升级安装

```js
npm install npm -g
npm install npm@latest -g
```

## 使用淘宝镜像 

```js
 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 安装模块

```js
 npm install <Module Name>
```

## 全局安装

-   将安装包放在 /usr/local 下或者你 node 的安装目录。
-   可以直接在命令行里使用。


```js
npm install express -g   
```

## 本地安装

-   将安装包放在 ./node_modules 下（运行 npm
    命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm
    命令的目录下生成 node_modules 目录。

-   2. 可以通过 require() 来引入本地安装的包。

```js
    npm install express   
```

## **npm link**

npm link命令同时进行全局安装及本地安装

## 查看所有命令

```js
 npm help
```

## 查看安装信息

```js
 npm list -g
```

## 查看某个模块版本号

```js
   npm list typescript
```

## 卸载模块  
```js
    npm uninstall express
```

## 更新模块

-   使用npm update
    package可以把当前目录下node_modules子目录里边的对应模块更新至最新版本
    
-   使用npm update package
    -g可以把全局安装的对应命令行程序更新至最新版。

```js
    npm update express
```

// 更新生产环境依赖包

```js
    npm update package_name --save
```

// 更新开发环境依赖包

```js
    npm update package_name --save-dev
```

// 更新全局安装的包

```js
    npm update package_name -g
```

## 搜索模块

```js
    npm search express
```

## 清空缓存

使用npm cache
clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

```js
    npm cache clear
```

## 清空缓存后构建

```js
   npm run build:no-cache
```

## 生成打包分析

在Mac电脑上执行完成后会自动打开界面

在Window电脑上执行完成后需要打开./build/.cache/stats.html查看

```js
     npm run report
```

## 预览打包后的内容

    # 先打包在进行预览

```js
     npm run preview   
```

    # 直接预览本地 dist 文件目录

```js
     npm run preview:dist
```

## 生成ChangeLog

```js
     npm run log
```

## 删除缓存

需要先安装删除工具
```js
    npm install rimraf -g
    npm run clean:cache
```  

## 删除node_modules

需要先安装删除工具

```js
    npm install rimraf -g
```

window系统手动删除该目录较慢，可以使用该命令来进行删除

```js
    npm run clean:lib
```

## 重新安装依赖

该命令会先删除 node_modules、yarn.lock、package.lock.json后在进行依赖重新安装

速度会明显变慢

```js
  npm run reinstall
```

## 默认缓存路径
```js
    C:UsersCaffreyAppDataRoamingnpm-cache
```

## 查看npm安装目录

```js
    npm root -g
```

## 查看npm的prefix和cache路径配置信息

```js
    npm config get cache
    npm config get prefix
```

## 查看npm配置信息

```js
    npm config list
```

## 修改全局和缓存路径

1）.
先在设置路径目录下新建两个文件夹(node_global和node_cache)，直接在nodejs安装目录下

2）. 设置路径

```js
     npm config set prefix D:\ProgramFile\nodejs\node_modules\node_global\
     npm config set cache  D:\ProgramFile\nodejs\node_modules\node_cache\
```

