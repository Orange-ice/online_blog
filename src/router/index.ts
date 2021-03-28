import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Detail from '@/views/Detail.vue';
import Index from '@/views/Index.vue';
import Create from '@/views/Create.vue';
import Edit from '@/views/Edit.vue';
import User from '@/views/User.vue';
import Myself from '@/views/Myself.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {path: '/', component: Index},
  {path: '/detail/:id', component: Detail},
  {path: '/create', component: Create},
  {path: '/edit/:id', component: Edit},
  {path: '/user', component: User},
  {path: '/myself', component: Myself},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '*', component: NotFound},
];

const router = new VueRouter({
  routes
});

export default router;
