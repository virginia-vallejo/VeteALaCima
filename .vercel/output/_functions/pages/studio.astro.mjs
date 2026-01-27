import { a as createComponent, b as renderTemplate, f as renderHead } from "../_astro/astro/server.BqHzva7b.js";
import "piccolore";
import "clsx";
/* empty css                                 */
import { renderers } from "../renderers.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Studio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-x2wsp3hm> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="robots" content="noindex"><title>Sanity Studio - Vete a la Cima</title>', `</head> <body data-astro-cid-x2wsp3hm> <div id="sanity" data-astro-cid-x2wsp3hm></div> <script type="module">
      import { createRoot } from 'https://esm.sh/react-dom@18/client';
      import { Studio } from 'https://unpkg.com/sanity@^4/dist/index.esm.js';

      const root = createRoot(document.getElementById('sanity'));

      const config = {
        name: 'vetealacima',
        title: 'Vete a la Cima - Blog',
        projectId: 'yjqtxju3',
        dataset: 'production',
        basePath: '/studio',
      };

      root.render(Studio({ config }));
    <\/script> </body> </html>`])), renderHead());
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/studio.astro", void 0);
const $$file = "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/studio.astro";
const $$url = "/studio";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Studio,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
