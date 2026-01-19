import ArticleCard from "./ArticleCard";

const ARTICLES = [
  {
    img: "/images/p-clinica.jpg",
    title: "Neuropsicología Clínica",
    desc: "Realizamos evaluaciones especializadas de atención, memoria, lenguaje, aprendizaje y conducta, en niños, adolescentes y adultos. Este servicio es ideal cuando existen dificultades cognitivas, neurológicas o del desarrollo que requieren un diagnóstico claro y un plan de intervención personalizado.",
  },
  {
    img: "/images/p-educativa.jpg",
    title: "Psicología Educativa",
    desc: " Apoyamos a estudiantes, familias y docentes para identificar y superar dificultades escolares, problemas de motivación, adaptación o rendimiento académico. Trabajamos de manera integral para fortalecer el bienestar emocional y el éxito escolar.",
  },
  {
    img: "/images/psicopedagogo.jpg",
    title: "Psicopedagogía",
    desc: "Intervenimos en casos de lectura, escritura, matemáticas y otros procesos escolares, respetando el ritmo y las necesidades de cada niño o adolescente. Nuestro enfoque busca potenciar habilidades y prevenir futuras dificultades académicas.",
  },
  {
    img: "/images/p-infantil.webp",
    title: "Psicología Infantil",
    desc: "Brindamos acompañamiento psicológico para niños que presentan dificultades emocionales, conductuales, sociales o familiares. A través de un enfoque respetuoso y cercano, ayudamos a los niños a expresar lo que sienten y a desarrollar herramientas para su bienestar.",
  },
  {
    img: "/images/t-lenguaje.webp",
    title: "Terapia de Lenguaje",
    desc: "Atendemos dificultades en el habla, el lenguaje, la pronunciación, la comprensión y la expresión oral. Este servicio está dirigido a niños, adolescentes y adultos que requieren apoyo para comunicarse con mayor claridad y seguridad.",
  },
  {
    img: "/images/t-familiar.webp",
    title: "Terapia Familiar",
    desc: "Ofrecemos espacios de escucha y orientación para mejorar la comunicación, resolver conflictos y fortalecer los vínculos familiares. Trabajamos con la familia como un sistema, promoviendo el respeto, el diálogo y el bienestar común.",
  },
  {
    img: "/images/g-educativa.jpg",
    title: "Gestión Educativa",
    desc: "Brindamos acompañamiento en procesos de gestión, planificación, orientación pedagógica y fortalecimiento institucional, adaptándonos a las necesidades de cada centro educativo.",
  },
  {
    img: "/images/asesoria.jpg",
    title: "Asesoría y Capacitación",
    desc: "Ofrecemos asesoría especializada y capacitaciones en temas educativos, psicológicos y psicopedagógicos, con enfoques prácticos y actualizados que responden a las necesidades reales del contexto educativo.",
  },
];

export function Articles() {
  return (
    <section className="container mx-auto px-8 py-2">
      <div className="w-full bg-white py-20 mb-2 px-2">
        {}
        <div className="relative max-w-5xl mx-auto group">
          {}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>{" "}
          {}
          <div className="relative bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[3rem] p-10 md:p-16 text-center">
            {}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
                  <div className="w-24 h-1 bg-[#b01a95] mx-auto rounded-full mb-6"></div>

            {}

            <p className="text-lg lg:text-xl text-white leading-relaxed max-w-3xl mx-auto">
              Bienvenido a strCEP'S. Queremos alcanzar la satisfacción de
              nuestros clientes por medio de nuestros servicios y productos. Con
              este enfoque sencillo hemos caminado juntos desde nuestros inicios
              en el año 2015. Gracias por visitarnos, por favor explora este
              sitio y descubre todo lo que tenemos para ti.
            </p>
          </div>
        </div>
      </div>
      {}
      <div className="flex flex-wrap justify-center gap-8">
        {ARTICLES.map((props, idx) => (
          <div
            key={idx}
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
          >
            <ArticleCard {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
