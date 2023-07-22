<template>
  <view class="home-layout">
    <slot />

    <view class="description">home布局</view>
  </view>
</template>

<style lang="scss">
.home-layout {
  padding: 10px;

  .description {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
