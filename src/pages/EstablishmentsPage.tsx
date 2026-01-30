import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';
import { useEstablishments } from '../hooks/useEstablishments.ts';
import { useAuth } from '../hooks/useAuth.ts';
import { useNavigate } from "react-router-dom";
import { useDelete } from '../hooks/useDelete.ts';

const EstablishmentsPage = () => {
    const navigate = useNavigate();
    const { cognitoUserId, loading: authLoading, isAdmin } = useAuth();
    const { establishments, loading: dataLoading } = useEstablishments(cognitoUserId!);
    const { deleteEstablishment } = useDelete();

    if (authLoading || dataLoading) return <p>Cargando establecimientos...</p>;

    if (!cognitoUserId) return <p>No tienes permiso para ver los establecimientos.</p>;

    const handleEdit = (establishmentId?: string) => {
        navigate(`/establecimientos/editar/${establishmentId}`);
    };

    const handleDelete = async (establishmentId?: string) => {
        const confirm = window.confirm(
            "¿Estás seguro de eliminar este establecimiento?"
        );
        if (!confirm) return;

        try {
            await deleteEstablishment(establishmentId!);
            navigate(0);
        } catch (error) {
            console.error("Error eliminando establecimiento:", error);
        }
    };

    return (
        <div>
            <Breadcrumbs
                items={[
                    { label: "Establecimientos" }
                ]}
            />
            {
                isAdmin && (
                    <button
                        onClick={() => navigate(`/establecimientos/crear`)}
                        className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition"
                    >
                        Crear Establecimiento
                    </button>
                )
            }
            <GeneralCollection
                elements={establishments}
                elementType="establecimientos"
                buttons={[
                    { href: '/establecimientos', text: 'Ver cursos' },
                    { href: '/libros', text: 'Ver todos los libros' },
                    { text: isAdmin ? 'Editar' : undefined, onClick: handleEdit },
                    { text: isAdmin ? 'Eliminar' : undefined, onClick: handleDelete },
                ]}
                isSearchable
                isPaginated
            />
        </div>
    );
}

export default EstablishmentsPage;