import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Login from "./Login";
import { 
  // Authenticator, 
  // Flex, 
  // Icon, 
  useAuthenticator 
} from "@aws-amplify/ui-react";
// import { BiSolidUserCircle as IconUser } from "react-icons/bi";
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const navigate = useNavigate();
  // const [showAuth, setShowAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignInClick = () => {
    // setShowAuth(true);
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
      <nav className="sticky top-0 z-40 shadow-lg bg-[#09667e]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3">

            <a href="/" className="flex items-center gap-3 text-2xl italic font-bold text-white no-underline">
              <img src="/images/logo-cep.png" alt="Logo" className="h-24 w-auto scale-125 object-contain" />
  return (
    <>
      {}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3 h-20">
            
            {}
            <a href="/" className="flex items-center gap-3 text-2xl italic font-bold text-[#09667e] no-underline">
              <img src="/images/logo2.png" alt="Logo" className="h-16 w-auto scale-125 object-contain" />
              Semillitas
            </a>

            {}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 list-none p-0 m-0">
                <li>
                  <a href="/nosotros" className="text-[#09667e] font-bold hover:text-[#0094d3] no-underline text-[13px] tracking-widest transition-all uppercase">
                    Quiénes Somos
                  </a>
                </li>

                {/* SERVICIOS NIVEL 1 */}
                <li
                  className="relative py-5"
                  onMouseEnter={() => setActiveMenu('servicios')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 text-[#09667e] font-bold hover:text-[#0094d3] bg-transparent border-none cursor-pointer transition-all uppercase text-[13px] tracking-widest">
                    Servicios <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${activeMenu === 'servicios' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeMenu === 'servicios' && (
                    <div className="absolute left-0 top-[85%] w-64 rounded-2xl border border-gray-100 bg-white shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="p-2">
                        <a href="/psicoeducacion" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all">
                          Psicoeducación
                        </a>

                        {}
                        <div className="relative group/editorial">
                          <div className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl cursor-pointer transition-all">
                            Editorial Semillitas <ChevronRightIcon className="h-4 w-4" />
                          </div>

                          {}
                          <div className="absolute left-[98%] top-0 ml-1 w-64 rounded-2xl border border-gray-100 bg-white shadow-xl hidden group-hover/editorial:block animate-in fade-in slide-in-from-left-2 overflow-hidden">
                            <div className="p-2">
                              <a href="/pacto-educativo" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all">
                                Pacto Educativo Global
                              </a>
                              <a href="/series" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all">
                                Series
                              </a>
                              <a href="/plataforma" className="block px-4 py-3 text-sm font-semibold text-[#09667e] hover:bg-[#0094d3] hover:text-white rounded-xl no-underline transition-all">
                                Plataforma
                              </a>
                            </div>
                            {}
                            <div className="h-1 w-full bg-blue-900"></div>
                          </div>
                        </div>
                      </div>
                      {/* LÍNEA DE COLOR AL FINAL DEL MENÚ */}
                      <div className="h-1 w-full bg-[#0094d3]"></div>
                    </div>
                  )}
                </li>

                <li>
                  <a href="/noticias" className="text-[#09667e] font-bold hover:text-[#0094d3] no-underline uppercase text-[13px] tracking-widest transition-all">
                    Noti Blog
                  </a>
                </li>
              </ul>

              {/* BOTÓN LOGIN */}
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-md font-bold hover:bg-[#0094d3] transition-all shadow-md text-[13px] tracking-widest border-none cursor-pointer"
              >
                Acceder
              </button>
            </div>

            <button 
              onClick={authStatus === 'authenticated' ? handleSignOut : handleSignInClick} 
              className="text-white hover:text-blue-100 bg-transparent border-none"
              >
              {authStatus === 'authenticated' ? 'Cerrar Sesión' : 'Iniciar Sesión'}
            </button>            

            <button onClick={() => setOpen(!open)} className="lg:hidden text-white bg-transparent border-none">
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            {/* <Flex alignItems="center" gap="medium">
              <Icon
                onClick={authStatus === 'authenticated' ? handleSignOut : handleSignInClick}
                style={{ cursor: 'pointer' }}
                as={IconUser}
                ariaLabel="User Icon"
                height="40px"
                className="text-white"
              // color={authStatus === 'authenticated' ? tokens.colors.green[50] : tokens.colors.blue[60]}
              />
            </Flex> */}
          </div>

        </div>
        {/* {
          showAuth && (
            <div className="z-[100]">
              <Authenticator variation="modal" hideSignUp/>
            </div>
          )
        } */}

        {/* LA LÍNEA AZUL DE BASE QUE PEDISTE */}
        <div className="h-1 w-full bg-[#0094d3]"></div>
      </nav>


      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}