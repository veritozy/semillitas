import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Login  from "./Login";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const menu = [
    { name: "Nosotros", href: "/nosotros" },
    {
      name: "Servicios",
      options: [
        { name: "Editorial Semillitas", href: "/editorial" },
        { name: "Pacto Educativo Global", href: "/pacto-educativo" },
        { name: "Series", href: "/series" },
        { name: "Login", href: "#" },
      ],
    },
    {
      name: "Noti Blog",
      options: [{ name: "Noticias", href: "/noticias" }],
    },
    { name: "Plataforma", href: "/plataforma" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 shadow-lg bg-[#09667e]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3">
            
            <a href="/" className="flex items-center gap-3 text-2xl italic font-bold text-white no-underline">
              <img src="/images/logo-cep.png" alt="Logo" className="h-24 w-auto scale-125 object-contain" />
              Semillitas
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 list-none p-0 m-0">
                {menu.map((item) => (
                  <li
                    key={item.name}
                    className="relative py-5" 
                    onMouseEnter={() => item.options && setActiveMenu(item.name)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {item.options ? (
                      <>
                        <button className="flex items-center gap-1 text-white font-bold hover:text-blue-100 bg-transparent border-none cursor-pointer transition-all uppercase text-[13px] tracking-widest">
                          {item.name} <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* SUBMENÚ PREMIUM (GLASSMORPHISM) */}
                        {activeMenu === item.name && (
                          <div className="absolute left-0 top-[85%] w-64 overflow-hidden rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="p-2">
                              {item.options.map((opt) => (
                                <button
                                  key={opt.name}
                                  onClick={() => {
                                    if (opt.name === "Login") setIsLoginOpen(true);
                                    else window.location.href = opt.href;
                                    setActiveMenu(null);
                                  }}
                                  className="w-full text-left flex items-center px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-blue-500 hover:text-white rounded-xl transition-all duration-200 bg-transparent border-none cursor-pointer group"
                                >
                                  {opt.name}
                                </button>
                              ))}
                            </div>
                            {}
                            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-green-300"></div>
                          </div>
                        )}
                      </>
                    ) : (
                      <a href={item.href} className="text-white font-bold hover:text-blue-100 no-underline uppercase text-[13px] tracking-widest transition-all">{item.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={() => setOpen(!open)} className="lg:hidden text-white bg-transparent border-none">
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}