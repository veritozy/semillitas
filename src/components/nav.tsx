import React, { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Neuroeducación", href: "/neuroeducacion" },
  { name: "Pacto Educativo Global", href: "/pacto-educativo" },
  { name: "Plataforma", href: "/plataforma" },
  { name: "Series", href: "/series" },
  { name: "Noti Blog", href: "/blog" },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        className="flex items-center gap-2 font-medium text-white hover:text-green-300 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const resize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-blue-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 text-2xl italic font-bold text-white">
          <img src="/images/logo_s.png" alt="Logo" className="h-20 w-auto" />
          Semillitas
        </a>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
          {/* LOGIN Desktop */}
          <a
            href="/login"
            className="
              w-full md:w-auto          
              px-8 py-3                 
              rounded-md
              font-medium
              text-white
              bg-gradient-to-r from-green-400 via-green-500 to-teal-400
              shadow-lg
              hover:from-green-500 hover:via-green-600 hover:to-teal-500
              transition-all duration-300
              transform hover:scale-105
            "
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={handleOpen} className="lg:hidden text-white">
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-blue-900 p-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
            <a
              href="/login"
              className="bg-[#59AC77] text-white px-6 py-2 rounded-md shadow-md font-medium hover:bg-green-600 transition-colors mt-2 block text-center"
            >
              Login
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
