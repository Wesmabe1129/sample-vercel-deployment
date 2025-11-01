import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      port: 3001,
    }
  },
  build: {
    outDir: 'dist/client',
    ssr: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        server: 'src/server-entry.jsx'
      },
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  ssr: {
    noExternal: ['react', 'react-dom', 'react-router-dom']
  },
  resolve: {
    alias: {
      // Add any necessary aliases here
    }
  }
});
