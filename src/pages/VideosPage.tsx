import BookVideos from "../components/organisms/BookVideos";
import { useAuth } from '../hooks/useAuth.ts';
import { useNavigate, useParams } from "react-router-dom";

export default function BookVideosPage() {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const { loading: authLoading, isAdmin } = useAuth();

    if (authLoading) return <p>Cargando...</p>;
    return (
        <div>
            {
                isAdmin && (
                    <button
                        onClick={() => navigate(`/videos/crear/${bookId}`)}
                        className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition"
                    >
                        Crear Video
                    </button>
                )
            }
            <BookVideos bookId={bookId!} />
        </div>
    );
}
