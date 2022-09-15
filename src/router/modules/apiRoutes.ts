import { RouteRecordRaw } from 'vue-router';

const apiRoutes: RouteRecordRaw[] = [
  {
    name: 'api1',
    path: '/api1',
    component: () => import('../../pages/Api/ApiPage1.vue'),
  },
  {
    name: 'api2',
    path: '/api2',
    component: () => import('../../pages/Api/ApiPage2.vue'),
  },
  {
    name: 'api3',
    path: '/api3',
    component: () => import('../../pages/Api/ApiPage3.vue'),
  },
  {
    name: 'api4',
    path: '/api4',
    component: () => import('../../pages/Api/ApiPage4.vue'),
  },
];

export default apiRoutes;
