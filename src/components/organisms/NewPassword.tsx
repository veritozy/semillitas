import { confirmSignIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const isPasswordValid = Object.values(rules).every(Boolean);
  const passwordsMatch = password === confirmPassword && confirmPassword !== "";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!isPasswordValid) {
      setError("La contraseña no cumple con los requisitos.");
      return;
    }

    if (!passwordsMatch) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const data = await confirmSignIn({
        challengeResponse: password,
      });

      if (data?.isSignedIn && data.nextStep.signInStep === "DONE") {
        navigate("/establecimientos");
      }
    } catch (err) {
      console.error(err);
      setError("Error al cambiar la contraseña. Inténtalo de nuevo iniciando sesión.");
    }
  };

  const RuleItem = ({ ok, text }: { ok: boolean; text: string }) => (
    <li className={`flex items-center text-sm ${ok ? "text-green-600" : "text-gray-500"}`}>
      <span className="mr-2">{ok ? "✔" : "•"}</span>
      {text}
    </li>
  );

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700">
        <div className="px-6 py-8">
          <img
            className="w-auto h-20 mx-auto object-contain"
            src="/images/logo.jpg"
            alt="Logo"
          />

          <h3 className="mt-4 text-lg font-semibold text-center text-gray-800 dark:text-white">
            Cambia tu contraseña
          </h3>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                Nueva contraseña
              </label>
              <input
                type="password"
                className={`w-full px-4 py-3 border rounded-lg transition focus:ring
                  ${password && !isPasswordValid ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}
                `}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Rules */}
            <ul className="space-y-1 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <RuleItem ok={rules.length} text="Mínimo 8 caracteres" />
              <RuleItem ok={rules.upper} text="Al menos una mayúscula" />
              <RuleItem ok={rules.lower} text="Al menos una minúscula" />
              <RuleItem ok={rules.number} text="Al menos un número" />
              <RuleItem ok={rules.special} text="Al menos un carácter especial" />
            </ul>

            {/* Confirm password */}
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-200">
                Confirmar contraseña
              </label>
              <input
                type="password"
                className={`w-full px-4 py-3 border rounded-lg transition
                  ${confirmPassword && !passwordsMatch ? "border-red-500" : ""}
                `}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600 bg-red-100 p-2 rounded">
                {error}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={!isPasswordValid || !passwordsMatch}
              className={`w-full py-2.5 rounded-lg font-bold text-white transition
                ${
                  isPasswordValid && passwordsMatch
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-gray-400 cursor-not-allowed"
                }
              `}
            >
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
