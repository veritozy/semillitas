import { Book } from "../../types/types.ts";
import { Flex, Text, Collection } from '@aws-amplify/ui-react';
import BookCard from "../organisms/BookCard.tsx";

const BookCollection = (
    { books, isSearchable=false, isPaginated=false }: 
    { books: Book[], isSearchable?: boolean, isPaginated?: boolean }) => {
    return (
        <Collection
            items={books}
            type="list"
            direction="row"
            gap="20px"
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            margin="large"
            {...(isSearchable ? { isSearchable, searchPlaceholder: 'Buscar libros' } : {})}
            {...(isPaginated ? { isPaginated, itemsPerPage: 10 } : {})}
            searchNoResultsFound={
                <Flex justifyContent="center">
                    <Text> No se han encontrado libros </Text>
                </Flex>
            }
        >
            {book =>
                <BookCard
                    key={book.id}
                    book={book}
                    buttons={[
                        { href: `/libros/${book.id}`, text: 'Ir al libro' },
                        { href: `/recursos/${book.id}`, text: 'Ver recursos' }
                    ]}
                />}
        </Collection>
    );
}

export default BookCollection;