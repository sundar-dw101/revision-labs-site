import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { plugin as markdown } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    tailwindcss(),
    markdown({ mode: ['html'] })
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