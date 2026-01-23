import { HiCalendar } from "react-icons/hi";

const bloques = [
  {
    date: "Experiencia infanto-juvenil",
    title: "Fundación en valores",
    text: "CEP’S nace de la experiencia infanto-juvenil en un grupo carismático de ayuda social, con el bien común y la educación humanizadora como ejes fundamentales de su acción. Desde sus inicios, el proyecto ha buscado generar procesos educativos que transformen vidas y fortalezcan la participación comunitaria.",
  },
  {
    date: "2014",
    title: "Sembrando Semillas",
    text: "El camino inicia en el año 2014, cuando un grupo de jóvenes de la Parroquia Cristo Salvador crea espacios educativos y recreativos al servicio de la comunidad. Cursos de canto, computación, inglés y manualidades dieron origen al proyecto Sembrando Semillas, promoviendo la formación integral de niños, jóvenes y adultos.",
  },
  {
    date: "2016",
    title: "Taller permanente",
    text: "En 2016, esta iniciativa se consolida con la implementación de un taller permanente de acompañamiento infanto-juvenil, orientado al desarrollo de habilidades sociales y al aprendizaje significativo mediante metodologías lúdicas",
  },
  {
    date: "Finales de 2017",
    title: "Preparación profesional",
    text: "El equipo promotor asume un proceso de reflexión institucional que marca un punto de inflexión en su historia, comprendiendo que el compromiso social debía ir acompañado de una sólida preparación académica. Como resultado, el director del proyecto orienta su formación hacia la Psicología Educativa, fortaleciendo la base científica y pedagógica de la propuesta.",
  },
  {
    date: "2018",
    title: "CAM Semillitas",
    text: "En 2018 se crea CAM Semillitas, un club de aprendizajes enfocado en tareas dirigidas, estimulación temprana y apoyo al desarrollo infantil no escolarizado. Ante la creciente demanda de atención especializada, a finales del mismo año el proyecto evoluciona a CIP Semillitas, Centro de Intervención Psicopedagógica y Talleres Educativos, asesorado por profesionales de la Universidad Central del Ecuador, destacándose por la implementación de metodologías educativas pertinentes e innovadoras.",
  },
  {
    date: "2022",
    title: "CEPS",
    text: "En 2022 se consolida CEPS – Centro Psicopedagógico Semillitas, integrado por especialistas en educación y psicología con amplia experiencia en instituciones educativas, conformando una red de profesionales orientada a la atención integral de niños, adolescentes y familias.",
  },
  {
    date: "2026",
    title: "Un nuevo paso institucional",
    text: "Como resultado natural de este recorrido y de la experiencia acumulada en el ámbito educativo, CEPS da un nuevo paso institucional al consolidarse como editorial de textos escolares, iniciando en el área de Educación Religiosa Escolar. Esta línea editorial surge a partir de la formación teológica del director y de un trabajo pedagógico sistemático, orientado a la producción de materiales educativos rigurosos, contextualizados y alineados al currículo nacional.",
  },
];

export default function HistoriaTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 ">
       <h2 className="text-3xl md:text-5xl font-black text-[#09667e] tracking-tight mb-4 text-center">
          ¿Quiénes Somos?
        </h2>
        {/*linea separacion*/}
      <div className="w-32 h-2 bg-emerald-400 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>

      <div className="relative pl-8 pb-8 border-l-2 border-emerald-400 ml-3">
        {bloques.map((bloque, index) => (
          <div key={index} className="mb-10 relative">
            {}
            <div className="absolute -left-9 top-0.5 w-6 h-6 rounded-full text-[#09667e] flex items-center justify-center">
              <HiCalendar className="h-4 w-4" />
            </div>

            {}
            <div className="ml-2">
              <div className="font-semibold text-[#09667e] text-sm md:text-base">
                {bloque.date}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mt-1 text-justify">
                {bloque.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed text-justify">
                {bloque.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="mt-12 text-center border-l-4 border-emerald-400 pl-6 italic text-xl text-gray-800 max-w-2xl mx-auto">
        "Para continuar escribiendo esta historia, nos hace falta que tú seas
        parte de lo que nosotros somos."
      </blockquote>
    </div>
  );
}
