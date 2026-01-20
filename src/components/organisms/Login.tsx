import { XMarkIcon } from "@heroicons/react/24/solid";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {}
      <div className="relative z-[110] w-full max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-2xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700 animate-fade-in-up">
        
        {}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="px-6 py-8">
          <div className="flex justify-center mx-auto">
            <img 
              className="w-auto h-20 scale-110 object-contain mx-auto" 
              src="/images/logo.jpg" 
              alt="Master's Editores Logo" 
            />
          </div>

          <h3 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white">
            ¡Qué bueno verte de nuevo!
          </h3>

          <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Correo Electrónico
              </label>
              <input 
                className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 transition-all placeholder-gray-400" 
                type="email" 
                placeholder="ejemplo@correo.com" 
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Contraseña
              </label>
              <input 
                className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 transition-all placeholder-gray-400" 
                type="password" 
                placeholder="••••••••" 
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>

              <button 
                type="submit"
                className="px-6 py-2.5 text-sm font-bold tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-lg shadow-blue-500/30"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700/50">
          <span className="text-sm text-gray-600 dark:text-gray-200">¿Aún no tienes cuenta?</span>
          <a href="#" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
            Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
}