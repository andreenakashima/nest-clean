/// <reference types="vitest" />
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './src',
    setupFiles: ['../test/setup-e2e.ts'],
  },
  plugins: [tsConfigPaths(), swc.vite()],
});
