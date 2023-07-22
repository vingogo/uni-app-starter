<template>
  <view class="default-layout">
    <slot />

    <view class="description">默认布局</view>
  </view>
</template>

<style lang="scss">
.default-layout {
  .description {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
