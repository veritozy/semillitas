import React from 'react';

const FrasePeg: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {}
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#09667e] opacity-30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017C12.4647 13 12.017 12.5523 12.017 12V9C12.017 6.79086 13.8079 5 16.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 6.79086 0.773858 5 3.017 5H6.017C8.22614 5 10.017 6.79086 10.017 9V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z" />
            </svg>
          </div>

          <h2 className="text-2xl font-medium italic leading-relaxed text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
            "Educar es un acto de amor, es dar vida. Y el amor es exigente, pide utilizar las mejores energías, 
            suscita el entusiasmo y pone en camino hacia horizontes nuevos."
          </h2>

          <div className="flex flex-col items-center justify-center mt-8">
            <div className="mt-4 text-center">
              <h1 className="font-semibold text-gray-800 dark:text-white">Papa Francisco</h1>
              <span className="text-sm text-[#09667e] uppercase tracking-widest font-bold">Lanzamiento del Pacto Educativo Global</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrasePeg;