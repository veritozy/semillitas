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
            {/*Preparatoria*/}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/preparatoria.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                PREPARATORIA
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que ayuda a los niños a crecer con seguridad, amor y sentido de comunidad. Semillas del Mismo Sembrador – Preparatoria fortalece la autonomía, la inclusión, la gratitud por la vida y el cuidado de la creación, sembrando valores cristianos desde experiencias reales y cercanas.
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
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel3.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                TERCERO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que ayuda a los niños a comprender su historia, cuidar su corazón y descubrir la felicidad al estilo de Jesús. Semillas del Mismo Sembrador – Tercero EGB forma en resiliencia, identidad, emociones y valores cristianos desde experiencias reales y cercanas.
              </p>
            </div>
          </div>
          {/* Card 4: Secundaria (Ejemplo) */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel4.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                CUARTO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que enseña a cuidar la vida y la creación con amor y responsabilidad. Semillas del Mismo Sembrador – Cuarto EGB invita a vivir la fe desde la solidaridad, la inclusión y el compromiso con la casa común, al estilo de Jesús.
              </p>
            </div>
          </div>
          {/* Card 5: Secundaria (Ejemplo) */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel5.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                QUINTO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que invita a pensar, dialogar y actuar con responsabilidad. Semillas del Mismo Sembrador – Quinto EGB integra fe, ética, convivencia y compromiso ecológico, formando estudiantes capaces de transformar su entorno al estilo del Evangelio.
              </p>
            </div>
          </div>
          {/* Card 6: Secundaria (Ejemplo) */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel6.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                SEXTO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que ayuda a los estudiantes a crecer, decidir y servir con sentido. Semillas del Mismo Sembrador – Sexto EGB integra fe, identidad, valores, cuidado de la vida y compromiso con la creación, preparando a los jóvenes para construir un proyecto de vida con propósito.
              </p>
            </div>
          </div>
          {/* Card 7: Secundaria (Ejemplo) */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel7.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                SÉPTIMO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que invita a los estudiantes a cuidar la vida, las emociones y la creación con responsabilidad y fe. Semillas del Mismo Sembrador – Séptimo EGB forma en ética del cuidado, acompañamiento solidario y compromiso con la casa común, al estilo de Jesús.
              </p>
            </div>
          </div>
          {/* Card 7: Secundaria (Ejemplo) */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel8.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                OCTAVO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que invita a los adolescentes a dialogar, discernir y construir convivencia. Semillas del Mismo Sembrador – Octavo EGB integra fe, ética, emociones y compromiso social para vivir al servicio del bien común.
              </p>
            </div>
          </div>
          {/* Noveno */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel9.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                NOVENO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que invita a los adolescentes a discernir, comprometerse y transformar su realidad. Semillas del Mismo Sembrador – Noveno EGB integra fe, juventud, liderazgo y proyecto de vida para vivir con sentido y construir paz.
              </p>
            </div>
          </div>
          {/* Décimo */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/nivel10.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                DÉCIMO EGB
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que invita a los estudiantes a mirar el mundo con sensibilidad, conciencia social y compromiso cristiano. Semillas del Mismo Sembrador – Décimo EGB aborda las realidades de la vulnerabilidad, la inclusión y la dignidad humana, iluminadas por el ejemplo de Jesús y los principios de la Doctrina Social de la Iglesia.
              </p>
            </div>
          </div>
           {/* Bachillerato 1 */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/bachillerato1.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                PRIMERO DE BACHILLERATO
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que invita a los jóvenes a pensar la fe en medio de un mundo en crisis. Semillas del Mismo Sembrador – Primero de Bachillerato propone una reflexión profunda sobre los desafíos éticos, sociales y culturales de la humanidad actual, ayudando a los estudiantes a discernir con responsabilidad, libertad y sentido cristiano.
              </p>
            </div>
          </div>
          {/* Bachillerato 2 */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/bachillerato2.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                SEGUNDO DE BACHILLERATO
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que acompaña a los jóvenes en una etapa decisiva de maduración personal, afectiva y espiritual. Semillas del Mismo Sembrador – Segundo de Bachillerato propone una mirada integral sobre las relaciones humanas, el proyecto de vida y la salud emocional y espiritual, iluminadas por la fe cristiana y la Doctrina Social de la Iglesia.
              </p>
            </div>
          </div>
           {/* Bachillerato 3 */}
          <div
            className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('images/bachillerato3.png')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                TERCERO DE BACHILLERATO
              </h2>
              <p className="mt-2 text-sm tracking-wider text-gray-100 text-justify">
                Un libro que invita a los jóvenes a comprender la diversidad humana y asumir un compromiso ético con la justicia, la sostenibilidad y el bien común. Semillas del Mismo Sembrador – Tercero de Bachillerato propone una reflexión profunda sobre los pueblos y nacionalidades, sus contextos sociales, culturales y políticos, y los desafíos actuales para la convivencia en sociedades diversas y plurales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeries;
