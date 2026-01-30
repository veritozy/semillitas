import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';
import { useDelete } from '../hooks/useDelete.ts';
import { Subject } from '../types/types.ts';

const AsignaturasPage = () => {
    const navigate = useNavigate();
    const { establishmentId, levelId } = useParams();
    const { cognitoUserId, loading: authLoading, isAdmin } = useAuth();
    const { data: subjects, authorized, loading: dataLoading } = useProtectedList<Subject>({
        pivot: "UserLevel",
        targetId: levelId,
        resource: "Subject",
        foreignKey: "levelId",
        cognitoUserId: cognitoUserId!
    });
    const { deleteSubject } = useDelete();

    const handleEdit = (subjectId?: string) => {
        navigate(`/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas/editar/${subjectId}`);
    };

    const handleDelete = async (subjectId?: string) => {
        const confirm = window.confirm(
            "¿Estás seguro de eliminar esta asignatura?"
        );
        if (!confirm) return;

        try {
            await deleteSubject(subjectId!);
            navigate(0);
        } catch (error) {
            console.error("Error eliminando asignatura:", error);
        }
    };

    if (authLoading || dataLoading) {
        return <p>Cargando asignaturas...</p>;
    }

    if (!cognitoUserId || authorized === false) {
        return <p>No tienes permiso para ver las asignaturas de este nivel.</p>;
    }

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <Breadcrumbs
                    items={[
                        { label: "Establecimientos", path: "/establecimientos" },
                        { label: "Niveles", path: `/establecimientos/${establishmentId}` },
                        { label: "Asignaturas" }
                    ]}
                />
            </div>

            {/* BOTÓN  */}
            {
                isAdmin && (
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <button
                            onClick={() => navigate(`/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas/crear`)}
                            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-8 rounded-full font-bold shadow-md transition-all"
                        >
                            + Crear Asignatura
                        </button>
                    </div>
                )
            }            
            
            {/* COLECCIÓN CENTRADA */}
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <GeneralCollection
                    elements={subjects}
                    elementType="asignaturas"
                    buttons={[
                        {
                            href: `/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas`, text: 'Ver libros'
                        },
                        {
                            text: isAdmin ? 'Editar asignatura' : undefined,
                            onClick: handleEdit
                        },
                        {
                            text: isAdmin ? 'Eliminar asignatura' : undefined,
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

export default AsignaturasPage;