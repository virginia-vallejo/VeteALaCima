import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    plan: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "f29abf36-f700-446c-b8d6-38dc4e0db7a3",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          plan: formData.plan,
          subject: `Nuevo contacto desde Vete a la Cima - ${formData.name}`,
          from_name: "Vete a la Cima Website"
        })
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          plan: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-semibold text-white mb-2", children: "Nombre completo *" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          className: `w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b4cfa6]/50 text-white placeholder-white/50 ${errors.name ? "border-red-400/60" : "border-white/20 hover:border-white/30"}`,
          placeholder: "Tu nombre"
        }
      ),
      errors.name && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-semibold text-white mb-2", children: "Email *" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          className: `w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b4cfa6]/50 text-white placeholder-white/50 ${errors.email ? "border-red-400/60" : "border-white/20 hover:border-white/30"}`,
          placeholder: "tumail@ejemplo.com"
        }
      ),
      errors.email && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.email })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "phone", className: "block text-sm font-semibold text-white mb-2", children: [
        "Teléfono ",
        /* @__PURE__ */ jsx("span", { className: "text-white/60 font-normal", children: "(opcional)" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "tel",
          id: "phone",
          name: "phone",
          value: formData.phone,
          onChange: handleChange,
          className: "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b4cfa6]/50 text-white placeholder-white/50",
          placeholder: "+54 9 11 1234-5678"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "plan", className: "block text-sm font-semibold text-white mb-2", children: [
        "Plan de interés ",
        /* @__PURE__ */ jsx("span", { className: "text-white/60 font-normal", children: "(opcional)" })
      ] }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "plan",
          name: "plan",
          value: formData.plan,
          onChange: handleChange,
          className: "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b4cfa6]/50 text-white",
          style: { backgroundImage: "none" },
          children: [
            /* @__PURE__ */ jsx("option", { value: "", className: "bg-[#0a1929] text-white", children: "Seleccionar un plan" }),
            /* @__PURE__ */ jsx("option", { value: "starter", className: "bg-[#0a1929] text-white", children: "Plan Starter" }),
            /* @__PURE__ */ jsx("option", { value: "growth", className: "bg-[#0a1929] text-white", children: "Plan Growth" }),
            /* @__PURE__ */ jsx("option", { value: "elite", className: "bg-[#0a1929] text-white", children: "Plan Elite" }),
            /* @__PURE__ */ jsx("option", { value: "diagnostico", className: "bg-[#0a1929] text-white", children: "Solo diagnóstico gratuito" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-semibold text-white mb-2", children: "Mensaje *" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          value: formData.message,
          onChange: handleChange,
          rows: "5",
          className: `w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b4cfa6]/50 resize-none text-white placeholder-white/50 ${errors.message ? "border-red-400/60" : "border-white/20 hover:border-white/30"}`,
          placeholder: "Contanos sobre tu veterinaria y tus objetivos..."
        }
      ),
      errors.message && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.message })
    ] }),
    submitStatus === "success" && /* @__PURE__ */ jsx("div", { className: "p-4 bg-[#b4cfa6]/20 backdrop-blur-sm border border-[#b4cfa6]/40 text-[#e3f9ca] rounded-xl animate-fade-in", children: "✅ ¡Mensaje enviado con éxito! Te contactaremos pronto." }),
    submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/40 text-red-300 rounded-xl animate-fade-in", children: "⚠️ Hubo un error al enviar el mensaje. Por favor, intentá nuevamente." }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#b4cfa6] to-[#8fa886] text-[#0a1929] font-button font-bold rounded-xl hover:shadow-[0_0_30px_rgba(180,207,166,0.5)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" }),
          isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Loader2, { size: 20, className: "animate-spin relative z-10" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Enviando..." })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Send, { size: 20, className: "relative z-10" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Enviar mensaje" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-white/60 text-center", children: "Al enviar este formulario, aceptás que te contactemos para brindarte información sobre nuestros servicios." })
  ] });
}
export {
  ContactForm as C
};
