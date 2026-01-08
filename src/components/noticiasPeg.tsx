import React from 'react';

interface Noticia {
  id: number;
  categoria: string;
  titulo: string;
  descripcion?: string; 
  imagen: string;      
  autor?: string;
  autorImg?: string;
  fecha?: string;
  link: string;
}

interface NoticiasProps {
  noticias: Noticia[];
}

const NoticiasPeg: React.FC<NoticiasProps> = ({ noticias }) => {
  if (!noticias || noticias.length === 0) return null;

  const principal = noticias[0];
  const secundarias = noticias.slice(1);

  return (
    <section className="bg-white dark:bg-gray-900 py-16"> {}
      <div className="container px-6 mx-auto">
        <div className="lg:flex lg:-mx-6">
          
          {}
          <div className="lg:w-3/5 lg:px-6"> {}
            <img 
              className="object-cover object-center w-full h-96 rounded-2xl shadow-lg" 
              src={principal.imagen} 
              alt={principal.titulo} 
            />

            <div className="mt-8">
              <p className="text-[#09667e] uppercase font-bold tracking-widest text-sm">
                {principal.categoria}
              </p>

              <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                {principal.titulo}
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                {principal.descripcion}
              </p>

              <div className="flex items-center mt-8">
                <img className="object-cover w-12 h-12 rounded-full ring-2 ring-blue-500" src={principal.autorImg} alt="" />
                <div className="mx-4">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{principal.autor}</h1>
                  <p className="text-sm text-gray-500">{principal.fecha}</p>
                </div>
                {}
                <a 
                  href={principal.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-auto inline-block px-4 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Leer Noticia
                </a>
              </div>
            </div>
          </div>

          {}
          <div className="mt-12 lg:w-2/5 lg:mt-0 lg:px-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 border-b-2 border-blue-500 inline-block">
              Más Noticias
            </h3>
            
            <div className="space-y-8"> {}
              {secundarias.map((noticia) => (
                <div key={noticia.id} className="flex items-start gap-4 group">
                  <img 
                    src={noticia.imagen} 
                    className="w-24 h-24 object-cover rounded-xl shadow-sm"
                    alt="" 
                  />
                  <div>
                    <span className="text-xs font-bold text-[#09667e] uppercase">{noticia.categoria}</span>
                    <a 
                      href={noticia.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block mt-1 font-semibold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors leading-tight"
                    >
                      {noticia.titulo}
                    </a>
                    <p className="text-xs text-gray-500 mt-2">{noticia.fecha || "Hace 2 días"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticiasPeg;