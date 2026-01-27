// Intersection Observer para activar animaciones al hacer scroll
// Optimizado para evitar forced reflows
export function initScrollAnimations() {
  // Use passive observing with optimized thresholds
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    // Batch DOM writes using requestAnimationFrame to avoid layout thrashing
    requestAnimationFrame(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Stop observing after animation to reduce overhead
          observer.unobserve(entry.target);
        }
      });
    });
  }, observerOptions);

  // Observe all elements with the animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => observer.observe(el));
  
  // Return cleanup function
  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}

// Ejecutar cuando el DOM esté listo
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}
