/// <reference types="vite/client" />

declare module '*.vue' {
  // eslint-disable-next-line import/newline-after-import
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
