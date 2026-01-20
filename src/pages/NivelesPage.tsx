import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"
import { useAuthenticatedUser } from '../hooks/useAuthenticatedUser.ts';
import { useEstablishmentLevels } from '../hooks/useEstablishmentLevels.ts';

const NivelesPage = () => {
    const { establishmentId } = useParams();
    const { cognitoUserId, loading: authLoading } = useAuthenticatedUser();

    const { levels, authorized, loading: dataLoading } = useEstablishmentLevels(
        establishmentId!,
        cognitoUserId!
    );

    if (authLoading || dataLoading) return <div>Cargando...</div>;
    if (!cognitoUserId || authorized === false) {
        return <div>No tienes permiso para ver los niveles de este establecimiento.</div>;
    }

    return (
        <GeneralCollection elements={levels} elementType="niveles" isSearchable isPaginated />
    );
}

export default NivelesPage;