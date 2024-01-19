export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/en_9d29cf35.mjs').then(n => n.e);

export { page };
