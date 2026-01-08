import {} from "react";

interface Project {
  title: string;
  category: string;
  imageUrl: string;
}

export default function Series() {
  const projects: Project[] = [
    {
      title: "Colecciones de Sitios Web",
      category: "Sitio Web",
      imageUrl:
        "https://images.unsplash.com/photo-1621111848501-8d3634f82336?auto=format&fit=crop&w=1565&q=80",
    },
    {
      title: "Colecciones de Kits de UI",
      category: "Diseño UI",
      imageUrl:
        "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "Modelos de Dispositivos Móviles",
      category: "Mockups",
      imageUrl:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Colección de Animaciones",
      category: "Animación",
      imageUrl:
        "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container px-6 py-16 mx-auto">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold text-center text-gray-800 lg:text-4xl dark:text-white">
          Bienvenidos a <span className="text-blue-500">MASTER´S EDITORES</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 dark:text-gray-400">
          En MASTER´S EDITORES, nos esforzamos por proporcionar contenido
          educativo de calidad que se adapte a tus necesidades. <br />
          MASTER´S EDITORES: 0999219934
        </p>

        {/* Rejilla de Proyectos */}
        <div className="grid grid-cols-1 gap-8 mt-12 xl:mt-16 xl:gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex items-end overflow-hidden bg-cover rounded-xl h-96 cursor-pointer transition-transform duration-500 hover:scale-[1.02] shadow-lg"
              style={{ backgroundImage: `url('${project.imageUrl}')` }}
            >
              <div className="w-full px-8 py-6 overflow-hidden rounded-b-xl backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-t border-white/20">
                <p className="text-sm font-bold tracking-widest text-blue-600 uppercase dark:text-blue-400">
                  {project.category}
                </p>
                <h2 className="mt-2 text-xl font-bold text-gray-800 capitalize dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

