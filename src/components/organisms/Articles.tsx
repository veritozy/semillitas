
import ArticleCard from "./ArticleCard";

const ARTICLES = [
  {
    img: "/images/chico-tener-una-sesion-de-terapia-ocupacional-con-un-psicologo.jpg",
    imgBack: "/images/computadora-libro-lectura-planificacion-ideas-estudiantes.jpg",
    title: "Blockchain Development: How to learn",
    desc: "This article offers valuable insights into the skills, resources, and steps needed to embark on a journey in blockchain development.",
  },
  {
    img: "/images/escena-de-la-vida-ordinaria-de-un-centro-comercial-en-estados-unidos.jpg",
    imgBack: "/images/maestra-y-nino-pequeno-jugando-con-un-juego-de-rompecabezas-de-matematicas-sentado-en-la-mesa-en-el-jardin-de-infantes.jpg",
    title: "How to become a full stack developer - Roadmap",
    desc: "For those aspiring to become full stack developers, this roadmap is your ultimate guide. This article outlines the key milestones.",
  },
  {
    img: "/images/neuro.jpg",
    imgBack: "/images/nino-con-su-mama-jugando-un-acertijo.jpg",
    title: "Join the Web 3 Conference 2023 - Registration details",
    desc: "This article provides essential registration details for this exciting event where experts gather to explore the latest developments",
  },
];

export function Articles() {
  return (
    <section className="container mx-auto px-8 py-20">
      <h2 className="text-3xl font-extrabold text-[#09667e] sm:text-4xl">Servicios</h2>
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
