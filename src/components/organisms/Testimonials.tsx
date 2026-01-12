// Testimonials.tsx
const Testimonials = () => {
  const testimonials = [
    {
      name: "María López",
      role: "Directora de Colegio",
      quote: "Gracias a sus programas de neuroeducación, hemos transformado la convivencia en nuestra institución. Los docentes se sienten más seguros y los estudiantes más conectados.",
      image: "",
    },
    {
      name: "Carlos Méndez",
      role: "Docente de Primaria",
      quote: "Por primera vez, tengo herramientas claras para manejar las emociones en el aula. Mis alumnos ya no se pelean: usan las cartas de emociones con naturalidad.",
      image: "",
    },
    {
      name: "Ana Ruiz",
      role: "Madre de dos niños",
      quote: "Aprendí a escuchar con el corazón, no solo con los oídos. Hoy mi hogar es un refugio de calma, incluso en los días más caóticos.",
      image: "",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#09667e] sm:text-4xl">
            Lo que dicen quienes confían en nosotros
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Historias reales de transformación emocional y educativa en aulas y hogares.
          </p>
        </div>

        {/* Tarjetas de testimonios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-6">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                  />
                ) : (
                  <div className="bg-blue-100 border-2 border-dashed rounded-full w-32 h-32 flex items-center justify-center">
                    <span className="text-blue-500 text-lg font-medium">—</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">{testimonial.name}</h3>
              <p className="text-blue-600 font-medium text-center">{testimonial.role}</p>
              <p className="mt-4 text-gray-700 italic text-center">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;