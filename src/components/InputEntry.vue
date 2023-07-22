<script setup lang="ts">
const name = ref('');
function go() {
  if (name.value) {
    uni.navigateTo({
      url: `/pages/hi?name=${name.value}`,
    });
  }
}
</script>

<template>
  <view class="input-entry">
    <view class="input-box">
      <vin-input v-model="name" placeholder="What's your name?" />
    </view>

    <vin-button type="primary" block shape="square" :disabled="!name" @click="go">GO</vin-button>
  </view>
</template>

<style lang="scss">
.input-entry {
  padding: 5px;
  margin-top: 30px;

  .input-box {
    margin-bottom: 15px;
    color: gray;
  }
}
</style>
