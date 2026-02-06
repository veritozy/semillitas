const PASOS = [
  {
    id: "01",
    title: "Primera conversación",
    desc: `Hablamos contigo para conocerte mejor.
    Agendamos una entrevista inicial donde escuchamos tus inquietudes y entendemos las necesidades de tu hijo y tu familia. 
    Además de una visita guiada a los espacios de nuestro centro.`,
  },
  {
    id: "02",
    title: "Evaluación integral",
    desc: `Conocemos a tu hijo en profundidad.
    Nuestro equipo de especialistas realiza una evaluación completa para identificar fortalezas, retos y áreas a trabajar.`,
  },
  {
    id: "03",
    title: "Plan personalizado",
    desc: `Creamos un plan claro y adaptado a tu familia. 
    Diseñamos un plan de intervención práctico, basado en evidencia y ajustado a los objetivos reales de tu hijo.`,
  },
  {
    id: "04",
    title: "Acompañamiento y seguimiento",
    desc: `Te acompañamos durante todo el proceso. 
    Realizamos sesiones periódicas, evaluamos avances y te entregamos reportes claros sobre el progreso.`,
  },
];

export default function Metodologia() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl md:text-4xl font-black text-[#09667e] tracking-tight mb-4 text-center">
          NUESTRO PROCESO DE ACOMPAÑAMIENTO
        </h2>
        {}
      <div className="w-32 h-2 bg-emerald-400 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PASOS.map((paso) => (
            <div
              key={paso.id}
              className="group relative p-8 border-l-4 border-[#34D399] bg-gradient-to-br from-[#3d8395] via-blue-500 to-cyan-400 rounded-r-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)]"
            >
              {}
              <span className="text-6xl font-black text-white/10 absolute top-2 right-4 transition-all duration-500 group-hover:text-white/30 group-hover:scale-110 pointer-events-none">
                {paso.id}
              </span>

              <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                {paso.title}
              </h3>

              <p className="relative z-10 text-white/90 text-sm leading-relaxed whitespace-pre-line">
                {paso.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
