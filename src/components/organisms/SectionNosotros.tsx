import {
  HeartIcon,
  SunIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const pilares = [
  {
    icon: <HeartIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "Diálogo que educa",
    description: "El aprendizaje nace del encuentro y la escucha mutua. Educamos desde el diálogo, reconociendo la voz del niño, la familia y la comunidad.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "Comunidad que acompaña.",
    description: "Creemos en una educación colectiva. Acompañamos a niños, familias y educadores desde una relación horizontal y solidaria.",
  },
  {
    icon: <SunIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "Sujeto en crecimiento.",
    description: "Cada niño es protagonista de su aprendizaje. Respetamos sus tiempos, su historia y su manera de comprender el mundo.",
  },
  {
    icon: <HandRaisedIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "Vocación con compromiso social.",
    description: "Educar es un acto ético y político. Trabajamos por una educación que promueva conciencia, inclusión y transformación social.",
  },
];

export function SectionNosotros() {
  return (
    <section className="relative overflow-hidden px-6 py-20 bg-gradient-to-br from-[#3d8395] via-blue-500 to-cyan-400">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center relative z-10">
        
        <div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-100 mb-6 leading-tight">
            Fundanión
            <span className="text-emerald-300 pl-2">Semillitas</span>
          </h2>

          <p className="text-white text-xl font-medium italic mb-8 border-l-4 border-emerald-400 pl-4 bg-white/10 py-2 rounded-r-lg">
            "Sembrando el idioma del amor"
          </p>

          <p className="text-white text-lg leading-relaxed mb-10 text-justify opacity-95">
            <span className="text-white font-bold italic pr-2">"El idioma del amor"</span>
             expresa una pedagogía basada en el diálogo, el respeto y la confianza. Reconocemos a cada niño, joven y adulto como sujeto de derechos, con una voz propia y un potencial único. Nuestra misión es acompañar su desarrollo a través de una intervención que educa, escucha, comprende y transforma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilares.map((pilar, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="mt-1 flex-shrink-0 bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:bg-emerald-400 transition-colors duration-300">
                  {pilar.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-emerald-100 transition-colors">
                    {pilar.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed opacity-80">
                    {pilar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="relative group perspective-1000">
          {}
          <div className="relative w-full h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/20 
                        transition-all duration-700 ease-out 
                        hover:scale-105 hover:-translate-y-6 hover:rotate-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]
                        animate-bounce-slow">
            <img
              src="/images/logo-nosotros.jpg"
              alt="Equipo CEP'S"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

      </div>

      {}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default SectionNosotros; 