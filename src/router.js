import HomePage from './pages/HomePage'
// import WeatherDaily from './components/WeatherDaily'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
  path: '/',
  name: 'home',
  component: HomePage
},
{
  path: '/any',
  name: 'Any',
}
];

const router = createRouter({
  history: createWebHistory(),
  routes // сокращённая запись для `routes: routes`
});

export default router;