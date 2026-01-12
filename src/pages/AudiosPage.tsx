import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";
import { BookAudio } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from 'react-router-dom';

const client = generateClient<Schema>();

const AudiosPage = () => {
    const { bookId } = useParams();
    const [audios, setAudios] = useState<BookAudio[]>([]);

    useEffect(() => {
        const getAudios = async () => {
            await client.models.Book.get({ id: bookId! }).then(async (response) => {
                await response.data?.audios().then((audioResponse) => {
                    const audioData = audioResponse.data;
                    setAudios(audioData);
                });
            }).catch((error) => {
                console.log(`Error fetching audios: ${error}`);
            });
    
        }        
        getAudios();
    });

    return (
        <GeneralCollection elements={audios} elementType="audios" isSearchable isPaginated />
    );
}

export default AudiosPage;