import { useState } from "react";
import Login from "./Login";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function HeroPlataforma() {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleOpenLogin = () => {
    // window.dispatchEvent(new Event("open-login"));
    setIsLoginOpen(true);
  };

  const handleOpenPlatform =() => {
    navigate("/establecimientos");
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
              onClick={authStatus === 'authenticated' ? handleOpenPlatform : handleOpenLogin}
              className="px-10 py-3 mt-8 text-sm font-bold text-white uppercase tracking-widest transition-all duration-300 transform bg-gradient-to-r from-blue-700 via-blue-500 to-green-300 rounded-full hover:scale-105 shadow-lg shadow-blue-500/40 focus:outline-none"
            >
              {authStatus === 'authenticated' ? 'Ir a la Plataforma' : 'Iniciar Sesión'}
            </button>
          </div>
        </div>
      </div>
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}