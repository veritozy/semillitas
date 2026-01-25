import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';
import { useEstablishments } from '../hooks/useEstablishments.ts';
import { useAuth } from '../hooks/useAuth.ts';

const EstablishmentsPage = () => {
    const { cognitoUserId, loading: authLoading, isAdmin } = useAuth();
    const { establishments, loading: dataLoading } = useEstablishments(cognitoUserId!);

    if (authLoading || dataLoading) return <p>Cargando establecimientos...</p>;

    if (!cognitoUserId) return <p>No tienes permiso para ver los establecimientos.</p>;

    return (
        <div>
            {isAdmin && (
                <div>
                    <a href="/admin/establecimientos" className="btn btn-primary mb-4">
                        Ir al panel de administración
                    </a>
                </div>
            )}
            <Breadcrumbs
                items={[
                    { label: "Establecimientos" }
                ]}
            />
            <GeneralCollection
                elements={establishments}
                elementType="establecimientos"
                buttons={[
                    { href: '/establecimientos', text: 'Ver cursos' },
                    { href: '/libros', text: 'Ver todos los libros' }
                ]}
                isSearchable
                isPaginated
            />
        </div>
    );
}

export default EstablishmentsPage;