import { a as createComponent, m as maybeRenderHead, b as renderTemplate, d as addAttribute, r as renderComponent } from "../_astro/astro/server.BqHzva7b.js";
import "piccolore";
import { $ as $$Layout } from "../_astro/Layout.CP1RwNZ-.js";
import "clsx";
import { Award, BookOpen, TrendingUp, Users } from "lucide-react";
/* empty css                                   */
import { renderers } from "../renderers.mjs";
const $$Biography = createComponent(($$result, $$props, $$slots) => {
  const bioData = {
    intro: "Hola, soy Virginia Vallejo. Médica Veterinaria, emprendedora, comunicadora en TV y especialista en transformación de clínicas veterinarias en negocios exitosos.",
    story: [
      "Soy originaria de Trelew, Chubut. A los 17 años di el salto más grande de mi vida: me mudé sola a Buenos Aires para perseguir mi pasión por la medicina veterinaria en la UBA. Durante la carrera, combiné mi pasión por la decoración y la estética con el amor por los animales, y así nació mi primer emprendimiento: Hoteles de Gatos Mishmosos, que fundé en 2013 y hoy ofrece un servicio 5 estrellas a familias que buscan lo mejor para sus felinos.",
      "Me gradué como Médica Veterinaria en la Universidad de Buenos Aires y complementé mi especialización en Diagnóstico Veterinario de Laboratorio en la UNLP, acreditada por CONEAU. Esta formación me otorgó un profundo conocimiento en microbiología, bioquímica clínica, histopatología, inmunología y genética molecular, pilares fundamentales para mi práctica profesional.",
      "Consciente de que el éxito requiere más que conocimientos técnicos, ampié mi perfil con formación en gestión empresarial, marketing digital y liderazgo. Cursé la Especialización en Dirección y Gestión de Pymes en la Facultad de Ciencias Económicas UBA, el programa Management Integral de Negocios Digitales en Minders-Group, y actualmente soy candidata al Master in Digital Business en la Escuela de Negocios de San Andrés. También me formé en Liderazgo con Perspectiva de Género en la Universidad Torcuato Di Tella.",
      "Trabajé en empresas líderes como Eukanuba (2011-2015), Royal Canin (2016-2017), JENCK SA asesorando la línea IDEXX (2017-2019), y Zoetis (2020-2022) donde lideré el desarrollo del portfolio de VetScan y la instalación de analizadores en clínicas veterinarias. A fines de 2022, dejé la relación de dependencia para dedicarme 100% a desarrollar mis empresas y proyectos de consultoría.",
      "Entre 2024 ocupé posiciones de liderazgo: CEO de Id Animal (startup de trazabilidad de ganado con IA) y Chief Marketing Officer de Mascoters (marketplace de cuidadores de mascotas), experiencias que me dieron una visión integral del ecosistema pet tech. Desde noviembre de 2024 soy panelista en Viva la Vida (Unife TV), donde comparto conocimientos sobre salud, nutrición y prevención de enfermedades en perros y gatos. Escribo regularmente para la revista 'Mi Negocio Veterinario', compartiendo insights sobre gestión empresarial y tendencias del mercado pet."
    ],
    mission: "Mi misión es ayudar a veterinarios apasionados a construir negocios prósperos sin sacrificar su amor por la profesión. Combino mi experiencia clínica de más de 15 años con mi expertise en gestión empresarial, marketing digital y desarrollo de negocios para transformar clínicas veterinarias en empresas exitosas y escalables.",
    expertise: "Trabajo con metodologías ágiles, design thinking, PNL y neuroventas para ofrecer soluciones innovadoras. Mi enfoque combina el conocimiento técnico-veterinario con estrategias probadas en el mundo real de los negocios digitales y el emprendimiento.",
    approach: "Trabajo de forma personalizada porque sé que cada clínica es única. No vendo fórmulas mágicas: ofrezco estrategias probadas, acompañamiento constante y un método que equilibra el amor por los animales con la visión empresarial sólida. Soy apasionada del aprendizaje continuo y la innovación, aplicando nuevas metodologías en cada proyecto que emprendo."
  };
  return renderTemplate`${maybeRenderHead()}<div class="prose prose-lg max-w-none"> <div class="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed"> ${bioData.intro} </div> ${bioData.story.map((paragraph) => renderTemplate`<p class="text-lg text-white/80 leading-relaxed mb-6"> ${paragraph} </p>`)} <div class="my-12 p-8 bg-gradient-to-r from-[#b4cfa6]/20 to-[#66D4FF]/20 backdrop-blur-sm rounded-2xl border-l-4 border-[#b4cfa6]"> <h3 class="font-heading font-bold text-2xl text-white mb-4">
Mi Misión
</h3> <p class="text-lg text-white/90 leading-relaxed"> ${bioData.mission} </p> </div> <div class="my-8 p-8 bg-gradient-to-r from-[#66D4FF]/20 to-[#b4cfa6]/20 backdrop-blur-sm rounded-2xl border-l-4 border-[#66D4FF]"> <h3 class="font-heading font-bold text-2xl text-white mb-4">
Mi Metodología
</h3> <p class="text-lg text-white/90 leading-relaxed"> ${bioData.expertise} </p> </div> <p class="text-lg text-white/80 leading-relaxed mb-6"> ${bioData.approach} </p> <div class="mt-12 p-8 bg-gradient-to-r from-[#b4cfa6]/10 to-[#66D4FF]/10 backdrop-blur-sm text-white rounded-2xl border border-white/20"> <p class="text-xl font-semibold mb-4">
Si sos veterinario y sentís que tu clínica puede dar mucho más...
</p> <p class="text-lg opacity-90">
Estoy acá para ayudarte a construir el negocio que siempre soñaste, sin perder la esencia de lo que amás hacer.
</p> </div> </div>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/sobre-mi/Biography.astro", void 0);
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const timeline = [
    {
      year: "2011",
      title: "Inicios en la Industria Veterinaria",
      description: "Comienzo mi carrera con Eukanuba mientras estudio Medicina Veterinaria en la UBA. Promoción de productos y participación en congresos veterinarios."
    },
    {
      year: "2013",
      title: "Fundación de Hoteles de Gatos Mishmosos",
      description: "Creo mi primer emprendimiento: un hotel 5 estrellas para gatos. Combino mi pasión por la decoración y estética con el cuidado profesional de felinos. Dirijo todas las áreas: dirección, gestión, marketing, ventas y redes sociales."
    },
    {
      year: "2016-2017",
      title: "Asesoramiento Nutricional - Royal Canin",
      description: "Trabajo en asesoramiento nutricional veterinario en Capital Federal, especializándome en nutrición animal."
    },
    {
      year: "2017-2019",
      title: "Territory Manager - JENCK SA (IDEXX)",
      description: "Asesoramiento técnico comercial para la línea de pequeños animales de IDEXX en Argentina, desarrollando relaciones clave con clínicas veterinarias."
    },
    {
      year: "2019",
      title: "Graduación UBA + Formación Digital",
      description: "Me gradúo como Médica Veterinaria (UBA). Realizo el Programa Ejecutivo de Gestión de Redes Sociales en la Universidad de Palermo."
    },
    {
      year: "2020-2022",
      title: "Zoetis - Territory Manager y VetScan Project Lead",
      description: "Lideré el desarrollo del portfolio de VetScan en Argentina. Instalación de analizadores de hematología y bioquímica en clínicas veterinarias y entrenamiento de profesionales veterinarios."
    },
    {
      year: "2020-2021",
      title: "Especializaciones Académicas",
      description: "Especialización en Diagnóstico Veterinario de Laboratorio (UNLP), Dirección y Gestión de Pymes (UBA), y Liderazgo con Perspectiva de Género (Universidad Torcuato Di Tella)."
    },
    {
      year: "2022",
      title: "Salto al Emprendimiento Full Time",
      description: "Decisión estratégica: dejo la relación de dependencia para dedicarme 100% al desarrollo y escalabilidad de mis empresas y proyectos de consultoría."
    },
    {
      year: "2023",
      title: "Management Digital - Minders Group",
      description: "Realizo el programa de Management Integral de Negocios Digitales en Minders Group, profundizando en estrategias digitales con los mejores del ecosistema."
    },
    {
      year: "2024",
      title: "CEO y CMO en Startups Pet Tech",
      description: "CEO de Id Animal (agosto-diciembre 2024): Lideré una startup de trazabilidad de ganado con IA. CMO de Mascoters (abril-octubre 2024): Impulsé el crecimiento de esta plataforma de cuidadores de mascotas. Ingreso al Master in Digital Business de San Andrés."
    },
    {
      year: "2024-Actualidad",
      title: "Comunicadora Veterinaria y Consultora",
      description: "Panelista en Viva la Vida (Unife TV) desde noviembre 2024, compartiendo conocimientos sobre bienestar animal, salud, nutrición y prevención. Escritora regular para la revista Mi Negocio Veterinario, combinando experiencia veterinaria con gestión empresarial."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <!-- Timeline Line with gradient --> <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b4cfa6] via-[#66D4FF] to-[#b4cfa6] shadow-[0_0_10px_rgba(180,207,166,0.5)]"></div> <div class="space-y-12"> ${timeline.map((item, index) => renderTemplate`<div${addAttribute([
    "relative flex items-center",
    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
  ], "class:list")}> <!-- Year Badge with glow --> <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#b4cfa6] to-[#8fa886] text-[#0a1929] flex items-center justify-center font-heading font-bold text-lg shadow-[0_0_20px_rgba(180,207,166,0.5)] z-10 animate-pulse-slow"> ${item.year.slice(-2)} </div> <!-- Content Card with glassmorphism --> <div${addAttribute([
    "ml-24 md:ml-0 md:w-5/12",
    index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
  ], "class:list")}> <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl hover:bg-white/15 hover:shadow-[0_0_40px_rgba(180,207,166,0.3)] hover:border-[#b4cfa6]/50 transition-all duration-500 hover:scale-105 group"> <div class="text-sm text-[#b4cfa6] font-semibold mb-2 group-hover:text-[#e3f9ca] transition-colors"> ${item.year} </div> <h3 class="font-heading font-semibold text-xl text-white mb-3 group-hover:text-[#b4cfa6] transition-colors"> ${item.title} </h3> <p class="text-white/80 leading-relaxed"> ${item.description} </p> </div> </div> </div>`)} </div> </div>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/sobre-mi/Timeline.astro", void 0);
const $$Credentials = createComponent(($$result, $$props, $$slots) => {
  const credentials = [
    {
      icon: "award",
      title: "Médica Veterinaria",
      description: "Universidad de Buenos Aires (UBA)",
      year: "2019"
    },
    {
      icon: "book",
      title: "Especialista en Diagnóstico de Laboratorio",
      description: "Universidad Nacional de La Plata (UNLP) - Acreditada por CONEAU",
      year: "2021"
    },
    {
      icon: "trending",
      title: "Dirección y Gestión de Pymes",
      description: "Facultad de Ciencias Económicas - UBA",
      year: "2021"
    },
    {
      icon: "users",
      title: "Master in Digital Business Candidate",
      description: "Escuela de Negocios de San Andrés",
      year: "2024"
    },
    {
      icon: "book",
      title: "Management Integral de Negocios Digitales",
      description: "Minders-Group",
      year: "2023"
    },
    {
      icon: "award",
      title: "Liderazgo con Perspectiva de Género",
      description: "Universidad Torcuato Di Tella",
      year: "2020"
    }
  ];
  const achievements = [
    "Médica Veterinaria con +15 años de experiencia",
    "Fundadora y Directora de Hoteles de Gatos Mishmosos (12+ años)",
    "Panelista en Viva la Vida (Unife TV) - Bienestar Animal",
    "Especialista en Diagnóstico Veterinario de Laboratorio (microbiología, bioquímica, histopatología, inmunología)",
    "Ex CEO de Id Animal - Startup de trazabilidad de ganado con IA (2024)",
    "Ex Chief Marketing Officer de Mascoters - Marketplace de cuidadores (2024)",
    "VetScan Project Lead en Zoetis - Liderazgo de innovación tecnológica veterinaria",
    "Escritora para la revista Mi Negocio Veterinario",
    "Especialista en Marketing Digital y Redes Sociales",
    "Formación en Metodologías Ágiles y Design Thinking",
    "Experta en PNL y Neuroventas",
    "Nivel de inglés C1 Advanced (EF SET)",
    "Especialización en Excel para analistas financieros",
    "Certificada en Oratoria y Comunicación Eficaz",
    "Especialista en Productividad Personal"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="space-y-12"> <!-- Credentials Grid --> <div> <h2 class="font-heading font-bold text-3xl text-white mb-8">
Formación y Experiencia
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${credentials.map((cred) => renderTemplate`<div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl hover:bg-white/15 hover:shadow-[0_0_40px_rgba(180,207,166,0.3)] hover:border-[#b4cfa6]/50 transition-all duration-500 hover:scale-105 group"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-[#b4cfa6]/20 flex items-center justify-center group-hover:bg-[#b4cfa6]/30 group-hover:scale-110 transition-all duration-300"> ${cred.icon === "award" && renderTemplate`${renderComponent($$result, "Award", Award, { "className": "text-[#b4cfa6]", "size": 24 })}`} ${cred.icon === "book" && renderTemplate`${renderComponent($$result, "BookOpen", BookOpen, { "className": "text-[#b4cfa6]", "size": 24 })}`} ${cred.icon === "trending" && renderTemplate`${renderComponent($$result, "TrendingUp", TrendingUp, { "className": "text-[#b4cfa6]", "size": 24 })}`} ${cred.icon === "users" && renderTemplate`${renderComponent($$result, "Users", Users, { "className": "text-[#b4cfa6]", "size": 24 })}`} </div> <div class="flex-1"> <div class="flex items-start justify-between mb-2"> <h3 class="font-heading font-semibold text-lg text-white group-hover:text-[#b4cfa6] transition-colors"> ${cred.title} </h3> <span class="text-sm text-[#66D4FF] font-semibold"> ${cred.year} </span> </div> <p class="text-white/80"> ${cred.description} </p> </div> </div> </div>`)} </div> </div> <!-- Achievements --> <div> <h2 class="font-heading font-bold text-3xl text-white mb-8">
Logros Destacados
</h2> <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8"> <ul class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${achievements.map((achievement) => renderTemplate`<li class="flex items-start space-x-3 group"> <svg class="flex-shrink-0 w-6 h-6 text-[#b4cfa6] mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-white/90 group-hover:text-white transition-colors"> ${achievement} </span> </li>`)} </ul> </div> </div> <!-- Stats with gradient --> <div class="bg-gradient-to-br from-[#b4cfa6]/20 to-[#66D4FF]/20 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 text-white shadow-2xl"> <h3 class="font-heading font-bold text-2xl md:text-3xl mb-8 text-center">
En números
</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-8"> <div class="text-center group"> <div class="text-4xl md:text-5xl font-heading font-bold text-[#b4cfa6] mb-2 group-hover:scale-110 transition-transform">
15+
</div> <div class="text-sm md:text-base text-white/80">
Años de experiencia
</div> </div> <div class="text-center group"> <div class="text-4xl md:text-5xl font-heading font-bold text-[#66D4FF] mb-2 group-hover:scale-110 transition-transform">
12+
</div> <div class="text-sm md:text-base text-white/80">
Años emprendiendo
</div> </div> <div class="text-center group"> <div class="text-4xl md:text-5xl font-heading font-bold text-[#b4cfa6] mb-2 group-hover:scale-110 transition-transform">
6
</div> <div class="text-sm md:text-base text-white/80">
Especializaciones
</div> </div> <div class="text-center group"> <div class="text-4xl md:text-5xl font-heading font-bold text-[#66D4FF] mb-2 group-hover:scale-110 transition-transform">
3
</div> <div class="text-sm md:text-base text-white/80">
Roles C-Level
</div> </div> </div> </div> </div>`;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/components/sobre-mi/Credentials.astro", void 0);
const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Mí - Virginia Vallejo", "description": "Conocé la historia de Virginia Vallejo, veterinaria y consultora especializada en crecimiento de clínicas veterinarias. +15 años de experiencia transformando negocios.", "data-astro-cid-gfcmjnow": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="min-h-screen flex items-center relative overflow-hidden scroll-mt-20" data-astro-cid-gfcmjnow> <!-- Imagen de fondo con overlay estratégico --> <div class="absolute inset-0 z-0" data-astro-cid-gfcmjnow> <div class="absolute inset-0 bg-[#0a1929]" data-astro-cid-gfcmjnow></div> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style="background-image: url('/images/banner2.webp'); background-position: center 40%;" data-astro-cid-gfcmjnow></div> <!-- Overlays graduales para legibilidad --> <div class="absolute inset-0 bg-gradient-to-b from-[#0a1929]/70 via-[#0a1929]/50 to-[#0a1929]/80" data-astro-cid-gfcmjnow></div> <div class="absolute inset-0 bg-gradient-to-r from-[#0a1929]/60 via-transparent to-[#0a1929]/60" data-astro-cid-gfcmjnow></div> </div> <!-- Grid pattern sutil --> <div class="absolute inset-0 opacity-[0.015] z-[1]" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 48px 48px;" data-astro-cid-gfcmjnow></div> <div class="container-custom px-4 md:px-8 relative z-10 py-32 md:py-40" data-astro-cid-gfcmjnow> <div class="max-w-7xl mx-auto" data-astro-cid-gfcmjnow> <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" data-astro-cid-gfcmjnow> <!-- Imagen - Lado izquierdo --> <div class="order-2 lg:order-1 animate-fade-in-left" data-astro-cid-gfcmjnow> <div class="relative max-w-lg mx-auto lg:mx-0" data-astro-cid-gfcmjnow> <!-- Contenedor principal con borde gradiente --> <div class="relative group" data-astro-cid-gfcmjnow> <!-- Glow effect sutil --> <div class="absolute inset-0 bg-gradient-to-br from-[#b4cfa6]/20 to-[#66D4FF]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" data-astro-cid-gfcmjnow></div> <!-- Frame con gradiente --> <div class="relative bg-gradient-to-br from-[#b4cfa6]/30 via-[#66D4FF]/20 to-[#3e6680]/30 p-[2px] rounded-2xl" data-astro-cid-gfcmjnow> <div class="relative overflow-hidden rounded-2xl bg-[#0a1929] aspect-square" data-astro-cid-gfcmjnow> <img src="/images/about/vir1.webp" alt="Virginia Vallejo - Veterinaria y Consultora" class="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105" data-astro-cid-gfcmjnow> <!-- Overlay sutil en hover --> <div class="absolute inset-0 bg-gradient-to-t from-[#0a1929]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" data-astro-cid-gfcmjnow></div> </div> </div> <!-- Badge experiencia --> <div class="absolute -bottom-4 -right-4 animate-float-subtle" data-astro-cid-gfcmjnow> <div class="bg-gradient-to-br from-[#b4cfa6] to-[#8fa886] text-[#0a1929] px-6 py-3 rounded-xl shadow-lg border-2 border-white/20" data-astro-cid-gfcmjnow> <div class="flex items-center gap-2.5" data-astro-cid-gfcmjnow> <div data-astro-cid-gfcmjnow> <p class="text-lg font-bold leading-none" data-astro-cid-gfcmjnow>+15 años</p> <p class="text-xs font-semibold opacity-80 uppercase tracking-wide" data-astro-cid-gfcmjnow>Experiencia</p> </div> </div> </div> </div> <!-- Decoración minimalista --> <div class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#b4cfa6]/30 rounded-tr-2xl" data-astro-cid-gfcmjnow></div> <div class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#66D4FF]/30 rounded-bl-2xl" data-astro-cid-gfcmjnow></div> </div> </div> </div> <!-- Contenido - Lado derecho --> <div class="order-1 lg:order-2 text-white animate-fade-in-right" data-astro-cid-gfcmjnow> <!-- Badge superior minimalista --> <div class="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10" data-astro-cid-gfcmjnow> <div class="w-2 h-2 bg-[#b4cfa6] rounded-full" data-astro-cid-gfcmjnow></div> <span class="text-[#b4cfa6] font-semibold text-xs uppercase tracking-widest" data-astro-cid-gfcmjnow>
Sobre Mí
</span> </div> <!-- Título principal --> <h1 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-[1.1]" data-astro-cid-gfcmjnow> <span class="block text-white mb-2" data-astro-cid-gfcmjnow>Veterinaria,</span> <span class="block text-white mb-2" data-astro-cid-gfcmjnow>Empresaria y</span> <span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#b4cfa6] via-[#a5c096] to-[#66D4FF]" data-astro-cid-gfcmjnow>
Consultora
</span> </h1> <!-- Línea decorativa --> <div class="flex items-center gap-3 mb-6" data-astro-cid-gfcmjnow> <div class="h-[2px] w-16 bg-gradient-to-r from-[#b4cfa6] to-transparent" data-astro-cid-gfcmjnow></div> <div class="w-1.5 h-1.5 rounded-full bg-[#b4cfa6]" data-astro-cid-gfcmjnow></div> <div class="h-[2px] flex-1 max-w-[100px] bg-gradient-to-r from-[#b4cfa6]/50 to-transparent" data-astro-cid-gfcmjnow></div> </div> <!-- Descripción principal --> <div class="space-y-5 mb-8" data-astro-cid-gfcmjnow> <p class="text-xl md:text-2xl text-white/95 leading-relaxed font-light" data-astro-cid-gfcmjnow>
Mi misión es ayudar a veterinarios apasionados a construir negocios prósperos sin sacrificar su amor por la profesión.
</p> <!-- Quote destacado con diseño minimalista --> <div class="relative pl-6 border-l-2 border-[#b4cfa6] bg-white/[0.03] backdrop-blur-sm py-4 pr-4 rounded-r-lg" data-astro-cid-gfcmjnow> <p class="text-lg md:text-xl text-white/90 italic font-light leading-relaxed" data-astro-cid-gfcmjnow>
"Transformar clínicas veterinarias en negocios exitosos es mi pasión y mi compromiso"
</p> </div> </div> <!-- Stats cards minimalistas --> <div class="grid grid-cols-2 gap-4 mb-10" data-astro-cid-gfcmjnow> <!-- Card 1 --> <div class="group relative overflow-hidden" data-astro-cid-gfcmjnow> <div class="absolute inset-0 bg-gradient-to-br from-[#b4cfa6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-gfcmjnow></div> <div class="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-[#b4cfa6]/30 transition-all duration-300" data-astro-cid-gfcmjnow> <div class="flex items-start gap-3" data-astro-cid-gfcmjnow> <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[#b4cfa6]/20 to-[#b4cfa6]/5 flex items-center justify-center flex-shrink-0" data-astro-cid-gfcmjnow> <span class="text-xl" data-astro-cid-gfcmjnow>🎯</span> </div> <div data-astro-cid-gfcmjnow> <p class="text-2xl font-bold text-white mb-0.5" data-astro-cid-gfcmjnow>100%</p> <p class="text-xs text-white/70 font-medium uppercase tracking-wide" data-astro-cid-gfcmjnow>Enfoque personalizado</p> </div> </div> </div> </div> <!-- Card 2 --> <div class="group relative overflow-hidden" data-astro-cid-gfcmjnow> <div class="absolute inset-0 bg-gradient-to-br from-[#66D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-gfcmjnow></div> <div class="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-[#66D4FF]/30 transition-all duration-300" data-astro-cid-gfcmjnow> <div class="flex items-start gap-3" data-astro-cid-gfcmjnow> <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[#66D4FF]/20 to-[#66D4FF]/5 flex items-center justify-center flex-shrink-0" data-astro-cid-gfcmjnow> <span class="text-xl" data-astro-cid-gfcmjnow>📈</span> </div> <div data-astro-cid-gfcmjnow> <p class="text-2xl font-bold text-white mb-0.5" data-astro-cid-gfcmjnow>15+</p> <p class="text-xs text-white/70 font-medium uppercase tracking-wide" data-astro-cid-gfcmjnow>Años experiencia</p> </div> </div> </div> </div> </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4" data-astro-cid-gfcmjnow> <a href="/contacto" class="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b4cfa6] to-[#8fa886] text-[#0a1929] rounded-lg font-semibold text-base hover:shadow-[0_8px_30px_rgba(180,207,166,0.4)] transition-all duration-300 hover:scale-[1.02]" data-astro-cid-gfcmjnow> <span data-astro-cid-gfcmjnow>Trabajemos juntos</span> <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-gfcmjnow> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-gfcmjnow></path> </svg> </a> <a href="#historia" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]" data-astro-cid-gfcmjnow> <span data-astro-cid-gfcmjnow>Conocé mi historia</span> </a> </div> </div> </div> </div> </div> </section>  <section id="historia" class="section-padding bg-[#0a1929] scroll-mt-20 relative overflow-hidden" data-astro-cid-gfcmjnow> <!-- Decorative blur accents --> <div class="absolute top-20 left-10 w-96 h-96 bg-[#b4cfa6]/10 rounded-full blur-3xl opacity-50 animate-float" data-astro-cid-gfcmjnow></div> <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#66D4FF]/10 rounded-full blur-3xl opacity-50 animate-float-delayed" data-astro-cid-gfcmjnow></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-gfcmjnow> <div class="max-w-4xl mx-auto" data-astro-cid-gfcmjnow> <!-- Title --> <div class="text-center mb-12 animate-fade-in-up" data-astro-cid-gfcmjnow> <p class="text-[#b4cfa6] uppercase tracking-wider text-sm font-semibold mb-3" data-astro-cid-gfcmjnow>De veterinaria a consultora</p> <h2 class="font-heading font-bold text-4xl md:text-5xl text-white mb-4" data-astro-cid-gfcmjnow>Mi Historia</h2> </div> <div class="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl hover:shadow-[0_0_60px_rgba(180,207,166,0.2)] transition-all duration-500 animate-fade-in-up" style="animation-delay: 0.2s" data-astro-cid-gfcmjnow> ${renderComponent($$result2, "Biography", $$Biography, { "data-astro-cid-gfcmjnow": true })} </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-b from-[#0a1929] via-[#0f1f33] to-[#0a1929] relative overflow-hidden" data-astro-cid-gfcmjnow> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;" data-astro-cid-gfcmjnow></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-gfcmjnow> <!-- Title --> <div class="text-center mb-16 animate-fade-in-up" data-astro-cid-gfcmjnow> <p class="text-[#b4cfa6] uppercase tracking-wider text-sm font-semibold mb-3" data-astro-cid-gfcmjnow>Timeline profesional</p> <h2 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6" data-astro-cid-gfcmjnow>Mi Trayectoria</h2> <p class="text-white/70 text-lg max-w-2xl mx-auto" data-astro-cid-gfcmjnow>Desde mis inicios en 2011 hasta hoy, un camino de aprendizaje y transformación</p> </div> <div class="mt-16 max-w-6xl mx-auto" data-astro-cid-gfcmjnow> ${renderComponent($$result2, "Timeline", $$Timeline, { "data-astro-cid-gfcmjnow": true })} </div> </div> </section>  <section class="section-padding bg-[#0a1929] relative overflow-hidden" data-astro-cid-gfcmjnow> <!-- Decorative blur accents --> <div class="absolute top-40 right-20 w-96 h-96 bg-[#66D4FF]/10 rounded-full blur-3xl opacity-50" data-astro-cid-gfcmjnow></div> <div class="absolute bottom-20 left-20 w-96 h-96 bg-[#b4cfa6]/10 rounded-full blur-3xl opacity-50" data-astro-cid-gfcmjnow></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-gfcmjnow> <div class="max-w-6xl mx-auto" data-astro-cid-gfcmjnow> <!-- Title --> <div class="text-center mb-16 animate-fade-in-up" data-astro-cid-gfcmjnow> <p class="text-[#b4cfa6] uppercase tracking-wider text-sm font-semibold mb-3" data-astro-cid-gfcmjnow>Experiencia y resultados</p> <h2 class="font-heading font-bold text-4xl md:text-5xl text-white mb-4" data-astro-cid-gfcmjnow>Credenciales y Logros</h2> </div> <div class="mt-16" data-astro-cid-gfcmjnow> ${renderComponent($$result2, "Credentials", $$Credentials, { "data-astro-cid-gfcmjnow": true })} </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-b from-[#0a1929] to-[#0f1f33] relative overflow-hidden" data-astro-cid-gfcmjnow> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;" data-astro-cid-gfcmjnow></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-gfcmjnow> <!-- Title --> <div class="text-center mb-16 animate-fade-in-up" data-astro-cid-gfcmjnow> <p class="text-[#b4cfa6] uppercase tracking-wider text-sm font-semibold mb-3" data-astro-cid-gfcmjnow>En qué creo</p> <h2 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6" data-astro-cid-gfcmjnow>Mis Valores</h2> <p class="text-white/70 text-lg max-w-2xl mx-auto" data-astro-cid-gfcmjnow>Los principios que guían mi trabajo y mi consultoría</p> </div> <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-gfcmjnow> <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center hover:bg-white/15 hover:border-[#b4cfa6]/50 hover:scale-105 hover:shadow-[0_0_40px_rgba(180,207,166,0.3)] transition-all duration-500 group animate-fade-in-up" data-astro-cid-gfcmjnow> <div class="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" data-astro-cid-gfcmjnow>💡</div> <h3 class="font-heading font-semibold text-xl text-white mb-4" data-astro-cid-gfcmjnow>
Transparencia
</h3> <p class="text-white/80 leading-relaxed" data-astro-cid-gfcmjnow>
Sin promesas mágicas. Solo resultados reales basados en trabajo y estrategia.
</p> </div> <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center hover:bg-white/15 hover:border-[#66D4FF]/50 hover:scale-105 hover:shadow-[0_0_40px_rgba(102,212,255,0.3)] transition-all duration-500 group animate-fade-in-up" style="animation-delay: 0.1s" data-astro-cid-gfcmjnow> <div class="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" data-astro-cid-gfcmjnow>🤝</div> <h3 class="font-heading font-semibold text-xl text-white mb-4" data-astro-cid-gfcmjnow>
Compromiso
</h3> <p class="text-white/80 leading-relaxed" data-astro-cid-gfcmjnow>
Tu éxito es mi éxito. Trabajo codo a codo hasta lograr los resultados.
</p> </div> <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center hover:bg-white/15 hover:border-[#b4cfa6]/50 hover:scale-105 hover:shadow-[0_0_40px_rgba(180,207,166,0.3)] transition-all duration-500 group animate-fade-in-up" style="animation-delay: 0.2s" data-astro-cid-gfcmjnow> <div class="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" data-astro-cid-gfcmjnow>📈</div> <h3 class="font-heading font-semibold text-xl text-white mb-4" data-astro-cid-gfcmjnow>
Resultados
</h3> <p class="text-white/80 leading-relaxed" data-astro-cid-gfcmjnow>
Foco absoluto en métricas y objetivos medibles. Lo que no se mide, no se mejora.
</p> </div> </div> </div> </section>  <section class="section-padding bg-[#0a1929] relative overflow-hidden" data-astro-cid-gfcmjnow> <!-- Gradient radial background --> <div class="absolute inset-0 bg-gradient-radial from-[#1a2f42]/60 via-[#0a1929] to-[#0a1929]" data-astro-cid-gfcmjnow></div> <!-- Animated pulse blob --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b4cfa6]/5 rounded-full blur-3xl animate-pulse-slow" data-astro-cid-gfcmjnow></div> <div class="container-custom px-4 md:px-8 relative z-10" data-astro-cid-gfcmjnow> <div class="max-w-3xl mx-auto text-center text-white" data-astro-cid-gfcmjnow> <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#b4cfa6]/20 backdrop-blur-sm rounded-full mb-6 border border-[#b4cfa6]/30 animate-fade-in-up" data-astro-cid-gfcmjnow> <span class="w-2 h-2 bg-[#b4cfa6] rounded-full animate-pulse shadow-[0_0_8px_rgba(180,207,166,0.8)]" data-astro-cid-gfcmjnow></span> <span class="text-[#b4cfa6] font-semibold text-xs uppercase tracking-wider" data-astro-cid-gfcmjnow>
Comenzá tu transformación
</span> </div> <h2 class="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 animate-fade-in-up" style="animation-delay: 0.1s" data-astro-cid-gfcmjnow> <span class="inline-block" data-astro-cid-gfcmjnow>¿Te identificás</span> <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#b4cfa6] to-[#66D4FF]" data-astro-cid-gfcmjnow>con mi historia?</span> </h2> <p class="text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s" data-astro-cid-gfcmjnow>
Si sentís que tu clínica puede dar más y estás buscando alguien que entienda tu realidad, hablemos.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style="animation-delay: 0.3s" data-astro-cid-gfcmjnow> <a href="/contacto" class="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b4cfa6] to-[#8fa886] text-[#0a1929] rounded-xl font-semibold text-lg hover:shadow-[0_0_30px_rgba(180,207,166,0.5)] transition-all duration-300 hover:scale-105 overflow-hidden" data-astro-cid-gfcmjnow> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" data-astro-cid-gfcmjnow></span> <span class="relative" data-astro-cid-gfcmjnow>Agenda una llamada</span> <svg class="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-gfcmjnow> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-gfcmjnow></path> </svg> </a> <a href="/servicios" class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0a1929] hover:border-white transition-all duration-300 hover:scale-105" data-astro-cid-gfcmjnow>
Ver servicios
</a> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/sobre-mi.astro", void 0);
const $$file = "C:/Users/Usuario/Desktop/proyectos-para-presentar-en-portfolio/virgina vallejo/Proyecto/VeteALaCima/src/pages/sobre-mi.astro";
const $$url = "/sobre-mi";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SobreMi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
