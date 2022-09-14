<script setup lang='ts'>
import {
  reactive, readonly, ref, watchEffect,
} from 'vue';

const count = ref(0);
const obj = reactive({ count });
console.log(count.value === obj.count); // true
count.value += 1;
console.log(count.value); // 1
console.log(obj.count); // 1
obj.count += 1;
console.log(count.value); // 2
console.log(obj.count); // 2
console.log('%c---------------->', 'color: red;');

const books = reactive([ref('Vue3 guide')]);
const map = reactive(new Map([['count', ref(0)]]));
console.log(books[0].value);
console.log(map.get('count')?.value);
console.log('%c---------------->', 'color: red;');

const original = reactive({ count: 0 });
const copy = readonly(original);

const watch = watchEffect(() => {
  console.log(copy.count, 'watch');
});
watch();
original.count += 1;
console.log('%c---------------->', 'color: red;');

function request(id: number) {
  let timer: any;
  return {
    res() {
      return new Promise<number>((resolve) => {
        timer = setTimeout(() => {
          resolve(id);
        }, id * 1000);
      });
    },
    cancel() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    },
  };
}
const id = ref(1);
const data = ref(0);
watchEffect(async (onCleanup) => {
  const { res, cancel } = request(id.value);
  onCleanup(cancel);
  data.value = await res();
});
</script>

<template>
  <div>api2</div>
  <div>{{ data }}</div>
  <button @click="id += 1">
    add
  </button>
</template>

<style lang='scss' scoped>

</style>
