import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useProtectedBook } from "../hooks/useProtectedBook";
import { useNavigate } from "react-router-dom";

export default function BookPage() {
    const { bookId } = useParams<{ bookId: string }>();
    const { cognitoUserId, loading: authLoading } = useAuth();
    const navigate = useNavigate();

    const {
        book,
        authorized,
        loading: dataLoading
    } = useProtectedBook(bookId, cognitoUserId ?? undefined);

    if (authLoading || dataLoading) {
        return <p>Cargando libro...</p>;
    }

    if (!cognitoUserId || authorized === false || !book) {
        return <Navigate to="/no-autorizado" replace />;
    }

  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">

        {/* Imagen */}
        {book.imageUrl && (
          <div className="flex justify-center">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="h-60 object-contain rounded-lg"
            />
          </div>
        )}

        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {book.title}
        </h1>

        {/* Categoría */}
        <p className="text-center text-sm text-indigo-600 font-medium">
          {book.category}
        </p>

        {/* Descripción */}
        <p className="text-gray-600 text-justify leading-relaxed">
          {book.description}
        </p>

        {/* Embed */}
        {book.embedCode && (
          <div
            className="w-full rounded-lg overflow-hidden border"
            dangerouslySetInnerHTML={{ __html: book.embedCode }}
          />
        )}

        {/* Botonera */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">

          <button
            onClick={() => navigate(`/recursos/${book.id}`)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
          >
            Recursos
          </button>

          <button
            onClick={() => navigate(`/libros/${book.id}/videos`)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition"
          >
            Videos
          </button>

          <button
            onClick={() => navigate(`/audios/${book.id}`)}
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition"
          >
            Audios
          </button>

        </div>
      </div>
    </div>
  );
}
