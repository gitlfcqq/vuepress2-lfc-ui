# Yarn

## 全局安装

    全局安装yarn

```js
    npm i -g yarn
```

## 查看版本号

```js
    yarn -v \# 出现对应版本号即代表安装成功
```

## 依赖安装

```js
	yarn install
```

## 运行项目(其他)

```js
    yarn serve
```

## 运行项目(Vite)

```js
    yarn dev
```

## 打包项目

```js
    yarn build
```

## 清空缓存后构建

```js
    yarn build:no-cache
```

## 生成打包分析

在Mac电脑上执行完成后会自动打开界面

在Window电脑上执行完成后需要打开./build/.cache/stats.html查看

```js
    yarn report
```

## 预览打包后的内容

    \# 先打包在进行预览

```js
    yarn preview
```


    \# 直接预览本地 dist 文件目录

```js
    yarn preview:dist
```

## 生成ChangeLog

```js
    yarn log
```

## 删除缓存

```js
    yarn clean:cache
```

## 删除node_modules

window系统手动删除该目录较慢，可以使用该命令来进行删除

```js
    yarn clean:lib
```

http://localhost:3100/

## 重新安装依赖

该命令会先删除 node_modules、yarn.lock、package.lock.json后在进行依赖重新安装

速度会明显变慢

```js
    yarn reinstall
```

