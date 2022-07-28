// https://vitejs.dev/config/
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const isDemo = process.env.CONFIG_TYPE === 'demo';

const demoConfig = defineConfig({
  base: '',
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    target: 'es2015',
    outDir: 'demo',
    sourcemap: true,
  },
});

const libConfig = defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2015',
    sourcemap: true,
    // cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueFlexWaterfall',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

export default isDemo ? demoConfig : libConfig;
