import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { BookVideo } from "../../types/types";

const client = generateClient<Schema>();

export default function BookVideos() {
    const { bookId } = useParams();
    const [videos, setVideos] = useState<BookVideo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!bookId) return;

        const fetchVideos = async () => {
            try {
                const { data } = await client.models.BookVideo.list({
                    filter: {
                        bookId: { eq: bookId },
                        public: { eq: true },
                    },
                });

                setVideos(data as BookVideo[]);
            } catch (error) {
                console.error("Error cargando videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [bookId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-10">
                <p className="text-gray-500">Cargando videos...</p>
            </div>
        );
    }

    if (videos.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-400">Este libro no tiene videos disponibles.</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Videos del libro
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                    >
                        <div className="relative w-full aspect-video bg-gray-100">
                            {video.embedCode ? (
                                <div
                                    className="absolute inset-0 w-full h-full"
                                    dangerouslySetInnerHTML={{
                                        __html: video.embedCode.replace(
                                            /<iframe/g,
                                            '<iframe class="w-full h-full"'
                                        ),
                                    }}
                                />
                            ) : (
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={video.url}
                                    title={video.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>


                        <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-700">
                                {video.name}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">
                                Recurso audiovisual
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
