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
    <section className="bg-white">
      <div className="bg-gradient-to-br from-[#3d8395] via-blue-600 to-cyan-100 border-b border-slate-100">
        <div className="container mx-auto px-6 py-16 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 text-center lg:text-left">
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
              <h6 className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Nuestros Servicios
              </h6>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-100 mb-6 leading-tight">
                CENTRO PSICOPEDAGÓGICO <br />
                <span className="text-emerald-300">SEMILLITAS</span>
              </h2>
              <div className="flex items-center gap-4 text-gray-100 font-semibold italic mb-8">
                <span className="h-px w-10 bg-emerald-300"></span>
                "Donde las mentes crecen y florecen"
              </div>
              <p className="text-gray-100 text-lg leading-relaxed max-w-xl">
                En Semillitas, ofrecemos una gama completa de servicios psicoeducativos diseñados para nutrir cada etapa del desarrollo.
              </p>
            </div>

            <div className="lg:w-1/2 w-full max-w-sm flex flex-col items-center">
              <div className="relative aspect-square w-full">
                              
                <div className="relative w-full h-full overflow-hidden rounded-full shadow-2xl bg-white border-4 border-white group">
                  <img 
                    src="/images/logoS.png" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt="Centro Semillitas" 
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((item, idx) => (
            <div key={idx} className="flex justify-center transition-all duration-300 hover:-translate-y-2">
              <ArticleCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;