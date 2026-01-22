import ArticleCard from "./ArticleCard";

interface Article {
  img: string;
  title: string;
  desc: string;
}

const ARTICLES: Article[] = [
  { img: "/images/p-clinica.jpg", title: "Neuropsicología Clínica", desc: "Realizamos evaluaciones especializadas de atención, memoria, lenguaje, aprendizaje y conducta, en niños, adolescentes y adultos. Este servicio es ideal cuando existen dificultades cognitivas, neurológicas o del desarrollo que requieren un diagnóstico claro y un plan de intervención personalizado." },
  { img: "/images/p-educativa.jpg", title: "Psicología Educativa", desc: " Apoyamos a estudiantes, familias y docentes para identificar y superar dificultades escolares, problemas de motivación, adaptación o rendimiento académico. Trabajamos de manera integral para fortalecer el bienestar emocional y el éxito escolar." },
  { img: "/images/psicopedagogo.jpg", title: "Psicopedagogía", desc: "Intervenimos en casos de lectura, escritura, matemáticas y otros procesos escolares, respetando el ritmo y las necesidades de cada niño o adolescente. Nuestro enfoque busca potenciar habilidades y prevenir futuras dificultades académicas." },
  { img: "/images/p-infantil.webp", title: "Psicología Infantil", desc: "Brindamos acompañamiento psicológico para niños que presentan dificultades emocionales, conductuales, sociales o familiares. A través de un enfoque respetuoso y cercano, ayudamos a los niños a expresar lo que sienten y a desarrollar herramientas para su bienestar." },
  { img: "/images/t-lenguaje.webp", title: "Terapia de Lenguaje", desc: "Atendemos dificultades en el habla, el lenguaje, la pronunciación, la comprensión y la expresión oral. Este servicio está dirigido a niños, adolescentes y adultos que requieren apoyo para comunicarse con mayor claridad y seguridad." },
  { img: "/images/t-familiar.webp", title: "Terapia Familiar", desc: "Ofrecemos espacios de escucha y orientación para mejorar la comunicación, resolver conflictos y fortalecer los vínculos familiares. Trabajamos con la familia como un sistema, promoviendo el respeto, el diálogo y el bienestar común." },
  { img: "/images/g-educativa.jpg", title: "Gestión Educativa", desc: "Brindamos acompañamiento en procesos de gestión, planificación, orientación pedagógica y fortalecimiento institucional, adaptándonos a las necesidades de cada centro educativo." },
  { img: "/images/asesoria.jpg", title: "Asesoría y Capacitación", desc: "Ofrecemos asesoría especializada y capacitaciones en temas educativos, psicológicos y psicopedagógicos, con enfoques prácticos y actualizados que responden a las necesidades reales del contexto educativo." },
];

export function Articles() {
  return (
    <section className="container mx-auto px-4 py-16">
      
      {}
      <div className="relative overflow-hidden px-8 py-16 mb-20 bg-gradient-to-br from-[#09667e] via-indigo-600 to-blue-600 rounded-[3rem] shadow-2xl">
        
        {}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-400 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400 rounded-full blur-[100px]"></div>
        </div>

        {}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Nuestros <span className="text-emerald-300">Servicios</span>
          </h2>

          {}
          <div className="inline-block mb-8">
            <p className="text-emerald-100 text-xl md:text-2xl font-medium italic border-l-4 border-emerald-400 pl-6 bg-white/10 py-3 rounded-r-xl">
              "Calidad profesional con el idioma del amor"
            </p>
          </div>

          <p className="text-white text-lg md:text-xl leading-relaxed opacity-95 mx-auto">
            En Semillitas, ofrecemos una gama completa de servicios psicoeducativos diseñados para nutrir cada etapa del desarrollo. Nuestro equipo trabaja de manera integrada para asegurar que cada semilla reciba el cuidado y la guía que necesita para florecer plenamente.
          </p>
        </div>
      </div>

      {/* Grid de servicios*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ARTICLES.map((item: Article, idx: number) => (
          <div key={idx} className="flex justify-center transition-all duration-300 hover:-translate-y-2">
            <ArticleCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;