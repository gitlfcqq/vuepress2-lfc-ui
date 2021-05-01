

# pnpm

## 介绍

### 节约磁盘空间并提升安装速度[\#](https://pnpm.io/zh/motivation#%E8%8A%82%E7%BA%A6%E7%A3%81%E7%9B%98%E7%A9%BA%E9%97%B4%E5%B9%B6%E6%8F%90%E5%8D%87%E5%AE%89%E8%A3%85%E9%80%9F%E5%BA%A6)

在使用 npm 或 Yarn
时，如果你有100个项目使用了依赖（dependency），你就会在硬盘上存储100个依赖的副本。
在使用 pnpm 时，依赖会被存储在内容可寻址的地方，所以：

1.  如果你依赖于不同版本的依赖（dependency），那么只需将差异的文件添加到存储中心。
    例如，如果它有100个文件，而新版本只改变了其中1个文件。那么 pnpm
    update 只会向存储中心添加1个新文件，不会仅仅因为单一的改变而克隆整个依赖。

2.  所有文件都会存储在硬盘上的同一位置。
    当多个包（package）被安装时，所有文件都会从同一位置创建硬链接，不会占用额外的磁盘空间。
    这允许你跨项目地共享同一版本的依赖。

最终你节省了大量与项目和依赖成比例的硬盘空间，并且拥有更快的安装速度！

### 创建非扁平化的 node_modules 文件夹
当使用 pnpm 安装依赖时，所有的包会被提升到模块的根目录。
因此，源码可以访问未被添加进当前项目的依赖。

pnpm 使用软链的方式将项目的直接依赖添加进模块文件夹的根目录。 If you\'d
like more details about the unique node_modules structure that pnpm
creates and why it works fine with the Node.js ecosystem, read:

-   [扁平的 node_modules
    不是唯一的方法](https://pnpm.io/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way)

-   [基于符号链接的 node_modules
    结构](https://pnpm.io/zh/symlinked-node-modules-structure)

## 安装

## npm
```js
npm install -g pnpm
```

## npx
```js
npx pnpm add -g pnpm
```

## 升级

一旦你安装了 pnpm，就无需再使用其他软件包管理器进行升级。 你可以使用
pnpm 升级自己，像这样：
```js
pnpm add -g pnpm
```

## pnpm CLI

与 npm 不同的是，pnpm 会校验所有的参数。 比如，pnpm install
\--foo 会执行失败，因为 \--foo 不是 pnpm install 的有效参数。

但是，某些依赖关系可能使用 npm_config\_ 环境变量，其中 从 CLI
选项中填充。 在这种情况下，你有以下选择：

1.  设置明确的环境变量：npm_config_foo=true pnpm install

2.  force the unknown option with \--config.: pnpm install \--config.foo

  **npm command**   **pnpm equivalent**
----------------- -------------------------------------------------------
  npm install       [[pnpm install]{.ul}](https://pnpm.io/zh/cli/install)
  npm i \<pkg\>     \[pnpm add \<pkg\>\]
  npm run \<cmd\>   \[pnpm \<cmd\>\]

## pnpx CLI

pnpx (PNPm eXecute)
是一个命令行工具，他从源获取包，但不将它安装为依赖项，热加载它，并运行任何它暴露的默认二进制命令。

例如，若要在任何地方使用 Create-react-app 来初始化一个 react
应用，而不需要 来在另一个项目下安装它，您可以运行：

npm 有一个很棒的包运行器叫做 [npx](https://www.npmjs.com/package/npx)。
pnpm 通过 pnpx 命令提供相同的工具。
唯一的不同是 pnpx 使用 pnpm 安装软件包。

## 配置

pnpm 使用 [npm 的配置](https://docs.npmjs.com/misc/config) 格式。
因此，您设置配置的方式应该与 npm 相同。 例如，

pnpm config set store-dir /path/to/.pnpm-store

如果没有配置 store ，那么pnpm 将自动在同一磁盘上创建 store。 如果您需要
pnpm
跨越多个硬盘或文件系统，请阅读 [常见问题](https://pnpm.io/zh/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems)

此外，pnpm 使用与 npm 相同的配置进行安装。 如果您有一个私有源并且 npm
被配置使用它， pnpm 应该不需要额外的配置也能够授权请求。

除了这些选项外， pnpm
也允许您使用所有标记为作选项的参数(例如 \--filter 或 \--workspace
concurrency) ：

## 常用命令

### pnpm add \<pkg\>

安装软件包及其依赖的任何软件包。
默认情况下，任何新软件包都安装为生产依赖项。

  **Command**           **Meaning**
--------------------- ------------------------------
  pnpm add sax          Save to dependencies
  pnpm add -D sax       Save to devDependencies
  pnpm add -O sax       Save to optionalDependencies
  pnpm add sax\@next    Install from the next tag
  pnpm add sax\@3.0.0   Specify version 3.0.0

### pnpm install

  **Command**                 **Meaning**
--------------------------- -------------------------------------
  pnpm i \--offline           Install offline from the store only
  pnpm i \--frozen-lockfile   pnpm-lock.yaml is not updated
  pnpm i \--lockfile-only     Only pnpm-lock.yaml is updated

### pnpm update

  **Command**              **Meaning**
------------------------ ------------------------------------------------------------------------
  pnpm up                  Updates all dependencies, adhering to ranges specified in package.json
  pnpm up \--latest        Updates all dependencies, ignoring ranges specified in package.json
  pnpm up foo\@2           Updates foo to the latest version on v2
  pnpm up \"\@babel/\*\"   Updates all dependencies under the \@babel scope

### pnpm remove

### pnpm prune

删除不必要的软件包

### pnpm audit

检查已安装软件包的已知安全问题。

### pnpm list

此命令将以树状结构输出所有已安装软件包的版本及其依赖项。

### pnpm outdated

检查过时的软件包。
通过提供参数（支持模式），可以将检查限制为已安装软件包的子集。

### pnpm run

运行在软件包清单文件中定义的脚本。

### pnpm test

运行在其脚本对象的程序包的test属性中指定的任意命令。

该属性的预期用途是指定用于运行程序的单元测试或集成测试的命令。

### pnpm start

运行在其脚本对象的包的start属性中指定的任意命令。
如果未在scripts对象上指定start属性，它将默认尝试运行节点server.js，如果都不存在则失败。

该属性的预期用途是指定用于启动程序的命令。