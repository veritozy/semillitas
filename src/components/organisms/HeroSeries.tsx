const HeroSeries = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Bloque de Texto */}
          <div className="flex-1 text-left">
            <header className="mb-8">
              <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Educación Religiosa Escolar
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Semillas del <br />
                <span className="text-[#0094d3]">Mismo Sembrador</span>
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

            {/* Acción */}
            <div className="mt-10">
              <button
                className="px-8 py-4 bg-emerald-400
                                    shadow-lg hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-indigo-200 uppercase text-sm tracking-wider"
              >
                Saber más
              </button>
            </div>
          </div>

          {/* Bloque de Imagen / Visual */}
          <div className="flex-1 relative w-full max-w-2xl">
            {/* Decoración geométrica de fondo */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-blue-100/30">
              <img
                src="images/logo-2.png"
                alt="Educación Religiosa Escolar"
                className="w-full h-[400px] md:h-[550px] object-contain p-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSeries;
