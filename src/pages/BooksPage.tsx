import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { Book } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"

const client = generateClient<Schema>();

const BooksPage = () => {
    const { subjectId } = useParams();
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const getBooks = async () => {
            await client.models.Subject.get({ id: subjectId! }).then(async (response) => {
                await response.data?.books().then((bookResponse) => {
                    const bookData = bookResponse.data;
                    setBooks(bookData);
                });
            }).catch((error) => {
                console.log(`Error fetching subjects: ${error}`);
            });
        }        
        getBooks();
    });

    return (
        <GeneralCollection elements={books} elementType="libros" isSearchable isPaginated />
    );
}

export default BooksPage;