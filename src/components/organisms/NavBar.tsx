import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Login from "./Login";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-100 to-rose-50 border-b-2 border-indigo-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3">
            
            {/* LOGO ORIGINAL ESCALA 125 */}
            <a href="/" className="flex items-center gap-3 text-2xl italic font-bold text-[#09667e] no-underline">
              <img src="/images/logo2.png" alt="Logo" className="h-24 w-auto scale-125 object-contain" />
              Semillitas
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 list-none p-0 m-0">
                <li>
                  <a href="/nosotros" className="text-[#09667e] font-bold hover:text-cyan-500 no-underline text-[13px] tracking-widest transition-all uppercase">
                    Quiénes Somos
                  </a>
                </li>

                {/* SERVICIOS NIVEL 1 */}
                <li
                  className="relative py-5"
                  onMouseEnter={() => setActiveMenu('servicios')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 text-[#09667e] font-bold hover:text-cyan-500 bg-transparent border-none cursor-pointer transition-all uppercase text-[13px] tracking-widest">
                    Servicios <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${activeMenu === 'servicios' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeMenu === 'servicios' && (
                    <div className="absolute left-0 top-[85%] w-64 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-100 to-rose-50 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="p-2">
                        <a href="/psicoeducacion" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-blue-500 hover:text-white rounded-xl no-underline transition-all">
                          Psicoeducación
                        </a>

                        {/* EDITORIAL SEMILLITAS - DISPARA EL NIVEL 2 */}
                        <div className="relative group/editorial">
                          <div className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-blue-500 hover:text-white rounded-xl cursor-pointer transition-all">
                            Editorial Semillitas <ChevronRightIcon className="h-4 w-4" />
                          </div>

                          {/* SUBMENÚ EDITORIAL (EL QUE FALTABA) */}
                          <div className="absolute left-[98%] top-0 ml-1 w-64 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-100 to-rose-50 shadow-xl hidden group-hover/editorial:block animate-in fade-in slide-in-from-left-2 overflow-hidden">
                            <div className="p-2">
                              <a href="/pacto-educativo" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-blue-500 hover:text-white rounded-xl no-underline transition-all">
                                Pacto Educativo Global
                              </a>
                              <a href="/series" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-blue-500 hover:text-white rounded-xl no-underline transition-all">
                                Series
                              </a>
                              <a href="/plataforma" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-blue-500 hover:text-white rounded-xl no-underline transition-all">
                                Plataforma
                              </a>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-green-300"></div>
                          </div>
                        </div>
                      </div>
                      <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-green-300"></div>
                    </div>
                  )}
                </li>

                <li>
                  <a href="/noticias" className="text-[#09667e] font-bold hover:text-cyan-500 no-underline uppercase text-[13px] tracking-widest transition-all">
                    Noti Blog
                  </a>
                </li>
              </ul>

              {/* BOTÓN LOGIN */}
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="bg-[#09667e] text-white px-6 py-2 rounded-md font-bold hover:bg-cyan-600 transition-all shadow-md text-[13px] tracking-widest border-none cursor-pointer"
              >
                Acceder
              </button>
            </div>

            {/* MOBILE */}
            <button onClick={() => setOpen(!open)} className="lg:hidden text-[#09667e] bg-transparent border-none">
              {open ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </nav>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}