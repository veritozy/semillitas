import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { Book } from "../../types/types";
import { useNavigate } from "react-router-dom";
// import { Book } from "../../types/types";
// import { BookSelectorModal } from "../organisms/BookSelectorModal";

const client = generateClient<Schema>();

interface BookVideoFormProps {
    // cognitoUserId: string;
    bookId?: string;
    videoId?: string;
}

export default function BookVideoForm({ bookId, videoId }: BookVideoFormProps) {
    // const [openModal, setOpenModal] = useState(false);
    // const [selectedBook, setSelectedBook] = useState<{ id: string; title: string } | null>(null);
    const navigate = useNavigate();
    const [book, setBook] = useState<Book | null>(null);
    const [form, setForm] = useState({
        name: "",
        url: "",
        embedCode: "",
        public: true,
        bookId: bookId || "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);
    const isEditMode = Boolean(videoId);

    useEffect(() => {
        const fetchData = async () => {
            const { data: bookData } = await client.models.Book.get({
                id: form.bookId,
            });

            setBook(bookData);

            if (!videoId) return;
            const { data: videoData } = await client.models.BookVideo.get({
                id: videoId,
            });

            if (!videoData) return;

            setForm({
                name: videoData.name,
                url: videoData.url,
                embedCode: videoData.embedCode || "",
                public: videoData.public ?? true,
                bookId: videoData.bookId,
            });
        };

        fetchData();
    }, [form.bookId, videoId]);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.bookId) newErrors.bookId = "Error, no hay libro seleccionado";
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!form.embedCode.trim()) newErrors.embedCode = "El código embebido es obligatorio";
        if (!form.url.trim()) newErrors.url = "La URL es obligatoria";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = e.target;
        setForm({
            ...form,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            if (isEditMode && videoId) {
                await client.models.BookVideo.update({
                    id: videoId,
                    name: form.name,
                    url: form.url,
                    embedCode: form.embedCode || null,
                    public: form.public,
                    bookId: form.bookId,
                });
            } else {
                await client.models.BookVideo.create({
                    name: form.name,
                    url: form.url,
                    embedCode: form.embedCode || null,
                    public: form.public,
                    bookId: form.bookId,
                });
            }

            setSuccess(true);

            if (!isEditMode) {
                setForm({
                    name: "",
                    url: "",
                    embedCode: "",
                    public: true,
                    bookId: bookId || "",
                });
            }

            setErrors({});
            navigate(`/videos/${form.bookId}`);
            
        } catch (error) {
            console.error("Error guardando video:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {isEditMode ? `Editar el video del libro ${book?.title}` : `Registrar un nuevo video para el libro ${book?.title}`}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-sm text-gray-600 mb-1">Nombre *</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        URL del video *
                    </label>
                    <input
                        type="url"
                        name="url"
                        value={form.url}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.url && (
                        <p className="text-xs text-red-400 mt-1">{errors.url}</p>
                    )}
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

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="public"
                        checked={form.public}
                        onChange={handleChange}
                        className="rounded border-gray-300"
                    />
                    <label className="text-sm text-gray-600">Video público</label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {isEditMode ? "Actualizar video" : "Guardar video"}
                </button>

                {success && (
                    <p className="text-sm text-green-500 text-center">
                        {isEditMode
                            ? "Video actualizado correctamente"
                            : "Video registrado correctamente"}
                    </p>
                )}
            </form>

            {/* <BookSelectorModal
                cognitoUserId={cognitoUserId}
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSelect={(book) => {
                    setForm({ ...form, bookId: book.id });
                    setSelectedBook(book);
                    setOpenModal(false);
                }}
            /> */}

        </div>
    );
}
