import { confirmSignIn } from "aws-amplify/auth"
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.password) return;
    if (form.password.value !== form.confirmPassword.value) {
      alert("Las contraseñas no coinciden");
      return;
    }
    const password = form.password.value;
    await confirmSignIn({
      challengeResponse: password,
    })
      .then(data => {
        if(!data?.isSignedIn) return;
        if(data.nextStep.signInStep !== "DONE") return;
        navigate("/");
      })
      .catch(error => console.log('Password change error:', error));
  }


  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-2xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700 animate-fade-in-up">
        <div className="px-6 py-8">
          <div className="flex justify-center mx-auto">
            <img 
              className="w-auto h-20 scale-110 object-contain mx-auto" 
              src="/images/logo.jpg" 
              alt="Master's Editores Logo" 
            />
          </div>

          <h3 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white">
            Al iniciar sesión por primera vez, es necesario que cambies tu contraseña.
          </h3>

          {/* <form className="mt-6" onSubmit={(e) => e.preventDefault()}> */}
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Nueva Contraseña
              </label>
              <input 
                className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 transition-all" 
                type="password" 
                placeholder="••••••••" 
                id="password"
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Confirmar Contraseña
              </label>
              <input 
                className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 transition-all" 
                type="password" 
                placeholder="••••••••" 
                id="confirmPassword"
              />
            </div>

            <div className="flex items-center justify-between mt-6">

              <button 
                type="submit"
                className="px-6 py-2.5 text-sm font-bold tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-lg shadow-blue-500/30"
              >
                Cambiar Contraseña
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}