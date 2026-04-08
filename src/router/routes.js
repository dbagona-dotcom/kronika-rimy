const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Rozcestnik.vue') },
      { path: 'kapitola/:id', component: () => import('pages/KapitolaSablona.vue') },
      { path: 'casova-osa', component: () => import('pages/CasovaOsa.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes