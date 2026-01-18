export default function ContactoForm() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-[#09667e] mb-4 text-center">Contáctanos</h2>
        <p className="text-gray-600 text-center mb-8">
          Déjanos tu mensaje y te responderemos lo antes posible.
        </p>

        {/* REEMPLAZA EL ENLACE DE ACTION CON TU CÓDIGO DE FORMSPREE */}
        <form action="https://formspree.io/f/xvzzknzg" method="POST" className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tu Correo Electrónico</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
            <textarea 
              name="message" 
              required 
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-[300px] mx-auto block bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-4 rounded-xl"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}