interface Noticia {
  id: number;
  categoria: string;
  titulo: string;
  descripcion?: string;
  imagen: string;
  link: string;
}

interface Props {
  noticias: Noticia[];
}

export default function NoticiasPeg({ noticias }: Props) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="group max-w-sm mx-auto bg-white rounded-lg border border-gray-100 shadow-sm p-4 transition-all hover:shadow-md"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  className="object-cover object-center w-full h-64 lg:h-80 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                  src={noticia.imagen}
                  alt={noticia.titulo}
                />
              </div>

              <div className="mt-4">
                <span className="text-[#09667e] uppercase font-semibold">
                  {noticia.categoria}
                </span>

                <h1 className="mt-2 text-lg font-semibold text-gray-500 dark:text-white group-hover:text-gray-900 transition-colors duration-300 leading-snug">
                  {noticia.titulo}
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                  {noticia.descripcion}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div></div>

                  <a
                    href={noticia.link}
                    target="_blank"
                    className="inline-block text-[#25D366] underline hover:text-blue-400 font-bold text-md"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
