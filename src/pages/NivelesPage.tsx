import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";
import { Level } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"

const client = generateClient<Schema>();

const NivelesPage = () => {
    const { establishmentId } = useParams();
    const [levels, setLevels] = useState<Level[]>([]);

    useEffect(() => {
        const getLevels = async () => {
            await client.models.Establishment.get({ id: establishmentId! })
                .then(async (response) => {
                    await response.data?.levels().then((levelResponse) => {
                        const levelData = levelResponse.data;
                        setLevels(levelData);
                    }
                    );
                })
                .catch((error) => {
                    console.log(`Error fetching establishments: ${error}`);
                });
        }
        getLevels();
    });

    return (
        <GeneralCollection elements={levels} elementType="niveles" isSearchable isPaginated />
    );
}

export default NivelesPage;