
import { head, navbar, sidebar } from './configs'

//vuepress
//import { defineUserConfig } from 'vuepress'
//import type { DefaultThemeOptions, WebpackBundlerOptions } from 'vuepress'

//vuepress-vite
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

//const isProd = process.env.NODE_ENV === 'production'

const title = '前端知识库🌬';
const description = 'longfc 个人前端知识库';

//export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
module.exports = {
  title: title,
  description: description,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['style', {}, 'img { border-radius: 10px }' + 'h1.title { margin-left: 0.5em }'],
    ['meta', { name: 'author', content: 'longfc' }],
    ['meta', { name: 'keywords', content: '龙福初, longfuchu, longfc, 前端, 前端知识, web' }],

    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#cc0000' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site_name', content: title }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
  ],

  //打包发布时生效，开发环境失效
  base: '/longfc-ui-doc/',
  //dest: '/vuepress2-lfc-ui/',

  locales: {
    '/zh/': {
      lang: 'zh-CN'
    }
  },

  bundler: '@vuepress/vite',

  themeConfig: {
    logo: 'logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后更新',
    editLink: true,
    editLinkText: '编辑此页',
    docsDir: 'docs',
    // 如果你使用的不是 GitHub ，可以直接使用 URL
    repo: 'https://github.com/longfc/vuepress2-lfc-ui',
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        // page meta
        editLinkText: '编辑此页',
      },
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // other
        openInNewWindow: '在新窗口打开',
      },
    },
  },

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/plugin-nprogress',
    '@vuepress/plugin-search',
    '@vuepress/plugin-debug',

    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
          '/zh/': {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
      },
    ],
  ],

};