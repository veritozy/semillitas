import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";
import { BookAudio } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';
import { useNavigate } from 'react-router-dom';

const client = generateClient<Schema>();

const AudiosPage = () => {
    const navigate = useNavigate();
    const { isAdmin } = useAuth();
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
        <div>
            {
                isAdmin && (
                    <button
                        onClick={() => navigate(`/audios/${bookId}/crear`)}
                        className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition"
                    >
                        Crear Audio
                    </button>
                )
            }            
            <GeneralCollection elements={audios} elementType="audios" isSearchable isPaginated />
        </div>
    );
}

export default AudiosPage;