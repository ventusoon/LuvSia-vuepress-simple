const path = require('path');

module.exports = {
  title: 'LuSia Ventus',
  description: 'Ventus` Blog',
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/圆形pink.png' }],
    ['meta', { name: 'keywords', content: 'LuSia Ventus, Ventus, vuepress-theme-simple, 博客, vue' }],
    ['meta', { name: 'author', content: 'Ventus' }],
  ],
  theme: 'simple',
  themeConfig: {
    author: 'Ventus', // will display on the page footer
    
  },
  plugins: [
    ['google-analytics-4', { gtag: 'G-MYYL1495Y2' }],
    'permalink-pinyin',
    ['sitemap', { hostname: 'https://luvsia.com' }],
    'prismjs',
  ],
}
