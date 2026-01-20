const SectionSeries = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Nuestros Libros
        </h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          Descubre la colección "Semillas del Mismo Sembrador", diseñada para
          acompañar el crecimiento espiritual y humano.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {/* Card 1: Inicial */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: "url('images/inicial.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white uppercase">
                Inicial
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que enseña a los niños a conocerse, amar y cuidar,
                descubriendo que su vida es un regalo de Dios. Semillas del
                Mismo Sembrador – Inicial integra emociones, amistad, cuerpo, fe
                y cuidado del entorno, ayudando a los más pequeños a crecer
                felices, libres y solidarios desde sus primeras experiencias
                escolares.
              </p>
            </div>
          </div>

          {/* Card 2: Primaria (Ejemplo) */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: "url('images/nivel2.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                SEGUNDO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que enseña a los niños a ser amigos de
                verdad. Semillas del Mismo Sembrador – Segundo EGB forma en
                valores, amistad, uso responsable de la tecnología y compromiso
                con el bien común, mostrando a Jesús como el mejor amigo y guía
                para la vida.
              </p>
            </div>
          </div>

          {/* Card 3: Secundaria (Ejemplo) */}
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Educación Secundaria
              </h2>
              <p className="mt-2 text-sm tracking-wider text-blue-400 uppercase">
                Creciendo en comunidad, solidaridad y compromiso social.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeries;
