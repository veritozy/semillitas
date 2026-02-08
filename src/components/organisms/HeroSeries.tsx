const HeroSeries = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-16 overflow-hidden">
      <style>{`
        @keyframes flash-entry {
          0% { opacity: 0; filter: brightness(3); transform: scale(0.95); }
          50% { opacity: 1; filter: brightness(2); transform: scale(1.02); }
          100% { opacity: 1; filter: brightness(1); transform: scale(1); }
        }
        .animate-flash {
          animation: flash-entry 0.8s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-left">
            <header className="mb-8">
              <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Educación Religiosa Escolar
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-[#09667e] mb-6 leading-tight">
                Semillas del <br />
                <span className="text-emerald-300">Mismo Sembrador</span>
              </h1>
            </header>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg md:text-xl leading-relaxed font-medium text-justify">
                Una propuesta educativa que acompaña a niños y niñas en su
                crecimiento{" "}
                <span className="text-gray-900">humano y espiritual</span> desde
                una mirada cristiana, comunitaria y cercana a la vida cotidiana.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-90 text-justify">
                Cada unidad está construida con una pedagogía clara, afectiva y
                respetuosa del desarrollo infantil, inspirada en el Evangelio,
                el Magisterio de la Iglesia y la tradición latinoamericana.
              </p>

              <blockquote className="border-l-4 border-indigo-500 bg-slate-50 p-5 rounded-r-xl italic text-gray-700 shadow-sm text-center">
                "Este material no busca solo transmitir contenidos, sino formar
                el corazón, promoviendo una fe vivida, sencilla y comprometida
                con los demás."
              </blockquote>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition duration-1000"></div>

            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-gray-100 transition-all duration-700 group-hover:-translate-y-2 animate-flash">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-200 to-emerald-200 opacity-[0.15] rounded-bl-full transition-all duration-1000 ease-out group-hover:scale-[4] origin-top-right z-0"></div>

              <img
                src="/images/logo-2.png"
                alt="Educación Religiosa Escolar"
                className="relative z-10 w-full h-[400px] md:h-[550px] object-contain p-10 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSeries;