import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Cai Zhihao',
  description: 'Personal homepage of Cai Zhihao',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: null,
    repo: 'Caizhihao0703/Caizhihao0703.github.io',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Caizhihao0703' },
    ],
    contributors: false,
    lastUpdated: false,
  }),
})
