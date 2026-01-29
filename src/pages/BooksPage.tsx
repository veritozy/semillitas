import { Book } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';
import { useDelete } from '../hooks/useDelete.ts';
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
    const { deleteBook } = useDelete();

    const handleEdit = (bookId?: string) => {
        navigate(`/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas/${subjectId}/libros/editar/${bookId}`);
    }

    const handleDelete = async (bookId?: string) => {
        const confirm = window.confirm(
            "¿Estás seguro de eliminar este libro?"
        );
        if (!confirm) return;

        try {
            await deleteBook(bookId!);
            navigate(0);
        } catch (error) {
            console.error("Error eliminando libro:", error);
        }
    };

    if (authLoading || dataLoading) return <p>Cargando libros...</p>;
    if (!cognitoUserId || authorized === false) {
        return <p>No tienes permiso para ver los libros de esta asignatura.</p>
    }

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <Breadcrumbs
                    items={[
                        { label: "Establecimientos", path: "/establecimientos" },
                        { label: "Niveles", path: `/establecimientos/${establishmentId}` },
                        { label: "Asignaturas", path: `/establecimientos/${establishmentId}/niveles/${levelId}` },
                        { label: "Libros" }
                    ]}
                />
            </div>

            {/* BOTÓN */}
            {
                isAdmin && (
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <button
                            onClick={() => navigate(`/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas/${subjectId}/libros/crear`)}
                            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-8 rounded-full font-bold shadow-md transition-all"
                        >
                            + Crear Libro
                        </button>
                    </div>
                )
            }

            {/* BÚSQUEDA */}
            <div style={{ width: '100%', maxWidth: '1200px' }}>
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
                        },
                        {
                            text: 'Editar libro',
                            onClick: handleEdit
                        },
                        {
                            text: 'Eliminar libro',
                            onClick: handleDelete
                        }
                    ]}
                    isSearchable
                    isPaginated
                />
            </div>
        </div>
    );
}

export default BooksPage;