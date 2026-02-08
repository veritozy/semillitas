import React from "react";

interface Compromiso {
  id: number;
  titulo: string;
  descripcion: string;
}

const listaCompromisos: Compromiso[] = [
  {
    id: 1,
    titulo: "Poner a la persona en el centro",
    descripcion:
      "Valorar a cada persona por su dignidad y su capacidad de relación con los demás.",
  },
  {
    id: 2,
    titulo: "Escuchar a las jóvenes generaciones",
    descripcion:
      "Transmitir valores y conocimientos para construir un futuro de justicia y paz.",
  },
  {
    id: 3,
    titulo: "Fomentar la educación de las niñas",
    descripcion:
      "Asegurar que las mujeres y niñas tengan acceso pleno a la formación integral.",
  },
  {
    id: 4,
    titulo: "Tener a la familia como primer educador",
    descripcion:
      "Fortalecer el rol educativo fundamental de la familia en la sociedad.",
  },
  {
    id: 5,
    titulo: "Educar para la acogida",
    descripcion:
      "Abrirnos a los más vulnerables y marginados para no dejar a nadie atrás.",
  },
  {
    id: 6,
    titulo: "Nuevas formas de economía y política",
    descripcion:
      "Buscar modelos que respeten la dignidad humana y el medio ambiente.",
  },
  {
    id: 7,
    titulo: "Cuidar la casa común",
    descripcion:
      "Protección del planeta mediante estilos de vida más sobrios y sostenibles.",
  },
];

const Compromisos: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#3d8395] via-blue-500 to-cyan-400 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 text-center">
            Los 7 Compromisos del <br /> <span className="text-emerald-300">Pacto Educativo</span>
          </h2>
          <p className="mt-6 text-white text-lg">
            En Semillitas nos sumamos a la aldea de la educación para humanizar
            el mundo a través de estos pilares.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {listaCompromisos.map((item) => (
            <div
              key={item.id}
              className="relative p-8 bg-white rounded-3xl border border-transparent 
                         hover:bg-white hover:border-rose-100 hover:-translate-y-2 
                         transition-all duration-500 group
                         w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] shadow-sm hover:shadow-xl hover:shadow-rose-100/40"
            >
              <div
                className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-2xl 
                            shadow-sm group-hover:bg-emerald-300 group-hover:text-white
                            font-bold text-2xl transition-colors duration-300"
              >
                {item.id}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#09667e] transition-colors duration-300">
                {item.titulo}
              </h3>

              <div className="w-10 h-1 bg-[#5292eb49] my-4 rounded-full group-hover:w-20 transition-all duration-500"></div>

              <p className="text-gray-600 leading-relaxed font-medium">
                {item.descripcion}
              </p>
              <div
                className="absolute top-4 right-4 text-[#10B981] opacity-10 group-hover:opacity-40 transition-opacity duration-300"
              >
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compromisos;
