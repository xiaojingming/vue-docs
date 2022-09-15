<script setup lang='ts'>
import { isReactive, reactive, toRefs } from 'vue';

const info = reactive({
  name: 'xiao',
  age: 25,
});
console.log(isReactive(info)); // true
console.log(isReactive(10)); // false

let { age } = info;
age += 1;
console.log(age, info.age); // 26 25

const { age: cAge } = toRefs(info);
cAge.value += 10;
console.log(cAge.value, info.age); // 35 35
</script>

<template>
  <div>api-page-4-{{ info.age }}</div>
</template>

<style lang='scss' scoped>

</style>
