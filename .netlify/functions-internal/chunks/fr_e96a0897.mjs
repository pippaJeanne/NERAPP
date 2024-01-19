export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/fr_3f84cc56.mjs').then(n => n.f);

export { page };
