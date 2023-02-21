// https://vitejs.dev/config/
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const isDemo = process.env.CONFIG_TYPE === 'demo';

const demoConfig = () =>
  defineConfig({
    base: '',
    plugins: [vue(), cssInjectedByJsPlugin()],
    build: {
      target: 'es2015',
      outDir: 'demo',
      sourcemap: true,
    },
  });

const libConfig = () =>
  defineConfig({
    plugins: [vue(), dts({ copyDtsFiles: false })],
    build: {
      target: 'es2015',
      sourcemap: true,
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

export default isDemo ? demoConfig() : libConfig();
