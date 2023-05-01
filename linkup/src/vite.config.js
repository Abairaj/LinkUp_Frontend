import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  // Set esbuild loader for JSX syntax
build: {
    loader: {
      '.js': 'jsx',
      '.jsx': 'jsx',
    },
  },
  // Other configuration options
  build: {
    outDir: 'build',
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
