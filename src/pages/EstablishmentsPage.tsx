import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';
import { useEstablishments } from '../hooks/useEstablishments.ts';
import { useAuth } from '../hooks/useAuth.ts';
import { useNavigate } from "react-router-dom";
import { useDelete } from '../hooks/useDelete.ts';

const EstablishmentsPage = () => {
    const navigate = useNavigate();
    const { cognitoUserId, loading: authLoading, isAdmin } = useAuth();
    const { establishments, loading: dataLoading } = useEstablishments(cognitoUserId ?? undefined);
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
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <Breadcrumbs
                    items={[
                        { label: "Establecimientos" }
                    ]}
                />
            </div>

            {/* BOTÓN */}
            {
                isAdmin && (
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <button
                            onClick={() => navigate(`/establecimientos/crear`)}
                            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-8 rounded-full font-bold shadow-md transition-all"
                        >
                            + Crear Establecimiento
                        </button>
                    </div>
                )
            }

            {/* BÚSQUEDA  */}
            <div style={{ width: '100%', maxWidth: '1200px' }}>
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
        </div>
    );
}

export default EstablishmentsPage;