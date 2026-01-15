import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource.ts";
import { Subject } from "../types/types.ts";
import GeneralCollection from '../components/templates/GeneralCollection.tsx';
import { useParams } from "react-router-dom"

const client = generateClient<Schema>();

const AsignaturasPage = () => {
    const { levelId } = useParams();
    const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {
        const getSubjects = async () => {
            await client.models.Level.get({ id: levelId! })
                .then(async (response) => {
                    await response.data?.subjects().then((subjectResponse) => {
                        const subjectData = subjectResponse.data;
                        setSubjects(subjectData);
                    });
                })
                .catch((error) => {
                    console.log(`Error fetching establishments: ${error}`);
                });
        }
        getSubjects();
    });

    return (
        <GeneralCollection elements={subjects} elementType="asignaturas" isSearchable isPaginated />
    );
}

export default AsignaturasPage;