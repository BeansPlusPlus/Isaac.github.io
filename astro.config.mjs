import fs from 'fs'
import path from 'path'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import { SITE_URL } from './src/data/config'

export default defineConfig({
  integrations: [tailwind(), sitemap(), react()],
  site: 'https://Izzy.github.io',
  base: '/Izzy.github.io',

  routes: [
    {
      src: '/Izzy.github.io/Switchboard',
      dest: '/src/pages/Izzy.github.io/Switchboard.jsx', // Adjust the file extension if needed
    },
  ],

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      wrap: false,
    },
  },

  async load() {
    const markdownFile = fs.readFileSync(
      path.join(process.cwd(), 'content/posts/switchboard.md'),
      'utf8'
    )

    return { markdownFile }
  },
})
