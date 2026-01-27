import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "¿Cuánto tiempo lleva ver resultados concretos?",
    answer: "Los primeros resultados suelen verse entre 30 y 60 días después de comenzar la implementación. Mejoras significativas en facturación y número de clientes se evidencian típicamente entre los 3 y 6 meses. Todo depende del punto de partida y el nivel de compromiso en la implementación."
  },
  {
    id: 2,
    question: "¿Necesito experiencia previa en marketing o gestión?",
    answer: "No es necesario. Nuestra metodología está diseñada para veterinarios sin experiencia en marketing o gestión empresarial. Te guiamos paso a paso y nos aseguramos de que entiendas cada acción que implementamos. Todo está explicado en lenguaje claro y práctico."
  },
  {
    id: 3,
    question: "¿Los planes tienen permanencia mínima?",
    answer: "Los planes Starter y Growth tienen una permanencia mínima de 3 meses para garantizar la implementación completa del método y poder medir resultados. El plan Elite se diseña a medida según objetivos y puede tener diferentes estructuras de compromiso."
  },
  {
    id: 4,
    question: "¿Qué pasa si no veo los resultados esperados?",
    answer: "Ofrecemos una garantía de satisfacción. Si después de 90 días de implementación completa no ves mejoras medibles en tu negocio, analizamos juntos qué ajustes necesitamos hacer. Nuestro compromiso es con tu éxito real y comprobable."
  },
  {
    id: 5,
    question: "¿Trabajás con veterinarias fuera de Argentina?",
    answer: "Sí, trabajamos con veterinarias de toda Latinoamérica y España. Todas las sesiones se realizan de forma virtual, lo que permite trabajar sin importar la ubicación geográfica. Las estrategias se adaptan al mercado local de cada país."
  },
  {
    id: 6,
    question: "¿Cuál es la diferencia entre los planes?",
    answer: "El plan Starter es ideal para comenzar con fundamentos de marketing y gestión. Growth incluye implementación completa de sistemas, CRM y automatizaciones con mayor acompañamiento. Elite es una consultoría integral para transformación profunda y expansión. La elección depende de tu etapa actual y objetivos."
  }
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="relative group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Glassmorphism Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:bg-white/15 border border-white/20 hover:border-white/30">
            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between p-6 text-left transition-all duration-300"
              aria-expanded={openId === faq.id}
            >
              <span 
                className="font-heading font-semibold text-lg text-white pr-8"
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
              >
                {faq.question}
              </span>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-[#b4cfa6] group-hover:border-[#b4cfa6] transition-all duration-300">
                <ChevronDown
                  size={20}
                  className={`text-white group-hover:text-[#0a1929] transition-all duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            
            <div
              className="transition-all duration-300"
              style={{
                display: 'grid',
                gridTemplateRows: openId === faq.id ? '1fr' : '0fr',
                transition: 'grid-template-rows 300ms ease-out'
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="px-6 pb-6 text-white/80 leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Additional Help - Enterprise Style */}
      <div className="mt-12 relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#b4cfa6]/10 rounded-2xl blur-xl"></div>
        
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center overflow-hidden group-hover:bg-white/15 hover:border-white/30 transition-all duration-500">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20 rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20 rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#b4cfa6]/20 to-[#b4cfa6]/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
              <span className="text-2xl">💬</span>
            </div>
            <p className="font-heading font-bold text-xl text-white mb-2">¿Tenés otra pregunta?</p>
            <p className="text-white/70 text-base mb-6">
              Estamos acá para ayudarte. Contactanos directamente.
            </p>
            <a
              href="https://wa.me/5491156092104?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20servicios%20de%20Vete%20a%20la%20Cima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#b4cfa6] hover:bg-[#b4cfa6]/90 text-[#0a1929] font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[#b4cfa6]/30"
            >
              <span>Contactar por WhatsApp</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
