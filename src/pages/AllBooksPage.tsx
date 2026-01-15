import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { Book } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"

const client = generateClient<Schema>();

const BooksPage = () => {
    const { establishmentId } = useParams();
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const getBooks = async () => {
            await client.models.Establishment.get({ id: establishmentId! }).then(async (response) => {
                await response.data?.levels().then(async (levelResponse) => {
                    const levelData = levelResponse.data;
                    const allBooks: Book[] = [];
                    for (const level of levelData) {
                        await level.subjects().then(async (subjectResponse) => {
                            const subjectData = subjectResponse.data;
                            for (const subject of subjectData) {
                                await subject.books().then((bookResponse) => {
                                    const bookData = bookResponse.data;
                                    allBooks.push(...bookData);
                                });
                            }
                        });
                    }
                    setBooks(allBooks);
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