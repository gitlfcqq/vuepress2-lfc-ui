# TypeScript

## 安装
```js
npm install typescript -g
```

## 卸载
```js
npm uninstall typescript -g
```

## 设置环境变量

如果安装后不能正常使用，需要设置系统的环境变量；

找到typescript的tsc.cmd的目录，将其所在的目录路径添加到path的环境变量中；

D:\\ProgramFile\\nodejs\\node_modules\\node_global

## 查看版本号
```js
tsc -V
```

## 初始化tsconfig.json
```js
npx tsc \--init
```

## vscode 自动编译

1). 生成配置文件tsconfig.json
```js
    tsc \--init
```

2). 修改tsconfig.json配置

    \"outDir\": \"./js\",

    \"strict\": false,

3). 启动监视任务:

    终端 -\> 运行任务 -\> 监视tsconfig.json

## 使用 webpack 打包 TS
```js
yarn add -D typescript
yarn add -D webpack webpack-cli
yarn add -D webpack-dev-server
yarn add -D html-webpack-plugin clean-webpack-plugin
yarn add -D ts-loader
yarn add -D cross-env
```
