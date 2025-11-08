import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  assetsInclude: ['**/*.otf'],
  plugins: [react()],
  base: command === 'serve' ? '/' : '/webcraftjsm/',
}))
