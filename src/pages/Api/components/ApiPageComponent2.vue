<!-- eslint-disable no-param-reassign -->
<script setup lang='ts'>
import { toRef, Ref } from 'vue';

const props = defineProps<{
  x: number;
  y: number;
}>();

function changeProps(nums: Ref<number>) {
  setTimeout(() => {
    nums.value += 1;
  }, 3000);
}
changeProps(toRef(props, 'x'));
</script>

<template>
  <div>sub-api-page</div>
</template>

<style lang='scss' scoped>

</style>
