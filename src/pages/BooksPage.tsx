import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { Book } from "../types/types.ts";
import BookCollection from '../components/templates/BookCollection.tsx';

const client = generateClient<Schema>();

const BooksPage = () => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const getBooks = async () => {
            await client.models.Book.list()
                .then(response => setBooks(response.data))
                .catch((error) => {
                    console.log(`Error fetching books: ${error}`);
                });
    
        }        
        getBooks();
    });

    return (
        <BookCollection books={books} isSearchable isPaginated />
    );
}

export default BooksPage;