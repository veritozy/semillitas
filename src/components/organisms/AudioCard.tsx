import { useEffect, useState } from 'react';
import {
    Flex,
    Card,
    useTheme,
    Heading
} from '@aws-amplify/ui-react';
import { getUrl } from 'aws-amplify/storage';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';
import { BookAudio } from '../../types/types';
import { Pencil, Trash2 } from "lucide-react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource.ts";

const client = generateClient<Schema>();

const AudioCard = ({ audio }: { audio: BookAudio }) => {
    const navigate = useNavigate();
    const { tokens } = useTheme();
    const { isAdmin } = useAuth();
    const [audioUrl, setAudioUrl] = useState<string>("");

    useEffect(() => {
        const getAudioUrl = async () => {
            const storageObject = await getUrl({
                path: audio.url!,
            });
            setAudioUrl(storageObject.url.href);
        }
        getAudioUrl();
    }, [audio.url]);

    const handleEdit = () => {
        navigate(`/audios/${audio.bookId}/editar/${audio.id}`);
    };

    const handleDelete = async () => {
        try {
            await client.models.BookAudio.delete({ id: audio.id! });
            window.location.reload();
        } catch (error) {
            console.error("Error eliminando audio:", error);
        }
    };

    return (
        <Card
            borderRadius="medium"
            borderColor={tokens.colors.border.primary}
            borderWidth="thin"
            maxWidth="40rem"
            padding="large"
            backgroundColor={tokens.colors.background.primary}
        >
            <Flex direction="row" alignContent="center" alignItems="center">
                <Heading level={6} isTruncated>{audio.name}</Heading>
                <audio controls src={audioUrl} />
                {
                    isAdmin &&
                    (
                        <div className="flex gap-2">
                            <button
                                onClick={handleEdit}
                                className="p-2 rounded-full bg-white/90 hover:bg-blue-50 text-blue-600 shadow border border-gray-200 transition"
                                title="Editar"
                            >
                                <Pencil size={16} />
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-2 rounded-full bg-white/90 hover:bg-red-50 text-red-500 shadow border border-gray-200 transition"
                                title="Eliminar"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    )
                }

            </Flex>
        </Card>
    );
}

export default AudioCard;