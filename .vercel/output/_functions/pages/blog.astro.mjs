import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, e as renderScript } from "../_astro/astro/server.BqHzva7b.js";
import "piccolore";
import { $ as $$Layout } from "../_astro/Layout.CP1RwNZ-.js";
import { u as urlFor, s as sanityClient, a as POSTS_QUERY, C as CATEGORIES_QUERY, e as examplePosts } from "../_astro/examplePosts.jmXPV3vU.js";
import { Calendar, Clock, User, BookOpen } from "lucide-react";
import "clsx";
import { renderers } from "../renderers.mjs";
const $$Astro$2 = createAstro("https://vete-a-la-cima.vercel.app");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post, featured = false } = Astro2.props;
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(500).url() : "/images/placeholders/blog-placeholder.svg";
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const cardClass = featured ? "md:col-span-2 md:row-span-2" : "";
  const categorySlug = post.categories?.map((cat) => cat.slug.current).join(",") || "";
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${cardClass}`, "class")}${addAttribute(categorySlug, "data-categories")}> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="block h-full"> <!-- Imagen --> <div${addAttribute(`relative overflow-hidden ${featured ? "h-80" : "h-56"}`, "class")}> <img${addAttribute(imageUrl, "src")}${addAttribute(post.mainImage?.alt || post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> ${featured && renderTemplate`<div class="absolute top-4 left-4"> <span class="bg-[#1FA2FF] text-white px-4 py-2 rounded-full text-sm font-semibold">
Destacado
</span> </div>`} ${post.categories && post.categories.length > 0 && renderTemplate`<div class="absolute bottom-4 left-4 flex flex-wrap gap-2"> ${post.categories.slice(0, 2).map((category) => renderTemplate`<span${addAttribute(`bg-[#66D4FF] text-[#0A1B2E] px-3 py-1 rounded-full text-xs font-medium`, "class")}> ${category.title} </span>`)} </div>`} </div> <!-- Contenido --> <div${addAttribute(`p-6 ${featured ? "md:p-8" : ""}`, "class")}> <!-- Meta información --> <div class="flex items-center gap-4 text-sm text-[#A3B7C9] mb-3"> <div class="flex items-center gap-1"> ${renderComponent($$result, "Calendar", Calendar, { "className": "w-4 h-4" })} <span>${formattedDate}</span> </div> ${post.readingTime && renderTemplate`<div class="flex items-center gap-1"> ${renderComponent($$result, "Clock", Clock, { "className": "w-4 h-4" })} <span>${post.readingTime} min</span> </div>`} </div> <!-- Título --> <h3${addAttribute(`font-['Poppins'] font-bold text-[#0A1B2E] mb-3 group-hover:text-[#1FA2FF] transition-colors ${featured ? "text-3xl md:text-4xl" : "text-xl"}`, "class")}> ${post.title} </h3> <!-- Extracto --> <p${addAttribute(`text-[#A3B7C9] mb-4 ${featured ? "text-lg" : "text-base"}`, "class")}> ${post.excerpt} </p> <!-- Autor --> <div class="flex items-center gap-2 text-sm"> ${renderComponent($$result, "User", User, { "className": "w-4 h-4 text-[#1FA2FF]" })} <span class="text-[#0A1B2E] font-medium">${post.author.name}</span> </div> </div> </a> </article>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/blog/BlogCard.astro", void 0);
const $$Astro$1 = createAstro("https://vete-a-la-cima.vercel.app");
const $$BlogGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogGrid;
  const { posts } = Astro2.props;
  const featuredPost = posts.find((post) => post.featured) || posts[0];
  const regularPosts = posts.filter((post) => post._id !== featuredPost._id);
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"> ${featuredPost && renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "post": featuredPost, "featured": true })}`} ${regularPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "post": post })}`)} </div>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/blog/BlogGrid.astro", void 0);
const $$Astro = createAstro("https://vete-a-la-cima.vercel.app");
const $$CategoryFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryFilter;
  const { categories, activeCategorySlug } = Astro2.props;
  const colorClasses = {
    "azul-electrico": "bg-[#1FA2FF] text-white",
    "celeste-tech": "bg-[#66D4FF] text-[#0A1B2E]",
    "azul-profundo": "bg-[#0A1B2E] text-white",
    "gris-azulado": "bg-[#A3B7C9] text-white"
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-3 mb-8" id="category-filter"> <button data-category="all"${addAttribute(`category-btn px-5 py-2 rounded-full font-medium transition-all ${!activeCategorySlug ? "bg-[#1FA2FF] text-white" : "bg-[#F5F7FA] text-[#0A1B2E] hover:bg-[#66D4FF]"}`, "class")}>
Todos
</button> ${categories.map((category) => renderTemplate`<button${addAttribute(category.slug.current, "data-category")}${addAttribute(`category-btn px-5 py-2 rounded-full font-medium transition-all ${activeCategorySlug === category.slug.current ? colorClasses[category.color || "azul-electrico"] : "bg-[#F5F7FA] text-[#0A1B2E] hover:bg-[#66D4FF]"}`, "class")}> ${category.title} </button>`)} </div> ${renderScript($$result, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/blog/CategoryFilter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/blog/CategoryFilter.astro", void 0);
const prerender = false;
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  let posts = [];
  let categories = [];
  try {
    posts = await sanityClient.fetch(POSTS_QUERY);
    categories = await sanityClient.fetch(CATEGORIES_QUERY);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    posts = examplePosts.map((post) => ({
      ...post,
      featured: post._id === "1"
      // Marcar el primero como destacado
    }));
    categories = [
      { _id: "1", title: "Inteligencia Artificial", slug: { current: "ia" }, color: "azul-electrico" },
      { _id: "2", title: "Digitalización", slug: { current: "digitalizacion" }, color: "celeste-tech" },
      { _id: "3", title: "Marketing", slug: { current: "marketing" }, color: "gris-azulado" },
      { _id: "4", title: "Gestión", slug: { current: "gestion" }, color: "azul-profundo" }
    ];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Vete a la Cima", "description": "Recursos y artículos sobre gestión, digitalización, IA y marketing para clínicas veterinarias." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-[22rem] md:pt-[24rem] lg:pt-[28rem] bg-gradient-to-br from-[#294a5f] via-[#3e6680] to-[#b4cfa6] py-20 lg:py-28 relative overflow-hidden"> <div class="absolute inset-0 z-0"> <img src="/images/about/vir2.webp" alt="Hero Blog" class="w-full h-full object-cover object-center opacity-70"> <div class="absolute inset-0 bg-gradient-to-br from-[#294a5f]/80 via-[#3e6680]/80 to-[#b4cfa6]/80"></div> </div> <div class="container mx-auto px-6 lg:px-8 relative z-10"> <div class="max-w-4xl mx-auto text-center text-white"> <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"> ${renderComponent($$result2, "BookOpen", BookOpen, { "className": "w-5 h-5" })} <span class="text-sm font-medium">Recursos y conocimiento</span> </div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-6">
Blog Vete a la Cima
</h1> <p class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
Artículos sobre gestión, digitalización, inteligencia artificial y marketing para clínicas veterinarias que quieren crecer.
</p> </div> </div> </section>  <section class="py-12 bg-[#F5F7FA]"> <div class="container mx-auto px-6 lg:px-8"> ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "categories": categories })} </div> </section>  <section class="py-16 bg-[#F5F7FA]"> <div class="container mx-auto px-6 lg:px-8"> ${posts.length > 0 ? renderTemplate`${renderComponent($$result2, "BlogGrid", $$BlogGrid, { "posts": posts })}` : renderTemplate`<div class="text-center py-20"> ${renderComponent($$result2, "BookOpen", BookOpen, { "className": "w-16 h-16 text-[#A3B7C9] mx-auto mb-4" })} <h3 class="text-2xl font-bold text-[#0A1B2E] mb-2">
No hay artículos aún
</h3> <p class="text-[#A3B7C9]">
Pronto comenzaremos a publicar contenido valioso para ti.
</p> </div>`} </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-6 lg:px-8"> <div class="max-w-4xl mx-auto bg-gradient-to-r from-[#3e6680] to-[#b4cfa6] rounded-3xl p-8 md:p-12 text-center text-white"> <h2 class="text-3xl md:text-4xl font-bold font-['Poppins'] mb-4">
Recibe los mejores consejos en tu inbox
</h2> <p class="text-lg mb-8 text-white/90">
Suscríbete para recibir artículos exclusivos sobre cómo hacer crecer tu clínica veterinaria.
</p> <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"> <input type="email" placeholder="Tu correo electrónico" class="flex-1 px-6 py-4 rounded-full text-[#0A1B2E] focus:outline-none focus:ring-2 focus:ring-white" required> <button type="submit" class="bg-[#0A1B2E] text-white px-8 py-4 rounded-full font-['Montserrat'] font-semibold hover:bg-[#0A1B2E]/90 transition-colors">
Suscribirme
</button> </form> </div> </div> </section> ` })}`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/blog.astro", void 0);
const $$file = "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/blog.astro";
const $$url = "/blog";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
