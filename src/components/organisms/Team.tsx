import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ema Watson",
    role: "Neuroeducadora Senior",
    bio: "Especialista en desarrollo emocional y aprendizaje significativo. Más de 10 años transformando aulas con enfoque humano.",
    image: "https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Carlos Méndez",
    role: "Director Pedagógico",
    bio: "Apasionado por la innovación educativa. Lidera programas de formación para docentes en toda Latinoamérica.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Ana López",
    role: "Psicóloga Familiar",
    bio: "Acompaña a familias en el desarrollo de vínculos emocionales sanos. Autora del método 'Criar con Calma'.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = teamMembers[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-3xl lg:text-4xl font-bold text-[#09667e] mb-6">Nuestro equipo</p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-700 capitalize lg:text-3xl dark:text-white">
          Personas con propósito
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          {/* Fondo azul decorativo */}
          <div className="absolute w-full h-96 bg-[#09667e] -z-10 rounded-2xl md:h-96"></div>

          <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src={current.image}
              alt={`${current.name} - equipo`}
            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">{current.name}</p>
                <p className="text-blue-200">{current.role}</p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                {current.bio}
              </p>

              <div className="flex items-center justify-between mt-6 md:justify-start">
                <button
                  onClick={prev}
                  title="Anterior"
                  className="p-2 text-white transition-colors duration-300 border border-white rounded-full hover:bg-blue-400"
                  aria-label="Miembro anterior"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={next}
                  title="Siguiente"
                  className="p-2 text-white transition-colors duration-300 border border-white rounded-full md:mx-6 hover:bg-blue-400"
                  aria-label="Próximo miembro"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
