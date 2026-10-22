import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: { sourcemap: false, license: { fileName: 'THIRD_PARTY_LICENSES.md' } },
})
