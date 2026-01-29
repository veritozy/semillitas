import { useState, useEffect } from "react";
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

const SLIDES = [
  { url: "/images/p-clinica.jpg", label: "Evaluación Especializada" },
  { url: "/images/p-educativa.jpg", label: "Apoyo Pedagógico" },
  { url: "/images/p-infantil.webp", label: "Bienestar Infantil" },
];

export function Articles() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const next = setInterval(() => {
      setActive((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(next);
  }, []);

  return (
    <section className="bg-white">
      {}
      <div className="bg-gradient-to-br from-[#3d8395] via-blue-600 to-cyan-100 border-b border-slate-100">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          {}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 text-center lg:text-left">
            
            {}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
              <h6 className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Nuestros Servicios
              </h6>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-100 mb-6 leading-tight">
                Acompañamos cada <br />
                <span className="text-emerald-300">paso del crecimiento.</span>
              </h2>
              <div className="flex items-center gap-4 text-gray-100 font-semibold italic mb-8">
                <span className="h-px w-10 bg-emerald-300"></span>
                "Calidad profesional con el idioma del amor"
              </div>
              <p className="text-gray-100 text-lg leading-relaxed max-w-xl">
                En Semillitas, ofrecemos una gama completa de servicios psicoeducativos diseñados para nutrir cada etapa del desarrollo. Nuestro equipo trabaja de manera integrada para asegurar que cada semilla reciba el cuidado y la guía que necesita para florecer plenamente.
              </p>
            </div>

            {/* MINI CARRUSEL*/}
            <div className="lg:w-1/2 w-full max-w-sm flex flex-col items-center">
              <div className="relative aspect-square w-full">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-200/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl"></div>
                
                <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-white border-4 border-white">
                  {SLIDES.map((slide, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"
                      }`}
                    >
                      <img src={slide.url} className="w-full h-full object-cover" alt="Semillitas" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white font-medium text-lg text-left">{slide.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-2 mt-6">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        i === active ? "w-8 bg-[#3d8395]" : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((item: Article, idx: number) => (
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