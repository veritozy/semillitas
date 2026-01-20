import { useEffect, useState } from "react";
import { Establishment } from "../types/types";
import type { Schema } from "../../amplify/data/resource.ts";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();
    
export function useEstablishments(userId?: string) {    
    const [establishments, setEstablishments] = useState<Establishment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;

        const load = async () => {
            try {
                const { data: users } = await client.models.User.list({
                    filter: {
                        userId: { eq: await userId }
                    }
                });

                if (!users || users.length === 0) return;

                const user = users[0];

                const { data: userEstablishments } = await client.models.UserEstablishment.list({
                    filter: {
                        userId: { eq: user.id }
                    }
                });

                if (!userEstablishments || userEstablishments.length === 0) return;

                const establishmentIds = userEstablishments.map(
                    ue => ue.establishmentId
                );

                const { data: establishmentsData } = await client.models.Establishment.list({
                    filter: {
                        or: establishmentIds.map(id => ({
                            id: { eq: id }
                        }))
                    }
                });

                setEstablishments(establishmentsData ?? []);
            } catch (error) {
                console.error("Error loading establishments", error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [userId]);
    return { establishments, loading };
}