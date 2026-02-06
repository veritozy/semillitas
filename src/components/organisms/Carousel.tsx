// Carousel.tsx
import { useState, useEffect } from "react";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "NEUROEDUCACIÓN",
    description: "Estrategias basadas en la ciencia que respetan cómo aprende cada niño.",
    image: "/images/foto1.jpg",
  },
  {
    id: 2,
    title: "FORMACIÓN DOCENTE",
    description: "Acompañamos a los docentes para crear aulas más humanas y participativas.",
    image: "/images/vista-frontal-madre-y-nina-jugando1.jpg",
  },
  {
    id: 3,
    title: "ACOMPAÑAMIENTO FAMILIAR",
    description: "Trabajamos junto a las familias para fortalecer el desarrollo de los niños, niñas y adolescentes.",
    image: "/images/foto3.jpg",
  },
  {
    id: 4,
    title: "APORTE SOCIAL",
    description: "Impulsamos acciones educativas que generan inclusión, pensamiento crítico y cambio social.",
    image: "/images/foto6.jpg",
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor*/}
      <div className="relative w-screen h-[60vh] md:h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
        ))}
        
        {/* Contenido centrado */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 max-w-3xl">{slides[currentIndex].title}</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-6">{slides[currentIndex].description}</p>
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}