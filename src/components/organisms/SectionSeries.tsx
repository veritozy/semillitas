const SectionSeries = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-[#09667e] tracking-tight mb-4 text-center">
          Nuestros Libros
        </h2>
        <div className="w-32 h-2 bg-emerald-300 mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          Descubre la colección "Semillas del Mismo Sembrador", diseñada para
          acompañar el crecimiento espiritual y humano.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              id: "inicial",
              title: "Inicial",
              img: "/images/inicial.png",
              desc: "Un libro que enseña a los niños a conocerse, amar y cuidar, descubriendo que su vida es un regalo de Dios. Semillas del Mismo Sembrador – Inicial integra emociones, amistad, cuerpo, fe y cuidado del entorno, ayudando a los más pequeños a crecer felices, libres y solidarios desde sus primeras experiencias escolares.",
            },
            {
              id: "preparatoria",
              title: "PREPARATORIA",
              img: "/images/preparatoria.png",
              desc: "Un libro que ayuda a los niños a crecer con seguridad, amor y sentido de comunidad. Semillas del Mismo Sembrador – Preparatoria fortalece la autonomía, la inclusión, la gratitud por la vida y el cuidado de la creación, sembrando valores cristianos desde experiencias reales y cercanas.",
            },
            {
              id: "segundo",
              title: "SEGUNDO EGB",
              img: "/images/nivel2.png",
              desc: "Un libro que enseña a los niños a ser amigos de verdad. Semillas del Mismo Sembrador – Segundo EGB forma en valores, amistad, uso responsable de la tecnología y compromiso con el bien común, mostrando a Jesús como el mejor amigo y guía para la vida.",
            },
            {
              id: "tercero",
              title: "TERCERO EGB",
              img: "/images/nivel3.png",
              desc: "Un libro que ayuda a los niños a comprender su historia, cuidar su corazón y descubrir la felicidad al estilo de Jesús. Semillas del Mismo Sembrador – Tercero EGB forma en resiliencia, identidad, emociones y valores cristianos desde experiencias reales y cercanas.",
            },
            {
              id: "cuarto",
              title: "CUARTO EGB",
              img: "/images/nivel4.png",
              desc: "Un libro que enseña a cuidar la vida y la creación con amor y responsabilidad. Semillas del Mismo Sembrador – Cuarto EGB invita a vivir la fe desde la solidaridad, la inclusión y el compromiso con la casa común, al estilo de Jesús.",
            },
            {
              id: "quinto",
              title: "QUINTO EGB",
              img: "/images/nivel5.png",
              desc: "Un libro que invita a pensar, dialogar y actuar con responsabilidad. Semillas del Mismo Sembrador – Quinto EGB integra fe, ética, convivencia y compromiso ecológico, formando estudiantes capaces de transformar su entorno al estilo del Evangelio.",
            },
            {
              id: "sexto",
              title: "SEXTO EGB",
              img: "/images/nivel6.png",
              desc: "Un libro que ayuda a los estudiantes a crecer, decidir y servir con sentido. Semillas del Mismo Sembrador – Sexto EGB integra fe, identidad, valores, cuidado de la vida y compromiso con la creación, preparando a los jóvenes para construir un proyecto de vida con propósito.",
            },
            {
              id: "septimo",
              title: "SÉPTIMO EGB",
              img: "/images/nivel7.png",
              desc: "Un libro que invita a los estudiantes a cuidar la vida, las emociones y la creación con responsabilidad y fe. Semillas del Mismo Sembrador – Séptimo EGB forma en ética del cuidado, acompañamiento solidario y compromiso con la casa común, al estilo de Jesús.",
            },
            {
              id: "octavo",
              title: "OCTAVO EGB",
              img: "/images/nivel8.png",
              desc: "Un libro que invita a los adolescentes a dialogar, discernir y construir convivencia. Semillas del Mismo Sembrador – Octavo EGB integra fe, ética, emociones y compromiso social para vivir al servicio del bien común.",
            },
            {
              id: "noveno",
              title: "NOVENO EGB",
              img: "/images/nivel9.png",
              desc: "Un libro que invita a los adolescentes a discernir, comprometerse y transformar su realidad. Semillas del Mismo Sembrador – Noveno EGB integra fe, juventud, liderazgo y proyecto de vida para vivir con sentido y construir paz.",
            },
            {
              id: "decimo",
              title: "DÉCIMO EGB",
              img: "/images/nivel10.png",
              desc: "Un libro que invita a los estudiantes a mirar el mundo con sensibilidad, conciencia social y compromiso cristiano. Semillas del Mismo Sembrador – Décimo EGB aborda las realidades de la vulnerabilidad, la inclusión y la dignidad humana, iluminadas por el ejemplo de Jesús y los principios de la Doctrina Social de la Iglesia.",
            },
            {
              id: "bach1",
              title: "PRIMERO BACH",
              img: "/images/bachillerato1.png",
              desc: "Un libro que invita a los jóvenes a pensar la fe en medio de un mundo en crisis. Semillas del Mismo Sembrador – Primero de Bachillerato propone una reflexión profunda sobre los desafíos éticos, sociales y culturales de la humanidad actual, ayudando a los estudiantes a discernir con responsabilidad, libertad y sentido cristiano.",
            },
            {
              id: "bach2",
              title: "SEGUNDO BACH",
              img: "/images/bachillerato2.png",
              desc: "Un libro que acompaña a los jóvenes en una etapa decisiva de maduración personal, afectiva y espiritual. Semillas del Mismo Sembrador – Segundo de Bachillerato propone una mirada integral sobre las relaciones humanas, el proyecto de vida y la salud emocional y espiritual, iluminadas por la fe cristiana y la Doctrina Social de la Iglesia.",
            },
            {
              id: "bach3",
              title: "TERCERO BACH",
              img: "/images/bachillerato3.png",
              desc: "Un libro que invita a los jóvenes a comprender la diversidad humana y asumir un compromiso ético con la justicia, la sostenibilidad y el bien común. Semillas del Mismo Sembrador – Tercero de Bachillerato propone una reflexión profunda sobre los pueblos y nacionalidades, sus contextos sociales, culturales y políticos, y los desafíos actuales para la convivencia en sociedades diversas y plurales.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="overflow-hidden bg-contain bg-no-repeat bg-center rounded-lg cursor-pointer h-96 group relative"
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <div className="flex flex-col justify-center items-center w-full h-full px-6 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-900/80 group-hover:opacity-100 text-center">
                <h2 className="text-lg font-bold text-white uppercase mb-2">
                  {item.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-gray-100 text-justify">
                  {item.desc}
                </p>
                <a
                  href="/contacto"
                  className="mt-4 px-5 py-2 bg-blue-700 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-yellow-300 hover:text-gray-900 transition-all duration-300"
                >
                  Solicitar Información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSeries;
