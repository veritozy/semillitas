import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { uploadData } from "aws-amplify/storage";
import { useNavigate } from "react-router-dom";

const client = generateClient<Schema>();

interface BookAudioFormProps {
    bookId: string;
    audioId?: string;
}

export default function BookAudioForm({ bookId, audioId }: BookAudioFormProps) {
    const navigate = useNavigate();
    const isEditMode = Boolean(audioId);

    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);

    const [form, setForm] = useState({
        name: "",
        url: "",
        public: true,
        bookId,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!audioId) return;

            const { data } = await client.models.BookAudio.get({ id: audioId });
            if (!data) return;

            setForm({
                name: data.name,
                url: data.url,
                public: data.public ?? true,
                bookId: data.bookId,
            });
        };

        fetchData();
    }, [audioId]);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.bookId) newErrors.bookId = "No hay libro";
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!isEditMode && !file)
            newErrors.file = "Debes subir un archivo de audio";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFile = (f: File) => {
        setFile(f);
        setForm({ ...form, name: f.name });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            setLoading(true);

            let audioUrl = form.url;

            if (file) {
                const path = `audios/${bookId}/${file.name}`;

                const result = await uploadData({
                    path,
                    data: file,
                }).result;

                audioUrl = result.path;
            }

            if (isEditMode && audioId) {
                await client.models.BookAudio.update({
                    id: audioId,
                    name: form.name,
                    url: audioUrl,
                    public: form.public,
                    bookId: form.bookId,
                });
            } else {
                await client.models.BookAudio.create({
                    name: form.name,
                    url: audioUrl,
                    public: form.public,
                    bookId: form.bookId,
                });
            }

            setSuccess(true);
            setErrors({});

            navigate(`/audios/${bookId}`);
        } catch (error) {
            console.error("Error guardando audio:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {isEditMode ? "Editar audio" : "Registrar nuevo audio"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setDragging(false);
                        if (e.dataTransfer.files[0])
                            handleFile(e.dataTransfer.files[0]);
                    }}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer ${
                        dragging
                            ? "border-blue-400 bg-blue-50"
                            : "border-gray-300"
                    }`}
                >
                    <input
                        type="file"
                        accept="audio/*"
                        className="hidden"
                        id="audio-upload"
                        onChange={(e) =>
                            e.target.files &&
                            handleFile(e.target.files[0])
                        }
                    />
                    <label htmlFor="audio-upload" className="cursor-pointer">
                        {file ? (
                            <p className="text-sm text-gray-700">
                                {file.name}
                            </p>
                        ) : (
                            <p className="text-sm text-gray-400">
                                Arrastra el audio o haz clic para subirlo
                            </p>
                        )}
                    </label>
                </div>

                {errors.file && (
                    <p className="text-xs text-red-400">{errors.file}</p>
                )}

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Nombre *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-400 mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={form.public}
                        onChange={(e) =>
                            setForm({ ...form, public: e.target.checked })
                        }
                        className="rounded border-gray-300"
                    />
                    <label className="text-sm text-gray-600">
                        Audio público
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading
                        ? "Subiendo..."
                        : isEditMode
                        ? "Actualizar audio"
                        : "Guardar audio"}
                </button>

                {success && (
                    <p className="text-sm text-green-500 text-center">
                        {isEditMode
                            ? "Audio actualizado correctamente"
                            : "Audio registrado correctamente"}
                    </p>
                )}
            </form>
        </div>
    );
}
