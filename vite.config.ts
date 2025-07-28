import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ outDir: 'dist', tsconfigPath: './tsconfig.build.json' }),
  ],

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SmartlifyReactLibrary',
      fileName: (format) => `smartlify-react-library.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
      },
    },
  },
});
