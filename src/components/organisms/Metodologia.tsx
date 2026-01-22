const PASOS = [
  {
    id: "01",
    title: "Conocernos",
    desc: "Agendamos una primera entrevista para entender las necesidades de tu familia.",
  },
  {
    id: "02",
    title: "Evaluación",
    desc: "Realizamos un diagnóstico integral con nuestro equipo de especialistas.",
  },
  {
    id: "03",
    title: "Plan de Vuelo",
    desc: "Diseñamos una estrategia personalizada basada en el amor y la ciencia.",
  },
  {
    id: "04",
    title: "Crecimiento",
    desc: "Acompañamos el proceso con sesiones dinámicas y reportes de progreso.",
  },
];

export default function Metodologia() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-5xl font-black text-[#09667e] tracking-tight mb-4 text-center">
          Nuestro Camino Juntos
        </h2>
        {}
      <div className="w-32 h-2 bg-emerald-400 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PASOS.map((paso) => (
            <div
              key={paso.id}
              className="group relative p-8 border-l-4 border-[#34D399] bg-gradient-to-r from-indigo-500 to-blue-500 rounded-r-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)]"
            >
              {}
              <span className="text-6xl font-black text-white/10 absolute top-2 right-4 transition-all duration-500 group-hover:text-white/30 group-hover:scale-110 pointer-events-none">
                {paso.id}
              </span>

              <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                {paso.title}
              </h3>

              <p className="relative z-10 text-white/90 text-sm leading-relaxed">
                {paso.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
