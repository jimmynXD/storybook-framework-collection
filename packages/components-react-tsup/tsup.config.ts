import { sassPlugin } from 'esbuild-sass-plugin'
import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['components/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react'],
  plugins: [sassPlugin()],
})
