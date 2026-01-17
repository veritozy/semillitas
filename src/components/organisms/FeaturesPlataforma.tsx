import React from 'react';

// Definimos la interfaz para TypeScript
interface Feature {
  title: string;
  desc: string;
  icon: string;
  color: string;
  shadowColor: string;
}

const FeaturesPlataforma: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Neuro-Aprendizaje",
      desc: "Herramientas diseñadas bajo principios de neurociencia cognitiva para un aprendizaje real.",
      icon: "🧠",
      color: "bg-[#09667e]",
      shadowColor: "hover:shadow-[#09667e]/20"
    },
    {
      title: "Valores Humanos",
      desc: "Integración total con el Pacto Educativo Global y el enfoque en la esperanza.",
      icon: "✨",
      color: "bg-[#ffb6c1]",
      shadowColor: "hover:shadow-[#ffb6c1]/30"
    },
    {
      title: "Acceso Seguro",
      desc: "Protección de datos institucional y roles personalizados para cada miembro.",
      icon: "🔐",
      color: "bg-cyan-400",
      shadowColor: "hover:shadow-cyan-400/20"
    },
    {
      title: "Gestión Ágil",
      desc: "Plataforma optimizada para una navegación fluida en cualquier dispositivo.",
      icon: "🚀",
      color: "bg-amber-400",
      shadowColor: "hover:shadow-amber-400/20"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#09667e] tracking-tight">
            Tu centro de <span className="text-[#ffb6c1]">innovación educativa</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#ffb6c1] mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Un ecosistema digital donde la evidencia científica y la calidez humana se unen para transformar el aula.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                group bg-white p-10 rounded-[2.5rem] 
                shadow-xl shadow-gray-200/50 border border-gray-100 
                flex flex-col items-center text-center 
                transition-all duration-300 transform hover:-translate-y-3 
                ${item.shadowColor} hover:shadow-2xl
              `}
            >
              {}
              <div className={`
                ${item.color} w-16 h-16 rounded-2xl mb-8 
                flex items-center justify-center text-3xl
                shadow-lg transition-transform duration-300 group-hover:rotate-12
              `}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#09667e] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPlataforma;