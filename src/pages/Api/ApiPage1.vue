<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import ApiPageComponent1 from './components/ApiPageComponent1.vue';

const api = ref();
onMounted(() => {
  console.log(api.value.count);
});
</script>

<template>
  <div>api1</div>
  <ApiPageComponent1 ref="api" />
</template>

<style lang='scss' scoped>

</style>
