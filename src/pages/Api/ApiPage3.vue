<script setup lang='ts'>
import {
  ref, isRef, unref, reactive, toRef,
} from 'vue';
import ApiPageComponent2 from './components/ApiPageComponent2.vue';

const bar = ref(1);
const foo = 1;
console.log(isRef(bar), isRef(foo)); // true, false
const num = unref(bar);
console.log(num); // 1
const state = reactive({
  a: 1,
  b: 2,
});
const aRef = toRef(state, 'a');
console.log(state.a); // 1
aRef.value += 1;
console.log(state.a, aRef.value); // 2, 2
const bRef = ref(state.b);
bRef.value += 1;
console.log(bRef.value, state.b); // 3, 2
const x = ref(10);
const y = ref(10);
</script>

<template>
  <div>api-page-3</div>
  <ApiPageComponent2
    :x="x"
    :y="y"
  />
</template>

<style lang='scss' scoped>

</style>
