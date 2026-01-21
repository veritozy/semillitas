import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"
import { useAuth } from '../hooks/useAuth.ts';
import { useAllBooksByEstablishment } from '../hooks/useAllBooksByEstablishment.ts';

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
        <GeneralCollection elements={books} elementType="libros" isSearchable isPaginated />
    );
}

export default BooksPage;