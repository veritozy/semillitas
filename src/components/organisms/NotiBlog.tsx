import { useState } from 'react';

interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagenPrincipal: string;
  galeria: string[];
}

const NotiBlog = () => {
  // Ahora le decimos a useState que guardará una "Noticia" o "null"
  const [galeriaAbierta, setGaleriaAbierta] = useState<Noticia | null>(null);

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: "Taller para Padres - U.E. Padre Jorge Abiatar",
      descripcion: "En el marco del acuerdo de nuestra Red de Apoyo Estratégica, acompañamos a la Unidad Educativa Fiscomisional Padre Jorge Abiatar Quevedo con el primer taller para padres de familia. Un espacio enriquecedor que fortalece los lazos entre familia y escuela.",
      fecha: "Febrero 2026",
      imagenPrincipal: "/images/taller1.png",
      galeria: [
        "/images/taller2.png",
        "/images/taller3.png"
      ]
    },
    {
      id: 1,
      titulo: "Taller para Padres - U.E. Padre Jorge Abiatar",
      descripcion: "En el marco del acuerdo de nuestra Red de Apoyo Estratégica, acompañamos a la Unidad Educativa Fiscomisional Padre Jorge Abiatar Quevedo con el primer taller para padres de familia. Un espacio enriquecedor que fortalece los lazos entre familia y escuela.",
      fecha: "Febrero 2026",
      imagenPrincipal: "/images/taller1.png",
      galeria: [
        "/images/taller2.png",
        "/images/taller3.png"
      ]
    },
    {
      id: 1,
      titulo: "Taller para Padres - U.E. Padre Jorge Abiatar",
      descripcion: "En el marco del acuerdo de nuestra Red de Apoyo Estratégica, acompañamos a la Unidad Educativa Fiscomisional Padre Jorge Abiatar Quevedo con el primer taller para padres de familia. Un espacio enriquecedor que fortalece los lazos entre familia y escuela.",
      fecha: "Febrero 2026",
      imagenPrincipal: "/images/taller1.png",
      galeria: [
        "/images/taller2.png",
        "/images/taller3.png"
      ]
    },
    {
      id: 1,
      titulo: "Taller para Padres - U.E. Padre Jorge Abiatar",
      descripcion: "En el marco del acuerdo de nuestra Red de Apoyo Estratégica, acompañamos a la Unidad Educativa Fiscomisional Padre Jorge Abiatar Quevedo con el primer taller para padres de familia. Un espacio enriquecedor que fortalece los lazos entre familia y escuela.",
      fecha: "Febrero 2026",
      imagenPrincipal: "/images/taller1.png",
      galeria: [
        "/images/taller2.png",
        "/images/taller3.png",
      ]
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 font-sans py-12">
      <div className="container px-4 mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#09667e] tracking-tight mb-4 Poppins">
            Noti Blog Semillitas
          </h2>
          <div className="w-32 h-2 bg-emerald-400 mx-auto rounded-full shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {noticias.map((noti) => (
            <div key={noti.id} className="group flex flex-col bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              
              {/* CAJA DE GALERÍA */}
              <div 
                className="relative cursor-pointer overflow-hidden h-64"
                onClick={() => setGaleriaAbierta(noti)}
              >
                <img className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src={noti.imagenPrincipal} alt={noti.titulo} />
                <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md">
                  +{noti.galeria.length} FOTOS
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-white font-bold bg-[#09667e]/80 px-4 py-2 rounded-lg">CLIC PARA VER FOTOS</span>
                </div>
              </div>

              {/* CUERPO */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#09667e] dark:text-white mb-3 Poppins">{noti.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">{noti.descripcion}</p>
                <div className="mt-auto pt-6 border-t flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase italic">{noti.fecha}</span>
                  <a href="/contacto" className="text-[#25D366] font-black text-sm uppercase underline decoration-2 underline-offset-8 hover:text-[#128C7E] transition-colors">
                    SOLICITAR INFORMACIÓN
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {galeriaAbierta && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-10 animate-fade-in">
          <button 
            onClick={() => setGaleriaAbierta(null)}
            className="absolute top-5 right-5 text-white text-5xl font-light hover:text-emerald-400 transition-colors z-[110]"
          >
            &times;
          </button>

          <div className="w-full max-w-6xl overflow-y-auto max-h-screen py-10">
            <h2 className="text-white text-center text-2xl font-bold mb-8 Poppins px-4">{galeriaAbierta.titulo}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {galeriaAbierta.galeria.map((imgUrl, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-white/10 shadow-2xl group/item">
                  <img 
                    src={imgUrl} 
                    alt={`Foto ${index}`} 
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NotiBlog;