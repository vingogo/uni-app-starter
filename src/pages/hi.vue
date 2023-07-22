<script lang="ts" setup>
const { value: name } = useQuery('name');
</script>

<template>
  <view>你好，{{ name }}</view>
</template>

<route lang="json">
{
  "layout": "home"
}
</route>
