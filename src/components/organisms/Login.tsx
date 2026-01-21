import { XMarkIcon } from "@heroicons/react/24/solid";
import type { FormEvent } from "react";
import { signIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

export default function Login({ isOpen, onClose }: LoginProps) {
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const form = event.currentTarget;

    try {
      const response = await signIn({
        username: form.elements.email.value,
        password: form.elements.password.value,
      });

      if (response.isSignedIn) {
        onClose();
        navigate("/establecimientos");
        return;
      }

      if (
        response.nextStep?.signInStep ===
        "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
      ) {
        onClose();
        navigate("/new-password");
        return;
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      switch (err.name) {
        case "NotAuthorizedException":
          setError("Correo o contraseña incorrectos.");
          break;
        case "UserNotFoundException":
          setError("El usuario no existe.");
          break;
        case "UserNotConfirmedException":
          setError("Tu cuenta aún no ha sido confirmada.");
          break;
        default:
          setError("Ocurrió un error inesperado. Intenta nuevamente.");
          console.error("Sign in error:", err);
      }
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-[110] w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="px-6 py-8">
          <img
            className="h-20 mx-auto object-contain"
            src="/images/logo.jpg"
            alt="Logo"
          />

          <h3 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white">
            ¡Qué bueno verte de nuevo!
          </h3>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Error */}
            {error && (
              <div className="text-sm text-red-700 bg-red-100 border border-red-300 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                onChange={() => setError(null)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring transition text-gray-400
                  ${error ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}
                `}
                placeholder="ejemplo@correo.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                onChange={() => setError(null)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring transition text-gray-400
                  ${error ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}
                `}
                placeholder="••••••••"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <a
                href="/forgot-password"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500"
              >
                ¿Olvidaste tu contraseña?
              </a>

              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2.5 text-sm font-bold text-white rounded-lg transition
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-500"
                  }
                `}
              >
                {loading ? "Ingresando..." : "Iniciar sesión"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
