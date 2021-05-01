import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/uicommand/': [
    {
      text: '前端常用命令',
      isGroup: true,
      children: [
        '/zh/uicommand/frist.md',
        '/zh/uicommand/cmd.md',
        '/zh/uicommand/vscode.md',
        '/zh/uicommand/nodejs.md',
        '/zh/uicommand/yarn.md',
        '/zh/uicommand/pnpm.md',
        '/zh/uicommand/vite.md',
        '/zh/uicommand/vuecli.md',
        '/zh/uicommand/typescript.md',
        '/zh/uicommand/jsonserver.md',
        '/zh/uicommand/git.md'
      ]
    }
  ],
  '/zh/common/': [
    {
      text: '前端知识认识',
      isGroup: true,
      children: [
        '/zh/common/frist.md',
       // '/zh/common/nodejs.md',
        '/zh/common/yarn.md',
        '/zh/common/npm.md',
        '/zh/common/uibuild.md',
        '/zh/common/css.md',
        '/zh/common/vuejs.md',
        '/zh/common/uiknowledge.md',
      ]
    }
  ],
  '/zh/vuepress/': [
    {
      text: 'VuepPess',
      isGroup: true,
      children: [
        '/zh/vuepress/vuepress.md'
      ]
    }
  ],
  '/zh/js/': [
    {
      text: 'ES6ToES12',
      isGroup: true,
      children: [
        //'/zh/js/ES6ToES12'
        '/zh/js/es6tonext/index.md',
        '/zh/js/es6tonext/es6.md',
        '/zh/js/es6tonext/es7.md',
        '/zh/js/es6tonext/es8.md',
        '/zh/js/es6tonext/es9.md',
        '/zh/js/es6tonext/es10.md',
        '/zh/js/es6tonext/es11.md',
        '/zh/js/es6tonext/es12.md'
      ]
    }
  ],
  '/zh/vscode': [
    {
      text: 'VS Code',
      isGroup: true,
      children: [
        //{ text: 'VS Code', link: '/zh/vscode/index.md' },
        { text: '常用快捷键', link: '/zh/vscode/vscode1.md' },
        { text: '常用快捷键总结', link: '/zh/vscode/vscode2.md' }
      ]
    }
  ],
  '/': [
    {
      text: '首页',
      isGroup: true,
      children: [
        '/zh/common/uiknowledge.md'
      ]
    }
  ]
}
