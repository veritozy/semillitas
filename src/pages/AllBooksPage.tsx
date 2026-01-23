import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"
import { useAuth } from '../hooks/useAuth.ts';
import { useAllBooksByEstablishment } from '../hooks/useAllBooksByEstablishment.ts';
import Breadcrumbs from '../components/organisms/Breadcrumbs.tsx';

const BooksPage = () => {
    const { establishmentId } = useParams();
    const { cognitoUserId, loading: authLoading } = useAuth();

    const { books, authorized, loading: dataLoading } = useAllBooksByEstablishment(
        establishmentId,
        cognitoUserId ?? undefined
    );

    if (authLoading || dataLoading) return <p>Cargando libros...</p>;
    if (!cognitoUserId || authorized === false) {
        return <p>No tienes permiso para ver los libros de este establecimiento.</p>
    }

    return (
        <div>
            <Breadcrumbs
                items={[
                    { label: "Establecimientos", path: "/establecimientos" },
                    { label: "Todos los libros" }
                ]}
            />            
            <GeneralCollection 
                elements={books} 
                elementType="libros" 
                buttons={[
                    { href: `/establecimientos/${establishmentId}/libros`, text: 'Ir al libro' },
                    { href: `/recursos`, text: 'Ver recursos' },
                    { href: `/audios`, text: 'Ver audios' },
                    { href: `/videos`, text: 'Ver videos' }
                ]}
                isSearchable isPaginated />
        </div>
    );
}

export default BooksPage;