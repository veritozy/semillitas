const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  "Nosotros",
  "Neuroeducación",
  "Pacto Educativo Global",
  "Plataforma",
  "Series",
  "Noti Blog",
];

export default function Footer() {
  return (
    <footer className="pb-5 pt-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Tarjeta azul */}
        <div className="w-full max-w-6xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300

 text-white rounded-2xl p-8 flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            PSICOLOGÍA EDUCATIVA - SEMBRANDO CONFIANZA
          </h2>
          <p className="text-center">
            Dirección: Quito-Ecuador
            <br />
            Email: semillitas.cip.2020@gmail.com
            <br />
            Teléfono: 0998691883
          </p>

          {/* Suscripción */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:flex-1 px-4 py-2 rounded-md text-white/80 focus:outline-none"
            />
            <button
              className="
                w-full md:w-auto          
                px-8 py-3                 
                rounded-md
                font-medium
                text-white
                bg-gradient-to-r from-blue-700 via-blue-500 to-green-300
                shadow-lg
                hover:from-blue-500 hover:via-blue-600 hover:to-teal-500
                transition-all duration-300
                transform hover:scale-105
              "
            >
              Suscribirse
            </button>
          </div>
        </div>

        {/* Sección links y redes */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-8">
          <a
            href="#"
            className="text-gray-600 font-semibold text-lg mb-4 md:mb-0"
          >
            Semillitas - Centro Psicopedagógico
          </a>

          <ul className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            {LINKS.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 text-gray-600 text-lg">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center mt-12 text-gray-500">
          &copy; {CURRENT_YEAR} Semillitas - Centro Psicopedagógico. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}

