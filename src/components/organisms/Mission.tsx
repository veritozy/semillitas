import React from "react";
import { RocketLaunchIcon, EyeIcon } from "@heroicons/react/24/outline";

const content = {
  mision: {
    titulo: "Misión",
    descripcion:
      "Nuestra misión es brindar una atención social en salud mental orientada a promover procesos de concientización, emancipación y desarrollo humano. Trabajamos prioritariamente con personas en situación de vulnerabilidad niños, adolescentes, adultos, familias y comunidades educativas.",
    accent: "from-[#09667e] to-[#25D366]",
  },
  vision: {
    titulo: "Visión",
    descripcion:
      "Para el año 2030, seremos un referente nacional en la salud mental con un enfoque humanista, ético y liberador. Seremos una institución reconocida por su excelencia profesional y su contribución en políticas públicas en todo el país.",
    accent: "from-[#25D366] to-[#09667e]",
  },
};

const Mission: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-black text-[#09667e] tracking-tighter mb-4 uppercase Poppins">
            Nuestro Propósito
          </h2>
          <div className="w-24 h-2 bg-emerald-300 mx-auto rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.3)]"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="group relative">
            <div className={`absolute -inset-2 bg-gradient-to-r ${content.mision.accent} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-700`}></div>
            
            <div className="relative bg-white border border-gray-100 p-10 md:p-14 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 h-full overflow-hidden">
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.mision.accent} opacity-[0.03] rounded-bl-full transition-all duration-700 group-hover:scale-[3]`}></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-[#09667e] text-white rounded-2xl shadow-lg shadow-[#09667e]/30 group-hover:rotate-12 transition-transform duration-500">
                    <RocketLaunchIcon className="h-8 w-8" />
                  </div>
                  <h3 className="ml-6 text-4xl font-black text-[#09667e] Poppins tracking-tight">
                    {content.mision.titulo}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-justify Poppins font-medium group-hover:text-gray-900 transition-colors duration-500">
                  {content.mision.descripcion}
                </p>

                <div className={`mt-8 w-0 h-1 bg-gradient-to-r ${content.mision.accent} group-hover:w-full transition-all duration-1000 rounded-full`}></div>
              </div>
            </div>
          </div>

          {/* TARJETA DE VISIÓN */}
          <div className="group relative">
            <div className={`absolute -inset-2 bg-gradient-to-r ${content.vision.accent} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-700`}></div>
            
            <div className="relative bg-white border border-gray-100 p-10 md:p-14 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 h-full overflow-hidden">
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.vision.accent} opacity-[0.03] rounded-bl-full transition-all duration-700 group-hover:scale-[3]`}></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-emerald-300 text-white rounded-2xl shadow-lg shadow-[#25D366]/30 group-hover:-rotate-12 transition-transform duration-500">
                    <EyeIcon className="h-8 w-8" />
                  </div>
                  <h3 className="ml-6 text-4xl font-black text-[#09667e] Poppins tracking-tight">
                    {content.vision.titulo}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-justify Poppins font-medium group-hover:text-gray-900 transition-colors duration-500">
                  {content.vision.descripcion}
                </p>
                <div className={`mt-8 w-0 h-1 bg-gradient-to-r ${content.vision.accent} group-hover:w-full transition-all duration-1000 rounded-full`}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;