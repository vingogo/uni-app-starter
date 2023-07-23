## 自动导入

此目录下文件可以在使用过程中自动按需导入，省略手动导入步骤。

```ts
// dark.ts
export const isDark = useDark();
```

```vue
<script setup lang="ts">
console.log(isDark);
</script>
```

功能基于 `unplugin-auto-import` 插件实现，具体配置请参考 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)。
