import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CRIVwAbm.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BFdVoGNu.mjs');
const _page1 = () => import('./chunks/about_E5UxGy_N.mjs');
const _page2 = () => import('./chunks/blob_jDQKrhqR.mjs');
const _page3 = () => import('./chunks/blobs_CyobAaXL.mjs');
const _page4 = () => import('./chunks/revalidate_C2OB3bod.mjs');
const _page5 = () => import('./chunks/index_BZXcLK1N.mjs');
const _page6 = () => import('./chunks/contact_BWFsxE-9.mjs');
const _page7 = () => import('./chunks/index_DKgAhFI9.mjs');
const _page8 = () => import('./chunks/index_B1iXM1dh.mjs');
const _page9 = () => import('./chunks/index_CDwvhinX.mjs');
const _page10 = () => import('./chunks/facade-transformations_tbuiBNxE.mjs');
const _page11 = () => import('./chunks/grc-collection_CxFzoDeu.mjs');
const _page12 = () => import('./chunks/image-cdn_D0wUGbi_.mjs');
const _page13 = () => import('./chunks/outdoor-luxury_Bf5CVkRz.mjs');
const _page14 = () => import('./chunks/portfolio_ofAEgaFx.mjs');
const _page15 = () => import('./chunks/revalidation_CSzR8m7A.mjs');
const _page16 = () => import('./chunks/services_G_l6A8Qa.mjs');
const _page17 = () => import('./chunks/index_CWjWkSbB.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/blob.ts", _page2],
    ["src/pages/api/blobs.ts", _page3],
    ["src/pages/api/revalidate.ts", _page4],
    ["src/pages/blobs/index.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/edge/australia/index.astro", _page7],
    ["src/pages/edge/not-australia/index.astro", _page8],
    ["src/pages/edge/index.astro", _page9],
    ["src/pages/facade-transformations.astro", _page10],
    ["src/pages/grc-collection.astro", _page11],
    ["src/pages/image-cdn.astro", _page12],
    ["src/pages/outdoor-luxury.astro", _page13],
    ["src/pages/portfolio.astro", _page14],
    ["src/pages/revalidation.astro", _page15],
    ["src/pages/services.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c13f1dac-b33c-4ea0-b080-e89d9d106ca1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
