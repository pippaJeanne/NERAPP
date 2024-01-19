import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_f0aafd79.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_27d841b6.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_4bd39e0d.mjs');
const _page1  = () => import('./chunks/index_0931d613.mjs');
const _page2  = () => import('./chunks/licence_e071afdc.mjs');
const _page3  = () => import('./chunks/fr1_dc814012.mjs');
const _page4  = () => import('./chunks/en_6742651d.mjs');
const _page5  = () => import('./chunks/fr_283511cc.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/licence.md", _page2],["src/pages/fr1.astro", _page3],["src/pages/en.md", _page4],["src/pages/fr.md", _page5]]);
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
