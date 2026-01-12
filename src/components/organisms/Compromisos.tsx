import React from 'react';

interface Compromiso {
  id: number;
  titulo: string;
  descripcion: string;
}

const listaCompromisos: Compromiso[] = [
  { id: 1, titulo: "Poner a la persona en el centro", descripcion: "Valorar a cada persona por su dignidad y su capacidad de relación con los demás." },
  { id: 2, titulo: "Escuchar a las jóvenes generaciones", descripcion: "Transmitir valores y conocimientos para construir un futuro de justicia y paz." },
  { id: 3, titulo: "Fomentar la educación de las niñas", descripcion: "Asegurar que las mujeres y niñas tengan acceso pleno a la formación integral." },
  { id: 4, titulo: "Tener a la familia como primer educador", descripcion: "Fortalecer el rol educativo fundamental de la familia en la sociedad." },
  { id: 5, titulo: "Educar para la acogida", descripcion: "Abrirnos a los más vulnerables y marginados para no dejar a nadie atrás." },
  { id: 6, titulo: "Nuevas formas de economía y política", descripcion: "Buscar modelos que respeten la dignidad humana y el medio ambiente." },
  { id: 7, titulo: "Cuidar la casa común", descripcion: "Protección del planeta mediante estilos de vida más sobrios y sostenibles." }
];

const Compromisos: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
            Los 7 Compromisos del <span className="text-[#09667e]">Pacto Educativo</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            Propuestas esenciales para una educación que humanice y construya esperanza.
          </p>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-8">
          {listaCompromisos.map((item) => (
            <div 
              key={item.id} 
              className="p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-400 dark:border-gray-700 dark:hover:border-transparent w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(25%-2rem)]"
            >
              <div className="flex items-center justify-center w-12 h-12 text-blue-500 bg-blue-100 rounded-full group-hover:bg-white group-hover:text-blue-600 font-bold text-xl">
                {item.id}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-white">
                {item.titulo}
              </h3>

              <p className="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-white">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compromisos;