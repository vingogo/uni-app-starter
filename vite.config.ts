import { defineConfig } from 'vite';
import path from 'node:path';
import Uni from '@dcloudio/vite-plugin-uni';
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest';
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages';
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts';
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components';
import AutoImport from 'unplugin-auto-import/vite';
import pxToRpx from 'postcss-pxtorpx-pro';

export default defineConfig({
  build: {
    target: 'es6',
    cssTarget: 'chrome61',
  },
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-manifest
    UniHelperManifest(),
    // https://github.com/uni-helper/vite-plugin-uni-pages
    UniHelperPages(),
    // https://github.com/uni-helper/vite-plugin-uni-layouts
    UniHelperLayouts(),
    // https://github.com/uni-helper/vite-plugin-uni-components
    UniHelperComponents({
      resolvers: [
        (name) => {
          if (name.match(/^(Vin[A-Z]|vin-[a-z])/)) {
            const cName = name
              .slice(3)
              .replace(/([a-z])([A-Z])/, '$1-$2')
              .toLowerCase();
            return {
              name,
              from: `@vingogo/uni-ui/lib/components/${cName}/index.vue`,
            };
          }
        },
      ],
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
    }),
    Uni(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores', 'src/utils'],
      vueTemplate: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        pxToRpx({
          // 转化的单位
          unit: 'rpx',
          // 默认设计稿按照750宽，2倍图的出
          transform: (x) => 2 * x,
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@vingogo/uni-ui/lib/styles/variables.scss';@import '@/styles/var.scss';",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
