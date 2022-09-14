<script lang="ts">
import { defineComponent, ref, h } from 'vue';

export default defineComponent({
  setup(props, { expose }) {
    const count = ref(0);
    expose({
      count,
    });
    return () => h('div', count.value);
  },
});
</script>
<style lang='less' scoped>
</style>
