
export default function HeroPlataforma() {
 
  const handleOpenLogin = () => {
    window.dispatchEvent(new Event("open-login"));
  };

  return (
    <header>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-[2px]">
          <div className="text-center px-4 max-w-5xl">
            <h1 className="text-2xl font-extrabold text-white lg:text-4xl tracking-tight mb-4">
               Semillas del mismo Sembrador
            </h1>

            <p className="max-w-2xl mx-auto text-white lg:text-xl font-extrabold leading-relaxed">
              “Educando con el idioma del amor”{" "}
            </p>

            <button 
              onClick={handleOpenLogin}
              className="px-10 py-3 mt-8 text-sm font-bold text-white uppercase tracking-widest transition-all duration-300 transform bg-[#09667e] rounded-full hover:scale-105"
            >
              Inicio
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}