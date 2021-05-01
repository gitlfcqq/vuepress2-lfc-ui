# VS Code

## 1.终端指令

（1）显示、退出终端

快捷键：ctrl+ \~

（2）停止终端的命令：

进入终端后，平时的退出指令有多种

在node环境，快捷键：ctrl + c

在ssh环境，输入指令：exit

在git环境，快捷键：q

## 2.vscode兼容win命令行指令

（1）显示项目内容：

windows的命令：dir

（2）清除显示的内容：

windows的命令：cls

## 3.VSCode 清除终端日志

大概流程： 先打开设置 - \> keyboard Shortcuts -\> 搜索
\"workbench.action.terminal.clear\" -\> 输入\" Ctrl K\"(可自定义) -\>
回车生效

## 4.vsCode常用终端命令

### (1)启动命令

npm/cnpm install ：加载依赖（淘宝镜像：npm install -g cnpm
\--registry=https://registry.npm.taobao.org）

```js
npm/cnpm run dev ：本地启动
```

### (2)git命令

```js
git status ：查看代码修改情况

git add .\\src\\ ：将修改添加到暂存区

git commit -m \'说明文字\' ：将更改和日志消息一起存储到新的提交中

git pull ：把gitlab上面的代码拉取下来

git push ：把提交中的代码推送到gitlab上
```

### (3)通用命令

ctrl + c \--\> y ：停止终端

clear ：清空终端