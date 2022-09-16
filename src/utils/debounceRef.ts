/* eslint-disable no-param-reassign */
import { customRef } from 'vue';

function useDebouncedRef(value: any, delay = 1000) {
  let timer: any;
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set(v) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        value = v;
        trigger();
      }, delay);
    },
  }));
}

export default useDebouncedRef;
