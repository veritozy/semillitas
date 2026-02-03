export default function SectionPactoEducativo() {
  return (
    <section className="relative w-full py-20 bg-blue-500 overflow-hidden">
      {/* Luces de fondo sutiles para romper el color plano */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="w-full lg:w-2/5 text-left">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-100 mb-6 leading-tight">
              Pacto Educativo <br />
              <span className="bg-clip-text text-transparent bg-emerald-300">
                Global
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-100 leading-relaxed font-light text-justify">
                El <span className="font-semibold text-white">Pacto Educativo Global</span> es una invitación del Papa Francisco a dialogar sobre cómo estamos construyendo el futuro del planeta.
              </p>
              
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full"></div>
              
              <p className="text-lg text-gray-100 leading-relaxed text-justify">
                Una alianza necesaria para crear una educación que incluya a todos, 
                sanando fracturas y reconstruyendo el tejido social hacia una sociedad más 
                <span className="text-gray-100 font-medium italic"> justa y sostenible.</span>
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: VIDEO */}
          <div className="w-full lg:w-3/5">
            <div className="relative group">
              {/* Efecto de resplandor sutil detrás del video */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <div className="relative overflow-hidden rounded-[1.8rem] aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-none shadow-inner"
                    src="https://www.youtube.com/embed/gc00PF8Ryt4?si=NBz9Z8uG48QV3Aas"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Pacto Educativo Global - Papa Francisco"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}