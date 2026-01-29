// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vetealacima.com',
  integrations: [
    react({
      // Optimización de React para reducir bundle
      experimentalReactChildren: true
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Ignorar advertencias de Sanity
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
          warn(warning);
        },
        output: {
          // Estrategia de chunking más agresiva
          manualChunks: (id) => {
            // Agrupar React y React-DOM juntos (crítico)
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor-react';
            }
            // Agrupar lucide-react separado (no crítico)
            if (id.includes('node_modules/lucide-react/')) {
              return 'vendor-lucide';
            }
            // Chunk separado para jsx-runtime (reduce duplicación)
            if (id.includes('react/jsx-runtime')) {
              return 'vendor-react';
            }
            // Componentes React en chunk separado
            if (id.includes('/src/components/react/')) {
              const componentName = id.split('/').pop()?.replace('.jsx', '');
              // MobileMenu y componentes críticos juntos
              if (componentName === 'MobileMenu') {
                return 'react-mobile';
              }
              // Otros componentes en chunks individuales
              return `react-${componentName}`;
            }
          },
          // Reducir tamaño de chunks
          chunkFileNames: '_astro/[name].[hash].js',
          // Optimizar tamaño de entrada
          entryFileNames: '_astro/[name].[hash].js'
        }
      },
      cssMinify: 'lightningcss',
      minify: 'esbuild',
      target: 'es2020',
      // Reducir tamaño de chunks
      chunkSizeWarningLimit: 500,
      // Mejorar tree-shaking
      modulePreload: {
        polyfill: false
      }
    },
    css: {
      transformer: 'lightningcss'
    },
    // Optimizar tree-shaking y resolución de módulos
    resolve: {
      dedupe: ['react', 'react-dom']
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime'],
      exclude: ['lucide-react']
    }
  },
  build: {
    inlineStylesheets: 'always',
    cssCodeSplit: true
  }
});