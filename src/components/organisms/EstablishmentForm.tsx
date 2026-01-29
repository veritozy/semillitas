import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { useNavigate } from "react-router-dom";

const client = generateClient<Schema>();

interface EstablishmentFormProps {
    establishmentId?: string;
}

export default function EstablishmentForm({
    establishmentId,
}: EstablishmentFormProps) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        description: "",
        location: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const isEditMode = Boolean(establishmentId);

    useEffect(() => {
        const fetchData = async () => {
            if (!establishmentId) return;

            const { data: estData } = await client.models.Establishment.get({
                id: establishmentId,
            });

            if (!estData) return;

            setForm({
                description: estData.description,
                location: estData.location || "",
            });
        };

        fetchData();
    }, [establishmentId]);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.description.trim())
            newErrors.description = "La descripción es obligatoria";

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
            if (isEditMode && establishmentId) {
                await client.models.Establishment.update({
                    id: establishmentId,
                    description: form.description,
                    location: form.location || null,
                });
            } else {
                const newEst = await client.models.Establishment.create({
                    description: form.description,
                    location: form.location || null,
                });

                const establishmentIdCreated = newEst.data?.id;
                if (!establishmentIdCreated) return;

                const { data: roles } = await client.models.Role.list({
                    filter: {
                        description: { eq: "Administrador" },
                    },
                });

                const adminRole = roles?.[0];
                if (!adminRole) return;

                const { data: adminUsers } = await client.models.UserRole.list({
                    filter: {
                        roleId: { eq: adminRole.id },
                    },
                });

                await Promise.all(
                    adminUsers.map((ur) =>
                        client.models.UserEstablishment.create({
                            userId: ur.userId,
                            establishmentId: establishmentIdCreated,
                        })
                    )
                );
            }

            setLoading(false);
            setSuccess(true);
            setErrors({});

            navigate("/establecimientos");
        } catch (error) {
            console.error("Error guardando establecimiento:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {isEditMode
                    ? "Editar establecimiento"
                    : "Registrar nuevo establecimiento"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Nombre del establecimiento *
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.description && (
                        <p className="text-xs text-red-400 mt-1">
                            {errors.description}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Ubicación (opcional)
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Guardando..." : 
                        isEditMode ? "Actualizar establecimiento"
                        : "Guardar establecimiento"}
                </button>

                {success && (
                    <p className="text-sm text-green-500 text-center">
                        {isEditMode
                            ? "Establecimiento actualizado correctamente"
                            : "Establecimiento registrado correctamente"}
                    </p>
                )}
            </form>
        </div>
    );
}
