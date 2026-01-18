// Testimonials.tsx
const Valores = () => {
  const valores = [
    {
      valor: "Empatía",
      quote: "Promovemos una atención centrada en la persona, reconociendo su dignidad, su voz y su capacidad de crecimiento. Actuamos con empatía, respeto y sensibilidad ante cada realidad humana.",
      image: "/images/empatia.png",
    },
    {
      valor: "Ética",
      quote: "Guiamos todas nuestras acciones con integridad, justicia y responsabilidad profesional, resguardando la confidencialidad y priorizando el bienestar de las poblaciones vulnerables.",
      image: "/images/justa.png",
    },
    {
      valor: "Libertad",
      quote: "Favorecemos procesos que despierten conciencia, autonomía y capacidad de transformación personal y comunitaria, inspirados en una práctica crítica y emancipadora.",
      image: "/images/volar.png",
    },
    {
      valor: "Solidaridad",
      quote: "Comprendemos al ser humano en todas sus dimensiones, emocionales, cognitivas, sociales y familiares, y diseñamos intervenciones que respondan a la complejidad de su experiencia.",
      image: "/images/solidaridad.png",
    },
    {
      valor: "Excelencia",
      quote: "Nos comprometemos con una práctica profesional rigurosa, sensible y actualizada, orientada a brindar servicios de alta calidad que fortalezcan el bienestar emocional y social.",
      image: "/images/exito.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Encabezado */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-extrabold text-[#09667e] sm:text-4xl">
        Valores Institucionales
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
        Nuestros valores sostienen cada proceso de acompañamiento y aprendizaje.
      </p>
    </div>

    {/* Contenedor Flex para centrar los 2 últimos */}
    <div className="flex flex-wrap justify-center gap-10">
      {valores.map((item, index) => (
        <div 
          key={index} 
          className="group flex flex-col items-center w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)] 
                     bg-rose-50/50 p-8 rounded-[3rem] border-2 border-transparent
                     hover:bg-white hover:border-rose-100 hover:-translate-y-2 
                     transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-rose-100/50"
        >
          {/* Imagen con círculo blanco para que resalte sobre el rosa */}
          <div className="flex justify-center mb-6">
            <div className="p-2 rounded-full bg-white shadow-sm ring-4 ring-rose-100/30">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.valor}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-rose-100/50 flex items-center justify-center">
                  <span className="text-[#09667e] text-3xl font-bold">{item.valor.charAt(0)}</span>
                </div>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-[#09667e] text-center mb-2 uppercase tracking-wide">
            {item.valor}
          </h3>

          {/* Línea decorativa que se expande al hacer hover */}
          <div className="w-8 h-1 bg-[#ffb6c1] rounded-full group-hover:w-16 transition-all duration-500 mb-4"></div>
          
          <p className="text-gray-600 italic text-center leading-relaxed font-medium">
            “{item.quote}”
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Valores;