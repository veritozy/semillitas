import {
  HeartIcon,
  SunIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const pilares = [
  {
    icon: <HeartIcon className="h-6 w-6 text-[#ffb6c1] stroke-[2.5px]" />,
    title: "El Idioma del Amor",
    description:
      "Nuestra metodología principal. Entendemos que sin vínculo afectivo no hay aprendizaje real y duradero.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 text-[#ffb6c1] stroke-[2.5px]" />,
    title: "Mismo Sembrador",
    description:
      "Reconocemos la unidad y la igualdad en nuestra comunidad, trabajando bajo una misma visión de fe y entrega.",
  },
  {
    icon: <SunIcon className="h-6 w-6 text-[#ffb6c1] stroke-[2.5px]" />,
    title: "Potencial en Crecimiento",
    description:
      "Acompañamos a cada semilla en su proceso único, respetando sus tiempos y nutriendo sus talentos particulares.",
  },
  {
    icon: <HandRaisedIcon className="h-6 w-6 text-[#ffb6c1] stroke-[2.5px]" />,
    title: "Vocación de Servicio",
    description:
      "Nuestra labor psicoeducativa es un compromiso de vida dedicado a formar seres humanos íntegros.",
  },
];

export default function SectionNosotros() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        
        <div>
          <h2 className="text-3xl lg:text-3xl font-bold text-[#09667e] mb-6 text-center">
            Centro Educativo de Psicoeducación Semillitas
          </h2>

          <p className="text-[#ffb6c1] text-l font-semibold italic mb-6 text-center">
            "Semillas del mismo sembrador. Educando con el idioma del amor"
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
            En CEP'S, nuestra identidad se resume en nuestro lema. Reconocemos que cada niño y joven es una semilla única, pero todas comparten un origen común de dignidad y propósito. Nuestra misión es cultivar ese potencial utilizando el único lenguaje que transforma: el **idioma del amor**, integrando la excelencia profesional con la calidez humana.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pilares.map((pilar, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">{pilar.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
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

        {/* Imagen tal cual te gustaba */}
        <div className="w-full h-[380px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://www.shutterstock.com/image-photo/enthusiastic-hispanic-teacher-explaining-children-260nw-2489701375.jpg"
            alt="Equipo CEP'S - Educando con amor"
            className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:opacity-90"
          />
        </div>
      </div>
    </section>
  );
}