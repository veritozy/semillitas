import {
  HeartIcon,
  SunIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const pilares = [
  {
    icon: <HeartIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "El Idioma del Amor",
    description: "Nuestra metodología principal. Entendemos que sin vínculo afectivo no hay aprendizaje real y duradero.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "Mismo Sembrador",
    description: "Reconocemos la unidad y la igualdad en nuestra comunidad, trabajando bajo una misma visión de fe y entrega.",
  },
  {
    icon: <SunIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "Potencial en Crecimiento",
    description: "Acompañamos a cada semilla en su proceso único, respetando sus tiempos y nutriendo sus talentos particulares.",
  },
  {
    icon: <HandRaisedIcon className="h-6 w-6 text-white stroke-[2.5px]" />,
    title: "Vocación de Servicio",
    description: "Nuestra labor psicoeducativa es un compromiso de vida dedicado a formar seres humanos íntegros.",
  },
];

export default function SectionNosotros() {
  return (
    
    <section className="relative overflow-hidden px-6 py-20 bg-gradient-to-br from-[#09667e] via-indigo-600 to-blue-600">
      
      {}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center relative z-10">
        
        <div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Centro Educativo de <br />
            <span className="text-emerald-300">Psicoeducación Semillitas</span>
          </h2>

          <p className="text-emerald-100 text-xl font-medium italic mb-8 border-l-4 border-emerald-400 pl-4 bg-white/10 py-2 rounded-r-lg">
            "Semillas del mismo sembrador. Educando con el idioma del amor"
          </p>

          <p className="text-white text-lg leading-relaxed mb-10 text-justify opacity-95">
            En CEP'S, nuestra identidad se resume en nuestro lema. Reconocemos que cada niño y joven es una semilla única, pero todas comparten un origen común de dignidad y propósito. Nuestra misión es cultivar ese potencial utilizando el único lenguaje que transforma...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilares.map((pilar, index) => (
              <div key={index} className="flex gap-4 group">
                {}
                <div className="mt-1 flex-shrink-0 bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:bg-emerald-400 transition-colors duration-300">
                  {pilar.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                    {pilar.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                    {pilar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="relative">
          <div className="absolute -inset-2 bg-white/10 rounded-[2.5rem] blur-lg"></div>
          <div className="relative w-full h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/20">
            <img
              src="https://www.shutterstock.com/image-photo/enthusiastic-hispanic-teacher-explaining-children-260nw-2489701375.jpg"
              alt="Equipo CEP'S"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}