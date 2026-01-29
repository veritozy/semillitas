import { FaWhatsapp } from "react-icons/fa"; 

export function WhatsAppButton() {
  const phoneNumber = "593960889661"; 
  const message = "Hola Semillitas, deseo recibir más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      {/*Efecto */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
      
      {}
      <span className="absolute right-16 bg-blue-700 text-white text-[11px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap pointer-events-none">
        ¿Necesitas ayuda?
      </span>

      {}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95 flex items-center justify-center">
        <FaWhatsapp className="h-8 w-8" />
      </div>
    </a>
  );
}

export default WhatsAppButton;