<script setup lang='ts'>
import {
  shallowRef, watchEffect, triggerRef, shallowReactive, toRaw, reactive,
} from 'vue';
import useDebouncedRef from '../../utils/debounceRef';

const obj = { count: 1 };
const reactiveObj = reactive(obj);
console.log(toRaw(reactiveObj) === obj); // true
const state = shallowRef(obj);
const text = useDebouncedRef('hello');
const shallowState = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});
watchEffect(() => {
  console.log(state.value.count);
});
const handleAdd = () => {
  state.value.count += 1;
  triggerRef(state);
  // console.log(state.value.count);
  // let { count } = state.value;
  // // shallowRef只有对.value的访问是响应式的
  // state.value = {
  //   count: count += 1,
  // };
};
const handleAdd2 = () => {
  shallowState.foo += 1;
  console.log(shallowState.foo);
};
</script>

<template>
  <!-- <div>api-page-5-{{ state.count }}</div> -->
  <div>api-page-5-{{ shallowState.foo }}</div>
  <button @click="handleAdd">
    add
  </button>
  <button @click="handleAdd2">
    add2
  </button>
  <p>
    <input
      v-model="text"
      type="text"
    >
  </p>
  <p>{{ text }}</p>
</template>

<style lang='scss' scoped>

</style>
