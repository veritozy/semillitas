import { Book } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/organisms/Breadcrumbs.tsx";

const BooksPage = () => {
    const navigate = useNavigate();
    const { establishmentId, levelId, subjectId } = useParams();
    const { cognitoUserId, loading: authLoading, isAdmin } = useAuth();

    const { data: books, authorized, loading: dataLoading } = useProtectedList<Book>({
        pivot: "UserSubject",
        targetId: subjectId,
        resource: "Book",
        foreignKey: "subjectId",
        cognitoUserId: cognitoUserId!
    });

    if (authLoading || dataLoading) return <p>Cargando libros...</p>;
    if (!cognitoUserId || authorized === false) {
        return <p>No tienes permiso para ver los libros de esta asignatura.</p>
    }

    return (
        <div>
            <Breadcrumbs
                items={[
                    { label: "Establecimientos", path: "/establecimientos" },
                    { label: "Niveles", path: `/establecimientos/${establishmentId}` },
                    { label: "Asignaturas", path: `/establecimientos/${establishmentId}/niveles/${levelId}` },
                    { label: "Libros" }
                ]}
            />
            {
                isAdmin && (
                    <button
                        onClick={() => navigate(`/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas/${subjectId}/libros/crear`)}
                        className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition"
                    >
                        Crear Libro
                    </button>
                )
            }
            <GeneralCollection
                elements={books}
                elementType="libros"
                buttons={[
                    {
                        href: `/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas/${subjectId}/libros`,
                        text: 'Ir al libro'
                    },
                    {
                        href: `/recursos`,
                        text: 'Ver recursos'
                    },
                    {
                        href: `/audios`,
                        text: 'Ver audios'
                    },
                    {
                        href: `/videos`,
                        text: 'Ver videos'
                    }
                ]}
                isSearchable
                isPaginated
            />
        </div>

    );
}

export default BooksPage;