
import ArticleCard from "./articleCard";

const ARTICLES = [
  {
    img: "/images/foto3.jpg",
    imgBack: "/images/foto5.jpg",
    title: "Blockchain Development: How to learn",
    desc: "This article offers valuable insights into the skills, resources, and steps needed to embark on a journey in blockchain development.",
  },
  {
    img: "/images/foto4.jpg",
    imgBack: "/images/foto1.jpg",
    title: "How to become a full stack developer - Roadmap",
    desc: "For those aspiring to become full stack developers, this roadmap is your ultimate guide. This article outlines the key milestones.",
  },
  {
    img: "/images/foto2.jpg",
    imgBack: "/images/foto5.jpg",
    title: "Join the Web 3 Conference 2023 - Registration details",
    desc: "This article provides essential registration details for this exciting event where experts gather to explore the latest developments",
  },
];

export function Articles() {
  return (
    <section className="container mx-auto px-8 py-20">
      <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">Servicios</h2>
      <p className="text-gray-700 font-normal text-lg lg:w-5/12 mb-10 mt-10 text-justify">
        Bienvenido a CEP'S. Queremos alcanzar la satisfacción de nuestros
        clientes por medio de nuestros servicios y productos. Con este enfoque
        sencillo hemos caminado juntos desde nuestros inicios en el año 2015.
        Gracias por visitarnos, por favor explora este sitio y descubre todo lo
        que tenemos para ti.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ARTICLES.map((props, idx) => (
          <ArticleCard key={idx} {...props} /> 
        ))}
      </div>
    </section>
  );
}

export default Articles;
