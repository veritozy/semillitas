import { Book } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"
import { useAuth } from '../hooks/useAuth.ts';
import { useProtectedList } from '../hooks/useProtectedList.ts';

const BooksPage = () => {
    const { subjectId } = useParams();
    const { cognitoUserId, loading: authLoading } = useAuth();

    const { data: books, authorized, loading: dataLoading } = useProtectedList<Book>({
        pivot: "UserSubject",
        targetId: subjectId,
        resource: "Book",
        foreignKey: "subjectId",
        cognitoUserId: cognitoUserId!
    });

    if (authLoading || dataLoading) return <p>Cargando libros...</p>;
    if (!cognitoUserId || authorized === false) {
        return <p>No tienes permiso para ver los libros de esta asignatura.</p>
    }

    return (
        <GeneralCollection elements={books} elementType="libros" isSearchable isPaginated />
    );
}

export default BooksPage;