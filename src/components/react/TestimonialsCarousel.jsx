import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Martín López",
    role: "Director",
    clinic: "Veterinaria San Martín",
    location: "Buenos Aires",
    avatar: "/images/placeholders/avatar-placeholder.svg",
    rating: 5,
    text: "Gracias a Virginia duplicamos nuestra facturación en 6 meses. Su método es claro, práctico y realmente funciona. Implementamos todas las estrategias y los resultados fueron inmediatos. Totalmente recomendable.",
    results: {
      revenue: "+120%",
      clients: "+85%",
      time: "6 meses"
    }
  },
  {
    id: 2,
    name: "Dra. Carolina Méndez",
    role: "Fundadora",
    clinic: "Centro Veterinario Integral",
    location: "Córdoba",
    avatar: "/images/placeholders/avatar-placeholder.svg",
    rating: 5,
    text: "Implementamos todas las estrategias y nuestra agenda está llena constantemente. El acompañamiento es excelente y sentís que realmente se preocupan por tu éxito. La mejor inversión que hice para mi clínica.",
    results: {
      revenue: "+95%",
      clients: "+150%",
      time: "4 meses"
    }
  },
  {
    id: 3,
    name: "Dr. Santiago Ruiz",
    role: "Propietario",
    clinic: "Clínica Veterinaria del Centro",
    location: "Rosario",
    avatar: "/images/placeholders/avatar-placeholder.svg",
    rating: 5,
    text: "Virginia me ayudó a estructurar mi negocio de forma profesional. Ahora tengo procesos claros, un equipo capacitado y por primera vez en años puedo tomarme vacaciones sin preocuparme. El cambio fue increíble.",
    results: {
      revenue: "+80%",
      clients: "+60%",
      time: "5 meses"
    }
  }
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  };

  // Autoplay - Optimized to reduce reflow triggers
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Card - Enterprise Dark Style */}
      <div className="relative group">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-500">
          
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/20 rounded-tl-xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/20 rounded-br-xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Quote Icon - Minimalist */}
          <div className="absolute top-8 right-8 text-white/10 text-7xl md:text-8xl font-serif leading-none pointer-events-none">
            "
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Rating - Enterprise style */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#b4cfa6] text-[#b4cfa6] drop-shadow-lg" />
              ))}
            </div>

            {/* Testimonial Text - Light text with shadow */}
            <blockquote 
              className="text-white text-lg md:text-xl leading-relaxed mb-8 min-h-[120px] font-medium"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
            >
              {testimonials[current].text}
            </blockquote>

            {/* Results - Glassmorphism boxes */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-[#b4cfa6] mb-1">
                  {testimonials[current].results.revenue}
                </div>
                <div className="text-xs md:text-sm text-white/70">Facturación</div>
              </div>
              <div className="text-center border-l border-r border-white/10">
                <div className="text-2xl md:text-3xl font-heading font-bold text-[#b4cfa6] mb-1">
                  {testimonials[current].results.clients}
                </div>
                <div className="text-xs md:text-sm text-white/70">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-[#b4cfa6] mb-1">
                  {testimonials[current].results.time}
                </div>
                <div className="text-xs md:text-sm text-white/70">Tiempo</div>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b4cfa6]/20 to-[#b4cfa6]/10 pointer-events-none"></div>
              </div>
              <div>
                <div className="font-heading font-semibold text-lg text-white mb-1">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-white/80">
                  {testimonials[current].role} - {testimonials[current].clinic}
                </div>
                <div className="text-xs text-white/60">
                  {testimonials[current].location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Enterprise style */}
      <button
        onClick={() => handleManualNavigation('prev')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#b4cfa6] hover:text-[#0a1929] transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#b4cfa6]"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleManualNavigation('next')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#b4cfa6] hover:text-[#0a1929] transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#b4cfa6]"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator - Minimalist tech style */}
      <div className="flex items-center justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-[#b4cfa6] w-8 shadow-[0_0_10px_rgba(180,207,166,0.5)]'
                : 'bg-white/30 w-3 hover:bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
