import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_4cbd6a5f.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_37c187a7.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_6008017d.mjs');
const _page1  = () => import('./chunks/index_e2c88897.mjs');
const _page2  = () => import('./chunks/form_a2ba07cf.mjs');
const _page3  = () => import('./chunks/main_af35f45e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/form.js", _page2],["src/pages/main.js", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
