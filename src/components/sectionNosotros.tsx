import {
  HeartIcon,
  AcademicCapIcon,
  UsersIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const pilares = [
  {
    icon: <HeartIcon className="h-6 w-6 text-gray-800 font-extrabold" />,
    title: "Educación con corazón",
    description:
      "Creemos que el aprendizaje florece en entornos donde prima el respeto, la empatía y el bienestar emocional.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 text-gray-800 font-extrabold" />,
    title: "Aprendizaje significativo",
    description:
      "No formamos para pruebas, sino para la vida. Nuestro enfoque potencia la creatividad y la resolución de problemas reales.",
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-gray-800 font-extrabold" />,
    title: "Comunidad activa",
    description:
      "Familias, docentes y estudiantes construimos juntos espacios de crecimiento mutuo y transformación social.",
  },
  {
    icon: <LightBulbIcon className="h-6 w-6 text-gray-800 font-extrabold" />,
    title: "Innovación con propósito",
    description:
      "Actualizamos constantemente nuestras prácticas con base en evidencia y experiencia en el aula.",
  },
];

export default function SectionNosotros() {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-[#fff1f2] via-[#ffd1dc] to-[#ffb6c1]">
  <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
    {}
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold text-[#09667e] mb-6">
        ¿Quiénes somos?
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
        En CEPS no medimos el éxito por cuánto se memoriza, sino por cuánto
        se transforma. Nacimos de un sueño colectivo: crear espacios donde
        cada niño, joven o adulto descubra su potencial y se convierta en
        agente de cambio en su entorno.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pilares.map((pilar, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1 flex-shrink-0">{pilar.icon}</div>
            <div>
              <h3 className="font-bold text-gray-600 mb-1">
                {pilar.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {pilar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Imagen */}
    <div className="w-full h-[380px] overflow-hidden rounded-2xl shadow-lg">
      <img
        src="https://www.shutterstock.com/image-photo/enthusiastic-hispanic-teacher-explaining-children-260nw-2489701375.jpg"
        alt="Equipo CEPS acompañando a niños"
        className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:opacity-90"
      />
    </div>
  </div>
</section>

  );
}
