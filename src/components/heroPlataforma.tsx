
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
            <h1 className="text-2xl font-extrabold text-white lg:text-5xl tracking-tight mb-4">
              Tras los pasos de <span className="text-blue-400">Jesús</span>
            </h1>

            <p className="max-w-2xl mx-auto text-base text-white lg:text-xl font-light leading-relaxed">
              “Formando corazones y mentes con valores cristianos”{" "}
            </p>

            <button 
              onClick={handleOpenLogin}
              className="px-10 py-3 mt-8 text-sm font-bold text-white uppercase tracking-widest transition-all duration-300 transform bg-gradient-to-r from-blue-700 via-blue-500 to-green-300 rounded-full hover:scale-105 shadow-lg shadow-blue-500/40 focus:outline-none"
            >
              Inicio
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}