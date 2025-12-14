import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";
import { Establishment } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';

const client = generateClient<Schema>();

const EstablishmentsPage = () => {

    const [establishments, setEstablishments] = useState<Establishment[]>([]);

    useEffect(() => {
        const getEstablishments = async () => {
            await client.models.Establishment.list()
                .then(response => setEstablishments(response.data))
                .catch((error) => {
                    console.log(`Error fetching books: ${error}`);
                });
    
        }        
        getEstablishments();
    });

    return (
        <GeneralCollection elements={establishments} elementType="establecimientos" isSearchable isPaginated />
    );
}

export default EstablishmentsPage;