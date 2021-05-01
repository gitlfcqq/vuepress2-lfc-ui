import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  { text: "首页", link: "/" },
  {
    text: "JavaScript",
    children: [
      { text: 'ES6ToES12', link: '/zh/js/index.md' },
      // { text: 'Babel学习', link: '/zh/js/Babel' },
    ]
  },
  {
    text: "常用",
    children: [
      { text: '前端常用命令', link: '/zh/uicommand/index.md' },
      { text: '前端知识认识', link: '/zh/common/index.md' },
      { text: 'vuepress认识', link: '/zh/vuepress/vuepress/index.md' },
    ]
  },
  {
    text: "JavaScript",
    children: [
      { text: 'ES6ToES12', link: '/zh/js/es6tonext/index.md' },
      // { text: 'Babel学习', link: '/zh/js/Babel' },
    ]
  },
  {
    text: "VUE",
    children: [
      { text: 'VUE学习', link: '/zh/vue/VUEStudy.md' },
      //{ text: 'VUE系列', link: '/zh/vue/VUE系列' },
      { text: 'VuePress认识', link: '/zh/vuepress/index.md' },
    ]
  },
  {
    text: "VS Code",
    children: [
      { text: 'VS Code', link: '/zh/vscode/index.md' }
    ]
  },
]
