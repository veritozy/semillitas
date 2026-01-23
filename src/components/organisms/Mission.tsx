import React from "react";
import { RocketLaunchIcon, EyeIcon } from "@heroicons/react/24/outline";

const content = {
  mision: {
    titulo: "Misión",
    descripcion:
      "Nuestra misión es brindar una atención social en salud mental orientada a promover procesos de concientización, emancipación y desarrollo humano. Trabajamos prioritariamente con personas en situación de vulnerabilidad niños, adolescentes, adultos, familias y comunidades educativas y extendemos nuestros servicios a todos los niveles socioeconómicos, bajo la convicción de que el bienestar emocional y el desarrollo integral constituyen derechos fundamentales del ser humano, mas no privilegios.",
    color: "bg-rose-50/50",
    border: "border-rose-100",
    iconColor: "text-rose-400",
  },
  vision: {
    titulo: "Visión",
    descripcion:
      "Para el año 2030, seremos un referente nacional en la salud mental con un enfoque humanista, ético y liberador. Seremos una institución reconocida por su excelencia profesional, su compromiso con las poblaciones vulnerables y su contribución en políticas públicas, capaces de interpretar y transformar sus realidades en todo el país.",
    color: "bg-indigo-50/40",
    border: "border-indigo-100",
    iconColor: "text-indigo-400",
  },
};

const Mission: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6">
  <div className="max-w-7xl mx-auto">
    
    {}
    <div className="text-center max-w-2xl mx-auto mb-20">
       <h2 className="text-3xl md:text-5xl font-black text-[#09667e] tracking-tight mb-4 text-center">
          Nuestro Propósito
        </h2>
        {}
      <div className="w-32 h-2 bg-emerald-400 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>
    </div>

    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      
      {/* Tarjeta de MISIÓN */}
      <div className="relative group">
        {}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
        
        <div className="relative bg-white border border-gray-100 p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
          <div className="flex items-center mb-8">
            <div className="p-4 bg-blue-500 rounded-2xl group-hover:bg-[#10B981] transition-colors duration-500">
              <RocketLaunchIcon className="h-8 w-8 text-white group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="ml-5 text-3xl font-bold text-[#09667e]">
              {content.mision.titulo}
            </h3>
          </div>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-justify">
            {content.mision.descripcion}
          </p>
        </div>
      </div>

      {/* Tarjeta de VISIÓN */}
      <div className="relative group">
        {}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
        
        <div className="relative bg-white border border-gray-100 p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
          <div className="flex items-center mb-8">
            <div className="p-4 bg-blue-500 rounded-2xl group-hover:bg-[#10B981] transition-colors duration-500">
              <EyeIcon className="h-8 w-8 text-white group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="ml-5 text-3xl font-bold text-[#09667e]">
              {content.vision.titulo}
            </h3>
          </div>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-justify">
            {content.vision.descripcion}
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Mission;
