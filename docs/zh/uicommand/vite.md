# Vite

## 安装

## 搭建项目

### Npm
```js
    npm init \@vitejs/app
```

然后按照提示操作即可！

### Yarn
```js
    yarn create \@vitejs/app
```

然后按照提示操作即可！

## 命令行接口

在安装了 Vite 的项目中，可以在 npm scripts
中使用 vite 可执行文件，或者直接使用 npx
vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：
```js
    {

        \"scripts\": {

          \"dev\": \"vite\", // 启动开发服务器

          \"build\": \"vite build\", // 为生产环境构建

          \"serve\": \"vite preview\" // 本地预览生产构建产物

        }

      }
```

可以指定额外的命令行选项，如 \--port 或 \--https。运行 npx vite
\--help 获得完整的命令行选项列表。

## 运行项目

### Npm
```js
    npm run dev
```

### Yarn
```js
    yarn dev
```

## 打包项目

### Npm
```js
    npm run build
```

### Yarn
```js
    yarn build
```

## 预览打包后内容

### Npm

### Yarn

    \# 先打包在进行预览
```js
    yarn preview
```
    \# 直接预览本地 dist 文件目录
```js
    yarn preview:dist
```
