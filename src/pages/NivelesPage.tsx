import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';
import { useParams } from "react-router-dom"
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';
import { Level } from '../types/types.ts';

const NivelesPage = () => {
    const { establishmentId } = useParams();
    const { cognitoUserId, loading: authLoading } = useAuth();

    const { data: levels, authorized, loading: dataLoading } = useProtectedList<Level>({
        pivot: "UserEstablishment",
        targetId: establishmentId,
        resource: "Level",
        foreignKey: "establishmentId",
        cognitoUserId: cognitoUserId!
    });

    if (authLoading || dataLoading) return <div>Cargando...</div>;
    if (!cognitoUserId || authorized === false) {
        return <div>No tienes permiso para ver los niveles de este establecimiento.</div>;
    }

    return (
        <div>
            <Breadcrumbs
                items={[
                    { label: "Establecimientos", path: "/establecimientos" },
                    { label: "Niveles" }
                ]}
            />
            <GeneralCollection
                elements={levels}
                elementType="niveles"
                buttons={[{ href: `/establecimientos/${establishmentId}/niveles`, text: 'Ver asignaturas' }]}
                isSearchable
                isPaginated
            />
        </div>
    );
}

export default NivelesPage;