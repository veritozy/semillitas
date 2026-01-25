import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { useNavigate } from "react-router-dom";
// import { uploadData } from "aws-amplify/storage";

const client = generateClient<Schema>();

interface BookFormProps {
    subjectId: string;   // obligatorio: un libro siempre pertenece a una asignatura
    bookId?: string;     // si viene, es modo edición
}

export default function BookForm({ subjectId, bookId }: BookFormProps) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        embedCode: "",
        imageUrl: "",
        description: "",
        category: "",
        subjectId: subjectId,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);
    const isEditMode = Boolean(bookId);

    useEffect(() => {
        const fetchData = async () => {
            if (!bookId) return;

            const { data: bookData } = await client.models.Book.get({
                id: bookId,
            });

            if (!bookData) return;

            setForm({
                title: bookData.title,
                embedCode: bookData.embedCode,
                imageUrl: bookData.imageUrl || "",
                description: bookData.description,
                category: bookData.category,
                subjectId: bookData.subjectId,
            });
        };

        fetchData();
    }, [bookId]);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.subjectId)
            newErrors.subjectId = "Error, no hay asignatura";
        if (!form.title.trim())
            newErrors.title = "El título es obligatorio";
        if (!form.embedCode.trim())
            newErrors.embedCode = "El código embebido es obligatorio";
        if (!form.description.trim())
            newErrors.description = "La descripción es obligatoria";
        if (!form.category.trim())
            newErrors.category = "La categoría es obligatoria";

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
            if (isEditMode && bookId) {
                await client.models.Book.update({
                    id: bookId,
                    title: form.title,
                    embedCode: form.embedCode,
                    imageUrl: form.imageUrl || null,
                    description: form.description,
                    category: form.category,
                    subjectId: form.subjectId,
                });
            } else {
                await client.models.Book.create({
                    title: form.title,
                    embedCode: form.embedCode,
                    imageUrl: form.imageUrl || null,
                    description: form.description,
                    category: form.category,
                    subjectId: form.subjectId,
                });
            }

            setSuccess(true);
            setErrors({});

            navigate(
                `/establecimientos/.../asignaturas/${form.subjectId}`
            );
        } catch (error) {
            console.error("Error guardando libro:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {isEditMode
                    ? "Editar libro"
                    : "Registrar nuevo libro"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Título *
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.title && (
                        <p className="text-xs text-red-400 mt-1">
                            {errors.title}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Categoría *
                    </label>
                    <input
                        type="text"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.category && (
                        <p className="text-xs text-red-400 mt-1">
                            {errors.category}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        URL de imagen (opcional)
                    </label>
                    <input
                        type="url"
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Código embebido *
                    </label>
                    <textarea
                        name="embedCode"
                        value={form.embedCode}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.embedCode && (
                        <p className="text-xs text-red-400 mt-1">
                            {errors.embedCode}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Descripción *
                    </label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.description && (
                        <p className="text-xs text-red-400 mt-1">
                            {errors.description}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {isEditMode
                        ? "Actualizar libro"
                        : "Guardar libro"}
                </button>

                {success && (
                    <p className="text-sm text-green-500 text-center">
                        {isEditMode
                            ? "Libro actualizado correctamente"
                            : "Libro registrado correctamente"}
                    </p>
                )}
            </form>
        </div>
    );
}
