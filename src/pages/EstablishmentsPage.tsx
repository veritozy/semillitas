import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useEstablishments } from '../hooks/useEstablishments.ts';
import { useAuth } from '../hooks/useAuth.ts';

const EstablishmentsPage = () => {
    const { cognitoUserId, loading: authLoading } = useAuth();
    const { establishments, loading: dataLoading } = useEstablishments(cognitoUserId!);

    if (authLoading || dataLoading) return <p>Cargando establecimientos...</p>;

    if (!cognitoUserId) return <p>No tienes permiso para ver los establecimientos.</p>;

    return (
        <GeneralCollection elements={establishments} elementType="establecimientos" isSearchable isPaginated />
    );
}

export default EstablishmentsPage;