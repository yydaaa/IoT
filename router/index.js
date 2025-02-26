import { createRouter, createWebHistory } from 'vue-router';
import SmartHome from '../pages/SmartHome.vue';
import SmartFarm from '../pages/SmartFarm.vue';
import PresenceRFID from '../pages/PresenceRFID.vue';

const routes = [
  { path: '/smart-home', component: SmartHome },
  { path: '/smart-farm', component: SmartFarm },
  { path: '/presence-rfid', component: PresenceRFID },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
