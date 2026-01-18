import React from 'react';
import { RocketLaunchIcon, EyeIcon } from '@heroicons/react/24/outline';

const content = {
  mision: {
    titulo: "Misión",
    descripcion: "Nuestra misión es brindar una atención social en salud mental orientada a promover procesos de concientización, emancipación y desarrollo humano. Trabajamos prioritariamente con personas en situación de vulnerabilidad niños, adolescentes, adultos, familias y comunidades educativas y extendemos nuestros servicios a todos los niveles socioeconómicos, bajo la convicción de que el bienestar emocional y el desarrollo integral constituyen derechos fundamentales del ser humano, mas no privilegios.",
    color: "bg-rose-50/50",
    border: "border-rose-100",
    iconColor: "text-rose-400"
  },
  vision: {
    titulo: "Visión",
    descripcion: "Para el año 2030, seremos un referente nacional en la salud mental con un enfoque humanista, ético y liberador. Seremos una institución reconocida por su excelencia profesional, su compromiso con las poblaciones vulnerables y su contribución en políticas públicas, capaces de interpretar y transformar sus realidades en todo el país.",
    color: "bg-indigo-50/40",
    border: "border-indigo-100",
    iconColor: "text-indigo-400"
  }
};

const Mission: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#09667e] mb-6 text-center">
            Nuestro Propósito
          </h2>
          <div className="w-20 h-1.5 bg-[#ffb6c1] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          
          {/*Misión */}
          <div className={`${content.mision.color} ${content.mision.border} border p-10 rounded-[3rem] transition-all duration-300 hover:shadow-lg relative overflow-hidden group`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                <RocketLaunchIcon className={`h-8 w-8 ${content.mision.iconColor}`} />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-[#09667e]">{content.mision.titulo}</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed italic text-justify">
              "{content.mision.descripcion}"
            </p>
          </div>

          {/* Visión */}
          <div className={`${content.vision.color} ${content.vision.border} border p-10 rounded-[3rem] transition-all duration-300 hover:shadow-lg relative overflow-hidden group`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                <EyeIcon className={`h-8 w-8 ${content.vision.iconColor}`} />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-[#09667e]">{content.vision.titulo}</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed italic text-justify">
              "{content.vision.descripcion}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;