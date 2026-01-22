import {
  FaceSmileIcon,
  ShieldCheckIcon,
  SunIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
const Valores = () => {
  const valores = [
    {
      valor: "Empatía",
      quote:
        "Promovemos una atención centrada en la persona, reconociendo su dignidad, su voz y su capacidad de crecimiento. Actuamos con empatía, respeto y sensibilidad ante cada realidad humana.",
      icon: FaceSmileIcon,
    },
    {
      valor: "Ética",
      quote:
        "Guiamos todas nuestras acciones con integridad, justicia y responsabilidad profesional, resguardando la confidencialidad y priorizando el bienestar de las poblaciones vulnerables.",
      icon: ShieldCheckIcon,
    },
    {
      valor: "Libertad",
      quote:
        "Favorecemos procesos que despierten conciencia, autonomía y capacidad de transformación personal y comunitaria, inspirados en una práctica crítica y emancipadora.",
      icon: SunIcon,
    },
    {
      valor: "Solidaridad",
      quote:
        "Comprendemos al ser humano en todas sus dimensiones, emocionales, cognitivas, sociales y familiares, y diseñamos intervenciones que respondan a la complejidad de su experiencia.",
      icon: HeartIcon,
    },
    {
      valor: "Excelencia",
      quote:
        "Nos comprometemos con una práctica profesional rigurosa, sensible y actualizada, orientada a brindar servicios de alta calidad que fortalezcan el bienestar emocional y social.",
      icon: StarIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-gray-100">
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-[#09667e] tracking-tight mb-4 text-center">
          Nuestros Valores
        </h2>
        {}
      <div className="w-32 h-2 bg-emerald-400 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>
        {}
        <div className="flex flex-wrap justify-center gap-8">
          {valores.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-22px)]"
            >
              {}
              <div className="mb-6 p-4 rounded-2xl bg-blue-500 group-hover:bg-[#10B981] transition-colors duration-300">
                <item.icon className="h-12 w-12 text-white group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {item.valor}
              </h3>

              <p className="text-gray-600 text-center text-sm leading-relaxed font-medium">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
      {}
    </section>
  );
};

export default Valores;
