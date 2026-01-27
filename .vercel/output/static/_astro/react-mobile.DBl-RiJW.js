import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Home, Briefcase, BookOpen, User, Mail, ChevronRight } from "lucide-react";
const NAVIGATION_LINKS = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Servicios", href: "/servicios", icon: Briefcase },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Sobre Mí", href: "/sobre-mi", icon: User },
  { label: "Contacto", href: "/contacto", icon: Mail }
];
function MobileMenu({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      if (isOpen) {
        document.body.style.cssText = "overflow: hidden; overflow-x: hidden;";
        document.documentElement.style.overflowX = "hidden";
      } else {
        document.body.style.cssText = "";
        document.documentElement.style.overflowX = "";
      }
    });
    return () => {
      cancelAnimationFrame(rafId);
      requestAnimationFrame(() => {
        document.body.style.cssText = "";
        document.documentElement.style.overflowX = "";
      });
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleMenu,
        className: "relative p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-azul-electrico/50",
        "aria-label": "Toggle menu",
        style: {
          color: "#b4cfa6"
          // Verde claro de la paleta
        },
        children: /* @__PURE__ */ jsxs("div", { className: "relative w-6 h-6", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? "top-1/2 rotate-45" : "top-1"}`
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `absolute left-0 top-1/2 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? "top-1/2 -rotate-45" : "bottom-1"}`
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `mobile-menu-overlay bg-gradient-to-br from-azul-profundo/95 via-azul-profundo/90 to-black/95 backdrop-blur-md transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: closeMenu,
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: "radial-gradient(circle at 2px 2px, #3e6680 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "mobile-menu-sidebar bg-white shadow-2xl transition-transform duration-500 ease-out",
        style: {
          overflowY: "auto",
          transform: isOpen ? "translate3d(0, 0, 0)" : "translate3d(110%, 0, 0)",
          willChange: isOpen ? "transform" : "auto"
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bg-gradient-to-br from-transparent via-azul-electrico/5 to-celeste-tech/10 pointer-events-none",
              style: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute w-1 bg-gradient-to-b from-azul-electrico via-celeste-tech to-azul-electrico",
              style: {
                top: 0,
                left: 0,
                bottom: 0
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", style: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center justify-between p-5 border-b border-azul-electrico/10 bg-white",
                style: { flexShrink: 0 },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-azul-electrico to-celeste-tech rounded-xl blur-md opacity-50 animate-pulse" }),
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "/images/logo/logonuevo2.svg",
                          alt: "Logo",
                          width: "120",
                          height: "120",
                          loading: "lazy",
                          className: "relative h-10 w-auto"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "block font-heading font-bold text-sm text-azul-profundo", children: "VETE A LA CIMA" }),
                      /* @__PURE__ */ jsx("span", { className: "block text-xs text-gris-azulado", children: "Consultoría Veterinaria" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: closeMenu,
                      className: "p-2 rounded-lg text-azul-profundo hover:bg-azul-electrico/10 hover:text-azul-electrico transition-all duration-300 hover:rotate-90",
                      "aria-label": "Close menu",
                      children: /* @__PURE__ */ jsx(X, { size: 22 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs("nav", { className: "p-5 pb-6", style: { flex: "1 1 auto", overflowY: "auto" }, children: [
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: NAVIGATION_LINKS.map((link, index) => {
                const Icon = link.icon;
                const isActive = currentPath === link.href || currentPath.startsWith(`${link.href}/`);
                return /* @__PURE__ */ jsx(
                  "li",
                  {
                    style: {
                      animation: isOpen ? `slideIn 0.4s ease-out ${index * 0.1}s forwards` : "none",
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateX(0)" : "translateX(20px)"
                    },
                    children: /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: link.href,
                        onClick: closeMenu,
                        className: `group flex items-center gap-4 py-3.5 px-4 rounded-xl font-medium transition-all duration-300 ${isActive ? "bg-gradient-to-r from-azul-electrico to-celeste-tech text-white shadow-lg shadow-azul-electrico/30" : "text-azul-profundo hover:bg-gradient-to-r hover:from-azul-electrico/10 hover:to-celeste-tech/10 hover:translate-x-1"}`,
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: `relative ${isActive ? "text-white" : "text-azul-electrico"}`, children: [
                            /* @__PURE__ */ jsx(Icon, { size: 20, className: "relative z-10" }),
                            isActive && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 blur-sm bg-white/40 animate-pulse" })
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "flex-1", children: link.label }),
                          /* @__PURE__ */ jsx(
                            ChevronRight,
                            {
                              size: 18,
                              className: `transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`
                            }
                          )
                        ]
                      }
                    )
                  },
                  link.href
                );
              }) }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "mt-8",
                  style: {
                    animation: isOpen ? "slideIn 0.4s ease-out 0.4s forwards" : "none",
                    opacity: isOpen ? 1 : 0
                  },
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "/contacto",
                      onClick: closeMenu,
                      className: "group relative block w-full py-4 px-6 bg-gradient-to-r from-azul-electrico to-celeste-tech text-white font-semibold text-center rounded-xl overflow-hidden shadow-xl shadow-azul-electrico/40 hover:shadow-2xl hover:shadow-azul-electrico/60 transition-all duration-300 hover:scale-[1.02]",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine" }) }),
                        /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Agenda tu diagnóstico" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "mt-6 p-4 bg-gradient-to-br from-azul-electrico/5 to-celeste-tech/5 rounded-xl border border-azul-electrico/10",
                  style: {
                    animation: isOpen ? "slideIn 0.4s ease-out 0.5s forwards" : "none",
                    opacity: isOpen ? 1 : 0
                  },
                  children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-gris-azulado text-center leading-relaxed", children: [
                    /* @__PURE__ */ jsx("span", { className: "block font-semibold text-azul-profundo mb-1", children: "¿Listo para crecer?" }),
                    "Agenda una consultoría gratuita y descubre cómo llevar tu clínica al siguiente nivel"
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  MobileMenu as M
};
