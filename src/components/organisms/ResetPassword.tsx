import { confirmResetPassword } from "aws-amplify/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ResetPassword() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const emailParam = params.get("email") || "";

    const [email, setEmail] = useState(emailParam);
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [emailParam]);

    const rules = {
        length: password.length >= 8,
        upper: /[A-Z]/.test(password),
        lower: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
    };

    const isPasswordValid = Object.values(rules).every(Boolean);
    const passwordsMatch = password === confirmPassword;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!code) {
            setError("Ingresa el código de verificación.");
            return;
        }

        if (!isPasswordValid) {
            setError("La contraseña no cumple los requisitos.");
            return;
        }

        if (!passwordsMatch) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        setLoading(true);

        try {
            await confirmResetPassword({
                username: email,
                confirmationCode: code,
                newPassword: password,
            });

            setSuccess("Contraseña actualizada correctamente.");
            setTimeout(() => navigate("/"), 2000);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            switch (err.name) {
                case "CodeMismatchException":
                    setError("El código ingresado no es válido.");
                    break;
                case "ExpiredCodeException":
                    setError("El código ha expirado.");
                    break;
                default:
                    setError("No se pudo actualizar la contraseña.");
                    console.error(err);
            }
        } finally {
            setLoading(false);
        }
    };

    const Rule = ({ ok, text }: { ok: boolean; text: string }) => (
        <li className={`text-sm ${ok ? "text-green-600" : "text-gray-500"}`}>
            {ok ? "✔" : "•"} {text}
        </li>
    );

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700">
                <div className="px-6 py-8">
                    <h3 className="text-xl font-bold text-center text-white mb-4">
                        Restablecer contraseña
                    </h3>

                    <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                        Hemos enviado un <span className="font-semibold">código de verificación</span> a tu correo electrónico.
                        <br />
                        Revisa tu bandeja de entrada o la carpeta de spam.
                    </p>


                    {error && (
                        <div className="mt-4 text-sm text-red-700 bg-red-100 p-3 rounded">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mt-4 text-sm text-green-700 bg-green-100 p-3 rounded">
                            {success}
                        </div>
                    )}

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg"
                        />

                        <input
                            placeholder="Código de verificación"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg"
                        />

                        <input
                            type="password"
                            placeholder="Nueva contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg"
                        />

                        <ul className="bg-gray-50 p-3 rounded-lg">
                            <Rule ok={rules.length} text="Mínimo 8 caracteres" />
                            <Rule ok={rules.upper} text="Mayúsculas" />
                            <Rule ok={rules.lower} text="Minúsculas" />
                            <Rule ok={rules.number} text="Números" />
                            <Rule ok={rules.special} text="Caracteres especiales" />
                        </ul>

                        <input
                            type="password"
                            placeholder="Confirmar contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg"
                        />

                        <button
                            disabled={loading || !isPasswordValid || !passwordsMatch}
                            className={`w-full py-2.5 rounded-lg font-bold text-white
                ${loading
                                    ? "bg-gray-400"
                                    : "bg-blue-600 hover:bg-blue-500"
                                }`}
                        >
                            {loading ? "Actualizando..." : "Actualizar contraseña"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
