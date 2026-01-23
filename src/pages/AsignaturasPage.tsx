import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';
import { useParams } from "react-router-dom";
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';
import { Subject } from '../types/types.ts';

const AsignaturasPage = () => {
    const { establishmentId, levelId } = useParams();
    const { cognitoUserId, loading: authLoading } = useAuth();
    const { data: subjects, authorized, loading: dataLoading } = useProtectedList<Subject>({
        pivot: "UserLevel",
        targetId: levelId,
        resource: "Subject",
        foreignKey: "levelId",
        cognitoUserId: cognitoUserId!
    });

    if (authLoading || dataLoading) {
        return <p>Cargando asignaturas...</p>;
    }

    if (!cognitoUserId || authorized === false) {
        return <p>No tienes permiso para ver las asignaturas de este nivel.</p>;
    }

    return (
        <div>
            <Breadcrumbs
                items={[
                    { label: "Establecimientos", path: "/establecimientos" },
                    { label: "Niveles", path: `/establecimientos/${establishmentId}` },
                    { label: "Asignaturas" }
                ]}
            />
            <GeneralCollection
                elements={subjects}
                elementType="asignaturas"
                buttons={[{ href: `/establecimientos/${establishmentId}/niveles/${levelId}/asignaturas`, text: 'Ver libros' }]}
                isSearchable
                isPaginated
            />
        </div>
    );
}

export default AsignaturasPage;