import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom";
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';
import { Subject } from '../types/types.ts';

const AsignaturasPage = () => {
    const { levelId } = useParams();
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
        <GeneralCollection elements={subjects} elementType="asignaturas" isSearchable isPaginated />
    );
}

export default AsignaturasPage;