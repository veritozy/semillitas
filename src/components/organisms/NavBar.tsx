import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSubmenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  async function handleSignOut() {
    try {
      await signOut()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log("error signing out: ", error);
        });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-24">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-4 no-underline group shrink-0">
            <img src="/images/logo2.png" alt="Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col border-l border-gray-200 pl-4">
              <span className="text-xl font-black text-[#09667e] uppercase tracking-tighter leading-none italic">Fundación</span>
              <span className="text-base font-black text-[#09667e] uppercase tracking-[0.3em] leading-none mt-1">Semillitas</span>
            </div>
          </a>

          {/* DESKTOP*/}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10 list-none p-0 m-0">
              <li>
                <a href="/nosotros" className="text-[#09667e] font-bold hover:text-[#0094d3] no-underline text-[14px] tracking-[0.2em] uppercase">Quiénes Somos</a>
              </li>
              <li className="relative py-8" onMouseEnter={() => setActiveMenu('servicios')} onMouseLeave={() => setActiveMenu(null)}>
                <button className="flex items-center gap-2 text-[#09667e] font-bold hover:text-[#0094d3] bg-transparent border-none cursor-pointer uppercase text-[14px] tracking-[0.2em]">
                  Servicios <ChevronDownIcon className="h-3 w-3" />
                </button>
                {activeMenu === 'servicios' && (
                  <div className="absolute left-0 top-full -mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2">
                    <a href="/psicoeducacion" className="block px-5 py-4 text-[13px] font-medium text-[#09667e] hover:bg-[#f0f9fb] rounded-xl no-underline uppercase">Psicoeducación</a>
                    <div className="relative group/editorial mt-1">
                      <div className="flex items-center justify-between w-full px-5 py-4 text-[13px] font-medium text-[#09667e] hover:bg-[#f0f9fb] rounded-xl cursor-pointer uppercase">
                        Editorial Semillitas <ChevronRightIcon className="h-4 w-4 opacity-40" />
                      </div>
                      <div className="absolute right-[102%] top-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 hidden group-hover/editorial:block">
                        <a href="/pacto-educativo" className="block px-5 py-4 text-[12px] font-medium text-[#09667e] hover:bg-[#f0f9fb] rounded-xl no-underline uppercase">Pacto Educativo Global</a>
                        <a href="/series" className="block px-5 py-4 text-[12px] font-medium text-[#09667e] hover:bg-[#f0f9fb] rounded-xl no-underline uppercase">Series</a>
                        <a href="/plataforma" className="block px-5 py-4 text-[12px] font-medium text-[#09667e] hover:bg-[#f0f9fb] rounded-xl no-underline uppercase">Plataforma</a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="/noticias" className="text-[#09667e] font-bold hover:text-[#0094d3] no-underline text-[14px] tracking-[0.2em] uppercase">Noti Blog</a>
              </li>
            </ul>

            {/* BOTÓN LOGIN */}
            {authStatus === 'authenticated' && (
              <button
                onClick={handleSignOut}
                className="
                        bg-gradient-to-r from-indigo-500 to-blue-500 
                        text-white px-6 py-3 rounded-xl 
                        font-bold 
                        hover:scale-[1.02] 
                        transition-all 
                        shadow-lg 
                        text-[13px] tracking-widest
                        border-none cursor-pointer
                      "
              >
                Cerrar Sesión
              </button>
            )}
          </div>

          {/* MOBILE  */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-[#09667e] bg-gray-50 p-3 rounded-2xl border-none cursor-pointer">
            {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${open ? 'max-h-screen opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-8 py-10 bg-white flex flex-col gap-y-8">

          {/* 1. QUIÉNES SOMOS */}
          <a href="/nosotros" className="text-[#09667e] font-bold text-sm no-underline uppercase tracking-[0.15em] hover:text-[#0094d3]">
            Quiénes Somos
          </a>

          {/* 2. SERVICIOS  */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleSubmenu('servicios_mob')}
              className="flex items-center justify-between w-full text-[#09667e] font-bold text-sm bg-transparent border-none p-0 uppercase tracking-[0.15em] text-left cursor-pointer"
            >
              Servicios
              <ChevronDownIcon className={`h-5 w-5 transition-transform ${activeMenu === 'servicios_mob' ? 'rotate-180' : ''}`} />
            </button>

            {/* Contenido del submenú  */}
            <div className={`overflow-hidden transition-all duration-300 ${activeMenu === 'servicios_mob' ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col gap-y-4 border-l-2 border-gray-100 pl-4">
                <a href="/psicoeducacion" className="text-[#09667e] font-medium no-underline uppercase tracking-wider text-sm">
                  Psicoeducación
                </a>

                <div className="flex flex-col gap-y-3 mt-2">
                  <p className="text-[#0094d3] font-black text-[11px] uppercase tracking-[0.2em] mb-1">Editorial Semillitas</p>
                  <a href="/pacto-educativo" className="text-gray-500 text-sm no-underline hover:text-[#09667e]">Pacto Educativo Global</a>
                  <a href="/series" className="text-gray-500 text-sm no-underline hover:text-[#09667e]">Series</a>
                  <a href="/plataforma" className="text-gray-500 text-sm no-underline hover:text-[#09667e]">Plataforma</a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. NOTI BLOG */}
          <a href="/noticias" className="text-[#09667e] font-bold text-sm no-underline uppercase tracking-[0.15em] hover:text-[#0094d3]">
            Noti Blog
          </a>

          {/* BOTÓN LOGIN */}
          {authStatus === 'authenticated' && (
            <button
              onClick={handleSignOut}
              className="
                        bg-gradient-to-r from-indigo-500 to-blue-500 
                        text-white px-6 py-3 rounded-xl 
                        font-bold 
                        hover:scale-[1.02] 
                        transition-all 
                        shadow-lg 
                        text-[13px] tracking-widest
                        border-none cursor-pointer
                      "
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>


    </nav>
  );
}