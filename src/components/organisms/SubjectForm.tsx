import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { useNavigate } from "react-router-dom";

const client = generateClient<Schema>();

interface SubjectFormProps {
    establishmentId?: string;
    levelId: string;
    subjectId?: string;
}

export default function SubjectForm({
    establishmentId,
    levelId,
    subjectId,
}: SubjectFormProps) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        levelId: levelId || "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);
    const isEditMode = Boolean(subjectId);

    useEffect(() => {
        const fetchData = async () => {
            if (!subjectId) return;

            const { data: subjectData } =
                await client.models.Subject.get({
                    id: subjectId,
                });

            if (!subjectData) return;

            setForm({
                name: subjectData.name,
                levelId: subjectData.levelId!,
            });
        };

        fetchData();
    }, [subjectId]);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.levelId)
            newErrors.levelId = "Error, no hay nivel";
        if (!form.name.trim())
            newErrors.name = "El nombre es obligatorio";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
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
            if (isEditMode && subjectId) {
                await client.models.Subject.update({
                    id: subjectId,
                    name: form.name,
                    levelId: form.levelId,
                });
            } else {
                const newSubject = await client.models.Subject.create({
                    name: form.name,
                    levelId: form.levelId,
                });

                const subjectIdCreated = newSubject.data?.id;
                if (!subjectIdCreated) return;

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
                        client.models.UserSubject.create({
                            userId: ur.userId,
                            subjectId: subjectIdCreated,
                        })
                    )
                );
            }

            setSuccess(true);
            setErrors({});

            navigate(
                `/establecimientos/${establishmentId}/niveles/${levelId}`
            );
        } catch (error) {
            console.error("Error guardando asignatura:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {isEditMode
                    ? "Editar asignatura"
                    : "Registrar nueva asignatura"}
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
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {isEditMode
                        ? "Actualizar asignatura"
                        : "Guardar asignatura"}
                </button>

                {success && (
                    <p className="text-sm text-green-500 text-center">
                        {isEditMode
                            ? "Asignatura actualizada correctamente"
                            : "Asignatura registrada correctamente"}
                    </p>
                )}
            </form>
        </div>
    );
}
