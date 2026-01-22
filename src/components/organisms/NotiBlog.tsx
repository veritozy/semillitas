
const NotiBlog = () => {
  // Datos dinámicos para que el código sea más fácil de mantener
  const noticias = [
    {
      id: 1,
      titulo: "Talleres",
      descripcion: "Descubre las nuevas metodologías para la enseñanza religiosa en el aula.",
      fecha: "22 Enero 2026",
      imagen: "/images/taller.jpg"
    },
    {
      id: 2,
      titulo: "Cursos",
      descripcion: "Inscripciones abiertas para los cursos intensivos de formación comunitaria.",
      fecha: "20 Enero 2026",
      imagen: "/images/curso.jpg"
    },
    {
      id: 2,
      titulo: "Formación",
      descripcion: "Inscripciones abiertas para los cursos intensivos de formación comunitaria.",
      fecha: "20 Enero 2026",
      imagen: "/images/formacion.jpg"
    },
     {
      id: 2,
      titulo: "Formación",
      descripcion: "Inscripciones abiertas para los cursos intensivos de formación comunitaria.",
      fecha: "20 Enero 2026",
      imagen: "/images/curso-2.jpg"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container px-6 py-10 mx-auto">
        
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#09667e] tracking-tight mb-4">
    Noti Blog Semillitas
  </h2>
  
  {}
      <div className="w-32 h-2 bg-emerald-400 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>
        
          <p className="max-w-lg mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Mantente informado sobre nuestros talleres, cursos y procesos de formación continua.
          </p>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {noticias.map((noti) => (
            <div key={noti.id}>
              <img 
                className="relative z-10 object-cover w-full rounded-md h-96 shadow-lg" 
                src={noti.imagen} 
                alt={noti.titulo} 
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md shadow-xl dark:bg-gray-800">
                <a 
                  href="#" 
                  className="font-bold text-white hover:underline dark:text-white md:text-xl block mb-2"
                >
                  {noti.titulo}
                </a>

                <p className="mt-3 text-sm text-gray-100 dark:text-gray-300 md:text-base">
                  {noti.descripcion || noti.descripcion}
                </p>

                <p className="mt-3 text-sm text-indigo-500 font-medium">{noti.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotiBlog;