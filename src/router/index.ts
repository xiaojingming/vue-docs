import { createRouter, createWebHashHistory } from 'vue-router';
import apiRoutes from './modules/apiRoutes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...apiRoutes,
  ],
});

export default router;
