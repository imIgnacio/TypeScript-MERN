import NotFound from '@pages/NotFound';
import Dashboard from '@pages/Dashboard';

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
