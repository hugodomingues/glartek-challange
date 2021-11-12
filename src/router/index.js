
const {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} = require('vue-router');

const isServer = typeof window === 'undefined';

const _importPages = file => () => import('../components/pages/' + file + '.vue');

let history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  { name: '404', path: '/404', component: _importPages('404') },
  { name: 'weather', path: '/weather', component: _importPages('Weather') }
];

export function _createRouter() {
  return createRouter({ routes, history });
}
