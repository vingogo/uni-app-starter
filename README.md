# uni-app-starter

致力于打造跟 web 一致的开发体验

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！
- 🗂 [基于文件的约定式路由](./src/pages)
- 📦 [组件自动化加载](./src/components)
- 📑 [布局系统](./src/layouts)
- 😃 [px 自动转换](https://github.com/Genuifx/postcss-pxtorpx-pro)
- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 📥 [API 自动加载](./src/composables) - 直接使用 Composition API 无需引入
- ✅ 使用 [Vitest](https://vitest.dev/) 进行单元和组件测试
- 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) - 保证代码质量
- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

## 预配置

### UI 框架

- [@vingogo/uni-ui](https://github.com/vingogo/vin-ui) - 京东(nutui)风格的移动端 Vue3 组件库 、支持多端小程序(uniapp 版本)

### 测试框架

- [Vitest](https://github.com/vitest-dev/vitest) - 由 Vite 支持的单元测试

### 插件

- [`Pinia`](https://pinia.vuejs.org) - 符合直觉的 Vue.js 状态管理库
- [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 基于文件的约定式路由
- [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts) - 页面布局系统
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 组件自动导入
- [`@vingogo/vin-cli`](https://github.com/vingogo/vin-cli/tree/master/packages/vin-cli) - 更好的开发体验
- [`postcss-pxtorpx-pro`](https://github.com/Genuifx/postcss-pxtorpx-pro) - px 自动转换成 rpx

### 编码风格

- 使用 [`<script setup>` 的 SFC 语法](https://github.com/vuejs/rfcs/pull/227) 与 Composition API 结合使用。
- 使用 [ESLint](https://eslint.org/) 工具检查 JS/TS，并使用 [@vingogo/eslint-config-vue](https://github.com/vingogo/vin-cli/blob/master/packages/eslint-config-vue) 配置
- 使用 [Stylelint](https://stylelint.io/) 工具检查样式，并使用 [@vingogo/stylelint-config](https://github.com/vingogo/vin-cli/tree/master/packages/stylelint-config) 配置
- 使用 [Prettier](https://prettier.io/) 工具处理代码风格，并使用 [@vingogo/prettier-config](https://github.com/vingogo/vin-cli/tree/master/packages/prettier-config) 配置

## 快速开始

uni-app-starter 支持多种开始方式

### GitHub 模板

[使用这个模板](https://github.com/vingogo/uni-app-starter/generate)

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit vingogo/uni-app-starter my-uni-app
cd my-uni-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

### 检查清单

当您使用此模板时，请尝试按照清单正确更新您的信息

- [ ] 更改 `LICENSE` 中的作者名或直接删除
- [ ] 更改 `manifest.json` 中的项目名称，描述，`appid` 等
- [ ] 更改 `public` 中的图标
- [ ] 整理 `README` 并删除演示页面和组件

接下来就请享受吧！:)

### 运行

参考 uni-app 官方文档： [运行、发布 uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)
