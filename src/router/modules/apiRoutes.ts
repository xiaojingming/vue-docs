import { RouteRecordRaw } from 'vue-router';

const apiRoutes: RouteRecordRaw[] = [
  {
    name: 'api1',
    path: '/api1',
    component: () => import('../../pages/Api/ApiPage1.vue'),
  },
];

export default apiRoutes;
