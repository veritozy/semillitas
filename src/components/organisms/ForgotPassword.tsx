import { resetPassword } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !isValidEmail(email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true);

    try {
      const output = await resetPassword({ username: email });

      if (
        output.nextStep.resetPasswordStep ===
        "CONFIRM_RESET_PASSWORD_WITH_CODE"
      ) {
        navigate(`/reset-password?email=${encodeURIComponent(email)}`);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      switch (err.name) {
        case "UserNotFoundException":
          setError("No existe una cuenta asociada a este correo.");
          break;
        default:
          setError("Ocurrió un error. Intenta nuevamente.");
          console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700">
        <div className="px-6 py-8">
          <img className="h-20 mx-auto" src="/images/logo.jpg" alt="Logo" />

          <h3 className="mt-4 text-xl font-bold text-center text-white">
            Recuperar contraseña
          </h3>

          {error && (
            <div className="mt-4 text-sm text-red-700 bg-red-100 p-3 rounded">
              {error}
            </div>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300"
            />

            <button
              disabled={loading}
              className={`w-full py-2.5 rounded-lg font-bold text-white
                ${
                  loading
                    ? "bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
            >
              {loading ? "Enviando..." : "Enviar código"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
