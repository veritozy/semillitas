interface PortfolioItem {
  title: string;
  category: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Técnicas Lúdicas",
    category: "Programas",
    imageUrl:
      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?auto=format&fit=crop&w=1565&q=80",
  },
  {
    title: "Neuro-educación",
    category: "Recursos",
    imageUrl:
      "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "Rutas y Protocolos",
    category: "Actividades",
    imageUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Adaptaciones Curriculares",
    category: "Apoyo emocional",
    imageUrl:
      "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Resolución Pacífica de Conflictos",
    category: "Apoyo emocional",
    imageUrl:
      "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Diseño Universal para el Aprendizaje",
    category: "Apoyo emocional",
    imageUrl:
      "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&w=1470&q=80",
  },
];

export default function ListSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-900 capitalize lg:text-3xl dark:text-white">
          Nuestros Recursos
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative h-96 overflow-hidden rounded-lg shadow-lg"
            >
              {/* Imagen con efecto, en posición absoluta */}
              <img
                src={item.imageUrl.trim()}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Texto fijo en la parte inferior */}
              <div className="absolute bottom-0 w-full px-8 py-4 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-xl font-extrabold text-white">
                  {item.title}
                </h2>
                <p className="text-white font-semibold uppercase tracking-wider">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

