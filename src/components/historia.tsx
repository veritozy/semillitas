import { HiCalendar } from "react-icons/hi";

const bloques = [
  {
    date: "Experiencia infanto-juvenil",
    title: "Fundación en valores",
    text: "CEP'S nace de la experiencia infanto-juvenil en un grupo carismático de ayuda social, que tiene como principio fundamental el bien común y la transformación de vidas a través de una educación humanizadora.",
  },
  {
    date: "2014",
    title: "Sembrando Semillas",
    text: "Este proyecto nace en el año 2014, cuando un grupo de jóvenes de la Parroquia Cristo Salvador se reúne para crear espacios educativos y recreativos a favor de la comunidad. Cursos como canto, computación, inglés y manualidades dan inicio al proyecto 'Sembrando Semillas', con el fin de incentivar a niños, jóvenes y adultos a ser parte activa de la comunidad.",
  },
  {
    date: "2016",
    title: "Taller permanente",
    text: "Más tarde, en el año 2016, se conforma un taller permanente de acompañamiento infanto-juvenil basado en habilidades sociales y lúdicas que propician un aprendizaje significativo.",
  },
  {
    date: "Finales de 2017",
    title: "Preparación profesional",
    text: "A finales del año 2017, este grupo de jóvenes promotores se cuestiona su accionar a la luz de la frase: 'La voluntad de servir no es suficiente, se requiere preparación'. Deciden entonces especializarse en el campo educativo, y nuestro director opta por la Psicología Educativa, una profesión pionera en estudiar el aprendizaje humano dentro de los contextos escolares.",
  },
  {
    date: "2018",
    title: "CAM Semillitas",
    text: "Para el 2018 se da inicio al proyecto CAM SEMILLITAS, un club de aprendizajes enfocado en brindar tareas dirigidas, estimulación temprana y apoyo al desarrollo infantil no escolarizado, con una acogida favorable en el sector donde se establecieron las primeras oficinas.",
  },
  {
    date: "Finales de 2018",
    title: "CIP Semillitas",
    text: "A finales del 2018, ante la gran demanda de atención psicopedagógica, CAM SEMILLITAS adopta el nombre de CIP SEMILLITAS: un centro de intervención psicopedagógica y talleres educativos, asesorado por profesionales de la Universidad Central del Ecuador. Nuestro equipo comienza a ser reconocido por sus nuevas metodologías de intervención educativa.",
  },
  {
    date: "2022",
    title: "CEPS",
    text: "En el 2022 llega a la comunidad una nueva experiencia educativa: CEPS (Centro Psicopedagógico Semillitas), conformado por especialistas en educación y psicología, con una amplia trayectoria en instituciones educativas. Contamos con una red de profesionales capaces de brindar una atención integral a nuestros pacientes.",
  },
];

export default function HistoriaTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 ">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#09667e] mb-10 text-center">
        Nuestra Historia
      </h2>

      <div className="relative pl-8 pb-8 border-l-2 border-blue-200 ml-3">
        {bloques.map((bloque, index) => (
          <div key={index} className="mb-10 relative">
            {}
            <div className="absolute -left-9 top-0.5 w-6 h-6 rounded-full text-blue-900 flex items-center justify-center">
              <HiCalendar className="h-4 w-4" />
            </div>

            {}
            <div className="ml-2">
              <div className="font-semibold text-blue-900 text-sm md:text-base">
                {bloque.date}
              </div>
              <h3 className="text-lg font-bold text-gray-700 mt-1 text-justify">
                {bloque.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed text-justify">
                {bloque.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="mt-12 text-center border-l-4 border-blue-600 pl-6 italic text-xl text-gray-800 max-w-2xl mx-auto">
        "Para continuar escribiendo esta historia, nos hace falta que tú seas parte de lo que nosotros somos."
      </blockquote>
    </div>
  );
}
