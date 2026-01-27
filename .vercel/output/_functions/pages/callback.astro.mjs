import { a as createComponent, f as renderHead, e as renderScript, b as renderTemplate } from "../_astro/astro/server.BqHzva7b.js";
import "piccolore";
import "clsx";
/* empty css                                   */
import { renderers } from "../renderers.mjs";
const $$Callback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-62g22v6u> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Autenticación exitosa</title>${renderHead()}</head> <body data-astro-cid-62g22v6u> <div class="container" data-astro-cid-62g22v6u> <div class="success-icon" data-astro-cid-62g22v6u>✅</div> <h1 data-astro-cid-62g22v6u>¡Autenticación exitosa!</h1> <p data-astro-cid-62g22v6u>Ya puedes cerrar esta ventana y volver a la terminal.</p> <p style="margin-top: 2rem; font-size: 0.9rem;" data-astro-cid-62g22v6u>Ejecuta: <strong data-astro-cid-62g22v6u>npx sanity deploy</strong></p> </div> ${renderScript($$result, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/callback.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/callback.astro", void 0);
const $$file = "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/callback.astro";
const $$url = "/callback";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Callback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
