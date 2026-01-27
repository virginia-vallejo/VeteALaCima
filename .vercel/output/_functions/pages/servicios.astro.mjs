import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from "../_astro/astro/server.BqHzva7b.js";
import "piccolore";
import { f as formatWhatsAppLink, s as siteConfig, $ as $$Layout, a as $$Button } from "../_astro/Layout.CP1RwNZ-.js";
import "clsx";
import { Check, X } from "lucide-react";
/* empty css                                    */
import { F as FAQAccordion } from "../_astro/react-FAQAccordion.Cs9dE2V9.js";
import { p as plans } from "../_astro/plans.BKZpEcxb.js";
import { renderers } from "../renderers.mjs";
const $$Astro$1 = createAstro("https://vete-a-la-cima.vercel.app");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    text,
    variant = "primary",
    class: className = ""
  } = Astro2.props;
  const variantClasses = {
    primary: "bg-azul-electrico text-white",
    secondary: "bg-celeste-tech text-azul-profundo",
    success: "bg-green-500 text-white"
  };
  const classes = `inline-flex items-center px-3 py-1 rounded-full text-xs font-button font-semibold uppercase tracking-wide ${variantClasses[variant]} ${className}`;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(classes, "class")}> ${text} </span>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/shared/Badge.astro", void 0);
const $$Astro = createAstro("https://vete-a-la-cima.vercel.app");
const $$PlanDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlanDetail;
  const { plan } = Astro2.props;
  const whatsappMessage = `Hola! Me interesa contratar el Plan ${plan.name}. ¿Podrían brindarme más información?`;
  const whatsappLink = formatWhatsAppLink(siteConfig.whatsapp, whatsappMessage);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(plan.id, "id")} class="scroll-mt-24"> <div class="group bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(180,207,166,0.3)]"> <!-- Header --> <div${addAttribute([
    "relative p-8 md:p-12 text-white overflow-hidden",
    plan.highlighted ? "bg-gradient-to-br from-[#b4cfa6] to-[#8fa886]" : "bg-gradient-to-br from-[#1a2f42] to-[#0a1929]"
  ], "class:list")}> <!-- Efecto de brillo --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div> </div> <div class="relative z-10"> ${plan.badge && renderTemplate`<div class="mb-4"> ${renderComponent($$result, "Badge", $$Badge, { "text": plan.badge, "variant": "secondary" })} </div>`} <h2${addAttribute([
    "font-heading font-bold text-4xl md:text-5xl mb-4",
    plan.highlighted ? "text-[#0a1929]" : "text-white"
  ], "class:list")}>
Plan ${plan.name} </h2> <p${addAttribute([
    "text-xl mb-6",
    plan.highlighted ? "text-[#0a1929]/90" : "text-white/90"
  ], "class:list")}> ${plan.description} </p> <div class="mb-6"> ${plan.price !== null ? renderTemplate`<div> <span${addAttribute([
    "text-6xl font-heading font-bold",
    plan.highlighted ? "text-[#0a1929]" : "text-white"
  ], "class:list")}>
$${plan.price} </span> <span${addAttribute([
    "text-2xl ml-2",
    plan.highlighted ? "text-[#0a1929]/80" : "text-white/80"
  ], "class:list")}> ${plan.currency}/${plan.billing} </span> </div>` : renderTemplate`<div${addAttribute([
    "text-6xl font-heading font-bold",
    plan.highlighted ? "text-[#0a1929]" : "text-white"
  ], "class:list")}> ${plan.priceLabel || "A medida"} </div>`} </div> <p${addAttribute([
    "text-lg mb-8",
    plan.highlighted ? "text-[#0a1929]/90" : "text-white/90"
  ], "class:list")}> ${plan.targetAudience} </p> <a${addAttribute(whatsappLink, "href")} target="_blank" rel="noopener noreferrer"${addAttribute([
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-button font-bold transition-all duration-300 hover:scale-105 shadow-lg group/btn relative overflow-hidden",
    plan.highlighted ? "bg-gradient-to-r from-[#66D4FF] to-[#4A738A] text-white hover:shadow-[0_0_30px_rgba(102,212,255,0.5)]" : "bg-gradient-to-r from-[#b4cfa6] to-[#8fa886] text-[#0a1929] hover:shadow-[0_0_30px_rgba(180,207,166,0.5)]"
  ], "class:list")}> <span class="relative z-10">${plan.cta}</span> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div> </a> </div> </div> <!-- Detailed Features --> <div class="p-8 md:p-12 bg-white/5 backdrop-blur-sm"> <h3 class="font-heading font-bold text-2xl text-white mb-8">
Incluye:
</h3> <div class="space-y-8"> ${Object.entries(plan.detailedFeatures).map(([category, items]) => renderTemplate`<div> <h4 class="font-heading font-semibold text-lg text-[#b4cfa6] mb-4 flex items-center gap-2"> <span class="w-1.5 h-1.5 bg-[#b4cfa6] rounded-full"></span> ${category} </h4> <ul class="space-y-3"> ${items.map((item) => renderTemplate`<li class="flex items-start space-x-3 group/item"> ${renderComponent($$result, "Check", Check, { "className": "text-[#66D4FF] flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform", "size": 20 })} <span class="text-white/80 group-hover/item:text-white transition-colors">${item}</span> </li>`)} </ul> </div>`)} </div> </div> <!-- CTA Footer --> <div class="p-8 md:p-12 bg-white/5 backdrop-blur-sm border-t border-white/10"> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div> <p class="font-semibold text-white text-lg mb-1">
¿Te interesa este plan?
</p> <p class="text-white/70">
Agenda una llamada gratuita para resolver tus dudas
</p> </div> <div class="flex-shrink-0"> <a${addAttribute(whatsappLink, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b4cfa6] to-[#8fa886] text-[#0a1929] rounded-xl font-button font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(180,207,166,0.5)] shadow-lg group/cta relative overflow-hidden"> <span class="relative z-10">Contactar por WhatsApp</span> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/cta:translate-x-[200%] transition-transform duration-700"></div> </a> </div> </div> </div> </div> </div>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/servicios/PlanDetail.astro", void 0);
const $$PlanComparison = createComponent(($$result, $$props, $$slots) => {
  const features = [
    { name: "Sesiones estratégicas", starter: "1/mes", growth: "2/mes", elite: "Ilimitadas" },
    { name: "Plan de marketing", starter: "Básico", growth: "Avanzado", elite: "Integral" },
    { name: "Capacitación de equipo", starter: false, growth: true, elite: true },
    { name: "Implementación CRM", starter: false, growth: true, elite: true },
    { name: "Automatizaciones", starter: false, growth: true, elite: true },
    { name: "Análisis de métricas", starter: "Básico", growth: "Detallado", elite: "Avanzado" },
    { name: "Soporte", starter: "WhatsApp", growth: "Prioritario", elite: "24/7 Dedicado" },
    { name: "Rediseño de procesos", starter: false, growth: false, elite: true },
    { name: "Consultoría expansión", starter: false, growth: false, elite: true },
    { name: "Acceso a Virginia", starter: false, growth: false, elite: "Directo" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="overflow-x-auto" data-astro-cid-wrfp6yaw> <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden" data-astro-cid-wrfp6yaw> <thead class="bg-azul-profundo text-white" data-astro-cid-wrfp6yaw> <tr data-astro-cid-wrfp6yaw> <th class="py-4 px-6 text-left font-heading font-semibold" data-astro-cid-wrfp6yaw>Características</th> <th class="py-4 px-6 text-center font-heading font-semibold" data-astro-cid-wrfp6yaw>Starter</th> <th class="py-4 px-6 text-center font-heading font-semibold bg-azul-electrico" data-astro-cid-wrfp6yaw>Growth</th> <th class="py-4 px-6 text-center font-heading font-semibold" data-astro-cid-wrfp6yaw>Elite</th> </tr> </thead> <tbody data-astro-cid-wrfp6yaw> ${features.map((feature, index) => renderTemplate`<tr${addAttribute([index % 2 === 0 ? "bg-gris-claro/30" : "bg-white"], "class:list")} data-astro-cid-wrfp6yaw> <td class="py-4 px-6 font-medium text-azul-profundo" data-astro-cid-wrfp6yaw> ${feature.name} </td> <td class="py-4 px-6 text-center" data-astro-cid-wrfp6yaw> ${typeof feature.starter === "boolean" ? feature.starter ? renderTemplate`${renderComponent($$result, "Check", Check, { "className": "inline text-green-500", "size": 20, "data-astro-cid-wrfp6yaw": true })}` : renderTemplate`${renderComponent($$result, "X", X, { "className": "inline text-red-400", "size": 20, "data-astro-cid-wrfp6yaw": true })}` : renderTemplate`<span class="text-gris-azulado" data-astro-cid-wrfp6yaw>${feature.starter}</span>`} </td> <td class="py-4 px-6 text-center bg-celeste-tech/5" data-astro-cid-wrfp6yaw> ${typeof feature.growth === "boolean" ? feature.growth ? renderTemplate`${renderComponent($$result, "Check", Check, { "className": "inline text-green-500", "size": 20, "data-astro-cid-wrfp6yaw": true })}` : renderTemplate`${renderComponent($$result, "X", X, { "className": "inline text-red-400", "size": 20, "data-astro-cid-wrfp6yaw": true })}` : renderTemplate`<span class="text-azul-profundo font-semibold" data-astro-cid-wrfp6yaw>${feature.growth}</span>`} </td> <td class="py-4 px-6 text-center" data-astro-cid-wrfp6yaw> ${typeof feature.elite === "boolean" ? feature.elite ? renderTemplate`${renderComponent($$result, "Check", Check, { "className": "inline text-green-500", "size": 20, "data-astro-cid-wrfp6yaw": true })}` : renderTemplate`${renderComponent($$result, "X", X, { "className": "inline text-red-400", "size": 20, "data-astro-cid-wrfp6yaw": true })}` : renderTemplate`<span class="text-gris-azulado" data-astro-cid-wrfp6yaw>${feature.elite}</span>`} </td> </tr>`)} </tbody> <tfoot class="bg-gris-claro" data-astro-cid-wrfp6yaw> <tr data-astro-cid-wrfp6yaw> <td class="py-6 px-6" data-astro-cid-wrfp6yaw></td> <td class="py-6 px-6 text-center" data-astro-cid-wrfp6yaw> <a${addAttribute(formatWhatsAppLink(siteConfig.whatsapp, "Hola! Me interesa contratar el Plan Starter. ¿Podrían brindarme más información?"), "href")} target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 border-2 border-azul-electrico text-azul-electrico rounded-lg hover:bg-azul-electrico hover:text-white transition-all font-button font-medium" data-astro-cid-wrfp6yaw>
Elegir Starter
</a> </td> <td class="py-6 px-6 text-center" data-astro-cid-wrfp6yaw> <a${addAttribute(formatWhatsAppLink(siteConfig.whatsapp, "Hola! Me interesa contratar el Plan Growth. ¿Podrían brindarme más información?"), "href")} target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 bg-azul-electrico text-white rounded-lg hover:bg-azul-electrico/90 transition-all font-button font-medium shadow-lg" data-astro-cid-wrfp6yaw>
Elegir Growth
</a> </td> <td class="py-6 px-6 text-center" data-astro-cid-wrfp6yaw> <a${addAttribute(formatWhatsAppLink(siteConfig.whatsapp, "Hola! Me interesa contratar el Plan Elite. ¿Podrían brindarme más información?"), "href")} target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 border-2 border-azul-electrico text-azul-electrico rounded-lg hover:bg-azul-electrico hover:text-white transition-all font-button font-medium" data-astro-cid-wrfp6yaw>
Elegir Elite
</a> </td> </tr> </tfoot> </table> </div>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/servicios/PlanComparison.astro", void 0);
const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios - Vete a la Cima", "description": "Conocé nuestros planes de consultoría para veterinarias: Starter, Growth y Elite. Elegí el que mejor se adapte a tu etapa de crecimiento.", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-[85vh] flex items-center overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28" data-astro-cid-wrzvmyuk> <!-- Background image --> <div class="absolute inset-0" data-astro-cid-wrzvmyuk> <img src="/images/hero/carruselhero/3.webp" alt="Servicios Background" class="w-full h-full object-cover servicios-hero-image" data-astro-cid-wrzvmyuk> </div> <!-- Background enterprise oscuro con overlay más fuerte para mantener legibilidad --> <div class="absolute inset-0 bg-[#0a1929]/70" data-astro-cid-wrzvmyuk></div> <!-- Capa de profundidad con gradiente radial --> <div class="absolute inset-0 bg-gradient-radial from-[#1a2f42]/40 via-[#0a1929]/60 to-[#020914]/80" data-astro-cid-wrzvmyuk></div> <!-- Vignette --> <div class="absolute inset-0 bg-vignette" data-astro-cid-wrzvmyuk></div> <!-- Grid pattern --> <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]" data-astro-cid-wrzvmyuk></div> <!-- Acentos de color --> <div class="absolute inset-0" data-astro-cid-wrzvmyuk> <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#b4cfa6]/10 rounded-full blur-[120px] animate-float-slow" data-astro-cid-wrzvmyuk></div> <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#66D4FF]/8 rounded-full blur-[120px] animate-float-slow" style="animation-delay: 2s;" data-astro-cid-wrzvmyuk></div> </div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-wrzvmyuk> <div class="max-w-4xl mx-auto text-center text-white animate-fade-in-up" data-astro-cid-wrzvmyuk> <div class="inline-block px-6 py-2 bg-white/15 backdrop-blur-xl rounded-full mb-6 border border-white/20 shadow-2xl animate-float" data-astro-cid-wrzvmyuk> <span class="text-[#b4cfa6] font-semibold text-sm uppercase tracking-wide" data-astro-cid-wrzvmyuk>
📊 Nuestros Servicios
</span> </div> <h1 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white via-[#e3f9ca] to-white bg-clip-text text-transparent" data-astro-cid-wrzvmyuk>
Planes diseñados para cada etapa de crecimiento
</h1> <p class="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed" data-astro-cid-wrzvmyuk>
Desde veterinarias que empiezan hasta grupos consolidados que buscan expandirse
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-wrzvmyuk> ${renderComponent($$result2, "Button", $$Button, { "href": "#comparacion", "variant": "secondary", "size": "lg", "class": "group relative overflow-hidden", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result3) => renderTemplate` <span class="relative z-10" data-astro-cid-wrzvmyuk>Comparar planes</span> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" data-astro-cid-wrzvmyuk></div> ` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "outline", "size": "lg", "class": "!text-white !border-white/60 hover:!bg-white/10 hover:!border-[#b4cfa6]/50 backdrop-blur-sm", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result3) => renderTemplate`
Diagnóstico gratuito
` })} </div> </div> </div> </section>  <section class="section-padding bg-[#0a1929] relative overflow-hidden" data-astro-cid-wrzvmyuk> <!-- Acento decorativo --> <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b4cfa6]/5 rounded-full blur-[150px]" data-astro-cid-wrzvmyuk></div> <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#66D4FF]/5 rounded-full blur-[150px]" data-astro-cid-wrzvmyuk></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-wrzvmyuk> <div class="space-y-16" data-astro-cid-wrzvmyuk> ${plans.map((plan) => renderTemplate`${renderComponent($$result2, "PlanDetail", $$PlanDetail, { "plan": plan, "data-astro-cid-wrzvmyuk": true })}`)} </div> </div> </section>  <section id="comparacion" class="section-padding bg-[#0a1929] scroll-mt-20 relative overflow-hidden" data-astro-cid-wrzvmyuk> <!-- Acento decorativo --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b4cfa6]/5 rounded-full blur-[150px]" data-astro-cid-wrzvmyuk></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-wrzvmyuk> <div class="text-center mb-12" data-astro-cid-wrzvmyuk> <p class="text-sm font-semibold text-[#b4cfa6] uppercase tracking-wide mb-3" data-astro-cid-wrzvmyuk>
Todas las características
</p> <h2 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white" data-astro-cid-wrzvmyuk>
Comparación de planes
</h2> <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto" data-astro-cid-wrzvmyuk>
Compará los tres planes lado a lado para tomar la mejor decisión
</p> </div> <div class="mt-16" data-astro-cid-wrzvmyuk> ${renderComponent($$result2, "PlanComparison", $$PlanComparison, { "data-astro-cid-wrzvmyuk": true })} </div> </div> </section>  <section class="section-padding bg-[#0a1929] relative overflow-hidden" data-astro-cid-wrzvmyuk> <!-- Grid pattern --> <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]" data-astro-cid-wrzvmyuk></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-wrzvmyuk> <div class="text-center mb-12" data-astro-cid-wrzvmyuk> <p class="text-sm font-semibold text-[#b4cfa6] uppercase tracking-wide mb-3" data-astro-cid-wrzvmyuk>
Proceso de onboarding
</p> <h2 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white" data-astro-cid-wrzvmyuk>
¿Cómo funciona?
</h2> <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto" data-astro-cid-wrzvmyuk>
Desde que elegís tu plan hasta que empezás a ver resultados
</p> </div> <div class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8" data-astro-cid-wrzvmyuk> <div class="group text-center bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-[#b4cfa6]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(180,207,166,0.2)]" data-astro-cid-wrzvmyuk> <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#66D4FF] to-[#4A738A] text-white flex items-center justify-center text-3xl font-heading font-bold shadow-lg group-hover:shadow-[0_0_30px_rgba(102,212,255,0.5)] transition-shadow duration-300" data-astro-cid-wrzvmyuk>
1
</div> <h3 class="font-heading font-semibold text-xl text-white mb-3 group-hover:text-[#e3f9ca] transition-colors" data-astro-cid-wrzvmyuk>
Elegís tu plan
</h3> <p class="text-white/70" data-astro-cid-wrzvmyuk>
Seleccionás el plan que mejor se adapte a tus necesidades actuales
</p> </div> <div class="group text-center bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-[#b4cfa6]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(180,207,166,0.2)]" data-astro-cid-wrzvmyuk> <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#b4cfa6] to-[#8fa886] text-[#0a1929] flex items-center justify-center text-3xl font-heading font-bold shadow-lg group-hover:shadow-[0_0_30px_rgba(180,207,166,0.5)] transition-shadow duration-300" data-astro-cid-wrzvmyuk>
2
</div> <h3 class="font-heading font-semibold text-xl text-white mb-3 group-hover:text-[#e3f9ca] transition-colors" data-astro-cid-wrzvmyuk>
Diagnóstico inicial
</h3> <p class="text-white/70" data-astro-cid-wrzvmyuk>
Hacemos un análisis completo de tu veterinaria en una sesión de 90 minutos
</p> </div> <div class="group text-center bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-[#b4cfa6]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(180,207,166,0.2)]" data-astro-cid-wrzvmyuk> <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#66D4FF] to-[#4A738A] text-white flex items-center justify-center text-3xl font-heading font-bold shadow-lg group-hover:shadow-[0_0_30px_rgba(102,212,255,0.5)] transition-shadow duration-300" data-astro-cid-wrzvmyuk>
3
</div> <h3 class="font-heading font-semibold text-xl text-white mb-3 group-hover:text-[#e3f9ca] transition-colors" data-astro-cid-wrzvmyuk>
Plan personalizado
</h3> <p class="text-white/70" data-astro-cid-wrzvmyuk>
Diseñamos tu estrategia específica con objetivos, acciones y cronograma
</p> </div> <div class="group text-center bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-[#b4cfa6]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(180,207,166,0.2)]" data-astro-cid-wrzvmyuk> <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#b4cfa6] to-[#8fa886] text-[#0a1929] flex items-center justify-center text-3xl font-heading font-bold shadow-lg group-hover:shadow-[0_0_30px_rgba(180,207,166,0.5)] transition-shadow duration-300" data-astro-cid-wrzvmyuk>
4
</div> <h3 class="font-heading font-semibold text-xl text-white mb-3 group-hover:text-[#e3f9ca] transition-colors" data-astro-cid-wrzvmyuk>
Implementación
</h3> <p class="text-white/70" data-astro-cid-wrzvmyuk>
Empezamos a trabajar juntos en la ejecución y seguimiento continuo
</p> </div> </div> </div> </section>  <section class="section-padding bg-[#0a1929] relative overflow-hidden" data-astro-cid-wrzvmyuk> <!-- Acento decorativo --> <div class="absolute top-1/2 right-0 w-96 h-96 bg-[#b4cfa6]/5 rounded-full blur-[120px]" data-astro-cid-wrzvmyuk></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-wrzvmyuk> <div class="text-center mb-12" data-astro-cid-wrzvmyuk> <p class="text-sm font-semibold text-[#b4cfa6] uppercase tracking-wide mb-3" data-astro-cid-wrzvmyuk>
Sobre los servicios
</p> <h2 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white" data-astro-cid-wrzvmyuk>
Preguntas frecuentes
</h2> <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto" data-astro-cid-wrzvmyuk>
Respondemos las dudas más comunes sobre nuestros planes
</p> </div> <div class="mt-16" data-astro-cid-wrzvmyuk> ${renderComponent($$result2, "FAQAccordion", FAQAccordion, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/react/FAQAccordion.jsx", "client:component-export": "default", "data-astro-cid-wrzvmyuk": true })} </div> </div> </section>  <section class="section-padding bg-[#0a1929] relative overflow-hidden" data-astro-cid-wrzvmyuk> <!-- Background effects --> <div class="absolute inset-0 bg-gradient-radial from-[#1a2f42]/40 via-[#0a1929] to-[#020914]" data-astro-cid-wrzvmyuk></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b4cfa6]/10 rounded-full blur-[150px] animate-pulse-slow" data-astro-cid-wrzvmyuk></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-wrzvmyuk> <div class="max-w-3xl mx-auto text-center text-white" data-astro-cid-wrzvmyuk> <h2 class="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-[#e3f9ca] to-white bg-clip-text text-transparent" data-astro-cid-wrzvmyuk>
¿Todavía no estás seguro cuál plan elegir?
</h2> <p class="text-xl text-white/80 mb-10" data-astro-cid-wrzvmyuk>
Agenda una llamada de diagnóstico gratuita y te ayudamos a encontrar la mejor opción para tu veterinaria
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-wrzvmyuk> ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "secondary", "size": "lg", "class": "group relative overflow-hidden", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result3) => renderTemplate` <span class="relative z-10" data-astro-cid-wrzvmyuk>Agendar diagnóstico gratuito</span> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" data-astro-cid-wrzvmyuk></div> ` })} </div> </div> </div> </section> ` })} `;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/servicios.astro", void 0);
const $$file = "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/servicios.astro";
const $$url = "/servicios";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
