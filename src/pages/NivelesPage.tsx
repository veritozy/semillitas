import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';
import { useParams } from "react-router-dom"
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';
import { useDelete } from '../hooks/useDelete.ts';
import { Level } from '../types/types.ts';
import { useNavigate } from "react-router-dom";


const NivelesPage = () => {
    const navigate = useNavigate();
    const { establishmentId } = useParams();
    const { cognitoUserId, loading: authLoading, isAdmin } = useAuth();
    const { data: levels, authorized, loading: dataLoading } = useProtectedList<Level>({
        pivot: "UserEstablishment",
        targetId: establishmentId,
        resource: "Level",
        foreignKey: "establishmentId",
        cognitoUserId: cognitoUserId!
    });
    const { deleteLevel } = useDelete();

    const handleEdit = (levelId?: string) => {
        navigate(`/establecimientos/${establishmentId}/niveles/editar/${levelId}`);
    };

    const handleDelete = async (levelId?: string) => {
        const confirm = window.confirm(
            "¿Estás seguro de eliminar este nivel?"
        );
        if (!confirm) return;

        try {
            await deleteLevel(levelId!);
            navigate(0);
        } catch (error) {
            console.error("Error eliminando nivel:", error);
        }
    };

    if (authLoading || dataLoading) return <div>Cargando...</div>;
    if (!cognitoUserId || authorized === false) {
        return <div>No tienes permiso para ver los niveles de este establecimiento.</div>;
    }

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <Breadcrumbs
                    items={[
                        { label: "Establecimientos", path: "/establecimientos" },
                        { label: "Niveles" }
                    ]}
                />
            </div>

            {/* BOTÓN */}
            {
                isAdmin && (
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <button
                            onClick={() => navigate(`/establecimientos/${establishmentId}/niveles/crear`)}
                            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-8 rounded-full font-bold shadow-md transition-all"
                        >
                            + Crear Nivel
                        </button>
                    </div>
                )
            }

            {/* COLECCIÓN CENTRADA */}
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <GeneralCollection
                    elements={levels}
                    elementType="niveles"
                    buttons={[
                        { href: `/establecimientos/${establishmentId}/niveles`, text: 'Ver asignaturas' },
                        {
                            text: isAdmin ? 'Editar' : undefined,
                            onClick: handleEdit
                        },
                        {
                            text: isAdmin ? 'Eliminar' : undefined,
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

export default NivelesPage;