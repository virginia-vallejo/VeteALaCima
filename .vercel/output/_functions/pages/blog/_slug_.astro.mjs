import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from "../../_astro/astro/server.BqHzva7b.js";
import "piccolore";
import { $ as $$Layout } from "../../_astro/Layout.CP1RwNZ-.js";
import { u as urlFor, s as sanityClient, P as POST_BY_SLUG_QUERY, e as examplePosts } from "../../_astro/examplePosts.jmXPV3vU.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { renderers } from "../../renderers.mjs";
const components = {
  types: {
    image: ({ value }) => {
      const imgUrl = urlFor(value).width(1200).url();
      return /* @__PURE__ */ jsxs("figure", { className: "my-8", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: imgUrl,
            alt: value.alt || "",
            className: "w-full rounded-lg shadow-lg"
          }
        ),
        value.alt && /* @__PURE__ */ jsx("figcaption", { className: "text-center text-sm text-gray-500 mt-2", children: value.alt })
      ] });
    }
  },
  block: {
    h2: ({ children }) => /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold font-heading text-azul-profundo mt-12 mb-6", children }),
    h3: ({ children }) => /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold font-heading text-azul-profundo mt-8 mb-4", children }),
    normal: ({ children }) => /* @__PURE__ */ jsx("p", { className: "text-lg text-azul-profundo leading-relaxed mb-6", children }),
    blockquote: ({ children }) => /* @__PURE__ */ jsx("blockquote", { className: "border-l-4 border-azul-electrico pl-6 py-2 italic text-gris-azulado my-8 bg-gris-claro rounded-r-lg", children })
  },
  list: {
    bullet: ({ children }) => /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-2 mb-6 text-lg text-azul-profundo ml-4", children }),
    number: ({ children }) => /* @__PURE__ */ jsx("ol", { className: "list-decimal list-inside space-y-2 mb-6 text-lg text-azul-profundo ml-4", children })
  },
  marks: {
    strong: ({ children }) => /* @__PURE__ */ jsx("strong", { className: "font-bold text-azul-electrico", children }),
    em: ({ children }) => /* @__PURE__ */ jsx("em", { className: "italic", children }),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : void 0;
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: value?.href,
          target,
          rel: target === "_blank" ? "noopener noreferrer" : void 0,
          className: "text-azul-electrico hover:text-celeste-tech underline transition-colors",
          children
        }
      );
    }
  }
};
function PortableTextRenderer({ value }) {
  return /* @__PURE__ */ jsx(PortableText, { value, components });
}
const $$Astro = createAstro("https://vete-a-la-cima.vercel.app");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let post = null;
  try {
    post = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.warn("Error fetching post from Sanity. Using example data.");
    post = examplePosts.find((p) => p.slug.current === slug);
  }
  if (!post) {
    return Astro2.redirect("/404");
  }
  const getImageUrl = (image) => {
    if (!image) return "/images/placeholders/blog-placeholder.svg";
    try {
      return urlFor(image).width(1200).height(600).url();
    } catch {
      return "/images/placeholders/blog-placeholder.svg";
    }
  };
  const imageUrl = getImageUrl(post.mainImage);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const metaTitle = post.seo?.metaTitle || `${post.title} | Vete a la Cima`;
  const metaDescription = post.seo?.metaDescription || post.excerpt;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <!-- Breadcrumb y Volver --> <section class="bg-[#F5F7FA] py-6"> <div class="container mx-auto px-6 lg:px-8"> <a href="/blog" class="inline-flex items-center gap-2 text-[#3e6680] hover:text-[#b4cfa6] transition-colors"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "className": "w-4 h-4" })} <span>Volver al blog</span> </a> </div> </section> <!-- Imagen Hero --> <section class="relative h-[400px] md:h-[500px] overflow-hidden"> <img${addAttribute(imageUrl, "src")}${addAttribute(post.mainImage?.alt || post.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-[#294a5f]/80 to-transparent"></div> <!-- Categorías sobre la imagen --> ${post.categories && post.categories.length > 0 && renderTemplate`<div class="absolute bottom-6 left-6 flex flex-wrap gap-2"> ${post.categories.map((category) => renderTemplate`<a${addAttribute(`/blog/categoria/${category.slug.current}`, "href")} class="bg-[#b4cfa6] text-[#294a5f] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#3e6680] hover:text-white transition-colors"> ${category.title} </a>`)} </div>`} </section> <!-- Contenido del Artículo --> <section class="py-12 bg-white"> <div class="container mx-auto px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <!-- Título --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-[#0A1B2E] mb-6"> ${post.title} </h1> <!-- Meta información --> <div class="flex flex-wrap items-center gap-6 pb-6 mb-8 border-b border-[#F5F7FA]"> <div class="flex items-center gap-2 text-[#A3B7C9]"> ${renderComponent($$result2, "Calendar", Calendar, { "className": "w-5 h-5" })} <span>${formattedDate}</span> </div> ${post.readingTime && renderTemplate`<div class="flex items-center gap-2 text-[#A3B7C9]"> ${renderComponent($$result2, "Clock", Clock, { "className": "w-5 h-5" })} <span>${post.readingTime} min de lectura</span> </div>`} <div class="flex items-center gap-2"> ${renderComponent($$result2, "User", User, { "className": "w-5 h-5 text-[#1FA2FF]" })} <span class="text-[#0A1B2E] font-medium">${post.author.name}</span> </div> <button class="ml-auto flex items-center gap-2 text-[#1FA2FF] hover:text-[#66D4FF] transition-colors" onclick="navigator.share ? navigator.share({title: document.title, url: window.location.href}) : alert('Copia este link: ' + window.location.href)"> ${renderComponent($$result2, "Share2", Share2, { "className": "w-5 h-5" })} <span>Compartir</span> </button> </div> <!-- Extracto --> <div class="text-xl text-[#406780] mb-12 italic border-l-4 border-[#3e6680] pl-6"> ${post.excerpt} </div> <!-- Cuerpo del artículo --> <div class="prose prose-lg max-w-none"> ${renderComponent($$result2, "PortableTextRenderer", PortableTextRenderer, { "value": post.body, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/blog/PortableTextRenderer.tsx", "client:component-export": "default" })} </div> <!-- Información del autor --> ${post.author.bio && renderTemplate`<div class="mt-16 pt-8 border-t border-[#F5F7FA]"> <div class="bg-[#F5F7FA] rounded-2xl p-8 flex flex-col md:flex-row gap-6"> ${post.author.image && renderTemplate`<img${addAttribute(getImageUrl(post.author.image), "src")}${addAttribute(post.author.name, "alt")} class="w-24 h-24 rounded-full object-cover">`} <div class="flex-1"> <h3 class="text-xl font-bold text-[#294a5f] mb-2">
Sobre ${post.author.name} </h3> <div class="text-[#406780]"> ${renderComponent($$result2, "PortableTextRenderer", PortableTextRenderer, { "value": post.author.bio, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/blog/PortableTextRenderer.tsx", "client:component-export": "default" })} </div> </div> </div> </div>`} <!-- CTA al final del artículo --> <div class="mt-16 bg-gradient-to-r from-[#3e6680] to-[#b4cfa6] rounded-3xl p-8 md:p-12 text-center text-white"> <h3 class="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4">
¿Listo para llevar tu clínica al siguiente nivel?
</h3> <p class="text-lg mb-6 text-white/90">
Agenda una consultoría gratuita y descubre cómo podemos ayudarte.
</p> <a href="/contacto" class="inline-block bg-white text-[#3e6680] px-8 py-4 rounded-full font-['Montserrat'] font-semibold hover:bg-[#F5F7FA] transition-colors">
Agendar Consultoría Gratuita
</a> </div> </div> </div> </section> </article> ` })}`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/blog/[slug].astro", void 0);
const $$file = "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
