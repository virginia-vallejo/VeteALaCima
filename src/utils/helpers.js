// Funciones auxiliares
export function formatWhatsAppLink(phone, message = '') {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
