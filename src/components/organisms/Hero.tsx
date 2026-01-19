// Hero.tsx
import { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  videoUrl?: string;
  dynamicList?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const defaultTexts = [
  "Programas de Neuroeducación",
  "Tips prácticos para el aula",
  "Formación emocional para familias",
  "Herramientas para docentes innovadores",
];

export default function Hero({
  title,
  videoUrl,
  dynamicList,
  
}: HeroProps) {
  const texts = dynamicList ?? defaultTexts;
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const fullText = texts[textIndex];
    let currentChar = 0;
    setDisplayText("");

    const typingInterval = setInterval(() => {
      currentChar++;
      setDisplayText(fullText.slice(0, currentChar));
      if (currentChar === fullText.length) clearInterval(typingInterval);
    }, 60);

    const switchInterval = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3200);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(switchInterval);
    };
  }, [textIndex, texts]);

  return (
    <header className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-500 to-blue-500">
      {/* Fondo de video*/}
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
          src={videoUrl}
        />
      )}

      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-200 mb-6">
          {title ?? "La prueba de una acertada intervención educativa es la felicidad familiar"}
        </h1>

        <p className="text-xl md:text-2xl font-medium text-white mb-8 animate-pulse">
          {displayText}
        </p>

        {}
      </div>
    </header>
  );
}
