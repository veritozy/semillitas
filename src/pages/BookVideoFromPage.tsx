import { useParams } from "react-router-dom";
import BookVideoFrom from "../components/organisms/BookVideoFrom";
import { useAuth } from '../hooks/useAuth.ts';

export default function BookVideoFromPage() {
    const { bookId, videoId } = useParams();
    const { loading: authLoading, isAdmin } = useAuth();

    if (authLoading) return <p>Cargando...</p>;
    if (!isAdmin) return <p>No tienes permiso para acceder a esta página.</p>;
    return (
        <div>
            <BookVideoFrom bookId={bookId} videoId={videoId} />
        </div>
    );
}