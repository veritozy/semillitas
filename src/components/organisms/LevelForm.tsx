import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { useNavigate } from "react-router-dom";

const client = generateClient<Schema>();

interface LevelFormProps {
    establishmentId: string;
    levelId?: string;
}

export default function LevelForm({
    establishmentId,
    levelId,
}: LevelFormProps) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        establishmentId: establishmentId || "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const isEditMode = Boolean(levelId);

    useEffect(() => {
        const fetchData = async () => {
            if (!levelId) return;

            const { data: levelData } = await client.models.Level.get({
                id: levelId,
            });

            if (!levelData) return;

            setForm({
                name: levelData.name,
                establishmentId: levelData.establishmentId || "",
            });
        };

        fetchData();
    }, [levelId]);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.establishmentId)
            newErrors.establishmentId = "Error, no hay establecimiento";
        if (!form.name.trim())
            newErrors.name = "El nombre es obligatorio";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            setLoading(true);
            if (isEditMode && levelId) {
                await client.models.Level.update({
                    id: levelId,
                    name: form.name,
                    establishmentId: form.establishmentId,
                });
            } else {
                const newLevel = await client.models.Level.create({
                    name: form.name,
                    establishmentId: form.establishmentId,
                });

                const levelIdCreated = newLevel.data?.id;
                if (!levelIdCreated) return;

                const { data: roles } = await client.models.Role.list({
                    filter: {
                        description: { eq: "Administrador" },
                    },
                });

                const adminRole = roles?.[0];
                if (!adminRole) return;

                const { data: adminUsers } =
                    await client.models.UserRole.list({
                        filter: {
                            roleId: { eq: adminRole.id },
                        },
                    });

                // Asignar nivel a todos los admins
                await Promise.all(
                    adminUsers.map((ur) =>
                        client.models.UserLevel.create({
                            userId: ur.userId,
                            levelId: levelIdCreated,
                        })
                    )
                );
            }

            setLoading(false);
            setSuccess(true);
            setErrors({});

            navigate(
                `/establecimientos/${form.establishmentId}`
            );
        } catch (error) {
            console.error("Error guardando nivel:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {isEditMode
                    ? "Editar nivel"
                    : "Registrar nuevo nivel"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Nombre *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-400 mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Guardando..." : 
                        isEditMode ? "Actualizar nivel"
                        : "Guardar nivel"}
                </button>

                {success && (
                    <p className="text-sm text-green-500 text-center">
                        {isEditMode
                            ? "Nivel actualizado correctamente"
                            : "Nivel registrado correctamente"}
                    </p>
                )}
            </form>
        </div>
    );
}
