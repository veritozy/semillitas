import { useState, useEffect } from "react";
import BookVideos from "../components/organisms/BookVideos";
import { useAuth } from '../hooks/useAuth.ts';
import { useNavigate, useParams } from "react-router-dom";

export default function BookVideosPage() {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const { loading: authLoading, isAdmin, isTeacher } = useAuth();
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const videos = document.querySelectorAll('.grid > div, [class*="card"]');
        videos.forEach((el) => {
            const coincide = el.textContent?.toLowerCase().includes(busqueda.toLowerCase());
            (el as HTMLElement).style.display = coincide ? "" : "none";
        });
    }, [busqueda]);

    if (authLoading) return <p>Cargando...</p>;

    return (
        <div style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {(isAdmin || isTeacher) && (
                <div className="w-full flex justify-start mb-4">
                    <button
                        onClick={() => navigate("/establecimientos")}
                        className="
                                    flex items-center gap-2 
                                    px-4 py-2 
                                    bg-blue-600 hover:bg-blue-700 
                                    text-white font-medium 
                                    rounded-lg 
                                    shadow-md hover:shadow-lg 
                                    transition-all duration-200
                                    active:scale-95
                                "
                    >
                        ← Volver a establecimientos
                    </button>
                </div>
            )}

            {isAdmin && (
                <div style={{ marginBottom: '25px' }}>
                    <button
                        onClick={() => navigate(`/videos/crear/${bookId}`)}
                        className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-8 rounded-full font-bold shadow-md transition-all"
                    >
                        + Crear Nuevo Video
                    </button>
                </div>
            )}

            {/* BÚSQUEDA*/}
            <div style={{ marginBottom: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <input
                    type="text"
                    placeholder="🔍 Buscar video por título..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{
                        width: '100%',
                        maxWidth: '450px',
                        padding: '12px 20px',
                        borderRadius: '25px',
                        border: '2px solid #eee',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        outline: 'none',
                        fontSize: '16px'
                    }}
                />
            </div>

            {/* VIDEOS */}
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <BookVideos bookId={bookId!} />
            </div>
        </div>
    );
}