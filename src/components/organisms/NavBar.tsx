import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Login from "./Login";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignInClick = () => {
    setIsLoginOpen(true);
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
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm font-sans"> {/* Fuente Sans Serif Base */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3 h-20">
            
            {/* LOGO: Letra con más carácter */}
            <a href="/" className="flex items-center gap-3 text-2xl italic font-black text-[#09667e] no-underline tracking-tighter">
              <img src="/images/logo2.png" alt="Logo" className="h-16 w-auto scale-125 object-contain" />
              Fundación Semillitas
            </a>

            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 list-none p-0 m-0">
                <li>
                  <a href="/nosotros" className="text-[#09667e] font-extrabold hover:text-[#0094d3] no-underline text-[16px] tracking-[0.15em] transition-all uppercase">
                    Quiénes Somos
                  </a>
                </li>

                <li
                  className="relative py-5"
                  onMouseEnter={() => setActiveMenu('servicios')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 text-[#09667e] font-extrabold hover:text-[#0094d3] bg-transparent border-none cursor-pointer transition-all uppercase text-[16px] tracking-[0.15em]">
                    Servicios <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${activeMenu === 'servicios' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeMenu === 'servicios' && (
                    <div className="absolute left-0 top-[85%] w-64 rounded-2xl border border-gray-100 bg-white shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="p-2">
                        <a href="/psicoeducacion" className="block px-4 py-3 text-[13px] font-bold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all uppercase tracking-wider">
                          Psicoeducación
                        </a>

                        <div className="relative group/editorial">
                          <div className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-bold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl cursor-pointer transition-all uppercase tracking-wider">
                            Editorial Semillitas <ChevronRightIcon className="h-4 w-4" />
                          </div>

                          <div className="absolute left-[90%] top-0 ml-1 w-64 rounded-2xl border border-gray-100 bg-white shadow-xl hidden group-hover/editorial:block animate-in fade-in slide-in-from-left-2 overflow-hidden">
                            <div className="p-2">
                              <a href="/pacto-educativo" className="block px-4 py-3 text-[13px] font-bold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all uppercase tracking-wider">
                                Pacto Educativo Global
                              </a>
                              <a href="/series" className="block px-4 py-3 text-[13px] font-bold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all uppercase tracking-wider">
                                Series
                              </a>
                              <a href="/plataforma" className="block px-4 py-3 text-[13px] font-bold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all uppercase tracking-wider">
                                Plataforma
                              </a>
                            </div>
                            <div className="h-1 w-full bg-blue-900"></div>
                          </div>
                        </div>
                      </div>
                      <div className="h-1 w-full bg-[#0094d3]"></div>
                    </div>
                  )}
                </li>

                <li>
                  <a href="/noticias" className="text-[#09667e] font-extrabold hover:text-[#0094d3] no-underline uppercase text-[16px] tracking-[0.15em] transition-all">
                    Noti Blog
                  </a>
                </li>
              </ul>

              <button 
                onClick={authStatus === 'authenticated' ? handleSignOut : handleSignInClick} 
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-7 py-2.5 rounded-full font-black hover:scale-105 transition-all shadow-lg text-[11px] uppercase tracking-[0.2em] border-none cursor-pointer"
               >
                {authStatus === 'authenticated' ? 'Salir' : 'Acceder'}
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="lg:hidden text-[#09667e] bg-transparent border-none">
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className="h-1 w-full bg-[#0094d3]"></div>
      </nav>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}