import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Actions exposes the real owner/repository as GITHUB_REPOSITORY.
// Locally this stays at '/', while project Pages sites build under /repository/.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repository && !repository.endsWith('.github.io') ? `/${repository}/` : '/'

export default defineConfig({
  base,
  plugins: [react()]
})
