import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { plugin as markdown } from 'vite-plugin-markdown'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  plugins: [
    tailwindcss(),
    markdown({ mode: ['html'] }),
    injectHTML()
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        notes: './notes.html'
      },
    },
  },
})