/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup',
    reporters: 'verbose',
    resolveSnapshotPath(path, extension) {
      return path.replace(/\.test\.([tj]sx?)/, `.test.$1${extension}`)
    },
  },
})
